import Link from "next/link";

export const metadata = {
  title: "Fonctionnalités",
  description:
    "Découvrez comment Kirevo automatise les tâches répétitives de votre entreprise : prospects, e-mails, documents, relances, données et processus internes.",
};

const features = [
  {
    number: "01",
    eyebrow: "Prospects",
    title: "Qualification des demandes",
    description:
      "Transformez automatiquement une demande entrante en information exploitable par votre équipe.",
    items: [
      "Analyse des formulaires entrants",
      "Extraction des informations importantes",
      "Qualification et catégorisation",
      "Création ou mise à jour du prospect",
      "Attribution au bon interlocuteur",
    ],
    example:
      "Formulaire → Analyse → Qualification → CRM → Notification",
  },
  {
    number: "02",
    eyebrow: "E-mails",
    title: "Traitement intelligent des e-mails",
    description:
      "Réduisez le temps passé à lire, trier et transmettre les messages répétitifs.",
    items: [
      "Identification du type de demande",
      "Extraction des données utiles",
      "Résumé automatique",
      "Classement selon vos règles",
      "Préparation d'une réponse",
    ],
    example:
      "E-mail reçu → Classification → Résumé → Action → Suivi",
  },
  {
    number: "03",
    eyebrow: "Documents",
    title: "Création de documents",
    description:
      "Utilisez les données déjà disponibles pour préparer automatiquement les documents dont votre entreprise a besoin.",
    items: [
      "Préparation de devis",
      "Création de comptes rendus",
      "Génération de documents internes",
      "Préremplissage à partir de vos données",
      "Transmission au bon interlocuteur",
    ],
    example:
      "Données client → Document → Vérification → Envoi",
  },
  {
    number: "04",
    eyebrow: "Suivi",
    title: "Relances automatiques",
    description:
      "Ne laissez plus certaines demandes sans suivi lorsque des actions simples peuvent être automatisées.",
    items: [
      "Relances commerciales",
      "Rappels de documents",
      "Suivi des demandes en attente",
      "Notifications internes",
      "Déclenchement selon une date ou un statut",
    ],
    example:
      "Échéance → Vérification → Relance → Mise à jour du suivi",
  },
  {
    number: "05",
    eyebrow: "Outils",
    title: "Connexion de vos logiciels",
    description:
      "Faites circuler l'information entre les outils que votre entreprise utilise déjà.",
    items: [
      "CRM",
      "Messagerie",
      "Formulaires",
      "Calendriers",
      "Bases de données et outils internes",
    ],
    example:
      "Outil A → Kirevo → Traitement → Outil B",
  },
  {
    number: "06",
    eyebrow: "Pilotage",
    title: "Suivi de vos automatisations",
    description:
      "Gardez une vision claire des processus automatisés et des actions réellement exécutées.",
    items: [
      "Historique des traitements",
      "Suivi des statuts",
      "Centralisation des informations",
      "Détection des erreurs",
      "Indicateurs adaptés au processus",
    ],
    example:
      "Automatisation → Données → Suivi → Amélioration",
  },
];

const steps = [
  {
    number: "01",
    title: "Une information arrive",
    text: "Un formulaire, un e-mail, une nouvelle ligne dans votre CRM ou un événement dans un outil déclenche le processus.",
  },
  {
    number: "02",
    title: "Kirevo l'analyse",
    text: "Les informations utiles sont extraites, structurées et, lorsque cela est pertinent, analysées grâce à l'intelligence artificielle.",
  },
  {
    number: "03",
    title: "Vos règles sont appliquées",
    text: "Le système suit la logique définie avec votre entreprise : catégories, priorités, affectations et conditions.",
  },
  {
    number: "04",
    title: "L'action est exécutée",
    text: "Une fiche est créée, un document préparé, une notification envoyée ou une autre étape de votre workflow est déclenchée.",
  },
  {
    number: "05",
    title: "Votre équipe garde le contrôle",
    text: "Les étapes sensibles peuvent rester soumises à validation humaine. L'objectif est d'automatiser le répétitif, pas de supprimer le contrôle.",
  },
];

