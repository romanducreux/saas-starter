"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

const inputClassName =
  "w-full rounded-2xl border border-[#DDE1E8] bg-white px-5 py-4 text-[#111111] outline-none transition placeholder:text-[#7C8497] hover:border-[#C7CBD4] focus:border-[#5B5CF0] focus:ring-4 focus:ring-[#5B5CF0]/10";

type ProspectCaptureFormProps = {
  client: string;
  campagne: string;
  source: string;
};

type SubmissionStatus = "idle" | "sending" | "error";

export default function ProspectCaptureForm({
  client,
  campagne,
  source,
}: ProspectCaptureFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/prospects", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error("La demande n'a pas pu être envoyée.");
      }

      router.push("/merci-prospect");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action="/api/prospects"
      method="POST"
      className="mt-8 space-y-5"
      aria-describedby="prospect-privacy prospect-help prospect-status"
      aria-busy={status === "sending"}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="client" value={client} />
      <input type="hidden" name="campagne" value={campagne} />
      <input type="hidden" name="source" value={source} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="prospect-website">Site internet</label>
        <input
          id="prospect-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="prenom"
            className="mb-2 block text-sm font-semibold text-[#344054]"
          >
            Prénom
          </label>
          <input
            id="prenom"
            name="prenom"
            autoComplete="given-name"
            required
            maxLength={80}
            className={inputClassName}
            placeholder="Marie"
          />
        </div>

        <div>
          <label
            htmlFor="prospect-nom"
            className="mb-2 block text-sm font-semibold text-[#344054]"
          >
            Nom
          </label>
          <input
            id="prospect-nom"
            name="nom"
            autoComplete="family-name"
            required
            maxLength={100}
            className={inputClassName}
            placeholder="Dupont"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="prospect-email"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          E-mail
        </label>
        <input
          id="prospect-email"
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
          htmlFor="telephone"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Téléphone <span className="font-normal text-[#8A94A6]">(facultatif)</span>
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={30}
          className={inputClassName}
          placeholder="06 12 34 56 78"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="prospect-entreprise"
            className="mb-2 block text-sm font-semibold text-[#344054]"
          >
            Entreprise <span className="font-normal text-[#8A94A6]">(facultatif)</span>
          </label>
          <input
            id="prospect-entreprise"
            name="entreprise"
            autoComplete="organization"
            maxLength={160}
            className={inputClassName}
            placeholder="Nom de l'entreprise"
          />
        </div>

        <div>
          <label
            htmlFor="fonction"
            className="mb-2 block text-sm font-semibold text-[#344054]"
          >
            Fonction <span className="font-normal text-[#8A94A6]">(facultatif)</span>
          </label>
          <input
            id="fonction"
            name="fonction"
            autoComplete="organization-title"
            maxLength={120}
            className={inputClassName}
            placeholder="Votre fonction"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="interet"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Votre demande
        </label>
        <select
          id="interet"
          name="interet"
          required
          defaultValue=""
          className={inputClassName}
        >
          <option value="" disabled>
            Sélectionnez une option
          </option>
          <option value="etre-recontacte">Être recontacté</option>
          <option value="recevoir-des-informations">Recevoir des informations</option>
          <option value="demander-une-demonstration">Demander une démonstration</option>
          <option value="echanger-sur-un-besoin">Échanger sur un besoin précis</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-[#344054]"
        >
          Précision <span className="font-normal text-[#8A94A6]">(facultatif)</span>
        </label>
        <textarea
          id="message"
          name="message"
          maxLength={2000}
          className={`${inputClassName} min-h-28 resize-y`}
          placeholder="Ajoutez quelques mots sur votre demande si vous le souhaitez."
        />
      </div>

      <div className="rounded-2xl border border-[#EAECF0] bg-[#F7F8FA] px-4 py-4">
        <div className="flex items-start gap-3">
          <input
            id="prospect-confidentialite"
            name="confidentialite"
            type="checkbox"
            value="acceptee"
            required
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#5B5CF0]"
          />
          <label
            htmlFor="prospect-confidentialite"
            id="prospect-privacy"
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
            . Je demande à être recontacté à propos de ma demande.
          </label>
        </div>
      </div>

      <p
        id="prospect-status"
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
        className="w-full rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-4 font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#5B5CF0]/25 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Transmission en cours…" : "Envoyer mes informations"}
      </button>

      <p id="prospect-help" className="text-center text-xs leading-5 text-[#7C8497]">
        Formulaire sécurisé et propulsé par Kirevo.
      </p>
    </form>
  );
}
