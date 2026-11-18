"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

const inputClassName =
  "w-full rounded-2xl border border-[#D9E2EF] bg-white px-5 py-4 text-[#182230] outline-none transition placeholder:text-[#7C8497] hover:border-[#B8C7DB] focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10";

type StudentRegistrationFormProps = {
  eventId: string;
};

type SubmissionStatus = "idle" | "sending" | "error";

export default function StudentRegistrationForm({
  eventId,
}: StudentRegistrationFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/inscriptions", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error("L'inscription n'a pas pu être envoyée.");
      }

      router.push(`/merci-inscription?event=${encodeURIComponent(eventId)}`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action="/api/inscriptions"
      method="POST"
      className="mt-8 space-y-5"
      aria-describedby="student-privacy student-help student-status"
      aria-busy={status === "sending"}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="event_id" value={eventId} />
      <input type="hidden" name="source" value="QR Code" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="student-website">Site internet</label>
        <input
          id="student-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="student-prenom"
            className="mb-2 block text-sm font-semibold text-[#344054]"
          >
            Prénom
          </label>
          <input
            id="student-prenom"
            name="prenom"
            autoComplete="given-name"
            required
            maxLength={80}
            className={inputClassName}
            placeholder="Lucas"
          />
        </div>

        <div>
          <label
            htmlFor="student-nom"
            className="mb-2 block text-sm font-semibold text-[#344054]"
          >
            Nom
          </label>
          <input
            id="student-nom"
            name="nom"
            autoComplete="family-name"
            required
            maxLength={100}
            className={inputClassName}
            placeholder="Martin"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="student-email"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          E-mail
        </label>
        <input
          id="student-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
          className={inputClassName}
          placeholder="lucas@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="student-telephone"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Téléphone
        </label>
        <input
          id="student-telephone"
          name="telephone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={30}
          className={inputClassName}
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label
          htmlFor="formation-actuelle"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Formation actuelle
        </label>
        <input
          id="formation-actuelle"
          name="formation_actuelle"
          autoComplete="organization-title"
          required
          maxLength={160}
          className={inputClassName}
          placeholder="Terminale générale"
        />
      </div>

      <div>
        <label
          htmlFor="formation-interet"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Formation qui vous intéresse
        </label>
        <input
          id="formation-interet"
          name="formation_interet"
          required
          maxLength={160}
          className={inputClassName}
          placeholder="Licence Physique"
        />
      </div>

      <div className="rounded-2xl border border-[#DCE5F1] bg-[#F7F9FC] px-4 py-4">
        <div className="flex items-start gap-3">
          <input
            id="consentement-relance"
            name="consentement_relance"
            type="checkbox"
            value="oui"
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#2563EB]"
          />
          <label
            htmlFor="consentement-relance"
            className="text-xs leading-5 text-[#667085]"
          >
            Oui, je souhaite recevoir par e-mail des informations complémentaires
            sur cette formation et les prochains événements. Ce choix est
            facultatif et peut être retiré à tout moment.
          </label>
        </div>
      </div>

      <p
        id="student-privacy"
        className="rounded-2xl border border-[#DCE5F1] bg-white px-4 py-3 text-xs leading-5 text-[#667085]"
      >
        Les informations saisies sont utilisées pour gérer votre inscription et
        vous envoyer son récapitulatif. Consultez la{" "}
        <Link
          href="/confidentialite"
          target="_blank"
          className="font-semibold text-[#2563EB] underline decoration-[#AFC8F4] underline-offset-2"
        >
          politique de confidentialité
        </Link>
        .
      </p>

      <p
        id="student-status"
        role="status"
        aria-live="polite"
        className={
          status === "error"
            ? "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
            : "sr-only"
        }
      >
        {status === "error"
          ? "L’envoi n’a pas abouti. Vérifiez votre connexion puis réessayez."
          : null}
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-2xl bg-gradient-to-r from-[#1D4ED8] to-[#0E7490] px-6 py-4 font-semibold text-white shadow-xl shadow-[#1D4ED8]/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#1D4ED8]/25 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Inscription en cours…" : "Valider mon inscription"}
      </button>

      <p id="student-help" className="text-center text-xs leading-5 text-[#7C8497]">
        Formulaire sécurisé · Aucune création de compte nécessaire
      </p>
    </form>
  );
}
