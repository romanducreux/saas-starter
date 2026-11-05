import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import ProspectCaptureForm from "@/components/ProspectCaptureForm";

export const metadata = {
  title: "Formulaire de contact",
  description: "Formulaire de contact sécurisé propulsé par Kirevo.",
  robots: { index: false, follow: false },
};

type FormulairePageProps = {
  searchParams: Promise<{
    client?: string | string[];
    campagne?: string | string[];
    source?: string | string[];
  }>;
};

function readParam(value: string | string[] | undefined, fallback: string) {
  const param = Array.isArray(value) ? value[0] : value;
  const normalized = param?.trim().slice(0, 80);

  return normalized || fallback;
}

export default async function FormulairePage({
  searchParams,
}: FormulairePageProps) {
  const params = await searchParams;
  const client = readParam(params.client, "kirevo-demo");
  const campagne = readParam(params.campagne, "formulaire-general");
  const source = readParam(params.source, "qr-code");

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
            Restons en contact
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
            Parlez-nous de votre projet.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Laissez vos coordonnées et précisez votre demande. Elles seront
            transmises automatiquement à la bonne équipe pour vous répondre.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-white/80">
            {[
              "Moins de deux minutes",
              "Transmission sécurisée",
              "Demande attribuée au bon interlocuteur",
              "Aucune inscription nécessaire",
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
            Vous avez ouvert cette page depuis un QR code sécurisé. Aucune
            information n&apos;est collectée avant l&apos;envoi du formulaire.
          </div>
        </section>

        <section className="order-1 p-7 sm:p-10 lg:order-2 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            Vos informations
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
            Comment pouvons-nous vous <span className="whitespace-nowrap">aider ?</span>
          </h2>

          <p className="mt-4 leading-7 text-[#667085]">
            Remplissez les champs ci-dessous pour être recontacté au sujet de
            votre demande.
          </p>

          <ProspectCaptureForm
            client={client}
            campagne={campagne}
            source={source}
          />
        </section>
      </div>
    </main>
  );
}
