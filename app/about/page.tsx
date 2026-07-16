export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-6 py-32">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-6xl font-bold">
          À propos de Kirevo
        </h1>

        <p className="mt-10 text-xl leading-10 text-[#6B7280]">
          Kirevo accompagne les entreprises dans l'automatisation de leurs
          tâches répétitives grâce à l'intelligence artificielle.
        </p>

        <div className="mt-16 space-y-12">

          <section>
            <h2 className="text-3xl font-bold">
              Notre mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Nous aidons les entreprises à gagner du temps en automatisant
              leurs processus administratifs, commerciaux et opérationnels.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Nos secteurs
            </h2>

            <ul className="mt-6 space-y-3 text-lg text-[#6B7280]">
              <li>• Immobilier</li>
              <li>• Marketing</li>
              <li>• Événementiel</li>
              <li>• Comptabilité</li>
              <li>• E-commerce</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Notre vision
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B7280]">
              Rendre l'automatisation accessible aux PME françaises grâce à
              l'intelligence artificielle.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}