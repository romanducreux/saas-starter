import Icon from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";
import { formatDuration, getWorkspaceData } from "@/lib/workspace/data";

const numberFormatter = new Intl.NumberFormat("fr-FR");

export default async function PerformancePage() {
  const workspace = await getWorkspaceData();
  const { metrics } = workspace;
  const maxValue = Math.max(...workspace.dailyExecutions.map((item) => item.count), 1);
  const successful = metrics.successRate === null ? 0 : Math.round(metrics.executions * metrics.successRate / 100);

  return (
    <div className="space-y-8">
      <PageHeader title="Performances" description="Mesurez l’impact réel de vos automatisations et repérez rapidement les points qui méritent votre attention." />

      <div className="flex flex-col gap-3 rounded-[22px] border border-[#E1E4EA] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-sm font-semibold text-[#344054]">Période analysée</p><p className="mt-1 text-sm text-[#667085]">Les indicateurs couvrent les trente derniers jours.</p></div>
        <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#E1E4EA] bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#475467]"><Icon name="calendar" className="h-4 w-4" /> 30 derniers jours</span>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Temps total gagné', value: formatDuration(metrics.savedSeconds), detail: metrics.savedSeconds ? `≈ ${(metrics.savedSeconds / 25200).toFixed(1).replace('.', ',')} journées de travail` : 'Les gains apparaîtront après les premières exécutions', icon: 'clock' as const },
          { label: 'Actions exécutées', value: numberFormatter.format(metrics.executions), detail: metrics.executionsChange === null ? 'Pas encore de période comparable' : `${metrics.executionsChange >= 0 ? '+' : ''}${Math.round(metrics.executionsChange)} % par rapport à la période précédente`, icon: 'bolt' as const },
          { label: 'Fiabilité globale', value: metrics.successRate === null ? '—' : `${metrics.successRate.toFixed(1).replace('.', ',')} %`, detail: `${metrics.warnings} action${metrics.warnings > 1 ? 's' : ''} à vérifier`, icon: 'check' as const },
        ].map((item) => (
          <article key={item.label} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3 text-sm font-medium text-[#667085]"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name={item.icon} className="h-4 w-4" /></span>{item.label}</div>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em]">{item.value}</p><p className="mt-2 text-xs text-[#98A2B3]">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><h2 className="text-lg font-semibold">Exécutions quotidiennes</h2><p className="mt-1 text-sm text-[#8A94A6]">Volume d’actions réalisées automatiquement</p></div><div className="flex items-center gap-2 text-xs text-[#667085]"><span className="h-2.5 w-2.5 rounded-full bg-[#5B5CF0]" /> Exécutions</div></div>
        <div className="mt-8 flex h-72 items-end gap-1.5 rounded-2xl bg-[linear-gradient(to_bottom,#F0F1F4_1px,transparent_1px)] bg-[size:100%_25%] px-2 pt-4 sm:gap-2 sm:px-4" role="img" aria-label={`Graphique de ${metrics.executions} exécutions sur trente jours`}>
          {workspace.dailyExecutions.map((item, index) => <span key={item.date} title={`${item.count} exécution${item.count > 1 ? 's' : ''}`} className={`min-h-[3px] flex-1 rounded-t-md transition hover:opacity-75 ${index >= 27 ? 'bg-[#5B5CF0]' : 'bg-[#D9DAFF]'}`} style={{ height: `${Math.max(item.count / maxValue * 100, 1)}%` }} />)}
        </div>
        <div className="mt-3 flex justify-between px-2 text-xs text-[#98A2B3]"><span>J-30</span><span>J-21</span><span>J-14</span><span>J-7</span><span>Aujourd’hui</span></div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
          <h2 className="text-lg font-semibold">Détail par automatisation</h2>
          {workspace.automations.length ? <div className="mt-6 space-y-6">{workspace.automations.map((item) => {
            const width = metrics.executions ? Math.max(item.runs / metrics.executions * 100, item.runs ? 4 : 0) : 0;
            return <div key={item.id}><div className="grid gap-2 text-sm sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6"><p className="font-semibold">{item.name}</p><p className="text-[#667085]"><strong className="text-[#111111]">{numberFormatter.format(item.runs)}</strong> exécutions</p><span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${item.successRate === null ? 'bg-[#F2F4F7] text-[#667085]' : 'bg-[#ECFDF3] text-[#079455]'}`}>{item.successRate === null ? 'Pas de données' : `${item.successRate.toFixed(1).replace('.', ',')} %`}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-[#F0F1F4]"><div className="h-full rounded-full bg-[#5B5CF0]" style={{ width: `${width}%` }} /></div></div>;
          })}</div> : <div className="mt-6 rounded-2xl border border-dashed border-[#D7DAE2] bg-[#FAFAFC] p-8 text-center text-sm text-[#667085]">Les performances détaillées apparaîtront après l’activation de votre première automatisation.</div>}
        </article>

        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
          <div className="flex items-center justify-between"><h2 className="text-lg font-semibold">Santé du système</h2><span className={`h-2.5 w-2.5 rounded-full ${metrics.warnings ? 'bg-[#F79009] shadow-[0_0_0_5px_rgba(247,144,9,0.12)]' : 'bg-[#12B76A] shadow-[0_0_0_5px_rgba(18,183,106,0.12)]'}`} /></div>
          <div className="mt-6 flex items-center justify-center py-3"><div className="flex h-40 w-40 items-center justify-center rounded-full p-3" style={{ background: `conic-gradient(#5B5CF0 0deg ${(metrics.successRate ?? 0) * 3.6}deg,#EEF0F3 ${(metrics.successRate ?? 0) * 3.6}deg 360deg)` }}><div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white"><strong className="text-3xl tracking-[-0.04em]">{metrics.successRate === null ? '—' : `${metrics.successRate.toFixed(1).replace('.', ',')} %`}</strong><span className="mt-1 text-xs text-[#98A2B3]">de réussite</span></div></div></div>
          <div className="mt-5 space-y-3 text-sm"><div className="flex justify-between"><span className="text-[#667085]">Réussies</span><strong>{numberFormatter.format(successful)}</strong></div><div className="flex justify-between"><span className="text-[#667085]">À vérifier</span><strong>{metrics.warnings}</strong></div><div className="flex justify-between"><span className="text-[#667085]">Temps moyen</span><strong>{metrics.averageDurationMs === null ? '—' : `${(metrics.averageDurationMs / 1000).toFixed(1).replace('.', ',')} s`}</strong></div></div>
        </article>
      </section>
    </div>
  );
}
