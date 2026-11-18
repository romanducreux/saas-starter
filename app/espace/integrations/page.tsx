import Icon from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";
import { getWorkspaceData } from "@/lib/workspace/data";

const catalog = [
  { provider: "google_sheets", name: "Google Sheets", description: "Ajoutez et mettez à jour des lignes automatiquement.", category: "Données", initials: "GS", color: "bg-[#E8F5EC] text-[#15803D]", available: true },
  { provider: "brevo", name: "Brevo", description: "Envoyez des e-mails transactionnels et des relances.", category: "E-mail", initials: "B", color: "bg-[#F1EDFF] text-[#6D28D9]", available: true },
  { provider: "make", name: "Make", description: "Reliez Kirevo à vos scénarios d’automatisation.", category: "Automatisation", initials: "M", color: "bg-[#F2EAFE] text-[#7C3AED]", available: true },
  { provider: "gmail", name: "Gmail", description: "Déclenchez des parcours depuis votre boîte de réception.", category: "E-mail", initials: "G", color: "bg-[#FFF0EE] text-[#D92D20]", available: true },
  { provider: "outlook", name: "Microsoft Outlook", description: "Envoyez et analysez les e-mails de votre équipe.", category: "E-mail", initials: "O", color: "bg-[#EAF5FF] text-[#0277BD]", available: true },
  { provider: "slack", name: "Slack", description: "Prévenez les équipes et centralisez les validations.", category: "Équipe", initials: "S", color: "bg-[#FFF3F8] text-[#C11574]", available: true },
  { provider: "hubspot", name: "HubSpot", description: "Créez et enrichissez vos contacts dans le CRM.", category: "CRM", initials: "H", color: "bg-[#FFF4E8] text-[#E87924]", available: false },
  { provider: "webhooks", name: "Webhooks", description: "Connectez n’importe quel outil disposant d’une API.", category: "Développeur", initials: "W", color: "bg-[#EEF0F3] text-[#475467]", available: true },
];

export default async function IntegrationsPage() {
  const workspace = await getWorkspaceData();
  const connectionMap = new Map(workspace.integrations.map((integration) => [integration.provider, integration.status]));
  const connectedCount = workspace.integrations.filter((integration) => integration.status === "connected").length;

  return (
    <div className="space-y-8">
      <PageHeader title="Connexions" description="Visualisez les outils reliés à votre solution. Les connexions sont configurées et sécurisées avec Kirevo." />

      <div className="flex flex-col gap-4 rounded-[22px] border border-[#E1E4EA] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-sm font-semibold text-[#344054]">Catalogue de connexions</p><p className="mt-1 text-sm text-[#667085]">Chaque accès est configuré uniquement avec votre validation.</p></div>
        <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#ECFDF3] px-3.5 py-2 text-sm font-semibold text-[#079455]"><Icon name="check" className="h-4 w-4" />{connectedCount} connexion{connectedCount > 1 ? "s" : ""} active{connectedCount > 1 ? "s" : ""}</span>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {catalog.map((integration) => {
          const storedStatus = connectionMap.get(integration.provider);
          const status = storedStatus === "connected" ? "Connecté" : storedStatus === "attention" ? "À vérifier" : integration.available ? "Disponible" : "Bientôt";
          return (
            <article key={integration.name} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#C9CBFF] hover:shadow-[0_14px_34px_rgba(17,24,39,0.07)]">
              <div className="flex items-start justify-between gap-4"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${integration.color}`}>{integration.initials}</span><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status === 'Connecté' ? 'bg-[#ECFDF3] text-[#079455]' : status === 'À vérifier' ? 'bg-[#FFF4E8] text-[#B54708]' : status === 'Bientôt' ? 'bg-[#F2F4F7] text-[#8A94A6]' : 'bg-[#F0F0FF] text-[#5B5CF0]'}`}>{status}</span></div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">{integration.category}</p><h2 className="mt-1 text-base font-semibold">{integration.name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-[#667085]">{integration.description}</p>
              {status === "Connecté" ? (
                <span className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#D1FADF] bg-[#F6FEF9] px-4 py-2 text-sm font-semibold text-[#079455]"><Icon name="check" className="h-4 w-4" />Connexion opérationnelle</span>
              ) : status === "Bientôt" ? (
                <span className="mt-5 inline-flex min-h-10 w-full items-center justify-center rounded-xl border border-[#E1E4EA] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#8A94A6]">Prochainement</span>
              ) : (
                <a href={`mailto:contact@kirevo.fr?subject=${encodeURIComponent(`Connexion ${integration.name}`)}`} className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#D9DAFF] bg-[#F8F8FF] px-4 py-2 text-sm font-semibold text-[#5B5CF0] transition hover:border-[#BFC0FF] hover:bg-[#F0F0FF]"><Icon name="help" className="h-4 w-4" />{status === "À vérifier" ? "Contacter Kirevo" : "Demander cette connexion"}</a>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
