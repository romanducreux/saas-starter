import Link from "next/link";
import Icon, { type IconName } from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";

const guides = [
  { title: "Créer votre premier parcours", description: "Assemblez un déclencheur, une action et testez le résultat.", icon: "workflow" as IconName },
  { title: "Connecter un outil", description: "Préparez Google Sheets, votre messagerie ou votre CRM.", icon: "integration" as IconName },
  { title: "Lire vos performances", description: "Comprenez le temps gagné, les exécutions et les alertes.", icon: "chart" as IconName },
];

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Centre d’aide" description="Retrouvez les réponses essentielles pour prendre en main votre espace et construire vos premiers parcours." />

      <section className="rounded-[28px] bg-gradient-to-br from-[#111827] to-[#252B3A] px-5 py-9 text-center text-white sm:px-8 sm:py-12">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#C7D2FE]"><Icon name="help" className="h-6 w-6" /></span>
        <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">Comment pouvons-nous vous aider ?</h2>
        <label className="mx-auto mt-6 flex min-h-12 max-w-xl items-center gap-3 rounded-2xl bg-white px-4 text-left text-sm text-[#98A2B3] shadow-xl"><span className="sr-only">Rechercher dans l’aide</span><Icon name="search" className="h-5 w-5" /><input type="search" placeholder="Rechercher une question, une fonctionnalité…" className="min-w-0 flex-1 border-0 bg-transparent py-3 outline-none" /></label>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {guides.map((guide) => <article key={guide.title} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name={guide.icon} className="h-5 w-5" /></span><h2 className="mt-5 text-base font-semibold">{guide.title}</h2><p className="mt-2 text-sm leading-6 text-[#667085]">{guide.description}</p><Link href="/espace/automatisations/nouvelle" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B5CF0]">Voir le guide <Icon name="arrow" className="h-4 w-4" /></Link></article>)}
      </section>

      <section className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
        <h2 className="text-lg font-semibold">Questions fréquentes</h2>
        <div className="mt-5 divide-y divide-[#EEF0F3]">
          {[
            ['Dois-je savoir coder pour créer une automatisation ?', 'Non. Le constructeur est conçu autour de briques visuelles. Vous choisissez un déclencheur, ajoutez les actions puis configurez chaque étape avec des champs simples.'],
            ['Comment tester un parcours avant de l’activer ?', 'Le bouton Tester exécute les étapes configurées en mode aperçu et indique visuellement les briques validées. Aucun envoi réel ne sera effectué avant la connexion des services.'],
            ['Mes identifiants sont-ils enregistrés dans cet aperçu ?', 'Non. Cette version ne demande et ne stocke aucun identifiant de service externe. Un coffre sécurisé sera connecté avant toute mise en production client.'],
            ['Puis-je garder une validation humaine ?', 'Oui. Une étape de validation peut être placée avant un envoi, une création de document ou toute autre action importante.'],
          ].map(([question, answer]) => <details key={question} className="group py-4"><summary className="flex list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F7F8FA] text-[#667085] transition group-open:rotate-45"><Icon name="plus" className="h-4 w-4" /></span></summary><p className="max-w-3xl pt-3 text-sm leading-6 text-[#667085]">{answer}</p></details>)}
        </div>
      </section>

      <section className="flex flex-col gap-5 rounded-[28px] border border-[#D9DAFF] bg-[#F6F6FF] p-6 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-semibold">Vous avez une question spécifique ?</h2><p className="mt-1 text-sm text-[#667085]">Décrivez votre besoin et l’équipe Kirevo vous répondra.</p></div><a href="mailto:contact@kirevo.fr" className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-[#5B5CF0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#4F50DD]">Contacter Kirevo</a></section>
    </div>
  );
}
