import Image from "next/image";

const features = [
  ["Gagnez du temps", "Automatisez les tâches répétitives et libérez vos équipes."],
  ["Réduisez vos coûts", "Moins d’erreurs, moins de ressaisie, plus d’efficacité."],
  ["Passez à l’échelle", "Des workflows IA prêts pour accompagner votre croissance."],
];

const plans = [
  ["Starter", "49€", "Pour tester l’automatisation IA", ["5 workflows", "Support email", "Dashboard simple"]],
  ["Pro", "149€", "Pour les PME qui veulent gagner du temps", ["Workflows illimités", "Intégrations CRM", "Support prioritaire"]],
  ["Business", "Sur devis", "Pour les équipes avec besoins avancés", ["Automatisations sur mesure", "Onboarding dédié", "Accompagnement stratégique"]],
];

const testimonials = [
  ["“Nous échangeons actuellement avec des dirigeants français pour construire un outil réellement utile.”", "Bêta privée"],
  ["“Kirevo est pensé pour automatiser les tâches répétitives avant d’ajouter des fonctionnalités complexes.”", "Approche produit"],
  ["“Notre objectif : aider les PME à gagner du temps sans recruter immédiatement.”", "Vision Kirevo"],
];

const useCases = [
  ["Agences marketing", "Relances clients, comptes-rendus, reporting et propositions commerciales."],
  ["Cabinets comptables", "Collecte de documents, rappels clients et préparation administrative."],
  ["E-commerce", "Réponses SAV, suivi commandes, relances et qualification des demandes."],
  ["Immobilier", "Qualification prospects, réponses automatiques et préparation des visites."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-[#111827]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,92,240,0.20),transparent_35%)]" />

        <nav className="fixed top-6 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-3xl border border-white/30 bg-white/70 px-8 py-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
              <img src="/kirevo-transparent.png" alt="Kirevo" className="h-12 w-12" />

              <h1 className="text-2xl font-bold text-slate-900">
                Kirevo
              </h1>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="/fonctionnalites">Fonctionnalités</a>
              <a href="/solutions">Solutions</a>
              <a href="/cas-clients" className="transition hover:text-[#111827]">Cas clients</a>
              <a href="/about">À propos</a>
              <a href="/tarifs">Tarifs</a>
            </div>

          <a
            href="/demo"
            className="rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#7C3AED] px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105 whitespace-nowrap"
          >
            Demander une démo
          </a>

          </div>

        </nav>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-8 pt-40 text-center">
        <div className="mb-6 rounded-full border border-[#E5E7EB] bg-white/80 px-5 py-2 text-sm font-medium text-[#5B5CF0] shadow-sm backdrop-blur">
          ✦ Plateforme d’automatisation par IA
        </div>

        <h1 className="max-w-6xl text-6xl font-bold tracking-[-0.06em] md:text-8xl">
          Automatisez.
          <br />
          Gagnez du temps.
          <br />
          <span className="bg-gradient-to-r from-[#5B5CF0] to-[#8B8DFF] bg-clip-text text-transparent">
            Développez votre entreprise.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280] md:text-xl">
          Kirevo automatise les tâches répétitives de votre entreprise grâce à
          l’intelligence artificielle. Moins d’administratif, plus de croissance.
        </p>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
          <a
            href="/demo"
            className="rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-[#5B5CF0]/25 transition duration-300 hover:scale-105 hover:shadow-[#5B5CF0]/40"
          >
            Demander une démonstration
          </a>

          <a
            href="#fonctionnalites"
            className="rounded-2xl border border-[#E5E7EB] bg-white px-10 py-5 text-lg font-semibold text-[#111827] shadow-md transition duration-300 hover:scale-105 hover:border-[#5B5CF0] hover:text-[#5B5CF0]"
          >
            Découvrir la plateforme
          </a>
        </div>

        <div className="relative mt-24 w-full max-w-6xl animate-rise">

          <div className="hero-card rounded-[2.5rem] border border-[#E5E7EB] bg-white/90 p-8 text-left shadow-2xl shadow-[#5B5CF0]/10 backdrop-blur">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Tableau de bord</h2>
                <p className="text-sm text-[#6B7280]">Vue d’ensemble de votre activité</p>
              </div>

              <span className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm text-[#6B7280]">
                7 derniers jours
              </span>
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
                  className="rounded-3xl border border-[#E5E7EB] bg-[#F8F9FB] p-5 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <p className="text-sm text-[#6B7280]">{label}</p>
                  <p className="mt-3 text-3xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-emerald-500">{growth}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6">
                <h3 className="font-semibold">Automatisations récentes</h3>
                <div className="mt-5 space-y-4 text-sm">
                  {[
                    "Réponse automatique aux emails clients",
                    "Création de devis après formulaire",
                    "Relance des paiements en attente",
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-[#F8F9FB] px-4 py-4">
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
                  <p>● Email reçu de Dupont SARL</p>
                  <p>● Analyse par l’IA</p>
                  <p>● Devis généré</p>
                  <p className="text-emerald-400">● Devis envoyé au client</p>
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

          <p className="mt-4 max-w-2xl text-lg text-[#6B7280]">
            Kirevo automatise les tâches répétitives et permet à votre équipe de se concentrer sur l'essentiel.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map(([title, text]) => (
              <div key={title} className="card-glow rounded-[2rem] border border-[#E5E7EB] bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FF] text-[#5B5CF0]">
                  ✦
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-[#6B7280]">{text}</p>
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
                ["01", "Analyse", "Nous identifions les tâches qui ralentissent votre équipe : emails, devis, relances ou reporting."],
                ["02", "Construction", "Kirevo transforme vos processus en workflows IA simples, fiables et mesurables."],
                ["03", "Automatisation", "Vos tâches répétitives sont exécutées automatiquement, avec un suivi clair dans le dashboard."],
              ].map(([number, title, text]) => (
                <div key={number} className="relative grid gap-6 md:grid-cols-[80px_1fr]">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-sm font-bold text-white shadow-xl shadow-[#5B5CF0]/20">
                    {number}
                  </div>

                  <div className="rounded-[2rem] border border-[#E5E7EB] bg-white/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="mt-3 max-w-2xl text-[#6B7280]">{text}</p>
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
                className="card-glow rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-[#6B7280]">{text}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="avis" className="mt-28 w-full max-w-6xl scroll-mt-32 text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">Avis</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Pensé pour les entreprises qui veulent aller plus vite.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map(([quote, role]) => (
              <div key={quote} className="card-glow rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
                <p className="text-lg font-medium leading-8">{quote}</p>
                <p className="mt-6 text-sm text-[#6B7280]">{role}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tarifs" className="mt-28 w-full max-w-6xl scroll-mt-32 text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">Tarifs</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Des offres simples pour commencer.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map(([name, price, desc, items]) => (
              <div key={String(name)} className="card-glow rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-4 text-5xl font-bold">{price}</p>
                <p className="mt-4 text-[#6B7280]">{desc}</p>

                <div className="mt-8 space-y-3 text-sm text-[#374151]">
                  {(items as string[]).map((item) => (
                    <p key={String(item)}>✓ {item}</p>
                  ))}
                </div>

                <a
                  href="/tarifs"
                  className="mt-8 block w-full rounded-2xl bg-[#111827] px-6 py-4 text-center font-semibold text-white transition hover:-translate-y-1"
                >
                  Choisir cette offre
                </a>
              </div>
            ))}
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
                "Kirevo peut s’intégrer à vos emails, CRM, outils internes, formulaires et plateformes métier."
              ],
              [
                "Faut-il des compétences techniques ?",
                "Non. Notre objectif est justement de rendre l’automatisation accessible à toutes les entreprises."
              ],
              [
                "Combien coûte Kirevo ?",
                "Nos offres s’adaptent à la taille de votre entreprise et à vos besoins."
              ],
            ].map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition duration-500 hover:shadow-xl"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-semibold">
                    {question}

                    <span className="text-2xl text-[#5B5CF0] transition-transform duration-500 ease-out group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-6 max-w-4xl leading-8 text-[#6B7280] transition-all duration-500 ease-out">
                    {answer}
                  </p>
                </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-28 w-full max-w-6xl scroll-mt-32 pb-32 text-left">
          <div className="rounded-[2.5rem] border border-[#E5E7EB] bg-gradient-to-br from-[#111827] to-[#252B3A] p-10 text-white shadow-2xl">
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
              <a
                href="/demo"
                className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-[#111827] transition hover:scale-105"
              >
                Demander une démo
              </a>

              <a
                href="mailto:roman.ducreux@gmail.com"
                className="rounded-2xl border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </section>
      </section>

      <footer className="w-full border-t border-[#E5E7EB] bg-white/70 px-8 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:items-start">
          <div>
            <p className="text-lg font-semibold text-[#111827]">Kirevo</p>
            <p className="mt-2 text-sm text-[#6B7280]">
              Automatisation IA pour les entreprises modernes.
            </p>
          </div>

        <div className="flex flex-col gap-3 text-sm text-[#6B7280] md:items-center">
          <a href="#fonctionnalites" className="hover:text-[#111827]">Fonctionnalités</a>
          <a href="#comment-ca-marche" className="hover:text-[#111827]">Comment ça marche</a>
          <a href="#cas-usage" className="hover:text-[#111827]">Cas d’usage</a>
          <a href="/about" className="hover:text-[#111827]">À propos</a>
          <a href="/tarifs" className="hover:text-[#111827]">Tarifs</a>
          <a href="/comment-ca-marche" className="hover:text-[#111827]">Comment ça marche</a>
          <a href="/solutions" className="hover:text-[#111827]">Solutions</a>
          <a href="/demo" className="hover:text-[#111827]">Démo</a>
          <a href="#faq" className="hover:text-[#111827]">FAQ</a>
          <a href="/demo-interactive" className="hover:text-[#111827]">Démo interactive</a>
          <a href="/contact" className="transition hover:text-[#111827]">Contact</a>
          <a href="/mentions-legales" className="transition hover:text-[#111827]">Mentions légales</a>
          <a href="/confidentialite" className="transition hover:text-[#111827]">Confidentialité</a>
        </div>

          <p className="text-sm text-[#9CA3AF] md:text-right">
            © 2026 Kirevo. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
    
    
  );
}