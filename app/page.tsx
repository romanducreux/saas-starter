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
  ["“Kirevo nous ferait gagner un temps énorme sur les tâches répétitives.”", "Dirigeant d’agence marketing"],
  ["“Le positionnement est clair : moins d’administratif, plus de croissance.”", "Fondateur SaaS"],
  ["“C’est exactement le type d’outil que les PME vont chercher avec l’IA.”", "Consultant automatisation"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-[#111827]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,92,240,0.20),transparent_35%)]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
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
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#6B7280] md:flex">
          <a href="#fonctionnalites" className="hover:text-[#111827]">Fonctionnalités</a>
          <a href="#avis" className="hover:text-[#111827]">Avis</a>
          <a href="#tarifs" className="hover:text-[#111827]">Tarifs</a>
          <a href="#contact" className="hover:text-[#111827]">Contact</a>
        </div>

        <button className="hidden rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 md:block">
          Demander une démo
        </button>
      </nav>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-8 pt-20 text-center">
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

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-[#111827] px-8 py-4 font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-1">
            Demander une démonstration
          </button>

          <button className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-4 font-semibold text-[#111827] shadow-sm transition hover:-translate-y-1">
            Découvrir la plateforme
          </button>
        </div>

        <div className="relative mt-24 w-full max-w-6xl animate-rise">
          <div className="absolute -left-6 top-10 hidden animate-float rounded-3xl border border-[#E5E7EB] bg-white/90 p-6 text-left shadow-2xl shadow-[#5B5CF0]/10 backdrop-blur md:block">
            <p className="text-sm text-[#6B7280]">Temps économisé</p>
            <p className="mt-2 text-4xl font-bold">18h+</p>
            <p className="text-sm text-[#6B7280]">par semaine</p>
          </div>

          <div className="absolute -right-6 top-36 hidden animate-float-delay rounded-3xl border border-[#E5E7EB] bg-white/90 p-6 text-left shadow-2xl shadow-[#5B5CF0]/10 backdrop-blur md:block">
            <p className="text-sm text-[#6B7280]">Automatisations actives</p>
            <p className="mt-2 text-4xl font-bold">128</p>
            <p className="text-sm text-emerald-500">+24%</p>
          </div>

          <div className="rounded-[2.5rem] border border-[#E5E7EB] bg-white/90 p-8 text-left shadow-2xl shadow-[#5B5CF0]/10 backdrop-blur">
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

        <section id="fonctionnalites" className="mt-28 grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {features.map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0FF] text-[#5B5CF0]">
                ✦
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-[#6B7280]">{text}</p>
            </div>
          ))}
        </section>

        <section id="avis" className="mt-28 w-full max-w-6xl text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">Avis</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Pensé pour les entreprises qui veulent aller plus vite.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map(([quote, role]) => (
              <div key={quote} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm">
                <p className="text-lg font-medium leading-8">{quote}</p>
                <p className="mt-6 text-sm text-[#6B7280]">{role}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tarifs" className="mt-28 w-full max-w-6xl pb-28 text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">Tarifs</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Des offres simples pour commencer.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map(([name, price, desc, items]) => (
              <div key={name} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-4 text-5xl font-bold">{price}</p>
                <p className="mt-4 text-[#6B7280]">{desc}</p>

                <div className="mt-8 space-y-3 text-sm text-[#374151]">
                  {(items as string[]).map((item) => (
                    <p key={item}>✓ {item}</p>
                  ))}
                </div>

                <button className="mt-8 w-full rounded-2xl bg-[#111827] px-6 py-4 font-semibold text-white">
                  Choisir cette offre
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}