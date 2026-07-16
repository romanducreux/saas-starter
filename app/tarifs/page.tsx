import Image from "next/image";

const offers = [
  {
    name: "Starter",
    price: "690 €",
    description:
      "Pour automatiser une tâche précise et obtenir un premier gain de temps rapidement.",
    features: [
      "Audit de 30 minutes",
      "1 workflow automatisé",
      "Connexion à vos outils existants",
      "Installation complète",
      "Formation de prise en main",
      "Support pendant 14 jours",
    ],
    examples: [
      "Formulaire vers CRM",
      "Qualification de prospects",
      "Relances automatiques",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "1 790 €",
    description:
      "Pour automatiser plusieurs processus commerciaux et administratifs.",
    features: [
      "Audit complet de vos processus",
      "Jusqu’à 5 workflows",
      "Intégration de l’intelligence artificielle",
      "Connexion CRM, e-mails et calendrier",
      "Tableau de suivi",
      "Formation de votre équipe",
      "Support pendant 30 jours",
    ],
    examples: [
      "Gestion complète des prospects",
      "E-mails automatiques personnalisés",
      "Création de documents et comptes-rendus",
    ],
    highlighted: true,
  },
  {
    name: "Sur mesure",
    price: "Sur devis",
    description:
      "Pour construire un système personnalisé adapté à votre organisation.",
    features: [
      "Analyse approfondie",
      "Architecture sur mesure",
      "Automatisations avancées",
      "Développements spécifiques",
      "Déploiement progressif",
      "Documentation complète",
      "Maintenance disponible",
    ],
    examples: [
      "Plusieurs équipes et logiciels",
      "Processus métier complexes",
      "Automatisations à grande échelle",
    ],
    highlighted: false,
  },
];

const maintenancePlans = [
  {
    name: "Essentiel",
    price: "99 €/mois",
    description: "Surveillance et corrections de votre automatisation.",
  },
  {
    name: "Évolution",
    price: "249 €/mois",
    description: "Support prioritaire et améliorations régulières.",
  },
  {
    name: "Partenaire",
    price: "499 €/mois",
    description:
      "Accompagnement continu et nouvelles automatisations chaque mois.",
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-[#111827]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,92,240,0.16),transparent_38%)]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
            <Image
              src="/kirevo-transparent.png"
              alt="Kirevo"
              width={48}
              height={48}
              priority
              className="h-11 w-11 object-contain"
            />
          </div>

          <span className="text-xl font-semibold tracking-tight">Kirevo</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-[#6B7280] md:flex">
          <a href="/solutions" className="transition hover:text-[#111827]">
            Solutions
          </a>

          <a
            href="/cas-clients"
            className="transition hover:text-[#111827]"
          >
            Cas clients
          </a>

          <a href="/about" className="transition hover:text-[#111827]">
            À propos
          </a>
        </div>

        <a
          href="/demo"
          className="rounded-full bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition duration-300 hover:scale-105"
        >
          Demander une démo
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Offres Kirevo
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-bold tracking-[-0.055em] md:text-7xl">
            Des automatisations conçues pour produire un résultat concret.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6B7280]">
            Nous analysons vos processus, construisons les workflows et
            installons un système opérationnel directement dans votre
            entreprise.
          </p>
        </div>

        <section className="mt-16 grid gap-7 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`relative flex flex-col rounded-[2.5rem] border p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                offer.highlighted
                  ? "border-[#5B5CF0] bg-gradient-to-b from-[#F3F3FF] to-white shadow-xl shadow-[#5B5CF0]/10"
                  : "border-[#E5E7EB] bg-white"
              }`}
            >
              {offer.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-[#5B5CF0] px-4 py-2 text-xs font-semibold text-white">
                  Offre recommandée
                </span>
              )}

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
                {offer.name}
              </p>

              <p className="mt-6 text-5xl font-bold tracking-tight">
                {offer.price}
              </p>

              <p className="mt-5 leading-7 text-[#6B7280]">
                {offer.description}
              </p>

              <div className="mt-8 border-t border-[#E5E7EB] pt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
                  Inclus
                </p>

                <div className="mt-5 space-y-4">
                  {offer.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm text-emerald-600">
                        ✓
                      </span>

                      <p className="text-sm leading-6 text-[#374151]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-[#F8F9FB] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
                  Exemples
                </p>

                <div className="mt-3 space-y-2 text-sm text-[#6B7280]">
                  {offer.examples.map((example) => (
                    <p key={example}>• {example}</p>
                  ))}
                </div>
              </div>

              <a
                href="/demo"
                className={`mt-8 block rounded-2xl px-6 py-4 text-center font-semibold transition duration-300 hover:scale-[1.02] ${
                  offer.highlighted
                    ? "bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] text-white shadow-xl shadow-[#5B5CF0]/20"
                    : "bg-[#111827] text-white"
                }`}
              >
                Échanger sur mon projet
              </a>
            </article>
          ))}
        </section>

        <section className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
              Maintenance
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Un accompagnement après la mise en place.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6B7280]">
              Les automatisations peuvent évoluer avec vos équipes, vos outils
              et vos besoins.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {maintenancePlans.map((plan) => (
              <article
                key={plan.name}
                className="rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>

                <p className="mt-4 text-3xl font-bold text-[#5B5CF0]">
                  {plan.price}
                </p>

                <p className="mt-4 leading-7 text-[#6B7280]">
                  {plan.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[2.75rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-10 text-white shadow-2xl md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B8DFF]">
            Avant de commencer
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Chaque projet commence par un échange sur vos processus.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Nous vérifions la faisabilité, estimons les gains attendus et vous
            proposons une solution adaptée avant toute facturation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/demo"
              className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-[#111827] transition hover:scale-105"
            >
              Demander une démonstration
            </a>

            <a
              href="https://calendly.com/roman-ducreux/decouverte-kirevo"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Réserver un appel
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}