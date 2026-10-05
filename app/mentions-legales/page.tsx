export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Kirevo.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-[65vh] bg-[#F7F8FA] px-6 pb-24 pt-14 text-[#111111] sm:pt-20">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
          Informations légales
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-10 rounded-[2rem] border border-[#E1E4EA] bg-white p-7 shadow-sm sm:p-10">
          <section>
            <h2 className="text-2xl font-semibold">Éditeur du site</h2>
            <div className="mt-4 space-y-2 leading-7 text-[#667085]">
              <p>Kirevo, projet actuellement en cours de constitution.</p>
              <p>Responsable de la publication : Roman Ducreux.</p>
              <p>
                E-mail :{" "}
                <a className="font-medium text-[#5B5CF0]" href="mailto:contact@kirevo.fr">
                  contact@kirevo.fr
                </a>
              </p>
              <p>
                Les informations d’immatriculation, l’adresse professionnelle,
                le numéro de téléphone et le régime de TVA seront publiés dès
                la finalisation de la création de l’activité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Objet du site</h2>
            <p className="mt-4 leading-7 text-[#667085]">
              Le site présente le projet Kirevo et permet de demander un
              échange ou une démonstration. Il ne permet actuellement ni la
              commande en ligne ni le paiement d’une prestation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Hébergement</h2>
            <div className="mt-4 space-y-2 leading-7 text-[#667085]">
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133</p>
              <p>Covina, CA 91723, États-Unis</p>
              <p>Téléphone : +1 559 288 7060</p>
              <p>
                Site :{" "}
                <a
                  className="font-medium text-[#5B5CF0]"
                  href="https://vercel.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
            <p className="mt-4 leading-7 text-[#667085]">
              Tous les contenus présents sur le site Kirevo sont protégés par
              le droit d&apos;auteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Données personnelles</h2>
            <p className="mt-4 leading-7 text-[#667085]">
              Les modalités de collecte et d’utilisation des données sont
              détaillées dans la{" "}
              <a
                className="font-medium text-[#5B5CF0]"
                href="/confidentialite"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-6 text-sm text-[#8A94A6]">
          Dernière mise à jour : 5 octobre 2026.
        </p>
      </article>
    </main>
  );
}
