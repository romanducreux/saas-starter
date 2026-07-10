import Image from "next/image";

const values = [
  ["Simplicité", "Créer des automatisations compréhensibles, utiles et faciles à adopter."],
  ["Confiance", "Construire des systèmes fiables pour les tâches importantes des entreprises."],
  ["Performance", "Faire gagner du temps, réduire les erreurs et améliorer l’exécution."],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-8 py-10 text-[#111827]">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
              <Image
                src="/kirevo-transparent.png"
                alt="Kirevo"
                width={55}
                height={55}
                priority
                className="h-12 w-12 object-contain"
              />
            </div>

            <span className="text-xl font-semibold tracking-tight">Kirevo</span>
          </a>

          <a
            href="/demo"
            className="rounded-full bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#5B5CF0]/25 transition hover:scale-105"
          >
            Demander une démo
          </a>
        </nav>

        <section className="pt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
            À propos
          </p>

          <h1 className="mt-5 max-w-5xl text-6xl font-bold tracking-[-0.06em] md:text-8xl">
            Nous construisons l’IA qui travaille pour les entreprises.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#6B7280]">
            Kirevo aide les PME à automatiser les tâches répétitives grâce à
            l’intelligence artificielle, afin que les équipes puissent se concentrer
            sur les décisions, les clients et la croissance.
          </p>
        </section>

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {values.map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FF] text-[#5B5CF0]">
                ✦
              </div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-4 text-[#6B7280]">{text}</p>
            </div>
          ))}
        </section>

        <section className="mt-24 rounded-[2.5rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-10 text-white shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8B8DFF]">
            Notre vision
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Le prochain avantage compétitif des PME sera leur capacité à automatiser vite.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Nous pensons que l’IA ne doit pas être réservée aux grandes entreprises.
            Kirevo veut rendre l’automatisation accessible, claire et rentable pour
            les entreprises françaises.
          </p>
        </section>

        <section className="mt-24 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
              Notre méthode
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Construire avec les entreprises, pas dans notre coin.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#6B7280]">
            <p>
              Kirevo est développé en échange direct avec des dirigeants, indépendants
              et équipes opérationnelles. L’objectif est simple : identifier les tâches
              qui prennent du temps, puis créer des automatisations utiles.
            </p>

            <p>
              Nous préférons construire peu de fonctionnalités, mais des fonctionnalités
              qui résolvent un vrai problème métier.
            </p>
          </div>
        </section>

        <section className="mt-24 rounded-[2.5rem] border border-[#E5E7EB] bg-white p-10 shadow-sm">
          <h2 className="text-4xl font-bold tracking-tight">
            Vous voulez participer à la bêta ?
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-[#6B7280]">
            Nous échangeons avec des entreprises françaises pour construire les premières
            automatisations Kirevo.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/demo"
              className="rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-8 py-4 text-center font-semibold text-white shadow-xl shadow-[#5B5CF0]/25 transition hover:scale-105"
            >
              Demander une démonstration
            </a>

            <a
              href="/"
              className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-4 text-center font-semibold text-[#111827] transition hover:border-[#5B5CF0] hover:text-[#5B5CF0]"
            >
              Retour à l’accueil
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}