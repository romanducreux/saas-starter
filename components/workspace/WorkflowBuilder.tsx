"use client";

import { useMemo, useState } from "react";
import Icon, { type IconName } from "@/components/workspace/Icon";

type BlockCategory = "Déclencheur" | "Action" | "Logique";

type WorkflowBlock = {
  id: string;
  title: string;
  description: string;
  category: BlockCategory;
  icon: IconName;
  tone: string;
  iconTone: string;
  configuration: string;
};

const availableBlocks: WorkflowBlock[] = [
  { id: "form", title: "Formulaire reçu", description: "Démarre dès qu’une réponse arrive.", category: "Déclencheur", icon: "form", tone: "border-[#D9DAFF] bg-[#F8F8FF]", iconTone: "bg-[#E9E9FF] text-[#5B5CF0]", configuration: "Formulaire d’inscription" },
  { id: "email-in", title: "Nouvel e-mail", description: "Démarre à la réception d’un message.", category: "Déclencheur", icon: "email", tone: "border-[#D9DAFF] bg-[#F8F8FF]", iconTone: "bg-[#E9E9FF] text-[#5B5CF0]", configuration: "Boîte de réception" },
  { id: "schedule", title: "Date ou horaire", description: "Démarre à une heure ou une date précise.", category: "Déclencheur", icon: "calendar", tone: "border-[#D9DAFF] bg-[#F8F8FF]", iconTone: "bg-[#E9E9FF] text-[#5B5CF0]", configuration: "Tous les jours à 08:00" },
  { id: "sheet", title: "Ajouter à un tableau", description: "Crée une ligne dans Google Sheets.", category: "Action", icon: "database", tone: "border-[#CDEFD9] bg-[#F6FCF8]", iconTone: "bg-[#E4F8EB] text-[#079455]", configuration: "Contacts · Nouvelle ligne" },
  { id: "email-out", title: "Envoyer un e-mail", description: "Envoie un message personnalisé.", category: "Action", icon: "email", tone: "border-[#CFE8F7] bg-[#F7FCFF]", iconTone: "bg-[#E4F4FC] text-[#0284C7]", configuration: "Modèle de confirmation" },
  { id: "notify", title: "Prévenir l’équipe", description: "Envoie une notification interne.", category: "Action", icon: "bell", tone: "border-[#F1D7BF] bg-[#FFFBF7]", iconTone: "bg-[#FFF0E1] text-[#E87924]", configuration: "Canal admissions" },
  { id: "ai", title: "Analyser avec l’IA", description: "Classe, résume ou extrait une information.", category: "Action", icon: "sparkles", tone: "border-[#E2D2FA] bg-[#FBF8FF]", iconTone: "bg-[#F0E7FC] text-[#7C3AED]", configuration: "Extraire les informations utiles" },
  { id: "condition", title: "Ajouter une condition", description: "Continue seulement si une règle est vraie.", category: "Logique", icon: "branch", tone: "border-[#F0DBB5] bg-[#FFFBF3]", iconTone: "bg-[#FFF1D6] text-[#B7791F]", configuration: "Si le consentement est Oui" },
  { id: "delay", title: "Attendre un délai", description: "Patiente avant de lancer la suite.", category: "Logique", icon: "clock", tone: "border-[#E0E3E8] bg-[#FAFBFC]", iconTone: "bg-[#EEF0F3] text-[#667085]", configuration: "Attendre 2 jours" },
];

const initialBlocks: Array<WorkflowBlock | null> = [
  availableBlocks[0],
  availableBlocks[3],
  availableBlocks[4],
  null,
  null,
  null,
];

