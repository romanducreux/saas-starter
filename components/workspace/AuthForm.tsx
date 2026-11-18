"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/workspace/Icon";

type AuthMode = "login" | "signup" | "forgot";

const content = {
  login: {
    eyebrow: "Ravi de vous revoir",
    title: "Connectez-vous à Kirevo",
    description: "Retrouvez vos automatisations, vos résultats et l’activité de votre espace.",
    submit: "Accéder à mon espace",
  },
  signup: {
    eyebrow: "Créer votre espace",
    title: "Commencez avec Kirevo",
    description: "Préparez votre premier parcours d’automatisation dans un espace simple et guidé.",
    submit: "Créer mon espace",
  },
  forgot: {
    eyebrow: "Accès à votre compte",
    title: "Réinitialisez votre mot de passe",
    description: "Indiquez votre adresse e-mail. Vous recevrez un lien sécurisé lorsqu’un service de comptes sera connecté.",
    submit: "Recevoir le lien",
  },
} as const;

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const current = content[mode];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
      if (mode === "forgot") {
        setIsSent(true);
        return;
      }
      router.push("/espace");
    }, 550);
  }

  if (isSent) {
    return (
      <div className="rounded-[28px] border border-[#E1E4EA] bg-white p-7 text-center shadow-[0_22px_60px_rgba(17,24,39,0.08)] sm:p-9">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFDF3] text-[#079455]">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h1 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">Demande enregistrée</h1>
        <p className="mt-3 text-sm leading-6 text-[#667085]">
          Cette page est prête. L’envoi réel du lien sera activé avec le futur service sécurisé de comptes.
        </p>
        <Link
          href="/connexion"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2B2B2B]"
        >
          Revenir à la connexion
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
        {current.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#111111] sm:text-4xl">
        {current.title}
      </h1>
      <p className="mt-3 text-sm leading-6 text-[#667085] sm:text-base">
        {current.description}
      </p>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#D9DAFF] bg-[#F5F5FF] px-4 py-3 text-sm leading-5 text-[#4F46E5]">
        <Icon name="sparkles" className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Vous explorez l’aperçu du produit. Aucun mot de passe ni compte réel n’est enregistré pour le moment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        {mode === "signup" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-[#344054]">
              Prénom
              <input
                type="text"
                name="givenName"
                autoComplete="given-name"
                required
                placeholder="Roman"
                className="mt-2 h-12 w-full rounded-2xl border border-[#D7DAE2] bg-white px-4 text-sm shadow-sm transition placeholder:text-[#98A2B3] hover:border-[#BFC4D0] focus:border-[#8B8CFF]"
              />
            </label>
            <label className="block text-sm font-medium text-[#344054]">
              Nom
              <input
                type="text"
                name="familyName"
                autoComplete="family-name"
                required
                placeholder="Ducreux"
                className="mt-2 h-12 w-full rounded-2xl border border-[#D7DAE2] bg-white px-4 text-sm shadow-sm transition placeholder:text-[#98A2B3] hover:border-[#BFC4D0] focus:border-[#8B8CFF]"
              />
            </label>
          </div>
        ) : null}

        {mode === "signup" ? (
          <label className="block text-sm font-medium text-[#344054]">
            Nom de l’entreprise
            <input
              type="text"
              name="company"
              autoComplete="organization"
              required
              placeholder="Votre entreprise"
              className="mt-2 h-12 w-full rounded-2xl border border-[#D7DAE2] bg-white px-4 text-sm shadow-sm transition placeholder:text-[#98A2B3] hover:border-[#BFC4D0] focus:border-[#8B8CFF]"
            />
          </label>
        ) : null}

        <label className="block text-sm font-medium text-[#344054]">
          Adresse e-mail professionnelle
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="vous@entreprise.fr"
            className="mt-2 h-12 w-full rounded-2xl border border-[#D7DAE2] bg-white px-4 text-sm shadow-sm transition placeholder:text-[#98A2B3] hover:border-[#BFC4D0] focus:border-[#8B8CFF]"
          />
        </label>

        {mode !== "forgot" ? (
          <label className="block text-sm font-medium text-[#344054]">
            <span className="flex items-center justify-between gap-3">
              Mot de passe
              {mode === "login" ? (
                <Link href="/mot-de-passe-oublie" className="text-xs font-semibold text-[#5B5CF0] hover:text-[#4546D9]">
                  Mot de passe oublié ?
                </Link>
              ) : null}
            </span>
            <input
              type="password"
              name="password"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              minLength={8}
              required
              placeholder="8 caractères minimum"
              className="mt-2 h-12 w-full rounded-2xl border border-[#D7DAE2] bg-white px-4 text-sm shadow-sm transition placeholder:text-[#98A2B3] hover:border-[#BFC4D0] focus:border-[#8B8CFF]"
            />
          </label>
        ) : null}

        {mode === "signup" ? (
          <label className="flex items-start gap-3 rounded-2xl bg-[#F9FAFB] px-4 py-3 text-xs leading-5 text-[#667085]">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-[#C8CCD6] accent-[#5B5CF0]"
            />
            <span>
              J’accepte les conditions d’utilisation et la politique de confidentialité de Kirevo.
            </span>
          </label>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(91,92,240,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(91,92,240,0.32)] disabled:cursor-wait disabled:opacity-70"
        >
          {isLoading ? (
            <Icon name="refresh" className="h-4 w-4 animate-spin" />
          ) : null}
          {isLoading ? "Ouverture…" : current.submit}
        </button>
      </form>

      {mode !== "forgot" ? (
        <p className="mt-6 text-center text-sm text-[#667085]">
          {mode === "login" ? "Vous n’avez pas encore de compte ?" : "Vous avez déjà un compte ?"}{" "}
          <Link
            href={mode === "login" ? "/creer-compte" : "/connexion"}
            className="font-semibold text-[#5B5CF0] hover:text-[#4546D9]"
          >
            {mode === "login" ? "Créer un espace" : "Se connecter"}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
