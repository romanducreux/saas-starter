import Icon from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Paramètres" description="Gérez les informations de votre espace, les membres et les préférences de notification." />

      <div className="grid gap-6 xl:grid-cols-[220px_1fr]">
        <nav aria-label="Sections des paramètres" className="self-start rounded-[22px] border border-[#E1E4EA] bg-white p-2 xl:sticky xl:top-[92px]">
          {['Profil', 'Entreprise', 'Équipe', 'Notifications', 'Sécurité'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${index === 0 ? 'bg-[#F0F0FF] text-[#5B5CF0]' : 'text-[#667085] hover:bg-[#F7F8FA] hover:text-[#111111]'}`}>{item}</a>)}
        </nav>

        <div className="space-y-6">
          <section id="profil" className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
            <div className="border-b border-[#EEF0F3] pb-5"><h2 className="text-lg font-semibold">Profil</h2><p className="mt-1 text-sm text-[#8A94A6]">Vos informations visibles dans l’espace.</p></div>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#5B5CF0] to-[#8B5CF6] text-xl font-semibold text-white">RD</span>
              <div><button type="button" className="rounded-xl border border-[#D7DAE2] px-4 py-2 text-sm font-semibold text-[#475467] hover:border-[#C9CBFF] hover:text-[#5B5CF0]">Ajouter une photo</button><p className="mt-2 text-xs text-[#98A2B3]">PNG ou JPG · 2 Mo maximum</p></div>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-[#344054]">Prénom<input defaultValue="Roman" className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] px-3.5 text-sm" /></label>
              <label className="text-sm font-medium text-[#344054]">Nom<input defaultValue="Ducreux" className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] px-3.5 text-sm" /></label>
              <label className="text-sm font-medium text-[#344054] sm:col-span-2">Adresse e-mail<input type="email" defaultValue="contact@kirevo.fr" className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] px-3.5 text-sm" /></label>
            </div>
            <div className="mt-6 flex justify-end"><button type="button" className="rounded-xl bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2B2B2B]">Enregistrer</button></div>
          </section>

          <section id="entreprise" className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
            <div className="border-b border-[#EEF0F3] pb-5"><h2 className="text-lg font-semibold">Entreprise</h2><p className="mt-1 text-sm text-[#8A94A6]">Informations générales de votre espace de travail.</p></div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-[#344054] sm:col-span-2">Nom de l’espace<input defaultValue="Kirevo" className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] px-3.5 text-sm" /></label>
              <label className="text-sm font-medium text-[#344054]">Secteur<select defaultValue="services" className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] bg-white px-3.5 text-sm"><option value="services">Services aux entreprises</option><option>Éducation</option><option>Commerce</option><option>Autre</option></select></label>
              <label className="text-sm font-medium text-[#344054]">Fuseau horaire<select defaultValue="paris" className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] bg-white px-3.5 text-sm"><option value="paris">Europe/Paris</option></select></label>
            </div>
          </section>

          <section id="equipe" className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
            <div className="flex flex-col gap-3 border-b border-[#EEF0F3] pb-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-semibold">Équipe</h2><p className="mt-1 text-sm text-[#8A94A6]">Invitez des personnes lorsque l’authentification sera connectée.</p></div><button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D9DAFF] bg-[#F8F8FF] px-4 py-2 text-sm font-semibold text-[#5B5CF0]"><Icon name="plus" className="h-4 w-4" />Inviter</button></div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#EEF0F3] p-4"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0F0FF] text-xs font-semibold text-[#5B5CF0]">RD</span><div className="min-w-0 flex-1"><p className="text-sm font-semibold">Roman Ducreux</p><p className="truncate text-xs text-[#8A94A6]">contact@kirevo.fr</p></div><span className="rounded-full bg-[#F2F4F7] px-2.5 py-1 text-xs font-semibold text-[#667085]">Propriétaire</span></div>
          </section>
        </div>
      </div>
    </div>
  );
}
