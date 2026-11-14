import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import StudentRegistrationForm from "@/components/StudentRegistrationForm";
import { getRegistrationEvent } from "@/lib/registration-events";

export const metadata = {
  title: "Inscription étudiant",
  description:
    "Formulaire d'inscription étudiant à un événement, sécurisé et propulsé par Kirevo.",
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
    <main className="min-h-screen bg-[#F7F8FA] px-5 pb-20 pt-10 text-[#111111] sm:px-8 sm:pt-14">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#E1E4EA] bg-white shadow-2xl shadow-[#111827]/10 lg:grid-cols-[0.82fr_1.18fr] lg:rounded-[2.5rem]">
        <section className="order-2 bg-gradient-to-br from-[#111827] via-[#171E2D] to-[#292D46] p-7 text-white sm:p-10 lg:order-1 lg:p-12">
          <Link
            href="/"
            aria-label="Accéder au site Kirevo"
            className="inline-flex rounded-2xl bg-white px-4 py-2 shadow-sm transition hover:-translate-y-0.5"
          >
            <BrandLogo />
          </Link>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-[#A6A8FF]">
            Inscription à l&apos;événement
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
            {registrationEvent.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Préparez votre venue et indiquez la formation qui vous intéresse.
            L&apos;équipe pourra ainsi vous transmettre les informations adaptées.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-white/80">
            {[
              "Inscription en moins de deux minutes",
              "Informations transmises à l’équipe concernée",
              "Confirmation automatisée après l’envoi",
              "Aucune création de compte nécessaire",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="text-emerald-300">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.07] p-5 text-sm leading-6 text-white/65">
            Événement identifié automatiquement par le QR code :{" "}
            <strong className="font-semibold text-white">
              {registrationEvent.location}
            </strong>
            .
          </div>
        </section>

        <section className="order-1 p-7 sm:p-10 lg:order-2 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            Vos informations
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
            Finalisez votre <span className="whitespace-nowrap">inscription.</span>
          </h2>

          <p className="mt-4 leading-7 text-[#667085]">
            Renseignez les informations prévues pour cette journée portes
            ouvertes.
          </p>

          <StudentRegistrationForm eventId={registrationEvent.id} />
        </section>
      </div>
    </main>
  );
}
