import type { MetadataRoute } from "next";

const staticRoutes = [
  "",
  "/fonctionnalites",
  "/solutions",
  "/comment-ca-marche",
  "/cas-clients",
  "/tarifs",
  "/about",
  "/contact",
  "/demo",
  "/demo-interactive",
  "/mentions-legales",
  "/confidentialite",
];

const solutionRoutes = [
  "/solutions/immobilier",
  "/solutions/agences-marketing",
  "/solutions/cabinets-comptables",
  "/solutions/e-commerce",
  "/solutions/services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...staticRoutes, ...solutionRoutes].map((route) => ({
    url: `https://www.kirevo.fr${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/demo" ? 0.9 : 0.7,
  }));
}
