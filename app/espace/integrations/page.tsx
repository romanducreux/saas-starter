import Icon, { type IconName } from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";

const integrations = [
  { name: "Google Sheets", description: "Ajoutez et mettez à jour des lignes automatiquement.", category: "Données", status: "Connecté", initials: "GS", color: "bg-[#E8F5EC] text-[#15803D]", icon: "database" as IconName },
  { name: "Brevo", description: "Envoyez des e-mails transactionnels et des relances.", category: "E-mail", status: "Connecté", initials: "B", color: "bg-[#F1EDFF] text-[#6D28D9]", icon: "email" as IconName },
  { name: "Make", description: "Reliez Kirevo à vos scénarios d’automatisation.", category: "Automatisation", status: "Connecté", initials: "M", color: "bg-[#F2EAFE] text-[#7C3AED]", icon: "workflow" as IconName },
  { name: "Gmail", description: "Déclenchez des parcours depuis votre boîte de réception.", category: "E-mail", status: "Disponible", initials: "G", color: "bg-[#FFF0EE] text-[#D92D20]", icon: "email" as IconName },
  { name: "Microsoft Outlook", description: "Envoyez et analysez les e-mails de votre équipe.", category: "E-mail", status: "Disponible", initials: "O", color: "bg-[#EAF5FF] text-[#0277BD]", icon: "email" as IconName },
  { name: "Slack", description: "Prévenez les équipes et centralisez les validations.", category: "Équipe", status: "Disponible", initials: "S", color: "bg-[#FFF3F8] text-[#C11574]", icon: "team" as IconName },
  { name: "HubSpot", description: "Créez et enrichissez vos contacts dans le CRM.", category: "CRM", status: "Bientôt", initials: "H", color: "bg-[#FFF4E8] text-[#E87924]", icon: "user" as IconName },
  { name: "Webhooks", description: "Connectez n’importe quel outil disposant d’une API.", category: "Développeur", status: "Disponible", initials: "W", color: "bg-[#EEF0F3] text-[#475467]", icon: "integration" as IconName },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Connexions" description="Reliez les outils que votre équipe utilise déjà. Les identifiants resteront chiffrés lorsque le service sécurisé sera activé." />

      <div className="flex flex-col gap-3 rounded-[22px] border border-[#E1E4EA] bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex min-h-10 items-center gap-2 rounded-xl bg-[#F7F8FA] px-3.5 text-sm text-[#98A2B3] sm:w-72"><span className="sr-only">Rechercher une connexion</span><Icon name="search" className="h-4 w-4" /><input type="search" placeholder="Rechercher un outil" className="min-w-0 flex-1 border-0 bg-transparent py-2 outline-none" /></label>
        <div className="flex gap-1 overflow-x-auto">{['Tous', 'Données', 'E-mail', 'CRM', 'Équipe'].map((category, index) => <button key={category} type="button" className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold ${index === 0 ? 'bg-[#111111] text-white' : 'text-[#667085] hover:bg-[#F7F8FA] hover:text-[#111111]'}`}>{category}</button>)}</div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {integrations.map((integration) => (
          <article key={integration.name} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#C9CBFF] hover:shadow-[0_14px_34px_rgba(17,24,39,0.07)]">
            <div className="flex items-start justify-between gap-4">
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${integration.color}`}>{integration.initials}</span>
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${integration.status === 'Connecté' ? 'bg-[#ECFDF3] text-[#079455]' : integration.status === 'Bientôt' ? 'bg-[#F2F4F7] text-[#8A94A6]' : 'bg-[#F0F0FF] text-[#5B5CF0]'}`}>{integration.status}</span>
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">{integration.category}</p>
            <h2 className="mt-1 text-base font-semibold">{integration.name}</h2>
            <p className="mt-2 min-h-12 text-sm leading-6 text-[#667085]">{integration.description}</p>
            <button type="button" disabled={integration.status === 'Bientôt'} className={`mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-55 ${integration.status === 'Connecté' ? 'border-[#E1E4EA] text-[#475467] hover:border-[#C9CBFF] hover:text-[#5B5CF0]' : 'border-[#D9DAFF] bg-[#F8F8FF] text-[#5B5CF0] hover:bg-[#F0F0FF]'}`}><Icon name={integration.status === 'Connecté' ? 'settings' : 'plus'} className="h-4 w-4" />{integration.status === 'Connecté' ? 'Gérer la connexion' : integration.status === 'Bientôt' ? 'Prochainement' : 'Connecter'}</button>
          </article>
        ))}
      </section>
    </div>
  );
}
