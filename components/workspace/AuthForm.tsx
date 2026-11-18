"use client";

import Link from "next/link";
import { useActionState } from "react";
import {
  requestPasswordResetAction,
  signInAction,
  signUpAction,
  type AuthState,
} from "@/app/actions/auth";
import Icon from "@/components/workspace/Icon";

type AuthMode = "login" | "signup" | "forgot";

const content = {
  login: {
    eyebrow: "Ravi de vous revoir",
    title: "Connectez-vous à Kirevo",
    description: "Retrouvez votre offre, vos automatisations, vos performances et toute l’activité de votre espace.",
    submit: "Accéder à mon espace",
  },
  signup: {
    eyebrow: "Créer votre espace",
    title: "Commencez avec Kirevo",
    description: "Créez votre espace sécurisé et préparez votre première solution d’automatisation.",
    submit: "Créer mon espace",
  },
  forgot: {
    eyebrow: "Accès à votre compte",
    title: "Réinitialisez votre mot de passe",
    description: "Indiquez votre adresse e-mail. Nous vous enverrons un lien personnel et temporaire.",
    submit: "Recevoir le lien",
  },
} as const;

const fieldClass =
  "mt-2 h-12 w-full rounded-2xl border border-[#D7DAE2] bg-white px-4 text-sm shadow-sm outline-none transition placeholder:text-[#98A2B3] hover:border-[#BFC4D0] focus:border-[#8B8CFF] focus:ring-4 focus:ring-[#5B5CF0]/10";

function FieldError({ message }: { message?: string }) {
  return message ? <span className="mt-1.5 block text-xs font-medium text-[#D92D20]">{message}</span> : null;
}

export default function AuthForm({ mode, configured }: { mode: AuthMode; configured: boolean }) {
  const action = mode === "login" ? signInAction : mode === "signup" ? signUpAction : requestPasswordResetAction;
  const [state, formAction, pending] = useActionState<AuthState, FormData>(action, {});
  const current = content[mode];

  if (state.status === "success") {
    return (
      <div className="rounded-[28px] border border-[#D1FADF] bg-[#F6FEF9] p-7 text-center shadow-[0_22px_60px_rgba(17,24,39,0.06)] sm:p-9" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF3] text-[#079455]">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h1 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
          {mode === "signup" ? "Confirmez votre adresse" : "Consultez votre messagerie"}
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#667085]">{state.message}</p>
        <Link href="/connexion" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2B2B2B] focus:outline-none focus:ring-4 focus:ring-[#111111]/15">
          Revenir à la connexion
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">{current.eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#111111] sm:text-4xl">{current.title}</h1>
      <p className="mt-3 text-sm leading-6 text-[#667085] sm:text-base">{current.description}</p>

      <div className={`mt-6 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-5 ${configured ? "border-[#D1FADF] bg-[#F6FEF9] text-[#067647]" : "border-[#FEDF89] bg-[#FFFAEB] text-[#B54708]"}`}>
        <Icon name={configured ? "check" : "clock"} className="mt-0.5 h-4 w-4 shrink-0" />
        <p>{configured ? "Connexion chiffrée et espace privé pour chaque entreprise." : "Interface prête : la connexion sera activée dès que le service sécurisé sera relié."}</p>
      </div>

      {state.status === "error" && state.message ? (
        <div role="alert" className="mt-4 rounded-2xl border border-[#FECDCA] bg-[#FEF3F2] px-4 py-3 text-sm text-[#B42318]">{state.message}</div>
      ) : null}

      <form action={formAction} className="mt-7 space-y-4">
        {mode === "signup" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-[#344054]">Prénom
              <input id="givenName" type="text" name="givenName" autoComplete="given-name" required placeholder="Camille" aria-invalid={Boolean(state.fieldErrors?.givenName)} className={fieldClass} />
              <FieldError message={state.fieldErrors?.givenName} />
            </label>
            <label className="block text-sm font-medium text-[#344054]">Nom
              <input id="familyName" type="text" name="familyName" autoComplete="family-name" required placeholder="Martin" aria-invalid={Boolean(state.fieldErrors?.familyName)} className={fieldClass} />
              <FieldError message={state.fieldErrors?.familyName} />
            </label>
          </div>
        ) : null}

        {mode === "signup" ? (
          <label className="block text-sm font-medium text-[#344054]">Nom de l’entreprise
            <input id="company" type="text" name="company" autoComplete="organization" required placeholder="Votre entreprise" aria-invalid={Boolean(state.fieldErrors?.company)} className={fieldClass} />
            <FieldError message={state.fieldErrors?.company} />
          </label>
        ) : null}

        <label className="block text-sm font-medium text-[#344054]">Adresse e-mail professionnelle
          <input id="email" type="email" name="email" autoComplete="email" required placeholder="vous@entreprise.fr" aria-invalid={Boolean(state.fieldErrors?.email)} className={fieldClass} />
          <FieldError message={state.fieldErrors?.email} />
        </label>

        {mode !== "forgot" ? (
          <label className="block text-sm font-medium text-[#344054]">
            <span className="flex items-center justify-between gap-3">Mot de passe
              {mode === "login" ? <Link href="/mot-de-passe-oublie" className="text-xs font-semibold text-[#5B5CF0] hover:text-[#4546D9]">Mot de passe oublié ?</Link> : null}
            </span>
            <input id="password" type="password" name="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={mode === "signup" ? 10 : undefined} required placeholder={mode === "signup" ? "10 caractères minimum" : "Votre mot de passe"} aria-invalid={Boolean(state.fieldErrors?.password)} className={fieldClass} />
            <FieldError message={state.fieldErrors?.password} />
            {mode === "signup" ? <span className="mt-1.5 block text-xs text-[#98A2B3]">Au moins 10 caractères, une lettre et un chiffre.</span> : null}
          </label>
        ) : null}

        {mode === "signup" ? (
          <label className="flex items-start gap-3 rounded-2xl bg-[#F9FAFB] px-4 py-3 text-xs leading-5 text-[#667085]">
            <input type="checkbox" name="legalConsent" required className="mt-0.5 h-4 w-4 rounded border-[#C8CCD6] accent-[#5B5CF0]" />
            <span>Je confirme avoir pris connaissance des <Link href="/mentions-legales" className="font-semibold text-[#5B5CF0] hover:underline">informations légales</Link> et de la <Link href="/confidentialite" className="font-semibold text-[#5B5CF0] hover:underline">politique de confidentialité</Link> de Kirevo.</span>
          </label>
        ) : null}

        <button type="submit" disabled={pending || !configured} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(91,92,240,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(91,92,240,0.32)] focus:outline-none focus:ring-4 focus:ring-[#5B5CF0]/20 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-55">
          {pending ? <Icon name="refresh" className="h-4 w-4 animate-spin" /> : null}
          {pending ? "Traitement sécurisé…" : current.submit}
        </button>
      </form>

      {mode !== "forgot" ? (
        <p className="mt-6 text-center text-sm text-[#667085]">{mode === "login" ? "Vous n’avez pas encore de compte ?" : "Vous avez déjà un compte ?"}{" "}
          <Link href={mode === "login" ? "/creer-compte" : "/connexion"} className="font-semibold text-[#5B5CF0] hover:text-[#4546D9]">{mode === "login" ? "Créer un espace" : "Se connecter"}</Link>
        </p>
      ) : null}
    </div>
  );
}
