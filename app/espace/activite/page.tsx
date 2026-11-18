import Icon, { type IconName } from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";

const events = [
  { time: "14:32", date: "Aujourd’hui", title: "Confirmation envoyée", detail: "lucas.martin@example.com", workflow: "Inscription JPO", status: "Réussie", icon: "email" as IconName, tone: "bg-[#F0F0FF] text-[#5B5CF0]" },
  { time: "14:31", date: "Aujourd’hui", title: "Contact ajouté au tableau", detail: "Ligne 248 · Contacts JPO", workflow: "Inscription JPO", status: "Réussie", icon: "database" as IconName, tone: "bg-[#ECFDF3] text-[#079455]" },
  { time: "14:31", date: "Aujourd’hui", title: "Nouvelle réponse reçue", detail: "Formulaire JPO Bordeaux", workflow: "Inscription JPO", status: "Réussie", icon: "form" as IconName, tone: "bg-[#F4F3FF] text-[#7C3AED]" },
  { time: "14:16", date: "Aujourd’hui", title: "Relance envoyée", detail: "emma.bernard@example.com", workflow: "Relance des contacts", status: "Réussie", icon: "refresh" as IconName, tone: "bg-[#EAF8FF] text-[#0284C7]" },
  { time: "13:58", date: "Aujourd’hui", title: "Adresse e-mail à vérifier", detail: "paul.durant@exemple", workflow: "Inscription JPO", status: "À vérifier", icon: "email" as IconName, tone: "bg-[#FFF4E8] text-[#E87924]" },
  { time: "11:42", date: "Aujourd’hui", title: "Demande qualifiée par l’IA", detail: "Priorité : élevée · Équipe commerciale", workflow: "Qualification des demandes", status: "Réussie", icon: "sparkles" as IconName, tone: "bg-[#F4F3FF] text-[#7C3AED]" },
];

export default function ActivityPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Activité" description="Suivez chaque action réalisée et identifiez immédiatement les éléments qui nécessitent une vérification." />

      <section className="rounded-[28px] border border-[#E1E4EA] bg-white p-4 sm:p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex min-h-11 items-center gap-2 rounded-2xl border border-[#E1E4EA] bg-[#F9FAFB] px-3.5 text-sm text-[#98A2B3] lg:w-80"><span className="sr-only">Rechercher dans l’activité</span><Icon name="search" className="h-4 w-4" /><input type="search" placeholder="Rechercher une action" className="min-w-0 flex-1 border-0 bg-transparent py-2 outline-none" /></label>
          <div className="flex flex-wrap gap-2">
            {['Tous les parcours', 'Tous les statuts', '30 derniers jours'].map((filter, index) => <button key={filter} type="button" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-[#E1E4EA] bg-white px-3.5 py-2 text-xs font-semibold text-[#667085] transition hover:border-[#C9CBFF] hover:text-[#5B5CF0]">{index === 2 ? <Icon name="calendar" className="h-4 w-4" /> : null}{filter}<span aria-hidden="true">⌄</span></button>)}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[22px] border border-[#EEF0F3]">
          <div className="hidden grid-cols-[90px_1.35fr_0.8fr_0.5fr] gap-4 bg-[#F9FAFB] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#98A2B3] md:grid"><span>Heure</span><span>Action</span><span>Parcours</span><span>Statut</span></div>
          {events.map((event, index) => (
            <div key={`${event.time}-${event.title}`} className="grid gap-4 border-t border-[#EEF0F3] p-4 first:border-t-0 md:grid-cols-[90px_1.35fr_0.8fr_0.5fr] md:items-center md:px-5">
              <div><p className="text-sm font-semibold">{event.time}</p><p className="mt-0.5 text-[11px] text-[#98A2B3]">{event.date}</p></div>
              <div className="flex min-w-0 items-center gap-3"><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${event.tone}`}><Icon name={event.icon} className="h-[18px] w-[18px]" /></span><div className="min-w-0"><p className="truncate text-sm font-semibold">{event.title}</p><p className="mt-1 truncate text-xs text-[#8A94A6]">{event.detail}</p></div></div>
              <p className="text-xs font-medium text-[#475467]">{event.workflow}</p>
              <span className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${event.status === 'Réussie' ? 'bg-[#ECFDF3] text-[#079455]' : 'bg-[#FFF4E8] text-[#B54708]'}`}>{event.status}</span>
              {index === events.length - 1 ? null : null}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-3 text-xs text-[#8A94A6] sm:flex-row"><span>6 actions sur 2 436</span><button type="button" className="rounded-xl border border-[#E1E4EA] px-4 py-2 font-semibold text-[#475467] hover:border-[#C9CBFF] hover:text-[#5B5CF0]">Afficher plus</button></div>
      </section>
    </div>
  );
}
