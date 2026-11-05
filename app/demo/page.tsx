import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Demander une démo",
  description:
    "Demandez une démonstration personnalisée de Kirevo et identifiez les tâches répétitives que votre entreprise peut automatiser.",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] px-6 pb-24 pt-14 text-[#111111] sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-7 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-10">
          <Link
            href="/"
            aria-label="Revenir à l'accueil Kirevo"
            className="inline-flex rounded-2xl bg-white px-4 py-2 shadow-sm transition hover:-translate-y-0.5"
          >
            <BrandLogo />
          </Link>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-[#A6A8FF]">
            Démonstration personnalisée
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
            Découvrez ce que Kirevo peut automatiser pour vous.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Présentez-nous vos processus. Nous identifierons avec vous les
            tâches répétitives qui méritent d&apos;être automatisées.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-white/80">
            {[
              "Analyse de vos tâches répétitives",
              "Proposition de workflows IA adaptés",
              "Démonstration personnalisée",
              "Échange sans engagement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="text-emerald-300">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm sm:p-6">
            <div className="grid items-center gap-5 sm:grid-cols-[148px_1fr] lg:grid-cols-1 xl:grid-cols-[148px_1fr]">
              <div className="mx-auto rounded-2xl bg-white p-3 shadow-xl shadow-black/20 sm:mx-0">
                <Image
                  src="/qr-code-kirevo-demo.svg"
                  alt="QR code ouvrant le formulaire Kirevo"
                  width={124}
                  height={124}
                  unoptimized
                  className="h-[124px] w-[124px]"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Continuez sur votre téléphone
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Scannez ce QR code pour ouvrir ce formulaire sur mobile, ou
                  téléchargez-le pour vos supports Kirevo.
                </p>
                <a
                  href="/qr-code-kirevo-demo.svg"
                  download="QR-code-Kirevo-formulaire.svg"
                  className="mt-4 inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Télécharger le QR code
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-[#E1E4EA] bg-white p-7 shadow-xl sm:rounded-[2.5rem] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            Votre demande
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
            Parlons de votre entreprise.
          </h2>

          <LeadForm />
        </section>
      </div>
    </main>
  );
}
