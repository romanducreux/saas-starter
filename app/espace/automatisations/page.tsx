import Link from "next/link";
import Icon, { type IconName } from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";

const automations = [
  { name: "Inscription JPO", detail: "Formulaire → Google Sheets → E-mail", status: "Actif", runs: "1 248", updated: "Il y a 3 min", icon: "form" as IconName, tone: "bg-[#F0F0FF] text-[#5B5CF0]" },
  { name: "Relance des contacts", detail: "Date atteinte → Vérification → Relance", status: "Actif", runs: "682", updated: "Il y a 18 min", icon: "refresh" as IconName, tone: "bg-[#F4F3FF] text-[#7C3AED]" },
  { name: "Qualification des demandes", detail: "E-mail → Analyse IA → Équipe", status: "Actif", runs: "506", updated: "Il y a 42 min", icon: "sparkles" as IconName, tone: "bg-[#EAF8FF] text-[#0284C7]" },
  { name: "Suivi des devis", detail: "Devis envoyé → Délai → Notification", status: "Brouillon", runs: "—", updated: "Hier", icon: "clock" as IconName, tone: "bg-[#FFF4E8] text-[#E87924]" },
];

const templates = [
  { title: "Collecter des inscriptions", description: "Enregistrez un formulaire et confirmez automatiquement la demande.", icon: "form" as IconName },
  { title: "Relancer au bon moment", description: "Déclenchez un e-mail selon une date et des conditions précises.", icon: "refresh" as IconName },
  { title: "Qualifier avec l’IA", description: "Analysez une demande puis prévenez la bonne personne.", icon: "sparkles" as IconName },
];

export default function AutomationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Automatisations" description="Créez, activez et suivez vos parcours depuis un même endroit." action={{ href: "/espace/automatisations/nouvelle", label: "Créer une automatisation" }} />

      <section className="rounded-[28px] border border-[#E1E4EA] bg-white p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-1 overflow-x-auto rounded-2xl bg-[#F7F8FA] p-1" aria-label="Filtrer les automatisations">
            {['Toutes 4', 'Actives 3', 'Brouillons 1'].map((label, index) => <button key={label} type="button" className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ${index === 0 ? 'bg-white text-[#111111] shadow-sm' : 'text-[#667085] hover:text-[#111111]'}`}>{label}</button>)}
          </div>
          <label className="flex min-h-10 items-center gap-2 rounded-2xl border border-[#E1E4EA] bg-white px-3.5 text-sm text-[#98A2B3] sm:w-64">
            <span className="sr-only">Rechercher une automatisation</span>
            <Icon name="search" className="h-4 w-4" />
            <input type="search" placeholder="Rechercher" className="min-w-0 flex-1 border-0 bg-transparent py-2 outline-none" />
          </label>
        </div>

        <div className="mt-5 overflow-hidden rounded-[22px] border border-[#EEF0F3]">
          <div className="hidden grid-cols-[1.4fr_0.65fr_0.55fr_0.65fr_40px] gap-4 bg-[#F9FAFB] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#98A2B3] md:grid">
            <span>Parcours</span><span>Statut</span><span>Exécutions</span><span>Dernière activité</span><span />
          </div>
          {automations.map((automation) => (
            <Link key={automation.name} href="/espace/automatisations/nouvelle" className="group grid gap-4 border-t border-[#EEF0F3] p-4 first:border-t-0 transition hover:bg-[#FAFAFF] md:grid-cols-[1.4fr_0.65fr_0.55fr_0.65fr_40px] md:items-center md:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${automation.tone}`}><Icon name={automation.icon} className="h-5 w-5" /></span>
                <div className="min-w-0"><p className="truncate text-sm font-semibold group-hover:text-[#5B5CF0]">{automation.name}</p><p className="mt-1 truncate text-xs text-[#8A94A6]">{automation.detail}</p></div>
              </div>
              <div><span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${automation.status === 'Actif' ? 'bg-[#ECFDF3] text-[#079455]' : 'bg-[#F2F4F7] text-[#667085]'}`}><span className={`h-1.5 w-1.5 rounded-full ${automation.status === 'Actif' ? 'bg-[#12B76A]' : 'bg-[#98A2B3]'}`} />{automation.status}</span></div>
              <div><p className="text-sm font-semibold">{automation.runs}</p><p className="text-[11px] text-[#98A2B3] md:hidden">exécutions</p></div>
              <p className="text-xs text-[#667085]">{automation.updated}</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl text-[#98A2B3] transition group-hover:bg-white group-hover:text-[#5B5CF0]"><Icon name="arrow" className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div><h2 className="text-xl font-semibold tracking-[-0.03em]">Partir d’un modèle</h2><p className="mt-1 text-sm text-[#8A94A6]">Une base claire que vous pourrez adapter à votre besoin.</p></div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {templates.map((template) => (
            <Link key={template.title} href="/espace/automatisations/nouvelle" className="group rounded-[24px] border border-[#E1E4EA] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#C9CBFF] hover:shadow-[0_14px_34px_rgba(17,24,39,0.07)]">
              <div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name={template.icon} className="h-5 w-5" /></span><Icon name="arrow" className="h-4 w-4 text-[#C1C7D0] transition group-hover:translate-x-0.5 group-hover:text-[#5B5CF0]" /></div>
              <h3 className="mt-5 text-base font-semibold group-hover:text-[#5B5CF0]">{template.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#667085]">{template.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