export default function FonctionnalitesPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#111111]">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-24 sm:pt-28 lg:pb-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[430px] w-[700px] -translate-x-1/2 rounded-full bg-[#6D6FF5]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5B5CF0]/15 bg-white px-5 py-2 text-sm font-medium text-[#5B5CF0] shadow-sm">
            <span>✦</span>
            Fonctionnalités Kirevo
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] text-[#111111] sm:text-6xl lg:text-[78px]">
            Automatisez le répétitif.
            <span className="mt-2 block bg-gradient-to-r from-[#5B5CF0] via-[#6768F6] to-[#8B78FF] bg-clip-text text-transparent">
              Gardez le contrôle.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#667085] sm:text-xl">
            Kirevo connecte vos outils, structure vos informations et automatise
            les étapes répétitives de vos processus pour permettre à votre
            équipe de se concentrer sur les tâches à forte valeur.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="w-full rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7475FF] px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(91,92,240,0.25)] transition hover:-translate-y-1 sm:w-auto"
            >
              Demander une démo
            </Link>

            <a
              href="#fonctionnalites"
              className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-8 py-4 font-semibold text-[#111111] shadow-sm transition hover:border-[#C7D2FE] hover:bg-[#FAFAFF] sm:w-auto"
            >
              Explorer les fonctionnalités
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-[#E7E9F0] bg-white px-8 py-10 shadow-[0_15px_50px_rgba(15,23,42,0.05)] sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
                Une approche sur mesure
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                Kirevo ne remplace pas vos outils.
                <br />
                Il les fait mieux travailler ensemble.
              </h2>
            </div>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#667085] lg:mt-0">
              Chaque automatisation part de votre processus réel. Nous
              identifions ce qui peut être simplifié, connectons les outils
              nécessaires et conservons une validation humaine lorsque votre
              activité l&apos;exige.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="fonctionnalites" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
              Automatisations
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] text-[#111111] sm:text-5xl">
              Des automatisations qui répondent à des besoins concrets.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              Pas de fonctionnalités ajoutées pour faire joli. Chaque workflow
              doit supprimer une tâche répétitive, réduire les ressaisies ou
              améliorer le suivi d&apos;un processus existant.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-[30px] border border-[#E4E7EF] bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#C7C8FF] hover:shadow-[0_24px_60px_rgba(91,92,240,0.10)] sm:p-10"
              >
                <div className="absolute right-6 top-4 text-[80px] font-bold tracking-[-0.08em] text-[#F1F2F7] transition group-hover:text-[#EEEEFF]">
                  {feature.number}
                </div>

                <div className="relative">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F0FF] text-lg font-bold text-[#5B5CF0]">
                    ✦
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
                    {feature.eyebrow}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#111111]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-[#667085]">
                    {feature.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {feature.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-[15px] text-[#334155]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF] text-[11px] font-bold text-[#5B5CF0]">
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-[#ECEEF4] bg-[#F8F9FC] px-5 py-4">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                      Exemple de workflow
                    </div>

                    <div className="text-sm font-medium text-[#334155]">
                      {feature.example}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#111827] px-8 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9293FF]">
                Comment ça fonctionne
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                Un processus simple.
                <span className="block text-[#9293FF]">
                  Une automatisation utile.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-[#AAB3C4]">
                L&apos;intelligence artificielle intervient uniquement là où
                elle apporte réellement de la valeur. Le reste repose sur des
                règles et des workflows clairs.
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

      {/* HUMAN CONTROL */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-[#E4E7EF] bg-white p-9 shadow-[0_15px_45px_rgba(15,23,42,0.045)] sm:p-11">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FF] text-xl text-[#5B5CF0]">
              ✓
            </div>

            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5B5CF0]">
              Contrôle humain
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em]">
              Automatisez sans perdre le contrôle.
            </h2>

            <p className="mt-5 leading-7 text-[#667085]">
              Certaines opérations peuvent être entièrement automatisées.
              D&apos;autres nécessitent une validation. Kirevo adapte le niveau
              d&apos;automatisation au risque et aux règles de votre entreprise.
            </p>

            <div className="mt-8 space-y-3 text-sm text-[#334155]">
              <p>✓ Validation avant envoi d&apos;un document important</p>
              <p>✓ Contrôle humain avant certaines réponses</p>
              <p>✓ Journal des actions exécutées</p>
              <p>✓ Possibilité d&apos;intervenir dans le processus</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#5B5CF0] to-[#7C5CFC] p-9 text-white shadow-[0_25px_70px_rgba(91,92,240,0.22)] sm:p-11">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border-[45px] border-white/[0.06]" />

            <div className="relative">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
                ↗
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Évolutif
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em]">
                Commencez par un processus. Étendez ensuite.
              </h2>

              <p className="mt-5 leading-7 text-white/75">
                Inutile de transformer toute l&apos;entreprise en une fois.
                Kirevo peut commencer par une tâche clairement identifiée puis
                connecter progressivement d&apos;autres processus.
              </p>

              <div className="mt-9 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="text-sm text-white/65">
                  Exemple de progression
                </div>
                <div className="mt-2 font-medium">
                  Qualification → CRM → Relances → Documents → Rapports
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
              Cas d&apos;usage
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-[#111111] sm:text-5xl">
              Un même principe, adapté à votre activité.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                sector: "Immobilier",
                text: "Qualification des demandes, suivi des prospects, dossiers et relances.",
                href: "/solutions/immobilier",
              },
              {
                sector: "Agences marketing",
                text: "Demandes clients, comptes rendus, rapports et propositions commerciales.",
                href: "/solutions/agences-marketing",
              },
              {
                sector: "Cabinets comptables",
                text: "Collecte de documents, rappels et préparation administrative.",
                href: "/solutions/cabinets-comptables",
              },
              {
                sector: "E-commerce",
                text: "Qualification des demandes, SAV, suivi et opérations répétitives.",
                href: "/solutions/e-commerce",
              },
            ].map((item) => (
              <Link
                key={item.sector}
                href={item.href}
                className="group rounded-[26px] border border-[#E4E7EF] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C7C8FF] hover:shadow-[0_20px_45px_rgba(91,92,240,0.08)]"
              >
                <div className="mb-10 text-[#5B5CF0]">✦</div>

                <h3 className="text-xl font-bold">{item.sector}</h3>

                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  {item.text}
                </p>

                <div className="mt-7 text-sm font-semibold text-[#5B5CF0]">
                  Découvrir{" "}
                  <span className="inline-block transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 pt-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[38px] border border-[#DFE1FF] bg-gradient-to-br from-[#F1F1FF] via-white to-[#F5F1FF] px-8 py-16 text-center shadow-[0_20px_65px_rgba(91,92,240,0.10)] sm:px-12 lg:py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            Votre processus
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-[#111111] sm:text-5xl">
            Quelle tâche répétitive aimeriez-vous ne plus avoir à gérer ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
            Présentez-nous votre fonctionnement actuel. Nous identifierons
            ensemble les étapes qui peuvent réellement être automatisées.
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
