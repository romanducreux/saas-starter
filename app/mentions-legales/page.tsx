export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-6 py-32 text-[#111827]">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold">Mentions légales</h1>

        <div className="mt-12 space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold">Éditeur du site</h2>

            <p className="mt-4">
              Kirevo
            </p>

            <p>
              Fondateur : Roman Ducreux
            </p>

            <p>
              Email : contact@kirevo.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Hébergement</h2>

            <p className="mt-4">
              Vercel Inc.
            </p>

            <p>
              440 N Barranca Ave #4133
            </p>

            <p>
              Covina, CA 91723
            </p>

            <p>
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              Propriété intellectuelle
            </h2>

            <p className="mt-4">
              Tous les contenus présents sur le site Kirevo sont protégés par
              le droit d’auteur.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}