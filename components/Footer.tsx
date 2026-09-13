import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const productLinks = [
  ["Fonctionnalités", "/fonctionnalites"],
  ["Solutions", "/solutions"],
  ["Tarifs", "/tarifs"],
  ["Démo interactive", "/demo-interactive"],
];

const resourceLinks = [
  ["Comment ça marche", "/comment-ca-marche"],
  ["Cas clients", "/cas-clients"],
  ["À propos", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E1E4EA] bg-white px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            aria-label="Kirevo — Accueil"
            className="inline-flex items-center rounded-xl"
          >
            <BrandLogo variant="footer" />
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#667085]">
            Kirevo aide les entreprises à automatiser leurs tâches
            commerciales, administratives et opérationnelles grâce à
            l&apos;intelligence artificielle.
          </p>

          <a
            href="mailto:contact@kirevo.fr"
            className="mt-5 inline-block rounded-md text-sm font-medium text-[#5B5CF0] hover:text-[#4546D9]"
          >
            contact@kirevo.fr
          </a>
        </div>

        <nav aria-label="Liens produit">
          <p className="mb-4 text-sm font-semibold text-[#111111]">Produit</p>
          <div className="space-y-3 text-sm text-[#667085]">
            {productLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block rounded-md hover:text-[#111111]"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Liens ressources">
          <p className="mb-4 text-sm font-semibold text-[#111111]">
            Ressources
          </p>
          <div className="space-y-3 text-sm text-[#667085]">
            {resourceLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block rounded-md hover:text-[#111111]"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Liens légaux et rendez-vous">
          <p className="mb-4 text-sm font-semibold text-[#111111]">Légal</p>
          <div className="space-y-3 text-sm text-[#667085]">
            <Link
              className="block rounded-md hover:text-[#111111]"
              href="/mentions-legales"
            >
              Mentions légales
            </Link>
            <Link
              className="block rounded-md hover:text-[#111111]"
              href="/confidentialite"
            >
              Confidentialité
            </Link>
            <a
              href="https://calendly.com/roman-ducreux/decouverte-kirevo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md font-semibold text-[#5B5CF0] hover:text-[#4546D9]"
            >
              Réserver un appel
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#EEF0F3] pt-8 text-xs text-[#8A94A6] sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Kirevo. Tous droits réservés.</span>
        <span>Automatisation IA pour les entreprises.</span>
      </div>
    </footer>
  );
}
