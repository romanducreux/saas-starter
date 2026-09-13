import Link from "next/link";

export const metadata = {
  title: "Solutions",
  description:
    "Découvrez les automatisations Kirevo adaptées à l'immobilier, aux agences, aux cabinets comptables, au e-commerce et aux entreprises de services.",
};

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
      "Centralisation des prospects, comptes rendus, rapports et suivi commercial automatisé.",
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
    <main className="min-h-screen bg-[#F7F8FA] text-[#111111]">

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Solutions
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl md:text-7xl">
            Des automatisations adaptées à chaque activité.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#667085]">
            Kirevo construit des systèmes sur mesure en fonction de votre
            secteur, de vos outils et de vos processus internes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group rounded-[2.5rem] border border-[#E1E4EA] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#C7C8FF] hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF0FF] text-2xl text-[#5B5CF0]">
                {solution.icon}
              </div>

              <h2 className="mt-7 text-3xl font-bold">{solution.title}</h2>

              <p className="mt-4 max-w-xl leading-7 text-[#667085]">
                {solution.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[#5B5CF0]">
                Découvrir la solution
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
