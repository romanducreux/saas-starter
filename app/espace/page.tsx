import Link from "next/link";
import Icon, { type IconName } from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";

const metrics: Array<{
  label: string;
  value: string;
  change: string;
  detail: string;
  icon: IconName;
  tone: string;
}> = [
  { label: "Temps gagné", value: "18 h 27", change: "+24 %", detail: "sur les 30 derniers jours", icon: "clock", tone: "bg-[#F0F0FF] text-[#5B5CF0]" },
  { label: "Exécutions", value: "2 436", change: "+18 %", detail: "actions réalisées", icon: "bolt", tone: "bg-[#FFF4E8] text-[#E87924]" },
  { label: "Taux de réussite", value: "98,6 %", change: "+2,1 %", detail: "sans intervention", icon: "check", tone: "bg-[#ECFDF3] text-[#079455]" },
  { label: "Parcours actifs", value: "4", change: "+1", detail: "automatisations en ligne", icon: "workflow", tone: "bg-[#F4F3FF] text-[#7C3AED]" },
];

const workflows = [
  { name: "Inscription JPO", description: "Formulaire → Google Sheets → E-mail", runs: "1 248", success: "99,4 %", color: "bg-[#5B5CF0]" },
  { name: "Relance des contacts", description: "Date atteinte → Vérification → Relance", runs: "682", success: "98,1 %", color: "bg-[#7C3AED]" },
  { name: "Qualification des demandes", description: "E-mail → Analyse IA → Équipe", runs: "506", success: "97,8 %", color: "bg-[#0EA5E9]" },
];

const activities = [
  { title: "Confirmation envoyée", detail: "lucas.martin@example.com", time: "Il y a 3 min", icon: "email" as IconName, tone: "bg-[#F0F0FF] text-[#5B5CF0]" },
  { title: "Contact ajouté", detail: "Google Sheets · JPO Bordeaux", time: "Il y a 4 min", icon: "database" as IconName, tone: "bg-[#ECFDF3] text-[#079455]" },
  { title: "Parcours exécuté", detail: "Relance des contacts", time: "Il y a 18 min", icon: "bolt" as IconName, tone: "bg-[#FFF4E8] text-[#E87924]" },
];

export default function WorkspaceHome() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Mardi 18 novembre"
        title="Bonjour Roman"
        description="Voici ce que vos automatisations ont accompli. Les données affichées servent à prévisualiser le futur espace client."
        action={{ href: "/espace/automatisations/nouvelle", label: "Nouvelle automatisation" }}
      />

      <section aria-label="Indicateurs principaux" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5 shadow-[0_8px_26px_rgba(17,24,39,0.035)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(17,24,39,0.07)]">
            <div className="flex items-start justify-between gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${metric.tone}`}>
                <Icon name={metric.icon} className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-[#ECFDF3] px-2.5 py-1 text-xs font-semibold text-[#079455]">{metric.change}</span>
            </div>
            <p className="mt-5 text-sm font-medium text-[#667085]">{metric.label}</p>
            <p className="mt-1 text-[30px] font-semibold tracking-[-0.04em]">{metric.value}</p>
            <p className="mt-1 text-xs text-[#98A2B3]">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.7fr]">
        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 shadow-[0_8px_26px_rgba(17,24,39,0.035)] sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-[-0.02em]">Activité des automatisations</h2>
              <p className="mt-1 text-sm text-[#8A94A6]">Exécutions réussies sur les 7 derniers jours</p>
            </div>
            <Link href="/espace/performances" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">
              Voir les performances <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl bg-[#FAFAFC] px-3 pb-3 pt-5 sm:px-5">
            <div className="flex h-56 items-end gap-2 sm:gap-3" role="img" aria-label="Graphique des exécutions quotidiennes : progression régulière de mercredi à mardi">
              {[54, 68, 63, 82, 72, 91, 88, 100, 86, 112, 98, 126, 118, 142].map((height, index) => (
                <div key={`${height}-${index}`} className="group relative flex h-full flex-1 items-end">
                  <span
                    className={`w-full rounded-t-lg transition group-hover:opacity-80 ${index === 13 ? "bg-gradient-to-t from-[#5B5CF0] to-[#8B8DFF]" : "bg-[#D9DAFF]"}`}
                    style={{ height: `${Math.min(height / 1.5, 96)}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-7 text-center text-[11px] font-medium text-[#98A2B3]">
              {['Mer', 'Jeu', 'Ven', 'Sam', 'Dim', 'Lun', 'Mar'].map((day) => <span key={day}>{day}</span>)}
            </div>
          </div>
        </article>

        <article className="rounded-[28px] border border-[#E1E4EA] bg-[#111827] p-5 text-white shadow-[0_18px_45px_rgba(17,24,39,0.14)] sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A5B4FC]">Cette semaine</p>
              <h2 className="mt-2 text-lg font-semibold">Votre impact</h2>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[#C7D2FE]">
              <Icon name="sparkles" className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-8 text-4xl font-semibold tracking-[-0.05em]">4 h 32</p>
          <p className="mt-2 text-sm text-white/55">de travail répétitif évité</p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-white/60">Formulaires traités</span><strong>184</strong></div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-white/60">E-mails envoyés</span><strong>247</strong></div>
            <div className="flex items-center justify-between"><span className="text-white/60">Erreurs évitées</span><strong>31</strong></div>
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Automatisations principales</h2>
              <p className="mt-1 text-sm text-[#8A94A6]">Les parcours les plus utilisés</p>
            </div>
            <Link href="/espace/automatisations" className="text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">Tout voir</Link>
          </div>
          <div className="mt-5 space-y-3">
            {workflows.map((workflow) => (
              <Link key={workflow.name} href="/espace/automatisations/nouvelle" className="group grid gap-4 rounded-2xl border border-[#EEF0F3] p-4 transition hover:border-[#D9DAFF] hover:bg-[#FAFAFF] sm:grid-cols-[1fr_auto_auto] sm:items-center">
                <div className="flex min-w-0 items-center gap-3">
                  <span className={`h-10 w-1.5 shrink-0 rounded-full ${workflow.color}`} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold group-hover:text-[#5B5CF0]">{workflow.name}</p>
                    <p className="mt-1 truncate text-xs text-[#8A94A6]">{workflow.description}</p>
                  </div>
                </div>
                <div><p className="text-sm font-semibold">{workflow.runs}</p><p className="text-[11px] text-[#98A2B3]">exécutions</p></div>
                <span className="w-fit rounded-full bg-[#ECFDF3] px-2.5 py-1 text-xs font-semibold text-[#079455]">{workflow.success}</span>
              </Link>
            ))}
          </div>
        </article>

        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Activité récente</h2>
              <p className="mt-1 text-sm text-[#8A94A6]">Les dernières actions réalisées</p>
            </div>
            <Link href="/espace/activite" className="text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">Journal</Link>
          </div>
          <div className="mt-5 space-y-4">
            {activities.map((activity) => (
              <div key={activity.title} className="flex items-start gap-3">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${activity.tone}`}><Icon name={activity.icon} className="h-4 w-4" /></span>
                <div className="min-w-0 flex-1 border-b border-[#F0F1F4] pb-4 last:border-0">
                  <div className="flex items-start justify-between gap-3"><p className="text-sm font-semibold">{activity.title}</p><time className="shrink-0 text-[11px] text-[#98A2B3]">{activity.time}</time></div>
                  <p className="mt-1 truncate text-xs text-[#8A94A6]">{activity.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
