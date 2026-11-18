import Link from "next/link";
import Icon, { type IconName } from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";
import { formatDuration, formatRelativeDate, getWorkspaceData } from "@/lib/workspace/data";

const numberFormatter = new Intl.NumberFormat("fr-FR");

export default async function WorkspaceHome() {
  const workspace = await getWorkspaceData();
  const { metrics } = workspace;
  const maxDaily = Math.max(...workspace.dailyExecutions.map((day) => day.count), 1);
  const firstName = workspace.user.name.split(" ")[0];
  const today = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
  const metricsCards: Array<{ label: string; value: string; detail: string; icon: IconName; tone: string; change?: string }> = [
    { label: "Temps gagné", value: formatDuration(metrics.savedSeconds), detail: "sur les 30 derniers jours", icon: "clock", tone: "bg-[#F0F0FF] text-[#5B5CF0]" },
    { label: "Exécutions", value: numberFormatter.format(metrics.executions), detail: "actions réalisées", icon: "bolt", tone: "bg-[#FFF4E8] text-[#E87924]", change: metrics.executionsChange === null ? undefined : `${metrics.executionsChange >= 0 ? "+" : ""}${Math.round(metrics.executionsChange)} %` },
    { label: "Taux de réussite", value: metrics.successRate === null ? "—" : `${metrics.successRate.toFixed(1).replace(".", ",")} %`, detail: metrics.warnings ? `${metrics.warnings} action${metrics.warnings > 1 ? "s" : ""} à vérifier` : "aucune anomalie détectée", icon: "check", tone: "bg-[#ECFDF3] text-[#079455]" },
    { label: "Parcours actifs", value: String(metrics.activeAutomations), detail: "automatisations en ligne", icon: "workflow", tone: "bg-[#F4F3FF] text-[#7C3AED]" },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={today.charAt(0).toUpperCase() + today.slice(1)}
        title={`Bonjour ${firstName}`}
        description={workspace.mode === "preview" ? "Découvrez votre futur tableau de bord avec des données de démonstration réalistes." : "Voici ce que vos automatisations ont accompli au cours des 30 derniers jours."}
        action={{ href: "/espace/automatisations/nouvelle", label: "Composer une solution" }}
      />

      {workspace.mode === "preview" ? (
        <div className="flex items-start gap-3 rounded-[22px] border border-[#D9DAFF] bg-[#F7F7FF] px-4 py-3 text-sm leading-6 text-[#4F46E5]">
          <Icon name="sparkles" className="mt-0.5 h-4 w-4 shrink-0" /><p>Mode aperçu : les indicateurs ci-dessous illustrent le fonctionnement du produit. Les comptes réels afficheront uniquement leurs propres données.</p>
        </div>
      ) : null}

      <section aria-label="Indicateurs principaux" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metricsCards.map((metric) => (
          <article key={metric.label} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5 shadow-[0_8px_26px_rgba(17,24,39,0.035)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(17,24,39,0.07)]">
            <div className="flex items-start justify-between gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${metric.tone}`}><Icon name={metric.icon} className="h-5 w-5" /></span>
              {metric.change ? <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${metric.change.startsWith("-") ? "bg-[#FEF3F2] text-[#B42318]" : "bg-[#ECFDF3] text-[#079455]"}`}>{metric.change}</span> : null}
            </div>
            <p className="mt-5 text-sm font-medium text-[#667085]">{metric.label}</p><p className="mt-1 text-[30px] font-semibold tracking-[-0.04em]">{metric.value}</p><p className="mt-1 text-xs text-[#98A2B3]">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.7fr]">
        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 shadow-[0_8px_26px_rgba(17,24,39,0.035)] sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div><h2 className="text-lg font-semibold tracking-[-0.02em]">Activité des automatisations</h2><p className="mt-1 text-sm text-[#8A94A6]">Exécutions quotidiennes sur 30 jours</p></div>
            <Link href="/espace/performances" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">Voir les performances <Icon name="arrow" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-7 overflow-hidden rounded-2xl bg-[#FAFAFC] px-3 pb-3 pt-5 sm:px-5">
            <div className="flex h-56 items-end gap-1 sm:gap-1.5" role="img" aria-label={`Graphique de ${metrics.executions} exécutions sur les 30 derniers jours`}>
              {workspace.dailyExecutions.map((day, index) => <span key={day.date} title={`${day.count} exécution${day.count > 1 ? "s" : ""}`} className={`min-h-[3px] flex-1 rounded-t-md transition hover:opacity-75 ${index >= 27 ? "bg-[#5B5CF0]" : "bg-[#D9DAFF]"}`} style={{ height: `${Math.max((day.count / maxDaily) * 100, 2)}%` }} />)}
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-medium text-[#98A2B3]"><span>Il y a 30 jours</span><span>Aujourd’hui</span></div>
          </div>
        </article>

        <article className="rounded-[28px] border border-[#E1E4EA] bg-[#111827] p-5 text-white shadow-[0_18px_45px_rgba(17,24,39,0.14)] sm:p-6">
          <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A5B4FC]">Votre impact</p><h2 className="mt-2 text-lg font-semibold">Travail évité</h2></div><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[#C7D2FE]"><Icon name="sparkles" className="h-5 w-5" /></span></div>
          <p className="mt-8 text-4xl font-semibold tracking-[-0.05em]">{formatDuration(metrics.savedSeconds)}</p><p className="mt-2 text-sm text-white/55">de tâches répétitives automatisées</p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-white/60">Actions traitées</span><strong>{numberFormatter.format(metrics.executions)}</strong></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-white/60">Parcours actifs</span><strong>{metrics.activeAutomations}</strong></div>
            <div className="flex items-center justify-between"><span className="text-white/60">Points à vérifier</span><strong>{metrics.warnings}</strong></div>
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4"><div><h2 className="text-lg font-semibold">Automatisations principales</h2><p className="mt-1 text-sm text-[#8A94A6]">Les parcours les plus actifs</p></div><Link href="/espace/automatisations" className="text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">Tout voir</Link></div>
          {workspace.automations.length ? <div className="mt-5 space-y-3">{workspace.automations.slice(0, 3).map((automation) => (
            <Link key={automation.id} href="/espace/automatisations" className="group grid gap-4 rounded-2xl border border-[#EEF0F3] p-4 transition hover:border-[#D9DAFF] hover:bg-[#FAFAFF] sm:grid-cols-[1fr_auto_auto] sm:items-center">
              <div className="min-w-0"><p className="truncate text-sm font-semibold group-hover:text-[#5B5CF0]">{automation.name}</p><p className="mt-1 truncate text-xs text-[#8A94A6]">{automation.description}</p></div>
              <div><p className="text-sm font-semibold">{numberFormatter.format(automation.runs)}</p><p className="text-[11px] text-[#98A2B3]">exécutions</p></div>
              <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${automation.status === "active" ? "bg-[#ECFDF3] text-[#079455]" : "bg-[#F2F4F7] text-[#667085]"}`}>{automation.status === "active" ? "Actif" : automation.status === "paused" ? "En pause" : "Brouillon"}</span>
            </Link>
          ))}</div> : <EmptyState icon="workflow" text="Aucune automatisation n’est encore rattachée à cet espace." href="/espace/automatisations/nouvelle" linkLabel="Composer la première" />}
        </article>

        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4"><div><h2 className="text-lg font-semibold">Activité récente</h2><p className="mt-1 text-sm text-[#8A94A6]">Les dernières actions réalisées</p></div><Link href="/espace/activite" className="text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">Journal</Link></div>
          {workspace.activities.length ? <div className="mt-5 space-y-4">{workspace.activities.slice(0, 4).map((activity) => (
            <div key={activity.id} className="flex items-start gap-3"><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${activity.status === "success" ? "bg-[#ECFDF3] text-[#079455]" : activity.status === "error" ? "bg-[#FEF3F2] text-[#D92D20]" : "bg-[#F0F0FF] text-[#5B5CF0]"}`}><Icon name={activity.status === "success" ? "check" : "activity"} className="h-4 w-4" /></span><div className="min-w-0 flex-1 border-b border-[#F0F1F4] pb-4 last:border-0"><div className="flex items-start justify-between gap-3"><p className="text-sm font-semibold">{activity.title}</p><time className="shrink-0 text-[11px] text-[#98A2B3]">{formatRelativeDate(activity.createdAt)}</time></div><p className="mt-1 truncate text-xs text-[#8A94A6]">{activity.description}</p></div></div>
          ))}</div> : <EmptyState icon="activity" text="L’activité de vos automatisations apparaîtra ici." />}
        </article>
      </section>

      <Link href="/espace/offre" className="group flex flex-col gap-4 rounded-[28px] border border-[#D9DAFF] bg-[linear-gradient(110deg,#F7F7FF,#FFFFFF)] p-5 transition hover:border-[#B8BAFF] hover:shadow-[0_16px_40px_rgba(91,92,240,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#5B5CF0] shadow-sm"><Icon name="offer" className="h-5 w-5" /></span><div><p className="text-sm font-semibold">{workspace.offer ? workspace.offer.name : "Votre offre Kirevo"}</p><p className="mt-1 text-sm text-[#667085]">{workspace.offer ? `${workspace.modules.length} module${workspace.modules.length > 1 ? "s" : ""} dans votre solution` : "Composez une solution adaptée à votre besoin"}</p></div></div><span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B5CF0]">Consulter l’offre <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </Link>
    </div>
  );
}

function EmptyState({ icon, text, href, linkLabel }: { icon: IconName; text: string; href?: string; linkLabel?: string }) {
  return <div className="mt-5 rounded-2xl border border-dashed border-[#D7DAE2] bg-[#FAFAFC] p-6 text-center"><Icon name={icon} className="mx-auto h-6 w-6 text-[#98A2B3]" /><p className="mt-3 text-sm text-[#667085]">{text}</p>{href && linkLabel ? <Link href={href} className="mt-3 inline-flex text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">{linkLabel}</Link> : null}</div>;
}
