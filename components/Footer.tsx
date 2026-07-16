export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h3 className="text-2xl font-bold text-[#111827]">
              Kirevo
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B7280]">
              Automatisez les tâches répétitives de votre entreprise grâce à
              l'intelligence artificielle.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Navigation</h4>

            <div className="mt-4 flex flex-col gap-3 text-[#6B7280]">
              <a href="/">Accueil</a>
              <a href="/tarifs">Tarifs</a>
              <a href="/cas-clients">Cas clients</a>
              <a href="/demo">Démo</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Entreprise</h4>

            <div className="mt-4 flex flex-col gap-3 text-[#6B7280]">
              <a href="/contact">Contact</a>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/confidentialite">Confidentialité</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Prendre rendez-vous</h4>

            <div className="mt-4 flex flex-col gap-3 text-[#6B7280]">
              <a href="mailto:contact@kirevo.fr">
                contact@kirevo.fr
              </a>

              <a
                href="https://calendly.com/roman-ducreux/decouverte-kirevo"
                target="_blank"
              >
                Réserver un appel
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-[#E5E7EB] pt-8 text-sm text-[#9CA3AF]">
          © 2026 Kirevo. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}