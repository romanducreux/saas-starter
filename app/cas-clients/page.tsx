import Image from "next/image";

const cases = [
  {
    sector: "Immobilier",
    title: "Qualifier les prospects et accélérer les prises de rendez-vous.",
    problem:
      "Les demandes arrivent depuis plusieurs canaux, les réponses prennent du temps et les meilleurs prospects ne sont pas toujours rappelés en priorité.",
    workflow: [
      "Formulaire reçu",
      "Analyse IA du projet",
      "Qualification du prospect",
      "Création dans le CRM",
      "E-mail personnalisé",
      "Lien Calendly envoyé",
    ],
    results: [
      "Réponse quasi immédiate",
      "Prospects prioritaires identifiés",
      "Moins de relances manuelles",
    ],
  },
  {
    sector: "Agence marketing",
    title: "Automatiser la gestion des leads, les relances et le reporting.",
    problem:
      "Les demandes entrantes sont dispersées, les relances prennent du temps et les équipes passent trop d’heures à préparer les comptes-rendus et les rapports clients.",
    workflow: [
      "Lead reçu depuis le site",
      "Analyse et qualification par l’IA",
      "Création dans le CRM",
      "Attribution au bon commercial",
      "Relance personnalisée",
      "Reporting mis à jour",
    ],
    results: [
      "Leads mieux suivis",
      "Relances plus régulières",
      "Reporting client accéléré",
    ],
  },
  {
    sector: "Agence événementielle",
    title: "Centraliser les demandes et automatiser la préparation des événements.",
    problem:
      "Les agences doivent gérer de nombreux briefs, prestataires, devis, échéances et échanges clients dans des délais souvent très courts.",
    workflow: [
      "Brief client reçu",
      "Résumé automatique du besoin",
      "Création du dossier événement",
      "Génération des tâches et échéances",
      "Relance des prestataires",
      "Suivi client automatisé",
    ],
    results: [
      "Briefs mieux structurés",
      "Moins d’oublis opérationnels",
      "Suivi client plus fluide",
    ],
  },
  {
    sector: "Cabinet comptable",
    title: "Automatiser la collecte de documents et les rappels clients.",
    problem:
      "Les équipes passent beaucoup de temps à suivre les pièces manquantes, envoyer des relances et mettre à jour les dossiers.",
    workflow: [
      "Document détecté",
      "Dossier vérifié",
      "Pièces manquantes identifiées",
      "Rappel automatique",
      "Statut du dossier mis à jour",
      "Équipe notifiée",
    ],
    results: [
      "Dossiers mieux suivis",
      "Moins d’e-mails répétitifs",
      "Temps administratif réduit",
    ],
  },
  {
    sector: "E-commerce",
    title: "Répondre plus vite aux demandes clients.",
    problem:
      "Le support reçoit des demandes répétitives sur les commandes, les retours et les délais de livraison.",
    workflow: [
      "Message client reçu",
      "Demande catégorisée",
      "Commande retrouvée",
      "Réponse générée",
      "Ticket créé si nécessaire",
      "Client informé",
    ],
    results: [
      "Support plus réactif",
      "Demandes simples automatisées",
      "Cas urgents mieux détectés",
    ],
  },
];

