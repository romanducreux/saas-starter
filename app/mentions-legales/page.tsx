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
              <p>Kirevo</p>
              <p>Fondateur : Roman Ducreux</p>
              <p>
                E-mail :{" "}
                <a className="font-medium text-[#5B5CF0]" href="mailto:contact@kirevo.fr">
                  contact@kirevo.fr
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Hébergement</h2>
            <div className="mt-4 space-y-2 leading-7 text-[#667085]">
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133</p>
              <p>Covina, CA 91723, États-Unis</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
            <p className="mt-4 leading-7 text-[#667085]">
              Tous les contenus présents sur le site Kirevo sont protégés par
              le droit d&apos;auteur.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
