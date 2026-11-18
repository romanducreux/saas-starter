import Icon from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";
import { formatRelativeDate, getWorkspaceData } from "@/lib/workspace/data";

export default async function ActivityPage() {
  const workspace = await getWorkspaceData();

  return (
    <div className="space-y-8">
      <PageHeader title="Activité" description="Suivez les actions réalisées par vos parcours et identifiez immédiatement les éléments à vérifier." />

      <section className="rounded-[28px] border border-[#E1E4EA] bg-white p-4 sm:p-6">
        <div className="flex flex-col gap-3 border-b border-[#EEF0F3] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-1 overflow-x-auto rounded-2xl bg-[#F7F8FA] p-1">{['Toute l’activité', 'Réussites', 'À vérifier'].map((label, index) => <span key={label} className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ${index === 0 ? 'bg-white text-[#111111] shadow-sm' : 'text-[#667085]'}`}>{label}</span>)}</div>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#98A2B3]"><span className="h-2 w-2 rounded-full bg-[#12B76A]" />Mise à jour à l’ouverture de la page</span>
        </div>

        {workspace.activities.length ? (
          <ol className="mt-2 divide-y divide-[#EEF0F3]">
            {workspace.activities.map((activity) => {
              const appearance = activity.status === "success" ? { icon: "check" as const, tone: "bg-[#ECFDF3] text-[#079455]", label: "Réussie" } : activity.status === "error" ? { icon: "close" as const, tone: "bg-[#FEF3F2] text-[#D92D20]", label: "Erreur" } : activity.status === "warning" ? { icon: "clock" as const, tone: "bg-[#FFF4E8] text-[#B54708]", label: "À vérifier" } : { icon: "activity" as const, tone: "bg-[#F0F0FF] text-[#5B5CF0]", label: "Information" };
              return (
                <li key={activity.id} className="grid gap-4 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${appearance.tone}`}><Icon name={appearance.icon} className="h-4 w-4" /></span>
                  <div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="text-sm font-semibold">{activity.title}</h2><span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${appearance.tone}`}>{appearance.label}</span></div><p className="mt-1 truncate text-sm text-[#667085]">{activity.description || "Action enregistrée dans votre espace."}</p></div>
                  <time className="text-xs font-medium text-[#98A2B3]">{formatRelativeDate(activity.createdAt)}</time>
                </li>
              );
            })}
          </ol>
        ) : (
          <div className="py-16 text-center"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name="activity" className="h-6 w-6" /></span><h2 className="mt-5 text-lg font-semibold">Aucune activité pour le moment</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#667085]">Les confirmations, synchronisations, relances et éventuels points à vérifier apparaîtront ici.</p></div>
        )}
      </section>
    </div>
  );
}
