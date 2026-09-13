import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "Contactez Kirevo pour échanger sur votre projet d'automatisation IA.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[65vh] bg-[#F7F8FA] px-6 pb-24 pt-14 text-[#111111] sm:pt-20">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            Contact
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Parlons de votre projet d&apos;automatisation.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#667085]">
            Décrivez-nous les tâches qui ralentissent votre équipe. Nous vous
            aiderons à identifier une première automatisation simple, utile et
            mesurable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:contact@kirevo.fr"
            className="group rounded-[2rem] border border-[#E1E4EA] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C9CBFF] hover:shadow-xl"
          >
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F1FF] text-xl text-[#5B5CF0]"
            >
              @
            </span>
            <h2 className="mt-6 text-2xl font-bold">Écrivez-nous</h2>
            <p className="mt-3 leading-7 text-[#667085]">
              Pour une question, un besoin ou un premier échange.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#5B5CF0]">
              contact@kirevo.fr
              <span aria-hidden="true" className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>

          <a
            href="https://calendly.com/roman-ducreux/decouverte-kirevo"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[2rem] border border-[#E1E4EA] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C9CBFF] hover:shadow-xl"
          >
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1F1FF] text-xl text-[#5B5CF0]"
            >
              ◷
            </span>
            <h2 className="mt-6 text-2xl font-bold">Réservez un appel</h2>
            <p className="mt-3 leading-7 text-[#667085]">
              Choisissez directement un créneau pour présenter votre contexte.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#5B5CF0]">
              Voir les disponibilités
              <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>

        <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-[#111827] to-[#252B3A] px-7 py-9 text-white sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#A6A8FF]">
                Vous préférez nous montrer votre besoin ?
              </p>
              <p className="mt-2 max-w-2xl text-lg text-white/70">
                Demandez une démonstration personnalisée et sans engagement.
              </p>
            </div>
            <Link
              href="/demo"
              className="shrink-0 rounded-2xl bg-white px-6 py-3 text-center font-semibold text-[#111111] transition hover:-translate-y-0.5"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
