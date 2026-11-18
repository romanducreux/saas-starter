import type { Metadata } from "next";
import AppShell from "@/components/workspace/AppShell";

export const metadata: Metadata = {
  title: {
    default: "Espace de travail",
    template: "%s | Espace Kirevo",
  },
  robots: { index: false, follow: false },
};

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
