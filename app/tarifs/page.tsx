const plans = [
  {
    name: "Starter",
    price: "49€",
    desc: "Pour tester l’automatisation IA.",
    features: ["5 workflows", "Support email", "Dashboard simple", "1 utilisateur"],
  },
  {
    name: "Pro",
    price: "149€",
    desc: "Pour les PME qui veulent gagner du temps.",
    features: ["Workflows illimités", "Intégrations CRM", "Support prioritaire", "5 utilisateurs"],
    popular: true,
  },
  {
    name: "Business",
    price: "Sur devis",
    desc: "Pour les besoins avancés.",
    features: ["Automatisations sur mesure", "Onboarding dédié", "Accompagnement stratégique", "Équipe complète"],
  },
];

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-8 py-10 text-[#111827]">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-medium text-[#5B5CF0]">
          ← Retour à l’accueil
        </a>

        <section className="mt-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
            Tarifs
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Des offres simples pour automatiser votre entreprise.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B7280]">
            Commencez petit, puis ajoutez des automatisations à mesure que vos besoins grandissent.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-[#5B5CF0] shadow-[#5B5CF0]/20"
                  : "border-[#E5E7EB]"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-[#EEF0FF] px-4 py-2 text-xs font-semibold text-[#5B5CF0]">
                  Recommandé
                </span>
              )}

              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-5 text-5xl font-bold">{plan.price}</p>
              <p className="mt-4 text-[#6B7280]">{plan.desc}</p>

              <div className="mt-8 space-y-3 text-sm text-[#374151]">
                {plan.features.map((feature) => (
                  <p key={feature}>✓ {feature}</p>
                ))}
              </div>

              <a
                href="/demo"
                className={`mt-8 block rounded-2xl px-6 py-4 text-center font-semibold transition hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] text-white shadow-xl shadow-[#5B5CF0]/25"
                    : "bg-[#111827] text-white"
                }`}
              >
                Demander une démo
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}