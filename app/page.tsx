import Link from "next/link";

const features = [
  ["Gagnez du temps", "Automatisez les tâches répétitives et libérez vos équipes."],
  ["Réduisez vos coûts", "Moins d’erreurs, moins de ressaisie, plus d’efficacité."],
  ["Passez à l’échelle", "Des workflows IA prêts pour accompagner votre croissance."],
];

const approachPillars = [
  ["Conception avec le terrain", "Échanger avec les dirigeants pour comprendre les processus réels avant de proposer une solution."],
  ["Priorité à l’utile", "Automatiser d’abord les tâches répétitives qui créent un gain de temps concret et vérifiable."],
  ["Déploiement maîtrisé", "Tester, documenter et conserver une validation humaine sur les actions importantes."],
];

const pilotBenefits = [
  ["Un objectif précis", "Choisir une tâche prioritaire et définir le résultat attendu avant de construire."],
  ["Un workflow testé", "Vérifier le fonctionnement sur des cas concrets avant la mise en service."],
  ["Une validation humaine", "Garder le contrôle sur les devis, envois et autres actions importantes."],
  ["Un suivi mesurable", "Comparer le fonctionnement avant et après pour décider de la suite."],
];

const useCases = [
  ["Agences marketing", "Relances clients, comptes rendus, rapports et propositions commerciales."],
  ["Cabinets comptables", "Collecte de documents, rappels clients et préparation administrative."],
  ["E-commerce", "Réponses SAV, suivi commandes, relances et qualification des demandes."],
  ["Immobilier", "Qualification prospects, réponses automatiques et préparation des visites."],
];

const advantages = [
  {
    title: "Une approche moderne",
    description:
      "Des automatisations conçues pour supprimer les tâches répétitives et simplifier votre quotidien.",
    icon: "rocket",
  },
  {
    title: "Des solutions adaptées",
    description:
      "Chaque système est construit selon vos outils, vos processus et les besoins réels de votre entreprise.",
    icon: "target",
  },
  {
    title: "Un gain de temps concret",
    description:
      "Vos équipes se concentrent sur les tâches importantes pendant que les opérations répétitives sont automatisées.",
    icon: "clock",
  },
];

