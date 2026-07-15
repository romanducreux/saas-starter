import Image from "next/image";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-8 py-10 text-[#111827]">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="inline-flex items-center text-sm font-medium text-[#5B5CF0]">
          ← Retour à l’accueil
        </a>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <section className="rounded-[2.5rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-10 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Image
                  src="/kirevo-transparent.png"
                  alt="Kirevo"
                  width={46}
                  height={46}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <span className="text-xl font-semibold">Kirevo</span>
            </div>

            <h1 className="mt-14 text-5xl font-bold tracking-tight">
              Découvrez ce que Kirevo peut automatiser pour vous.
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Remplissez le formulaire. Nous vous recontacterons pour comprendre vos processus et identifier les tâches répétitives à automatiser.
            </p>

            <div className="mt-10 space-y-5 text-sm text-white/80">
              <p>✓ Analyse de vos tâches répétitives</p>
              <p>✓ Proposition de workflows IA adaptés</p>
              <p>✓ Démonstration personnalisée</p>
              <p>✓ Sans engagement</p>
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-[#E5E7EB] bg-white p-10 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
              Demande de démonstration
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Parlons de votre entreprise.
            </h2>

            <form
              action="/api/leads"
              method="POST"
              className="mt-8 space-y-5"    
            >
              <input
                name="nom"
                required
                className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Nom complet"
              />

              <input
                name="email"
                type="email"
                required
                className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Email professionnel"
              />

              <input
                name="entreprise"
                required
                className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Entreprise"
              />

              <select
                name="taille"
                className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
              >
                <option value="">Taille de l’entreprise</option>
                <option>1-5 personnes</option>
                <option>6-20 personnes</option>
                <option>21-50 personnes</option>
                <option>50+ personnes</option>
              </select>

              <textarea
                name="besoin"
                required
                className="min-h-36 w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Qu’aimeriez-vous automatiser ?"
              />

              <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-4 font-semibold text-white shadow-xl shadow-[#5B5CF0]/25 transition hover:scale-105">
                Envoyer la demande
              </button>

              <p className="text-center text-sm text-[#6B7280]">
                Réponse sous 24 à 48h.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}