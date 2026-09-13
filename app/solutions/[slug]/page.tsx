import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const solutions = {
  immobilier: {
    name: "Immobilier",
    title: "Automatisez le suivi de vos prospects immobiliers.",
    description:
      "Kirevo aide les agences et professionnels de l’immobilier à répondre plus vite, qualifier les demandes et organiser les rendez-vous.",
    uses: [
      "Qualification automatique des prospects",
      "Réponses personnalisées aux demandes",
      "Relances après une visite",
      "Prise de rendez-vous automatisée",
      "Synchronisation avec le CRM",
      "Comptes-rendus automatiques",
    ],
    example:
      "Un prospect remplit un formulaire. Kirevo analyse son projet, évalue sa priorité, crée sa fiche dans le CRM et lui propose automatiquement un rendez-vous.",
  },

  "agences-marketing": {
    name: "Agences marketing",
    title: "Centralisez vos prospects et automatisez votre suivi commercial.",
    description:
      "Kirevo automatise les demandes entrantes, les comptes rendus, les relances et les rapports de vos campagnes.",
    uses: [
      "Qualification automatique des prospects",
      "Création des prospects dans le CRM",
      "Relances commerciales",
      "Comptes-rendus de rendez-vous",
      "Rapports automatisés",
      "Génération de propositions commerciales",
    ],
    example:
      "Une nouvelle demande est analysée par l’IA, classée par priorité, enregistrée dans le CRM et transmise au bon collaborateur.",
  },

  "cabinets-comptables": {
    name: "Cabinets comptables",
    title: "Réduisez le temps consacré à la collecte et au suivi administratif.",
    description:
      "Kirevo aide les cabinets à récupérer les documents, rappeler les clients et organiser les dossiers automatiquement.",
    uses: [
      "Collecte automatique des documents",
      "Rappels clients personnalisés",
      "Classement des pièces",
      "Création de tâches internes",
      "Résumé des demandes clients",
      "Suivi des dossiers incomplets",
    ],
    example:
      "Lorsqu’un document manque, Kirevo identifie le client concerné, lui envoie un rappel et met automatiquement à jour le statut de son dossier.",
  },

  "e-commerce": {
    name: "E-commerce",
    title: "Automatisez votre support client et le suivi des commandes.",
    description:
      "Kirevo traite les demandes fréquentes, identifie les situations urgentes et centralise les informations clients.",
    uses: [
      "Réponses aux questions fréquentes",
      "Suivi des commandes",
      "Qualification des réclamations",
      "Relance des paniers abandonnés",
      "Analyse des retours clients",
      "Création automatique de tickets",
    ],
    example:
      "Une demande de suivi de commande est reconnue automatiquement, les informations sont récupérées et une réponse personnalisée est envoyée.",
  },

  services: {
    name: "Entreprises de services",
    title: "Automatisez vos demandes, devis et tâches administratives.",
    description:
      "Kirevo connecte vos formulaires, vos e-mails, vos documents et vos outils internes afin d’accélérer vos opérations.",
    uses: [
      "Création automatique de devis",
      "Gestion des demandes clients",
      "Génération de documents",
      "Planification des interventions",
      "Suivi des paiements",
      "Relances automatiques",
    ],
    example:
      "Une demande client déclenche automatiquement la création d’une fiche, d’un devis prérempli et d’une tâche pour le collaborateur concerné.",
  },
};

type SolutionSlug = keyof typeof solutions;

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions[slug as SolutionSlug];

  if (!solution) {
    return { title: "Solution introuvable" };
  }

  return {
    title: `Automatisation pour ${solution.name}`,
    description: solution.description,
  };
}

export default async function SolutionPage({
  params,
}: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutions[slug as SolutionSlug];

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#111111]">

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
          Solution · {solution.name}
        </p>

        <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl md:text-7xl">
          {solution.title}
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#667085]">
          {solution.description}
        </p>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/demo"
            className="rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-8 py-4 text-center font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition hover:scale-105"
          >
            Demander une démo
          </Link>

          <Link
            href="/demo-interactive"
            className="rounded-2xl border border-[#E1E4EA] bg-white px-8 py-4 text-center font-semibold transition hover:border-[#5B5CF0] hover:text-[#5B5CF0]"
          >
            Voir la démo interactive
          </Link>
        </div>

        <section className="mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Automatisations possibles
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {solution.uses.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-[#E1E4EA] bg-white p-7 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-[#5B5CF0]">
                    ✓
                  </span>

                  <p className="pt-1 font-semibold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[2.5rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-10 text-white shadow-2xl md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B8DFF]">
            Exemple concret
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight">
            Un workflow adapté à votre activité.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {solution.example}
          </p>
        </section>
      </section>
    </main>
  );
}