export default function CasClientsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-[#111827]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,92,240,0.14),transparent_38%)]" />

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

        <div className="hidden items-center gap-7 text-sm font-medium text-[#6B7280] md:flex">
          <a
            href="/comment-ca-marche"
            className="transition hover:text-[#111827]"
          >
            Comment ça marche
          </a>

          <a href="/solutions" className="transition hover:text-[#111827]">
            Solutions
          </a>

          <a href="/tarifs" className="transition hover:text-[#111827]">
            Tarifs
          </a>

          <a href="/about" className="transition hover:text-[#111827]">
            À propos
          </a>
        </div>

        <a
          href="/demo"
          className="rounded-full bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#5B5CF0]/30"
        >
          Demander une démo
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Cas clients
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-bold tracking-[-0.055em] md:text-7xl">
            Des automatisations concrètes pour des problèmes réels.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6B7280]">
            Découvrez comment Kirevo transforme des processus manuels en
            workflows rapides, fiables et mesurables.
          </p>
        </div>

        <div className="mt-20 space-y-14">
          {cases.map((item, index) => (
            <article
              key={item.sector}
              className="group relative overflow-hidden rounded-[2.75rem] border border-[#E5E7EB] bg-white shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5B5CF0]/10"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C7DFF]/70 to-transparent" />

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#171C28] to-[#252B3A] p-10 text-white md:p-12">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#5B5CF0]/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#7C7DFF]/10 blur-3xl" />

                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9B9DFF]">
                      Cas {String(index + 1).padStart(2, "0")} · {item.sector}
                    </p>

                    <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight">
                      {item.title}
                    </h2>

                    <p className="mt-6 max-w-xl leading-8 text-white/68">
                      {item.problem}
                    </p>

                    <div className="mt-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                        Résultats attendus
                      </p>

                      <div className="mt-4 space-y-3">
                        {item.results.map((result) => (
                          <div
                            key={result}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-white/82 backdrop-blur"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                              ✓
                            </span>

                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 md:p-12">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
                        Workflow Kirevo
                      </p>

                      <h3 className="mt-3 text-3xl font-bold tracking-tight">
                        Un processus fluide, étape par étape.
                      </h3>
                    </div>

                    <span className="hidden items-center justify-center whitespace-nowrap rounded-full border border-[#E5E7EB] bg-[#F8F9FB] px-5 py-2 text-sm font-semibold text-[#6B7280] sm:inline-flex">
                        {item.workflow.length} étapes
                    </span>
                  </div>

                  <div className="relative mt-10">
                    <div className="absolute bottom-5 left-5 top-5 w-px bg-gradient-to-b from-[#5B5CF0] via-[#C7C8FF] to-transparent" />

                    <div className="space-y-1">
                      {item.workflow.map((step, stepIndex) => (
                        <div
                          key={step}
                          className="group/step relative flex items-center gap-5 py-3"
                        >
                          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9DAFF] bg-white text-sm font-bold text-[#5B5CF0] shadow-sm transition duration-300 group-hover/step:scale-110 group-hover/step:border-[#5B5CF0] group-hover/step:shadow-lg group-hover/step:shadow-[#5B5CF0]/15">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </div>

                          <div className="flex-1 border-b border-[#E9EAF0] py-4 transition duration-300 group-last/step:border-b-0 group-hover/step:translate-x-1">
                            <p className="font-semibold text-[#111827]">
                              {step}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="/demo-interactive"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-4 font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition duration-300 hover:scale-105"
                    >
                      Voir la démonstration
                      <span>→</span>
                    </a>

                    <a
                      href="/demo"
                      className="inline-flex items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white px-6 py-4 font-semibold text-[#111827] transition duration-300 hover:border-[#5B5CF0] hover:text-[#5B5CF0]"
                    >
                      Parler de ce besoin
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-24 overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-[#EEF0FF] to-white p-10 text-center shadow-xl shadow-[#5B5CF0]/5 md:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Votre entreprise
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Votre processus ne ressemble pas à ces exemples ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Kirevo construit aussi des automatisations sur mesure pour vos
            outils, vos équipes et votre organisation.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/demo"
              className="rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-8 py-4 font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition duration-300 hover:scale-105"
            >
              Parler de mon besoin
            </a>

            <a
              href="https://calendly.com/roman-ducreux/decouverte-kirevo"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#D9DAFF] bg-white px-8 py-4 font-semibold text-[#111827] transition duration-300 hover:border-[#5B5CF0] hover:text-[#5B5CF0]"
            >
              Réserver un appel
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}