"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSiteUrl } from "@/lib/supabase/config";

export type AuthState = {
  status?: "error" | "success";
  message?: string;
  fieldErrors?: Partial<
    Record<"givenName" | "familyName" | "company" | "email" | "password" | "passwordConfirmation", string>
  >;
};

function readText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password: string) {
  return password.length >= 10 && /[A-Za-zÀ-ÿ]/.test(password) && /\d/.test(password);
}

function unavailableState(): AuthState {
  return {
    status: "error",
    message: "L’espace sécurisé est prêt mais doit encore être relié au service de comptes Kirevo.",
  };
}

export async function signInAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = readText(formData, "email").toLowerCase();
  const password = String(formData.get("password") ?? "");
  const fieldErrors: AuthState["fieldErrors"] = {};

  if (!validateEmail(email)) fieldErrors.email = "Saisissez une adresse e-mail valide.";
  if (!password) fieldErrors.password = "Saisissez votre mot de passe.";
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors };

  const supabase = await createClient();
  if (!supabase) return unavailableState();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    if (error.code === "email_not_confirmed") {
      return { status: "error", message: "Confirmez d’abord votre adresse e-mail depuis le message reçu." };
    }

    return { status: "error", message: "Adresse e-mail ou mot de passe incorrect." };
  }

  redirect("/espace");
}

export async function signUpAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const givenName = readText(formData, "givenName");
  const familyName = readText(formData, "familyName");
  const company = readText(formData, "company");
  const email = readText(formData, "email").toLowerCase();
  const password = String(formData.get("password") ?? "");
  const fieldErrors: AuthState["fieldErrors"] = {};

  if (givenName.length < 2) fieldErrors.givenName = "Indiquez votre prénom.";
  if (familyName.length < 2) fieldErrors.familyName = "Indiquez votre nom.";
  if (company.length < 2) fieldErrors.company = "Indiquez le nom de votre entreprise.";
  if (!validateEmail(email)) fieldErrors.email = "Saisissez une adresse e-mail valide.";
  if (!validatePassword(password)) {
    fieldErrors.password = "Utilisez au moins 10 caractères, avec une lettre et un chiffre.";
  }
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors };

  const supabase = await createClient();
  if (!supabase) return unavailableState();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${getSiteUrl()}/auth/callback?next=/espace`,
      data: {
        full_name: `${givenName} ${familyName}`,
        given_name: givenName,
        family_name: familyName,
        company_name: company,
      },
    },
  });

  if (error) {
    return {
      status: "error",
      message:
        error.code === "over_email_send_rate_limit"
          ? "Trop de demandes ont été envoyées. Patientez quelques minutes avant de réessayer."
          : "Le compte n’a pas pu être créé. Vérifiez les informations puis réessayez.",
    };
  }

  if (data.session) redirect("/espace");

  return {
    status: "success",
    message: "Votre espace est créé. Ouvrez l’e-mail envoyé par Kirevo pour confirmer votre adresse.",
  };
}

export async function requestPasswordResetAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = readText(formData, "email").toLowerCase();
  if (!validateEmail(email)) {
    return { status: "error", fieldErrors: { email: "Saisissez une adresse e-mail valide." } };
  }

  const supabase = await createClient();
  if (!supabase) return unavailableState();

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${getSiteUrl()}/auth/callback?next=/reinitialiser-mot-de-passe`,
  });

  return {
    status: "success",
    message: "Si un compte correspond à cette adresse, un lien sécurisé vient d’être envoyé.",
  };
}

export async function updatePasswordAction(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const password = String(formData.get("password") ?? "");
  const passwordConfirmation = String(formData.get("passwordConfirmation") ?? "");
  const fieldErrors: AuthState["fieldErrors"] = {};

  if (!validatePassword(password)) {
    fieldErrors.password = "Utilisez au moins 10 caractères, avec une lettre et un chiffre.";
  }
  if (password !== passwordConfirmation) {
    fieldErrors.passwordConfirmation = "Les deux mots de passe ne correspondent pas.";
  }
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors };

  const supabase = await createClient();
  if (!supabase) return unavailableState();

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return { status: "error", message: "Le lien a expiré. Demandez un nouveau lien de réinitialisation." };
  }

  redirect("/espace?mot-de-passe=modifie");
}

export async function signOutAction() {
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/connexion");
}
