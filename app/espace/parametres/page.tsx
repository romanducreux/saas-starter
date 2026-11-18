import Icon from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";
import { updateWorkspaceSettingsAction } from "@/app/actions/workspace";
import { getWorkspaceData } from "@/lib/workspace/data";

type SettingsPageProps = {
  searchParams: Promise<{ enregistre?: string; erreur?: string }>;
};

export default async function SettingsPage({ searchParams }: SettingsPageProps) {
  const [workspace, params] = await Promise.all([getWorkspaceData(), searchParams]);
  const canEditOrganization = workspace.organization.role === "owner" || workspace.organization.role === "admin";
  const fieldClass = "mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] bg-white px-3.5 text-sm outline-none transition focus:border-[#8B8CFF] focus:ring-4 focus:ring-[#5B5CF0]/10 disabled:cursor-not-allowed disabled:bg-[#F9FAFB] disabled:text-[#98A2B3]";

  return (
    <div className="space-y-8">
      <PageHeader title="Paramètres" description="Gérez les informations de votre compte et de votre espace de travail." />

      {params.enregistre ? <div role="status" className="flex items-center gap-3 rounded-[20px] border border-[#D1FADF] bg-[#F6FEF9] px-4 py-3 text-sm font-medium text-[#067647]"><Icon name="check" className="h-4 w-4" />Les informations ont bien été enregistrées.</div> : null}
      {params.erreur ? <div role="alert" className="rounded-[20px] border border-[#FECDCA] bg-[#FEF3F2] px-4 py-3 text-sm text-[#B42318]">L’enregistrement n’a pas abouti. Vérifiez les informations ou réessayez.</div> : null}

      <div className="grid gap-6 xl:grid-cols-[220px_1fr]">
        <nav aria-label="Sections des paramètres" className="self-start rounded-[22px] border border-[#E1E4EA] bg-white p-2 xl:sticky xl:top-[92px]">
          {['Profil', 'Entreprise', 'Équipe', 'Sécurité'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${index === 0 ? 'bg-[#F0F0FF] text-[#5B5CF0]' : 'text-[#667085] hover:bg-[#F7F8FA] hover:text-[#111111]'}`}>{item}</a>)}
        </nav>

        <form action={updateWorkspaceSettingsAction} className="space-y-6">
          <input type="hidden" name="organizationId" value={workspace.organization.id} />
          {!canEditOrganization ? (
            <>
              <input type="hidden" name="organizationName" value={workspace.organization.name} />
              <input type="hidden" name="sector" value={workspace.organization.sector ?? ""} />
              <input type="hidden" name="timezone" value={workspace.organization.timezone} />
            </>
          ) : null}
          <section id="profil" className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
            <div className="border-b border-[#EEF0F3] pb-5"><h2 className="text-lg font-semibold">Profil</h2><p className="mt-1 text-sm text-[#8A94A6]">Vos informations personnelles dans l’espace.</p></div>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center"><span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#5B5CF0] to-[#8B5CF6] text-xl font-semibold text-white">{workspace.user.initials}</span><div><p className="text-sm font-semibold">Photo de profil</p><p className="mt-1 text-xs leading-5 text-[#98A2B3]">L’ajout d’une photo personnalisée sera disponible prochainement.</p></div></div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-[#344054] sm:col-span-2">Nom complet<input name="fullName" defaultValue={workspace.user.name} required minLength={2} className={fieldClass} /></label>
              <label className="text-sm font-medium text-[#344054] sm:col-span-2">Adresse e-mail<input type="email" value={workspace.user.email} readOnly className={fieldClass} /><span className="mt-1.5 block text-xs text-[#98A2B3]">Contactez Kirevo pour modifier l’adresse de connexion.</span></label>
            </div>
          </section>

          <section id="entreprise" className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
            <div className="border-b border-[#EEF0F3] pb-5"><h2 className="text-lg font-semibold">Entreprise</h2><p className="mt-1 text-sm text-[#8A94A6]">Informations générales de votre espace de travail.</p></div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-[#344054] sm:col-span-2">Nom de l’espace<input name="organizationName" defaultValue={workspace.organization.name} required minLength={2} disabled={!canEditOrganization || workspace.mode === 'preview'} className={fieldClass} /></label>
              <label className="text-sm font-medium text-[#344054]">Secteur<select name="sector" defaultValue={workspace.organization.sector ?? "Services aux entreprises"} disabled={!canEditOrganization || workspace.mode === 'preview'} className={fieldClass}><option>Services aux entreprises</option><option>Éducation</option><option>Commerce</option><option>Immobilier</option><option>Santé</option><option>Autre</option></select></label>
              <label className="text-sm font-medium text-[#344054]">Fuseau horaire<select name="timezone" defaultValue={workspace.organization.timezone} disabled={!canEditOrganization || workspace.mode === 'preview'} className={fieldClass}><option value="Europe/Paris">Europe/Paris</option></select></label>
            </div>
          </section>

          <section id="equipe" className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
            <div className="flex flex-col gap-3 border-b border-[#EEF0F3] pb-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-lg font-semibold">Équipe</h2><p className="mt-1 text-sm text-[#8A94A6]">Les membres autorisés à accéder à cet espace.</p></div><button type="button" disabled title="Les invitations seront activées dans une prochaine version" className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-[#E1E4EA] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#98A2B3]"><Icon name="plus" className="h-4 w-4" />Inviter</button></div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#EEF0F3] p-4"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0F0FF] text-xs font-semibold text-[#5B5CF0]">{workspace.user.initials}</span><div className="min-w-0 flex-1"><p className="text-sm font-semibold">{workspace.user.name}</p><p className="truncate text-xs text-[#8A94A6]">{workspace.user.email}</p></div><span className="rounded-full bg-[#F2F4F7] px-2.5 py-1 text-xs font-semibold text-[#667085]">{workspace.organization.role === 'owner' ? 'Propriétaire' : workspace.organization.role === 'admin' ? 'Administrateur' : 'Membre'}</span></div>
          </section>

          <section id="sécurité" className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
            <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF3] text-[#079455]"><Icon name="check" className="h-5 w-5" /></span><div><h2 className="text-lg font-semibold">Sécurité du compte</h2><p className="mt-1 text-sm leading-6 text-[#667085]">Votre session est protégée par des cookies sécurisés et les données de l’entreprise sont isolées par des règles d’accès en base.</p></div></div>
          </section>

          <div className="flex justify-end"><button type="submit" disabled={workspace.mode === 'preview'} className="rounded-xl bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2B2B2B] disabled:cursor-not-allowed disabled:opacity-45">Enregistrer les modifications</button></div>
        </form>
      </div>
    </div>
  );
}
