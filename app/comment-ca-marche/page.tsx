import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Analyse de vos processus",
    description:
      "Nous identifions les tâches répétitives, les pertes de temps et les opportunités d’automatisation dans votre entreprise.",
  },
  {
    number: "02",
    title: "Conception du workflow",
    description:
      "Nous construisons une automatisation adaptée à vos outils, à vos équipes et à vos objectifs.",
  },
  {
    number: "03",
    title: "Connexion de vos outils",
    description:
      "CRM, e-mails, formulaires, documents, agendas et logiciels métier sont reliés dans un système unique.",
  },
  {
    number: "04",
    title: "Déploiement et tests",
    description:
      "Chaque scénario est testé, sécurisé et ajusté avant sa mise en production.",
  },
  {
    number: "05",
    title: "Suivi et optimisation",
    description:
      "Nous surveillons les performances et améliorons progressivement les automatisations.",
  },
];

const benefits = [
  ["Moins de tâches manuelles", "Vos équipes ne perdent plus de temps sur les actions répétitives."],
  ["Moins d’erreurs", "Les informations circulent automatiquement entre vos outils."],
  ["Plus de réactivité", "Vos prospects et clients reçoivent des réponses plus rapidement."],
  ["Une croissance maîtrisée", "Votre entreprise peut traiter davantage de demandes sans augmenter immédiatement ses effectifs."],
];

export default function CommentCaMarchePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-[#111827]">
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
          <a href="/#fonctionnalites" className="transition hover:text-[#111827]">
            Fonctionnalités
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
          className="rounded-full bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition hover:scale-105"
        >
          Demander une démo
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Comment ça marche
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-bold tracking-[-0.055em] md:text-7xl">
            De vos processus actuels à une entreprise plus automatisée.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6B7280]">
            Kirevo analyse votre fonctionnement, construit les automatisations
            adaptées et connecte vos outils sans bouleverser votre organisation.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#5B5CF0] via-[#C7C8FF] to-transparent md:block" />

          <div className="space-y-10">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative grid gap-6 md:grid-cols-[80px_1fr]"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-sm font-bold text-white shadow-xl shadow-[#5B5CF0]/20">
                  {step.number}
                </div>

                <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h2 className="text-2xl font-bold">{step.title}</h2>

                  <p className="mt-4 max-w-3xl leading-7 text-[#6B7280]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <section className="mt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
              Résultats
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Une automatisation utile doit produire un résultat mesurable.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map(([title, description]) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FF] text-xl text-[#5B5CF0]">
                  ✦
                </div>

                <h3 className="mt-6 text-2xl font-bold">{title}</h3>

                <p className="mt-4 leading-7 text-[#6B7280]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-28 rounded-[2.5rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-10 text-white shadow-2xl md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B8DFF]">
            Première étape
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            Identifions les tâches qui ralentissent votre entreprise.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Lors d’un premier échange, nous analysons vos processus et
            sélectionnons les automatisations qui auront le plus d’impact.
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