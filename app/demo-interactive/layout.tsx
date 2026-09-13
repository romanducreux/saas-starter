import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démo interactive",
  description:
    "Testez une démonstration interactive de Kirevo et visualisez le traitement automatisé d'un prospect.",
};

export default function DemoInteractiveLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