const landingOffers = [
  {
    name: "Sur mesure",
    price: "Sur devis",
    description:
      "Un accompagnement conçu autour de vos processus, de vos outils et de vos priorités métier.",
    features: [
      "Échange de découverte et analyse du besoin",
      "Périmètre, objectifs et critères de validation définis",
      "Workflows automatisés, testés et documentés",
      "Connexion à vos outils existants",
      "Intégration de l’intelligence artificielle si pertinente",
      "Validation humaine sur les actions importantes",
      "Formation et prise en main",
      "Déploiement, support et maintenance adaptés au projet",
    ],
    highlighted: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F8FA] text-[#111111]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,92,240,0.20),transparent_35%)]" />

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-14 text-center sm:px-8 sm:pt-20">
        <div className="mb-6 rounded-full border border-[#E1E4EA] bg-white/80 px-5 py-2 text-sm font-medium text-[#5B5CF0] shadow-sm backdrop-blur">
          ✦ Plateforme d’automatisation par IA
        </div>

        <h1 className="max-w-6xl text-5xl font-bold tracking-[-0.06em] sm:text-6xl md:text-8xl">
          Automatisez.
          <br />
          Gagnez du temps.
          <br />
          <span className="bg-gradient-to-r from-[#5B5CF0] to-[#8B8DFF] bg-clip-text text-transparent">
            Développez votre entreprise.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#667085] md:text-xl">
          Kirevo automatise les tâches répétitives de votre entreprise grâce à
          l’intelligence artificielle. Moins d’administratif, plus de croissance.
        </p>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
          <Link
            href="/demo"
            className="rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-[#5B5CF0]/25 transition duration-300 hover:scale-105 hover:shadow-[#5B5CF0]/40"
          >
            Demander une démo
          </Link>

          <Link
            href="/fonctionnalites"
            className="rounded-2xl border border-[#E1E4EA] bg-white px-10 py-5 text-lg font-semibold text-[#111111] shadow-md transition duration-300 hover:scale-105 hover:border-[#5B5CF0] hover:text-[#5B5CF0]"
          >
            Découvrir les fonctionnalités
          </Link>
        </div>

        <div className="relative mt-24 w-full max-w-6xl animate-rise">

          <div className="hero-card rounded-[2.5rem] border border-[#E1E4EA] bg-white/90 p-8 text-left shadow-2xl shadow-[#5B5CF0]/10 backdrop-blur">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Tableau de bord</h2>
                <p className="text-sm text-[#667085]">Vue d’ensemble de votre activité</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#D9DAFF] bg-[#F2F2FF] px-4 py-2 text-sm font-medium text-[#5B5CF0]">
                  Démonstration · données fictives
                </span>
                <span className="rounded-full border border-[#E1E4EA] px-4 py-2 text-sm text-[#667085]">
                  7 derniers jours
                </span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Temps gagné", "18h 27m", "+24%"],
                ["Tâches exécutées", "2 436", "+18%"],
                ["Automatisations", "128", "+24%"],
                ["Réussite", "98,6%", "+2%"],
              ].map(([label, value, growth]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-[#E1E4EA] bg-[#F7F8FA] p-5 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <p className="text-sm text-[#667085]">{label}</p>
                  <p className="mt-3 text-3xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-emerald-500">{growth}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-[#E1E4EA] bg-white p-6">
                <h3 className="font-semibold">Automatisations récentes</h3>
                <div className="mt-5 space-y-4 text-sm">
                  {[
                    "Réponse automatique aux e-mails clients",
                    "Création de devis après formulaire",
                    "Relance des paiements en attente",
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-[#F7F8FA] px-4 py-4">
                      <span>{item}</span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-600">
                        Actif
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-[#111827] to-[#252B3A] p-6 text-white">
                <h3 className="font-semibold">Exécution en temps réel</h3>
                <div className="mt-6 space-y-5 text-sm text-white/80">
                  <p>● E-mail reçu de Dupont SARL</p>
                  <p>● Analyse par l’IA</p>
                  <p>● Devis préparé par l’IA</p>
                  <p className="text-emerald-400">● Prêt pour validation humaine</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="fonctionnalites" className="mt-28 w-full max-w-6xl scroll-mt-32 text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
            Fonctionnalités
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Automatisez ce qui ralentit votre entreprise.
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-[#667085]">
            Kirevo automatise les tâches répétitives et permet à votre équipe de se concentrer sur l&apos;essentiel.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map(([title, text]) => (
              <div key={title} className="card-glow rounded-[2rem] border border-[#E1E4EA] bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FF] text-[#5B5CF0]">
                  ✦
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-[#667085]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section 
          id="comment-ca-marche"
          className="mt-28 w-full max-w-6xl scroll-mt-32 text-left">
          
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
            Comment ça marche
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            De vos tâches répétitives à une automatisation complète.
          </h2>

          <div className="relative mt-16">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#5B5CF0] via-[#C7C8FF] to-transparent md:block" />

            <div className="space-y-12">
              {[
                ["01", "Analyse", "Nous identifions les tâches qui ralentissent votre équipe : e-mails, devis, relances ou rapports."],
                ["02", "Construction", "Kirevo transforme vos processus en workflows IA simples, fiables et mesurables."],
                ["03", "Automatisation", "Vos tâches répétitives sont exécutées automatiquement, avec un suivi clair dans le tableau de bord."],
              ].map(([number, title, text]) => (
                <div key={number} className="relative grid gap-6 md:grid-cols-[80px_1fr]">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-sm font-bold text-white shadow-xl shadow-[#5B5CF0]/20">
                    {number}
                  </div>

                  <div className="rounded-[2rem] border border-[#E1E4EA] bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="mt-3 max-w-2xl text-[#667085]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section 
          id="cas-usage" 
          className="mt-28 w-full max-w-6xl text-left">

          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
            Cas d’usage
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Kirevo s’adapte à votre activité.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {useCases.map(([title, text]) => (
              <div
                key={title}
                className="card-glow rounded-[2rem] border border-[#E1E4EA] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-[#667085]">{text}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="approche" className="mt-28 w-full max-w-6xl scroll-mt-32 text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">Notre démarche</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Une automatisation utile, claire et maîtrisée.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {approachPillars.map(([title, text]) => (
              <div key={title} className="card-glow rounded-[2rem] border border-[#E1E4EA] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
                  Approche Kirevo
                </p>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-[#667085]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projet-pilote" className="mt-28 w-full max-w-6xl scroll-mt-32 text-left">
          <div className="overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#111827] to-[#252B3A] p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B8DFF]">
                  Premier projet
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                  Commencez par un pilote clair, utile et maîtrisé.
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/70">
                  Kirevo cible d’abord un processus prioritaire. Vous validez le
                  périmètre, le fonctionnement et les règles de contrôle avant
                  d’étendre l’automatisation à d’autres tâches.
                </p>

                <Link
                  href="/demo"
                  className="mt-8 inline-flex rounded-2xl bg-white px-7 py-4 font-semibold text-[#111111] transition hover:scale-[1.03]"
                >
                  Identifier mon premier workflow
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {pilotBenefits.map(([title, text], index) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-[#AEB0FF]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-7 text-white/65">{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">
              Le périmètre, le calendrier de livraison, les accès nécessaires
              et les critères de validation sont précisés dans le devis avant
              le démarrage.
            </p>
          </div>
        </section>

        <section
          id="tarifs"
          className="bg-[#F7F8FA] px-6 py-24 pb-12 md:px-8 md:py-32 md:pb-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
                Votre projet
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-[-0.045em] text-[#111111] md:text-6xl">
                Une solution sur mesure, pensée pour vos processus.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#667085]">
                Chaque projet commence par un échange pour comprendre vos besoins,
                cadrer le périmètre et construire une proposition claire.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              {landingOffers.map((offer) => (
                <article
                  key={offer.name}
                  className={`flex flex-col rounded-[2.5rem] border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    offer.highlighted
                      ? "border-[#5B5CF0] bg-gradient-to-b from-[#F2F2FF] to-white shadow-[0_25px_70px_rgba(91,92,240,0.14)]"
                      : "border-[#E1E4EA] bg-white shadow-[0_15px_45px_rgba(17,24,39,0.06)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
                      {offer.name}
                    </p>

                      {offer.highlighted && (
                      <span className="rounded-full bg-[#5B5CF0] px-4 py-2 text-xs font-semibold text-white">
                        Accompagnement personnalisé
                      </span>
                    )}
                  </div>

                  <p className="mt-7 text-5xl font-bold tracking-tight text-[#111111]">
                    {offer.price}
                  </p>

                  <p className="mt-5 min-h-[84px] leading-7 text-[#667085]">
                    {offer.description}
                  </p>

                  <div className="mt-8 border-t border-[#E1E4EA] pt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
                      Inclus dans le devis
                    </p>

                    <div className="mt-5 space-y-4">
                      {offer.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-600">
                            ✓
                          </span>

                          <p className="text-sm leading-6 text-[#374151]">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/demo"
                    className={`mt-9 block rounded-2xl px-6 py-4 text-center font-semibold transition duration-300 hover:scale-[1.02] ${
                      offer.highlighted
                        ? "bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] text-white shadow-xl shadow-[#5B5CF0]/20"
                        : "bg-[#111827] text-white"
                    }`}
                  >
                    Échanger sur mon projet
                  </Link>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#667085]">
              Le prix dépend du périmètre, des intégrations, des éventuels coûts
              d’outils tiers et du niveau d’accompagnement. Tout est détaillé
              dans un devis personnalisé avant votre engagement.
            </p>

            <div className="mt-10 text-center">
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-2 font-semibold text-[#5B5CF0] transition hover:gap-3"
              >
                Découvrir l’accompagnement sur mesure
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="mt-28 w-full max-w-6xl text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Questions fréquentes.
          </h2>

          <div className="mt-10 space-y-4">
            {[
              [
                "Combien de temps faut-il pour mettre en place une automatisation ?",
                "Selon la complexité du processus, une automatisation peut être déployée en quelques jours."
              ],
              [
                "Quels outils peuvent être connectés ?",
                "Kirevo peut s’intégrer à vos e-mails, CRM, outils internes, formulaires et plateformes métier."
              ],
              [
                "Faut-il des compétences techniques ?",
                "Non. Notre objectif est justement de rendre l’automatisation accessible à toutes les entreprises."
              ],
              [
                "Combien coûte Kirevo ?",
                "Chaque projet est chiffré sur devis après un échange sur vos besoins, vos outils et le périmètre de l’automatisation."
              ],
            ].map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-[2rem] border border-[#E1E4EA] bg-white p-8 shadow-sm transition duration-500 hover:shadow-xl"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-semibold">
                    {question}

                    <span className="text-2xl text-[#5B5CF0] transition-transform duration-500 ease-out group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-6 max-w-4xl leading-8 text-[#667085] transition-all duration-500 ease-out">
                    {answer}
                  </p>
                </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-28 w-full max-w-6xl scroll-mt-32 pb-32 text-left">
          <div className="rounded-[2.5rem] border border-[#E1E4EA] bg-gradient-to-br from-[#111827] to-[#252B3A] p-10 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8B8DFF]">
              Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Prêt à automatiser votre travail ?
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-white/70">
              Demandez une démonstration et découvrons ensemble quelles tâches Kirevo peut automatiser pour vous.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-[#111111] transition hover:scale-105"
              >
                Demander une démo
              </Link>

              <a
                href="mailto:contact@kirevo.fr"
                className="rounded-2xl border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Envoyer un e-mail
              </a>
            </div>
          </div>
        </section>
      </section>

      <section className="border-t border-[#E1E4EA] bg-gradient-to-b from-[#F8F9FB] to-white px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
              Les avantages Kirevo
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-[#111111] md:text-6xl">
              Pourquoi choisir Kirevo ?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#667085] md:text-xl">
              Une approche moderne et des solutions sur mesure pour automatiser vos
              tâches répétitives et vous faire gagner du temps.
            </p>
          </div>

          <div className="mt-16 grid gap-7 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <article
                key={advantage.title}
                className="group rounded-[2rem] border border-[#E8E9EE] bg-white p-8 shadow-[0_15px_45px_rgba(17,24,39,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#D6D6FF] hover:shadow-[0_25px_60px_rgba(91,92,240,0.12)]"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F1EFFF] to-[#F8F7FF] text-[#5B5CF0] transition duration-300 group-hover:scale-110">
                    {advantage.icon === "rocket" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-10 w-10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37 14.37 15.59m1.22-1.22a6 6 0 0 0 4.24-6.78l-.18-1.06a2 2 0 0 0-2.18-1.64l-1.06.18a6 6 0 0 0-6.78 4.24m5.96 5.06-5.96-5.06m0 0L7.8 7.48a2 2 0 0 0-2.83 0L3.55 8.9l3.18 3.18m2.9-2.77-2.9 2.77m0 0-1.06 4.24 4.24-1.06m0 0 3.18 3.18 1.42-1.42a2 2 0 0 0 0-2.83l-1.83-1.83"
                        />
                      </svg>
                    )}

                    {advantage.icon === "target" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-10 w-10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <circle cx="12" cy="12" r="8" />
                        <circle cx="12" cy="12" r="4" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.5 9.5 5-5m0 0v3m0-3h-3"
                        />
                      </svg>
                    )}

                    {advantage.icon === "clock" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-10 w-10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7v5l3 2"
                        />
                      </svg>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
                      Engagement Kirevo
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-[#111111]">
                      {advantage.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#667085]">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    
    
  );
}
