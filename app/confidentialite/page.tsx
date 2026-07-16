export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-6 py-32 text-[#111827]">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm font-semibold text-[#5B5CF0] transition hover:opacity-70"
        >
          ← Retour à l’accueil
        </a>

        <h1 className="mt-10 text-5xl font-bold tracking-tight">
          Politique de confidentialité
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#6B7280]">
          Cette politique explique comment Kirevo collecte, utilise et protège
          les informations transmises sur son site.
        </p>

        <div className="mt-12 space-y-10 rounded-[2.5rem] border border-[#E5E7EB] bg-white p-8 shadow-sm md:p-12">
          <section>
            <h2 className="text-2xl font-semibold">
              Données collectées
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Kirevo peut collecter les informations transmises dans ses
              formulaires, notamment le nom, l’adresse e-mail, l’entreprise,
              la taille de l’entreprise et la description du besoin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Utilisation des données
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Ces informations sont utilisées pour analyser les demandes,
              répondre aux prospects, organiser les démonstrations et proposer
              des solutions d’automatisation adaptées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Outils utilisés
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Certaines données peuvent être traitées avec des outils tiers
              utilisés par Kirevo, notamment Vercel, Make, Notion, OpenAI,
              Gmail et Calendly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Durée de conservation
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Les données sont conservées uniquement pendant la durée
              nécessaire au traitement de la demande et au suivi de la
              relation commerciale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Vos droits
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Vous pouvez demander l’accès, la rectification ou la suppression
              de vos données personnelles en contactant Kirevo à l’adresse
              contact@kirevo.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Contact
            </h2>

            <p className="mt-4 leading-7 text-[#6B7280]">
              Pour toute question concernant cette politique :
              contact@kirevo.fr.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}