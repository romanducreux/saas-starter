import Link from "next/link";

export const metadata = {
  title: "À propos",
  description:
    "Découvrez Kirevo, notre approche de l'automatisation IA et notre manière de concevoir des solutions utiles, simples et adaptées aux besoins réels des entreprises.",
};

const principles = [
  {
    number: "01",
    title: "Partir du problème",
    text: "Nous ne commençons pas par une technologie. Nous commençons par comprendre les tâches répétitives, les outils utilisés et les points de friction réels.",
  },
  {
    number: "02",
    title: "Automatiser utilement",
    text: "Chaque automatisation doit avoir une utilité concrète : gagner du temps, réduire les ressaisies, améliorer le suivi ou fluidifier un processus.",
  },
  {
    number: "03",
    title: "Garder l'humain",
    text: "Les décisions importantes restent contrôlées par votre équipe. Kirevo automatise ce qui doit l'être, sans supprimer les validations nécessaires.",
  },
  {
    number: "04",
    title: "Construire pour durer",
    text: "Les solutions sont pensées pour rester compréhensibles, maintenables et évolutives au fil des besoins de l'entreprise.",
  },
];

const steps = [
  {
    number: "01",
    title: "Comprendre",
    text: "Nous échangeons sur votre fonctionnement actuel, vos outils et les tâches qui prennent le plus de temps.",
  },
  {
    number: "02",
    title: "Identifier",
    text: "Nous sélectionnons les étapes qui peuvent être automatisées sans complexifier inutilement votre organisation.",
  },
  {
    number: "03",
    title: "Concevoir",
    text: "Nous construisons un workflow adapté à vos règles, vos outils et vos équipes.",
  },
  {
    number: "04",
    title: "Tester",
    text: "Nous vérifions le fonctionnement réel, les cas particuliers et les points de contrôle nécessaires.",
  },
  {
    number: "05",
    title: "Améliorer",
    text: "Une fois le système utilisé, nous pouvons ajuster, connecter de nouveaux outils ou étendre l'automatisation.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#111111]">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-24 sm:pt-28 lg:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[430px] w-[700px] -translate-x-1/2 rounded-full bg-[#6D6FF5]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5B5CF0]/15 bg-white px-5 py-2 text-sm font-medium text-[#5B5CF0] shadow-sm">
            <span>✦</span>
            À propos de Kirevo
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-[#111111] sm:text-6xl lg:text-[76px]">
            L&apos;automatisation doit être
            <span className="mt-2 block bg-gradient-to-r from-[#5B5CF0] via-[#6768F6] to-[#8B78FF] bg-clip-text text-transparent">
              simple, utile et maîtrisée.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#667085] sm:text-xl">
            Kirevo aide les entreprises à automatiser certaines tâches
            commerciales, administratives et opérationnelles grâce à des
            workflows conçus autour de leur fonctionnement réel.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-[#E4E7EF] bg-white p-9 shadow-[0_15px_45px_rgba(15,23,42,0.05)] sm:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
              Notre mission
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-[#111111] sm:text-5xl">
              Supprimer le répétitif sans compliquer l&apos;entreprise.
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#667085]">
              Beaucoup d&apos;entreprises utilisent déjà de bons outils, mais
              passent encore du temps à transférer des informations, classer
              des demandes, relancer, recopier des données ou préparer des
              documents.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              Kirevo intervient précisément à cet endroit : connecter les
              outils existants, structurer les informations et automatiser les
              étapes qui n&apos;ont pas besoin d&apos;être réalisées
              manuellement.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-[#5B5CF0] to-[#7C5CFC] p-9 text-white shadow-[0_25px_70px_rgba(91,92,240,0.22)] sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-white/[0.06]" />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Notre vision
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                Une technologie qui travaille en arrière-plan.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/75">
                Une bonne automatisation ne doit pas imposer un nouvel outil ou
                transformer complètement les habitudes d&apos;une équipe.
              </p>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Elle doit s&apos;intégrer au fonctionnement existant, réduire
                les tâches inutiles et laisser les collaborateurs se
                concentrer sur les décisions et les échanges qui demandent
                réellement leur expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
              Notre approche
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] text-[#111111] sm:text-5xl">
              Construire moins.
              <span className="block text-[#5B5CF0]">Construire mieux.</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              Nous privilégions les automatisations simples à comprendre,
              ciblées sur un besoin précis et capables d&apos;évoluer ensuite.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="group relative overflow-hidden rounded-[30px] border border-[#E4E7EF] bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#C7C8FF] hover:shadow-[0_24px_60px_rgba(91,92,240,0.10)] sm:p-10"
              >
                <div className="absolute right-7 top-4 text-[78px] font-bold tracking-[-0.08em] text-[#F1F2F7] transition group-hover:text-[#EEEEFF]">
                  {principle.number}
                </div>

                <div className="relative">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F0FF] text-lg font-bold text-[#5B5CF0]">
                    ✦
                  </div>

                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#111111]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-[#667085]">
                    {principle.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#111827] px-8 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9293FF]">
                Notre méthode
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                Comprendre avant
                <span className="block text-[#9293FF]">d&apos;automatiser.</span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-[#AAB3C4]">
                Nous ne partons jamais d&apos;une solution toute faite. Chaque
                projet commence par l&apos;analyse du processus actuel et des
                outils déjà utilisés.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-6 sm:grid-cols-[55px_1fr]"
                >
                  <div className="text-sm font-semibold text-[#9293FF]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>

                    <p className="mt-2 leading-6 text-[#AAB3C4]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[36px] border border-[#E4E7EF] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#EEF0FF] via-[#F8F8FF] to-[#EDE9FE] p-10">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border-[40px] border-[#5B5CF0]/5" />
              <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[45px] border-[#7C5CFC]/5" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B5CF0] to-[#7C5CFC] text-2xl font-bold text-white shadow-[0_16px_35px_rgba(91,92,240,0.25)]">
                  K
                </div>

                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
                    Kirevo
                  </div>

                  <div className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#111111]">
                    Automatisation IA pour les entreprises.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-9 sm:p-12 lg:p-14">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
                Fondateur
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] text-[#111111]">
                Roman Ducreux
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#667085]">
                Kirevo est né d&apos;une volonté simple : utiliser
                l&apos;automatisation et l&apos;intelligence artificielle pour
                résoudre des problèmes opérationnels concrets, plutôt que de
                multiplier les outils sans utilité réelle.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#667085]">
                Le projet se concentre aujourd&apos;hui sur la conception de
                workflows adaptés aux besoins des entreprises, avec une
                attention particulière portée à la simplicité, à la fiabilité
                et à l&apos;intégration dans les outils déjà utilisés.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#667085]">
                L&apos;objectif est de construire progressivement des solutions
                capables de réduire les tâches répétitives tout en conservant
                une approche humaine et pragmatique.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Automatisation",
                  "Intelligence artificielle",
                  "Workflows",
                  "Intégrations",
                  "Processus métier",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E2E8F0] bg-[#F8F9FC] px-4 py-2 text-sm font-medium text-[#475569]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-[#E4E7EF] bg-white p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
                Aujourd&apos;hui
              </div>

              <h3 className="mt-4 text-2xl font-bold">Accompagnement ciblé</h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Kirevo travaille sur des besoins précis et construit des
                automatisations adaptées aux processus existants.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E4E7EF] bg-white p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
                Demain
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Des solutions réutilisables
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                Les besoins qui reviennent régulièrement pourront être
                standardisés afin de proposer des solutions plus rapides à
                déployer.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E4E7EF] bg-white p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
                Vision
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Automatiser à plus grande échelle
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                À mesure que Kirevo se développe, l&apos;objectif est de
                proposer des solutions capables d&apos;accompagner des
                entreprises de plus en plus structurées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 pt-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[38px] border border-[#DFE1FF] bg-gradient-to-br from-[#F1F1FF] via-white to-[#F5F1FF] px-8 py-16 text-center shadow-[0_20px_65px_rgba(91,92,240,0.10)] sm:px-12 lg:py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            Échangeons
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-[#111111] sm:text-5xl">
            Vous avez identifié une tâche répétitive dans votre entreprise ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
            Présentez-nous votre fonctionnement actuel. Nous regarderons
            ensemble s&apos;il existe une manière simple et pertinente de
            l&apos;automatiser.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="w-full rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C5CFC] px-8 py-4 font-semibold text-white shadow-[0_16px_35px_rgba(91,92,240,0.24)] transition hover:-translate-y-1 sm:w-auto"
            >
              Demander une démo
            </Link>

            <Link
              href="/contact"
              className="w-full rounded-2xl border border-[#DFE3EA] bg-white px-8 py-4 font-semibold text-[#111111] shadow-sm transition hover:bg-[#FAFAFC] sm:w-auto"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
