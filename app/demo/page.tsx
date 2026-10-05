import Link from "next/link";

export const metadata = {
  title: "Demander une démo",
  description:
    "Demandez une démonstration personnalisée de Kirevo et identifiez les tâches répétitives que votre entreprise peut automatiser.",
};

const inputClassName =
  "w-full rounded-2xl border border-[#DDE1E8] bg-white px-5 py-4 outline-none transition focus:border-[#5B5CF0]";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] px-6 pb-24 pt-14 text-[#111111] sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-7 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B5CF0] to-[#8B5CF6] text-lg font-bold text-white">
              K
            </div>
            <span className="text-xl font-semibold">Kirevo</span>
          </div>

          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-[#A6A8FF]">
            Démonstration personnalisée
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
            Découvrez ce que Kirevo peut automatiser pour vous.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Présentez-nous vos processus. Nous identifierons avec vous les
            tâches répétitives qui méritent d&apos;être automatisées.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-white/80">
            {[
              "Analyse de vos tâches répétitives",
              "Proposition de workflows IA adaptés",
              "Démonstration personnalisée",
              "Échange sans engagement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span aria-hidden="true" className="text-emerald-300">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] border border-[#E1E4EA] bg-white p-7 shadow-xl sm:rounded-[2.5rem] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            Votre demande
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
            Parlons de votre entreprise.
          </h2>

          <form
            action="/api/leads"
            method="POST"
            className="mt-8 space-y-5"
            aria-describedby="privacy-help form-help"
          >
            <div>
              <label htmlFor="nom" className="mb-2 block text-sm font-semibold text-[#344054]">
                Nom complet
              </label>
              <input
                id="nom"
                name="nom"
                autoComplete="name"
                required
                className={inputClassName}
                placeholder="Marie Dupont"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#344054]">
                E-mail professionnel
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClassName}
                placeholder="marie@entreprise.fr"
              />
            </div>

            <div>
              <label htmlFor="entreprise" className="mb-2 block text-sm font-semibold text-[#344054]">
                Entreprise
              </label>
              <input
                id="entreprise"
                name="entreprise"
                autoComplete="organization"
                required
                className={inputClassName}
                placeholder="Nom de votre entreprise"
              />
            </div>

            <div>
              <label htmlFor="taille" className="mb-2 block text-sm font-semibold text-[#344054]">
                Taille de l&apos;équipe
              </label>
              <select id="taille" name="taille" className={inputClassName} defaultValue="">
                <option value="" disabled>
                  Sélectionnez une taille
                </option>
                <option>1 à 5 personnes</option>
                <option>6 à 20 personnes</option>
                <option>21 à 50 personnes</option>
                <option>Plus de 50 personnes</option>
              </select>
            </div>

            <div>
              <label htmlFor="besoin" className="mb-2 block text-sm font-semibold text-[#344054]">
                Tâche ou processus à automatiser
              </label>
              <textarea
                id="besoin"
                name="besoin"
                required
                className={`${inputClassName} min-h-36 resize-y`}
                placeholder="Décrivez brièvement le processus qui vous prend du temps."
              />
            </div>

            <p
              id="privacy-help"
              className="rounded-2xl bg-[#F7F8FA] px-4 py-3 text-xs leading-5 text-[#667085]"
            >
              Les informations envoyées sont utilisées uniquement pour traiter
              votre demande et vous recontacter. Consultez notre{" "}
              <Link
                href="/confidentialite"
                className="font-semibold text-[#5B5CF0] underline decoration-[#C7C8FF] underline-offset-2"
              >
                politique de confidentialité
              </Link>
              .
            </p>

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-4 font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition hover:-translate-y-0.5"
            >
              Envoyer la demande
            </button>

            <p id="form-help" className="text-center text-sm text-[#667085]">
              Réponse sous 24 à 48 heures. Aucun engagement.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
