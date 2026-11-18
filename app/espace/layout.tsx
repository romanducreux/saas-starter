import type { Metadata } from "next";
import AppShell from "@/components/workspace/AppShell";
import { getWorkspaceData } from "@/lib/workspace/data";

export const metadata: Metadata = {
  title: {
    default: "Espace de travail",
    template: "%s | Espace Kirevo",
  },
  robots: { index: false, follow: false },
};

export default async function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  const workspace = await getWorkspaceData();

  return (
    <AppShell
      mode={workspace.mode}
      identity={{
        name: workspace.user.name,
        email: workspace.user.email,
        initials: workspace.user.initials,
        organizationName: workspace.organization.name,
      }}
    >
      {children}
    </AppShell>
  );
}
