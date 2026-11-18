import Link from "next/link";
import WorkflowBuilder from "@/components/workspace/WorkflowBuilder";
import { getWorkspaceData } from "@/lib/workspace/data";

export const metadata = {
  title: "Configurateur de solution",
};

export default async function NewAutomationPage() {
  const workspace = await getWorkspaceData();

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#8A94A6]">
        <Link href="/espace/automatisations" className="font-medium transition hover:text-[#5B5CF0]">Automatisations</Link>
        <span aria-hidden="true" className="text-[#C5C9D3]">/</span>
        <span className="font-medium text-[#344054]">Configurateur 3D</span>
      </div>
      <WorkflowBuilder live={workspace.mode === "live"} />
    </div>
  );
}
