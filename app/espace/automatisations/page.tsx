import Link from "next/link";
import Icon, { type IconName } from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";
import { formatRelativeDate, getWorkspaceData } from "@/lib/workspace/data";

const numberFormatter = new Intl.NumberFormat("fr-FR");
const templates = [
  { title: "Collecter des inscriptions", description: "Enregistrez un formulaire et confirmez automatiquement la demande.", icon: "form" as IconName },
  { title: "Relancer au bon moment", description: "Déclenchez un e-mail selon une date et des conditions précises.", icon: "refresh" as IconName },
  { title: "Qualifier avec l’IA", description: "Analysez une demande puis prévenez la bonne personne.", icon: "sparkles" as IconName },
];

export default async function AutomationsPage() {
  const workspace = await getWorkspaceData();
  const active = workspace.automations.filter((automation) => automation.status === "active").length;
  const drafts = workspace.automations.filter((automation) => automation.status === "draft").length;

  return (
    <div className="space-y-8">
      <PageHeader title="Automatisations" description="Consultez, composez et suivez vos parcours depuis un seul endroit." action={{ href: "/espace/automatisations/nouvelle", label: "Composer une solution" }} />

      <section className="rounded-[28px] border border-[#E1E4EA] bg-white p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-1 overflow-x-auto rounded-2xl bg-[#F7F8FA] p-1" aria-label="Résumé des automatisations">
            {[`Toutes ${workspace.automations.length}`, `Actives ${active}`, `Brouillons ${drafts}`].map((label, index) => <span key={label} className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ${index === 0 ? 'bg-white text-[#111111] shadow-sm' : 'text-[#667085]'}`}>{label}</span>)}
          </div>
          <label className="flex min-h-10 items-center gap-2 rounded-2xl border border-[#E1E4EA] bg-white px-3.5 text-sm text-[#98A2B3] sm:w-64"><span className="sr-only">Rechercher une automatisation</span><Icon name="search" className="h-4 w-4" /><input type="search" placeholder="Rechercher" className="min-w-0 flex-1 border-0 bg-transparent py-2 outline-none" /></label>
        </div>

        {workspace.automations.length ? (
          <div className="mt-5 overflow-hidden rounded-[22px] border border-[#EEF0F3]">
            <div className="hidden grid-cols-[1.4fr_0.65fr_0.55fr_0.65fr] gap-4 bg-[#F9FAFB] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#98A2B3] md:grid"><span>Parcours</span><span>Statut</span><span>Exécutions</span><span>Dernière modification</span></div>
            {workspace.automations.map((automation) => (
              <div key={automation.id} className="grid gap-4 border-t border-[#EEF0F3] p-4 first:border-t-0 md:grid-cols-[1.4fr_0.65fr_0.55fr_0.65fr] md:items-center md:px-5">
                <div className="flex min-w-0 items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name="workflow" className="h-4 w-4" /></span><div className="min-w-0"><p className="truncate text-sm font-semibold">{automation.name}</p><p className="mt-1 truncate text-xs text-[#8A94A6]">{automation.description}</p></div></div>
                <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${automation.status === 'active' ? 'bg-[#ECFDF3] text-[#079455]' : automation.status === 'paused' ? 'bg-[#FFF4E8] text-[#B54708]' : 'bg-[#F2F4F7] text-[#667085]'}`}>{automation.status === 'active' ? 'Actif' : automation.status === 'paused' ? 'En pause' : 'Brouillon'}</span>
                <p className="text-sm font-semibold">{numberFormatter.format(automation.runs)}</p>
                <time className="text-sm text-[#667085]">{formatRelativeDate(automation.updatedAt)}</time>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-[24px] border border-dashed border-[#D7DAE2] bg-[#FAFAFC] p-8 text-center sm:p-12"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#5B5CF0] shadow-sm"><Icon name="workflow" className="h-6 w-6" /></span><h2 className="mt-5 text-lg font-semibold">Votre premier parcours commence ici</h2><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#667085]">Assemblez les briques utiles. Kirevo traduira ensuite cette composition en automatisation adaptée à vos outils.</p><Link href="/espace/automatisations/nouvelle" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2B2B2B]"><Icon name="plus" className="h-4 w-4" />Composer une solution</Link></div>
        )}
      </section>

      <section><div className="mb-4"><h2 className="text-lg font-semibold">Points de départ</h2><p className="mt-1 text-sm text-[#8A94A6]">Des exemples pour structurer rapidement votre besoin.</p></div><div className="grid gap-4 md:grid-cols-3">{templates.map((template) => <Link key={template.title} href="/espace/automatisations/nouvelle" className="group rounded-[24px] border border-[#E1E4EA] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#C9CBFF] hover:shadow-[0_14px_34px_rgba(17,24,39,0.07)]"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name={template.icon} className="h-5 w-5" /></span><h3 className="mt-4 text-sm font-semibold group-hover:text-[#5B5CF0]">{template.title}</h3><p className="mt-2 text-sm leading-6 text-[#667085]">{template.description}</p></Link>)}</div></section>
    </div>
  );
}
