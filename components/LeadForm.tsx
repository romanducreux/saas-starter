"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const inputClassName =
  "w-full rounded-2xl border border-[#DDE1E8] bg-white px-5 py-4 text-[#111111] outline-none transition placeholder:text-[#7C8497] hover:border-[#C7CBD4] focus:border-[#5B5CF0] focus:ring-4 focus:ring-[#5B5CF0]/10";

type SubmissionStatus = "idle" | "sending" | "error";

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error("La demande n'a pas pu être envoyée.");
      }

      router.push("/merci");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action="/api/leads"
      method="POST"
      className="mt-8 space-y-5"
      aria-describedby="privacy-help form-help form-status"
      aria-busy={status === "sending"}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="source" value="demande-demo-kirevo" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Site internet</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="nom"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Nom complet
        </label>
        <input
          id="nom"
          name="nom"
          autoComplete="name"
          required
          maxLength={120}
          className={inputClassName}
          placeholder="Marie Dupont"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          E-mail professionnel
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
          className={inputClassName}
          placeholder="marie@entreprise.fr"
        />
      </div>

      <div>
        <label
          htmlFor="entreprise"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Entreprise
        </label>
        <input
          id="entreprise"
          name="entreprise"
          autoComplete="organization"
          required
          maxLength={160}
          className={inputClassName}
          placeholder="Nom de votre entreprise"
        />
      </div>

      <div>
        <label
          htmlFor="taille"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Taille de l&apos;équipe
        </label>
        <select
          id="taille"
          name="taille"
          className={inputClassName}
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionnez une taille
          </option>
          <option value="1 à 5 personnes">1 à 5 personnes</option>
          <option value="6 à 20 personnes">6 à 20 personnes</option>
          <option value="21 à 50 personnes">21 à 50 personnes</option>
          <option value="Plus de 50 personnes">Plus de 50 personnes</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="besoin"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Tâche ou processus à automatiser
        </label>
        <textarea
          id="besoin"
          name="besoin"
          required
          minLength={10}
          maxLength={3000}
          className={`${inputClassName} min-h-36 resize-y`}
          placeholder="Décrivez brièvement le processus qui vous prend du temps."
        />
      </div>

      <div className="rounded-2xl border border-[#EAECF0] bg-[#F7F8FA] px-4 py-4">
        <div className="flex items-start gap-3">
          <input
            id="confidentialite"
            name="confidentialite"
            type="checkbox"
            value="acceptee"
            required
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#5B5CF0]"
          />
          <label
            htmlFor="confidentialite"
            id="privacy-help"
            className="text-xs leading-5 text-[#667085]"
          >
            J&apos;ai pris connaissance de la{" "}
            <Link
              href="/confidentialite"
              target="_blank"
              className="font-semibold text-[#5B5CF0] underline decoration-[#C7C8FF] underline-offset-2"
            >
              politique de confidentialité
            </Link>
            . Mes informations seront utilisées uniquement pour traiter ma
            demande et me recontacter.
          </label>
        </div>
      </div>

      <p
        id="form-status"
        role="status"
        aria-live="polite"
        className={
          status === "error"
            ? "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
            : "sr-only"
        }
      >
        {status === "error" ? (
          <>
            L&apos;envoi n&apos;a pas abouti. Vérifiez votre connexion puis
            réessayez. Si le problème persiste, écrivez à{" "}
            <a
              href="mailto:contact@kirevo.fr"
              className="font-semibold underline"
            >
              contact@kirevo.fr
            </a>
            .
          </>
        ) : null}
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-4 font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#5B5CF0]/25 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
      </button>

      <p id="form-help" className="text-center text-sm text-[#667085]">
        Réponse sous 24 à 48 heures. Aucun engagement.
      </p>
    </form>
  );
}
