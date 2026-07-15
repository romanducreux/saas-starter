import Image from "next/image";

const solutions = [
  {
    slug: "immobilier",
    title: "Immobilier",
    description:
      "Qualification des prospects, relances automatiques, suivi des visites et prise de rendez-vous.",
    icon: "⌂",
  },
  {
    slug: "agences-marketing",
    title: "Agences marketing",
    description:
      "Centralisation des leads, comptes-rendus, reporting et suivi commercial automatisé.",
    icon: "✦",
  },
  {
    slug: "cabinets-comptables",
    title: "Cabinets comptables",
    description:
      "Collecte de documents, rappels clients, classement et traitement administratif.",
    icon: "▣",
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    description:
      "Support client, suivi des commandes, qualification des demandes et relances.",
    icon: "◈",
  },
  {
    slug: "services",
    title: "Entreprises de services",
    description:
      "Gestion des demandes, génération de documents, devis et organisation interne.",
    icon: "◎",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-[#111827]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
            <Image
              src="/kirevo-transparent.png"
              alt="Kirevo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
          </div>

          <span className="text-xl font-semibold tracking-tight">Kirevo</span>
        </a>

        <a
          href="/demo"
          className="rounded-full bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition hover:scale-105"
        >
          Demander une démo
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Solutions
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-bold tracking-[-0.055em] md:text-7xl">
            Des automatisations adaptées à chaque activité.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6B7280]">
            Kirevo construit des systèmes sur mesure en fonction de votre
            secteur, de vos outils et de vos processus internes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <a
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group rounded-[2.5rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#C7C8FF] hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF0FF] text-2xl text-[#5B5CF0]">
                {solution.icon}
              </div>

              <h2 className="mt-7 text-3xl font-bold">{solution.title}</h2>

              <p className="mt-4 max-w-xl leading-7 text-[#6B7280]">
                {solution.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5B5CF0]">
                Découvrir la solution
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}