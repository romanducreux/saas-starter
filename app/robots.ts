import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/espace/",
        "/connexion",
        "/creer-compte",
        "/mot-de-passe-oublie",
        "/reinitialiser-mot-de-passe",
        "/auth/",
      ],
    },
    sitemap: "https://www.kirevo.fr/sitemap.xml",
    host: "https://www.kirevo.fr",
  };
}
