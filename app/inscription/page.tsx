import StudentRegistrationForm from "@/components/StudentRegistrationForm";
import { getRegistrationEvent } from "@/lib/registration-events";

export const metadata = {
  title: { absolute: "Inscription étudiant" },
  description:
    "Formulaire d'inscription étudiant à une journée portes ouvertes.",
  robots: { index: false, follow: false },
};

type InscriptionPageProps = {
  searchParams: Promise<{ event?: string | string[] }>;
};

export default async function InscriptionPage({
  searchParams,
}: InscriptionPageProps) {
  const params = await searchParams;
  const registrationEvent = getRegistrationEvent(params.event);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F4F7FB] px-4 py-8 text-[#182230] sm:px-8 sm:py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-gradient-to-br from-[#EAF2FF] via-[#F4F7FB] to-[#E8FAF7]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-7 flex items-center gap-4 rounded-3xl border border-white/80 bg-white/75 px-5 py-5 shadow-sm backdrop-blur sm:px-7">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#2563EB]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path
                d="M7 3v3m10-3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
              Formulaire d&apos;inscription
            </p>
            <p className="mt-1 text-sm font-medium text-[#667085]">
              {registrationEvent.location} · Accès depuis le QR code de l&apos;événement
            </p>
          </div>
        </header>

        <div className="grid overflow-hidden rounded-[2rem] border border-[#D9E2EF] bg-white shadow-[0_30px_80px_rgba(28,45,74,0.12)] lg:grid-cols-[0.8fr_1.2fr] lg:rounded-[2.5rem]">
          <section className="bg-gradient-to-br from-[#123A70] via-[#174D8E] to-[#146B72] p-7 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#BBD7FF]">
              Journée portes ouvertes
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              {registrationEvent.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Préparez votre visite et indiquez la formation qui vous intéresse.
              L&apos;équipe pourra ainsi vous transmettre les informations utiles.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-white/85">
              {[
                "Inscription en moins de deux minutes",
                "Aucune création de compte nécessaire",
                "Récapitulatif envoyé après validation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs text-[#BFF4DD]"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl border border-white/15 bg-white/[0.08] p-5 text-sm leading-6 text-white/75">
              Les informations saisies sont transmises uniquement à l&apos;équipe
              chargée de cette journée portes ouvertes.
            </div>
          </section>

          <section className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Vos informations
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              Préparez votre venue.
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Complétez les champs ci-dessous pour finaliser votre inscription.
            </p>

            <StudentRegistrationForm eventId={registrationEvent.id} />
          </section>
        </div>
      </div>
    </main>
  );
}
