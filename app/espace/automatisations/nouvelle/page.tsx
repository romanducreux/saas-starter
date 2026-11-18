import Link from "next/link";
import Icon from "@/components/workspace/Icon";
import WorkflowBuilder from "@/components/workspace/WorkflowBuilder";

export const metadata = {
  title: "Configurateur de solution",
};

export default function NewAutomationPage() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#8A94A6]">
        <Link href="/espace/automatisations" className="font-medium transition hover:text-[#5B5CF0]">Automatisations</Link>
        <Icon name="arrow" className="h-4 w-4" />
        <span className="font-medium text-[#344054]">Configurateur 3D</span>
      </div>
      <WorkflowBuilder />
    </div>
  );
}
