export const metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et traitement des données personnelles sur le site Kirevo.",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-[65vh] bg-[#F7F8FA] px-6 pb-24 pt-14 text-[#111111] sm:pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
          Vos données
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
          Politique de confidentialité
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#667085]">
          Cette politique explique comment Kirevo collecte, utilise et protège
          les informations transmises sur son site.
        </p>

        <div className="mt-10 space-y-10 rounded-[2rem] border border-[#E1E4EA] bg-white p-7 shadow-sm sm:p-10">
          <section>
            <h2 className="text-2xl font-semibold">
              Données collectées
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Kirevo peut collecter les informations transmises dans ses
              formulaires, notamment le nom, l’adresse e-mail, l’entreprise,
              la taille de l’entreprise et la description du besoin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Utilisation des données
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Ces informations sont utilisées pour analyser les demandes,
              répondre aux prospects, organiser les démonstrations et proposer
              des solutions d’automatisation adaptées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Outils utilisés
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Certaines données peuvent être traitées avec des outils tiers
              utilisés par Kirevo, notamment Vercel, Make, Notion, OpenAI,
              Gmail et Calendly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Durée de conservation
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Les données sont conservées uniquement pendant la durée
              nécessaire au traitement de la demande et au suivi de la
              relation commerciale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Vos droits
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Vous pouvez demander l’accès, la rectification ou la suppression
              de vos données personnelles en écrivant à{" "}
              <a
                href="mailto:contact@kirevo.fr"
                className="font-medium text-[#5B5CF0]"
              >
                contact@kirevo.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Contact
            </h2>

            <p className="mt-4 leading-7 text-[#667085]">
              Pour toute question concernant cette politique, écrivez à{" "}
              <a
                href="mailto:contact@kirevo.fr"
                className="font-medium text-[#5B5CF0]"
              >
                contact@kirevo.fr
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