export default function WorkflowBuilder() {
  const [blocks, setBlocks] = useState<Array<WorkflowBlock | null>>(initialBlocks);
  const [selectedIndex, setSelectedIndex] = useState(3);
  const [category, setCategory] = useState<"Toutes" | BlockCategory>("Toutes");
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testedUntil, setTestedUntil] = useState(-1);

  const configured = blocks.filter(Boolean).length;
  const progress = Math.round((configured / blocks.length) * 100);
  const filteredBlocks = useMemo(
    () => availableBlocks.filter((block) => category === "Toutes" || block.category === category),
    [category],
  );

  function addBlock(block: WorkflowBlock) {
    setBlocks((current) => current.map((item, index) => (index === selectedIndex ? block : item)));
    setSaved(false);
    const nextEmpty = blocks.findIndex((item, index) => item === null && index > selectedIndex);
    if (nextEmpty !== -1) setSelectedIndex(nextEmpty);
  }

  function removeBlock(index: number) {
    if (index === 0) return;
    setBlocks((current) => current.map((block, blockIndex) => (blockIndex === index ? null : block)));
    setSelectedIndex(index);
    setSaved(false);
  }

  function saveWorkflow() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  }

  async function testWorkflow() {
    setTesting(true);
    setTestedUntil(-1);
    const lastConfigured = blocks.reduce((last, block, index) => (block ? index : last), -1);
    for (let index = 0; index <= lastConfigured; index += 1) {
      if (!blocks[index]) continue;
      await new Promise((resolve) => window.setTimeout(resolve, 430));
      setTestedUntil(index);
    }
    setTesting(false);
  }

  const selectedBlock = blocks[selectedIndex];

  return (
    <div className="space-y-5">
      <div className="rounded-[24px] border border-[#E1E4EA] bg-white p-4 shadow-[0_8px_26px_rgba(17,24,39,0.035)] sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name="workflow" className="h-5 w-5" /></span>
            <div className="min-w-0">
              <label htmlFor="workflow-name" className="sr-only">Nom de l’automatisation</label>
              <input id="workflow-name" defaultValue="Inscription et confirmation JPO" className="w-full border-0 bg-transparent text-base font-semibold tracking-[-0.02em] outline-none sm:text-lg" />
              <p className="mt-0.5 text-xs text-[#98A2B3]">Brouillon · Modifié à l’instant</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={testWorkflow} disabled={testing} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#D7DAE2] bg-white px-4 py-2 text-sm font-semibold text-[#475467] transition hover:border-[#C9CBFF] hover:text-[#5B5CF0] disabled:cursor-wait disabled:opacity-60"><Icon name={testing ? "refresh" : "bolt"} className={`h-4 w-4 ${testing ? "animate-spin" : ""}`} />{testing ? "Test en cours…" : "Tester"}</button>
            <button type="button" onClick={saveWorkflow} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2B2B2B]"><Icon name="check" className="h-4 w-4" />Enregistrer</button>
            <button type="button" className="inline-flex min-h-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(91,92,240,0.22)] transition hover:-translate-y-0.5">Activer</button>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EEF0F3]"><div className="h-full rounded-full bg-gradient-to-r from-[#5B5CF0] to-[#8B5CF6] transition-all duration-500" style={{ width: `${progress}%` }} /></div>
          <span className="shrink-0 text-xs font-semibold text-[#667085]">{configured}/{blocks.length} étapes</span>
        </div>
      </div>

      {saved ? <div role="status" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-2xl bg-[#111827] px-4 py-3 text-sm font-medium text-white shadow-2xl"><Icon name="check" className="h-4 w-4 text-[#A7F3D0]" />Modifications enregistrées dans l’aperçu</div> : null}

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">
        <section aria-label="Parcours d’automatisation" className="rounded-[28px] border border-[#E1E4EA] bg-[#F9FAFB] p-4 sm:p-7">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div><h2 className="text-base font-semibold">Votre parcours</h2><p className="mt-1 text-xs text-[#8A94A6]">Cliquez sur une brique vide puis choisissez l’étape à ajouter.</p></div>
              <span className="hidden rounded-full border border-[#E1E4EA] bg-white px-3 py-1.5 text-xs font-medium text-[#667085] sm:inline-flex">De haut en bas</span>
            </div>

            <ol className="space-y-0">
              {blocks.map((block, index) => {
                const selected = selectedIndex === index;
                const tested = testedUntil >= index && block;
                return (
                  <li key={index} className="relative">
                    {block ? (
                      <button type="button" onClick={() => setSelectedIndex(index)} className={`relative z-10 w-full rounded-[22px] border p-4 text-left shadow-[0_8px_24px_rgba(17,24,39,0.045)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(17,24,39,0.08)] sm:p-5 ${block.tone} ${selected ? 'ring-2 ring-[#5B5CF0] ring-offset-2' : ''}`} aria-pressed={selected}>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12 ${block.iconTone}`}><Icon name={block.icon} className="h-5 w-5" /></span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2"><span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A94A6]">Étape {index + 1} · {block.category}</span>{tested ? <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2 py-0.5 text-[10px] font-semibold text-[#079455]"><Icon name="check" className="h-3 w-3" />Test réussi</span> : null}</div>
                            <p className="mt-1 text-sm font-semibold sm:text-base">{block.title}</p>
                            <p className="mt-1 truncate text-xs text-[#667085] sm:text-sm">{block.configuration}</p>
                          </div>
                          <span className="hidden rounded-xl border border-black/[0.06] bg-white/70 px-3 py-2 text-xs font-medium text-[#667085] sm:inline-flex">Configurer</span>
                        </div>
                      </button>
                    ) : (
                      <button type="button" onClick={() => setSelectedIndex(index)} className={`relative z-10 flex min-h-[92px] w-full items-center justify-center gap-3 rounded-[22px] border-2 border-dashed bg-white px-4 text-sm font-semibold transition ${selected ? 'border-[#5B5CF0] bg-[#F8F8FF] text-[#5B5CF0] shadow-[0_0_0_4px_rgba(91,92,240,0.08)]' : 'border-[#D7DAE2] text-[#8A94A6] hover:border-[#AEB2FF] hover:text-[#5B5CF0]'}`} aria-pressed={selected}>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${selected ? 'bg-[#E9E9FF]' : 'bg-[#F2F4F7]'}`}><Icon name="plus" className="h-4 w-4" /></span>
                        Ajouter la brique {index + 1}
                      </button>
                    )}

                    {block && index !== 0 ? <button type="button" onClick={() => removeBlock(index)} className="absolute -right-2 -top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#E1E4EA] bg-white text-[#98A2B3] opacity-0 shadow-md transition hover:text-[#D92D20] focus:opacity-100 group-hover:opacity-100 sm:opacity-100" aria-label={`Retirer l’étape ${index + 1}`}><Icon name="trash" className="h-3.5 w-3.5" /></button> : null}

                    {index < blocks.length - 1 ? <div className="relative z-0 mx-auto flex h-9 w-8 items-center justify-center"><span className="h-full w-px bg-[#C9CDD6]" /><span className="absolute bottom-1 h-2 w-2 rotate-45 border-b border-r border-[#AAB0BC]" /></div> : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <aside className="self-start rounded-[28px] border border-[#E1E4EA] bg-white p-4 shadow-[0_8px_26px_rgba(17,24,39,0.035)] sm:p-5 xl:sticky xl:top-[92px]">
          <div className="flex items-start justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5CF0]">Étape {selectedIndex + 1}</p><h2 className="mt-1 text-lg font-semibold">{selectedBlock ? 'Configurer la brique' : 'Choisir une brique'}</h2></div>
            {selectedBlock ? <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${selectedBlock.iconTone}`}><Icon name={selectedBlock.icon} className="h-5 w-5" /></span> : null}
          </div>

          {selectedBlock ? (
            <div className="mt-5 space-y-4">
              <label className="block text-xs font-semibold text-[#475467]">Nom de l’étape<input defaultValue={selectedBlock.title} className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] px-3.5 text-sm font-medium" /></label>
              <label className="block text-xs font-semibold text-[#475467]">Configuration<input defaultValue={selectedBlock.configuration} className="mt-2 h-11 w-full rounded-xl border border-[#D7DAE2] px-3.5 text-sm" /></label>
              <div className="rounded-2xl bg-[#F7F8FA] p-3.5 text-xs leading-5 text-[#667085]"><strong className="text-[#344054]">Conseil :</strong> vous pourrez relier vos vrais outils et choisir les champs exacts lors de l’activation sécurisée.</div>
              <button type="button" onClick={() => setBlocks((current) => current.map((item, index) => index === selectedIndex ? null : item))} disabled={selectedIndex === 0} className="inline-flex items-center gap-2 text-xs font-semibold text-[#D92D20] disabled:hidden"><Icon name="trash" className="h-4 w-4" />Supprimer cette étape</button>
              <div className="border-t border-[#EEF0F3] pt-4"><p className="mb-3 text-xs font-semibold text-[#475467]">Remplacer par une autre brique</p></div>
            </div>
          ) : <p className="mt-2 text-sm leading-6 text-[#667085]">Sélectionnez ce que Kirevo doit faire à cette étape. La brique se remplira automatiquement.</p>}

          <div className={`flex gap-1 overflow-x-auto rounded-xl bg-[#F7F8FA] p-1 ${selectedBlock ? '' : 'mt-5'}`}>
            {(['Toutes', 'Déclencheur', 'Action', 'Logique'] as const).map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-[11px] font-semibold transition ${category === item ? 'bg-white text-[#5B5CF0] shadow-sm' : 'text-[#8A94A6] hover:text-[#111111]'}`}>{item}</button>)}
          </div>

          <div className="mt-4 max-h-[500px] space-y-2 overflow-y-auto pr-1">
            {filteredBlocks.map((block) => (
              <button key={block.id} type="button" onClick={() => addBlock(block)} className="group flex w-full items-center gap-3 rounded-2xl border border-[#EEF0F3] p-3 text-left transition hover:border-[#C9CBFF] hover:bg-[#FAFAFF]">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${block.iconTone}`}><Icon name={block.icon} className="h-[18px] w-[18px]" /></span>
                <span className="min-w-0 flex-1"><span className="block text-sm font-semibold group-hover:text-[#5B5CF0]">{block.title}</span><span className="mt-0.5 block truncate text-[11px] text-[#98A2B3]">{block.description}</span></span>
                <Icon name="plus" className="h-4 w-4 text-[#C1C7D0] group-hover:text-[#5B5CF0]" />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
