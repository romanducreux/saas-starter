import Link from "next/link";

export const metadata = {
  title: "Tarifs sur devis",
  description:
    "Découvrez l'accompagnement sur mesure Kirevo, proposé sur devis selon vos processus, vos outils et vos objectifs.",
};

const offers = [
  {
    name: "Sur mesure",
    price: "Sur devis",
    description:
      "Pour construire une automatisation réellement adaptée à votre organisation.",
    features: [
      "Échange de découverte et analyse du besoin",
      "Périmètre et objectifs clairement définis",
      "Workflows automatisés, testés et documentés",
      "Connexion à vos outils existants",
      "Intégration de l’intelligence artificielle si pertinente",
      "Validation humaine sur les actions importantes",
      "Formation et documentation",
      "Déploiement progressif",
      "Support, évolution et maintenance selon le projet",
    ],
    examples: [
      "Formulaire vers CRM",
      "Qualification de prospects",
      "E-mails et relances personnalisés",
      "Création de documents et comptes rendus",
    ],
    highlighted: true,
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F8FA] text-[#111111]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,92,240,0.16),transparent_38%)]" />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Accompagnement sur devis
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-bold tracking-[-0.055em] sm:text-5xl md:text-7xl">
            Une solution sur mesure pour votre organisation.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#667085]">
            Nous analysons vos processus, cadrons les résultats attendus et
            construisons une proposition adaptée à vos outils, vos contraintes
            et vos priorités.
          </p>
        </div>

        <section className="mx-auto mt-16 max-w-3xl">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`relative flex flex-col rounded-[2.5rem] border p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                offer.highlighted
                  ? "border-[#5B5CF0] bg-gradient-to-b from-[#F3F3FF] to-white shadow-xl shadow-[#5B5CF0]/10"
                  : "border-[#E1E4EA] bg-white"
              }`}
            >
              {offer.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-[#5B5CF0] px-4 py-2 text-xs font-semibold text-white">
                  Accompagnement personnalisé
                </span>
              )}

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
                {offer.name}
              </p>

              <p className="mt-6 text-5xl font-bold tracking-tight">
                {offer.price}
              </p>

              <p className="mt-5 leading-7 text-[#667085]">
                {offer.description}
              </p>

              <div className="mt-8 border-t border-[#E1E4EA] pt-7">
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

              <div className="mt-8 rounded-2xl bg-[#F7F8FA] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
                  Exemples
                </p>

                <div className="mt-3 space-y-2 text-sm text-[#667085]">
                  {offer.examples.map((example) => (
                    <p key={example}>• {example}</p>
                  ))}
                </div>
              </div>

              <Link
                href="/demo"
                className={`mt-8 block rounded-2xl px-6 py-4 text-center font-semibold transition duration-300 hover:scale-[1.02] ${
                  offer.highlighted
                    ? "bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] text-white shadow-xl shadow-[#5B5CF0]/20"
                    : "bg-[#111827] text-white"
                }`}
              >
                Échanger sur mon projet
              </Link>
            </article>
          ))}
        </section>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#667085]">
          Le prix dépend du périmètre, des intégrations, des éventuels coûts
          d’outils tiers, du niveau d’accompagnement et du régime de TVA
          applicable. Tout est détaillé dans un devis personnalisé avant votre
          engagement. Le calendrier est confirmé après le cadrage du projet.
        </p>

        <section className="mx-auto mt-24 max-w-4xl rounded-[2.5rem] border border-[#E1E4EA] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Suivi et évolution
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Un accompagnement adapté après la mise en place.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
            La surveillance, les corrections, les évolutions et la maintenance
            sont définies selon vos besoins et intégrées au devis lorsqu’elles
            sont nécessaires.
          </p>
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
            <Link
              href="/demo"
              className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-[#111111] transition hover:scale-105"
            >
              Demander une démo
            </Link>

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
