"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";
import Icon, { type IconName } from "@/components/workspace/Icon";

type ModuleCategory = "Collecte" | "Communication" | "Intelligence" | "Pilotage";

type SolutionModule = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  category: ModuleCategory;
  icon: IconName;
  setupPrice: number;
  monthlyPrice: number;
  recommended?: boolean;
  colors: { main: string; top: string; side: string; ink: string; soft: string };
};

const modules: SolutionModule[] = [
  {
    id: "collecte",
    title: "Collecte intelligente",
    shortTitle: "Collecte",
    description: "Formulaire, QR code et contrôle automatique des informations reçues.",
    category: "Collecte",
    icon: "form",
    setupPrice: 390,
    monthlyPrice: 19,
    recommended: true,
    colors: { main: "#696AF5", top: "#9293FF", side: "#4A4BD4", ink: "#FFFFFF", soft: "#F0F0FF" },
  },
  {
    id: "contacts",
    title: "Base de contacts",
    shortTitle: "Contacts",
    description: "Centralisation, dédoublonnage et mise à jour des contacts dans votre tableau.",
    category: "Collecte",
    icon: "database",
    setupPrice: 290,
    monthlyPrice: 19,
    recommended: true,
    colors: { main: "#25A675", top: "#53C99B", side: "#16805A", ink: "#FFFFFF", soft: "#EAFBF4" },
  },
  {
    id: "emails",
    title: "E-mails automatiques",
    shortTitle: "E-mails",
    description: "Confirmations et messages personnalisés envoyés au bon moment.",
    category: "Communication",
    icon: "email",
    setupPrice: 490,
    monthlyPrice: 39,
    recommended: true,
    colors: { main: "#2E9BD3", top: "#62BDE9", side: "#1F73A1", ink: "#FFFFFF", soft: "#EBF8FF" },
  },
  {
    id: "relances",
    title: "Relances programmées",
    shortTitle: "Relances",
    description: "Scénarios de relance selon une date, un statut ou une absence de réponse.",
    category: "Communication",
    icon: "refresh",
    setupPrice: 590,
    monthlyPrice: 49,
    colors: { main: "#E88A3D", top: "#F5B06D", side: "#B96221", ink: "#FFFFFF", soft: "#FFF4E8" },
  },
  {
    id: "qualification",
    title: "Qualification par IA",
    shortTitle: "Analyse IA",
    description: "Analyse, classement et enrichissement automatique des demandes entrantes.",
    category: "Intelligence",
    icon: "sparkles",
    setupPrice: 690,
    monthlyPrice: 59,
    colors: { main: "#8A55DD", top: "#AF7EF1", side: "#6435AA", ink: "#FFFFFF", soft: "#F5EEFF" },
  },
  {
    id: "notifications",
    title: "Notifications d’équipe",
    shortTitle: "Notifications",
    description: "Alertes internes et demandes de validation pour garder l’humain aux commandes.",
    category: "Communication",
    icon: "bell",
    setupPrice: 290,
    monthlyPrice: 19,
    colors: { main: "#E45B76", top: "#F1849A", side: "#B63A55", ink: "#FFFFFF", soft: "#FFF0F3" },
  },
  {
    id: "dashboard",
    title: "Tableau de bord",
    shortTitle: "Pilotage",
    description: "Indicateurs, journal d’activité et suivi des performances en un seul endroit.",
    category: "Pilotage",
    icon: "chart",
    setupPrice: 590,
    monthlyPrice: 49,
    colors: { main: "#344054", top: "#667085", side: "#1D2939", ink: "#FFFFFF", soft: "#F2F4F7" },
  },
  {
    id: "integration",
    title: "Connexion sur mesure",
    shortTitle: "Intégration",
    description: "Connexion à votre CRM, logiciel métier ou outil disposant d’une API.",
    category: "Pilotage",
    icon: "integration",
    setupPrice: 790,
    monthlyPrice: 69,
    colors: { main: "#C38B28", top: "#E2B755", side: "#926514", ink: "#FFFFFF", soft: "#FFF8E8" },
  },
];

const recommendedIds = modules.filter((item) => item.recommended).map((item) => item.id);
const categories: Array<"Toutes" | ModuleCategory> = ["Toutes", "Collecte", "Communication", "Intelligence", "Pilotage"];

function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function Brick({ module, index, onRemove }: { module: SolutionModule; index: number; onRemove: () => void }) {
  const brickStyle = {
    "--brick-main": module.colors.main,
    "--brick-top": module.colors.top,
    "--brick-side": module.colors.side,
    "--brick-ink": module.colors.ink,
    "--brick-offset": `${Math.min(index * 5, 20)}px`,
    "--brick-delay": `${index * 70}ms`,
  } as CSSProperties;

  return (
    <li className="kirevo-brick-wrap" style={brickStyle}>
      <div className="kirevo-brick">
        <span className="kirevo-brick-stud kirevo-brick-stud-one" />
        <span className="kirevo-brick-stud kirevo-brick-stud-two" />
        <span className="kirevo-brick-stud kirevo-brick-stud-three" />
        <span className="kirevo-brick-stud kirevo-brick-stud-four" />

        <div className="relative z-10 flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-white/16 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] backdrop-blur sm:h-11 sm:w-11">
            <Icon name={module.icon} className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <p className="truncate text-sm font-semibold sm:text-base">{module.shortTitle}</p>
              <span className="hidden rounded-full bg-black/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/85 2xl:inline-flex">Brique {index + 1}</span>
            </div>
            <p className="mt-1 truncate text-[11px] text-white/72 sm:text-xs">{module.description}</p>
          </div>
        </div>

        <div className="relative z-10 hidden shrink-0 text-right sm:block">
          <p className="text-sm font-semibold">{formatPrice(module.setupPrice)}</p>
          <p className="mt-0.5 text-[10px] text-white/68">+ {formatPrice(module.monthlyPrice)}/mois</p>
        </div>

        <button type="button" onClick={onRemove} className="relative z-20 ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black/10 text-white/75 transition hover:bg-black/20 hover:text-white" aria-label={`Retirer la brique ${module.title}`}>
          <Icon name="close" className="h-4 w-4" />
        </button>
      </div>
    </li>
  );
}

export default function WorkflowBuilder() {
  const [selectedIds, setSelectedIds] = useState<string[]>(recommendedIds);
  const [activeCategory, setActiveCategory] = useState<"Toutes" | ModuleCategory>("Toutes");
  const [saved, setSaved] = useState(false);

  const selectedModules = useMemo(
    () => selectedIds.map((id) => modules.find((item) => item.id === id)).filter(Boolean) as SolutionModule[],
    [selectedIds],
  );
  const visibleModules = useMemo(
    () => modules.filter((item) => activeCategory === "Toutes" || item.category === activeCategory),
    [activeCategory],
  );
  const setupTotal = selectedModules.reduce((total, item) => total + item.setupPrice, 0);
  const monthlyTotal = selectedModules.reduce((total, item) => total + item.monthlyPrice, 0);

  function toggleModule(id: string) {
    setSaved(false);
    setSelectedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [id, ...current]);
  }

  function saveConfiguration() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  }

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[28px] border border-[#E1E4EA] bg-white shadow-[0_12px_40px_rgba(17,24,39,0.05)]">
        <div className="relative px-5 py-6 sm:px-7 sm:py-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_0%,rgba(91,92,240,0.14),transparent_34%)]" />
          <div className="relative flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9DAFF] bg-[#F4F4FF] px-3 py-1.5 text-xs font-semibold text-[#5B5CF0]"><Icon name="sparkles" className="h-3.5 w-3.5" />Configurateur modulaire</div>
              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Construisez votre solution, brique par brique.</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667085] sm:text-base">Cliquez sur les modules utiles à votre entreprise. Votre pile 3D et votre estimation se mettent à jour instantanément.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setSelectedIds(recommendedIds)} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#D7DAE2] bg-white px-4 py-2 text-sm font-semibold text-[#475467] transition hover:border-[#C9CBFF] hover:text-[#5B5CF0]"><Icon name="refresh" className="h-4 w-4" />Repartir du modèle</button>
              <button type="button" onClick={saveConfiguration} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2B2B2B]"><Icon name="check" className="h-4 w-4" />Enregistrer l’aperçu</button>
            </div>
          </div>
        </div>

        <div className="grid border-t border-[#EEF0F3] sm:grid-cols-3">
          {[["01", "Choisissez", "Ajoutez ou retirez les modules utiles."], ["02", "Visualisez", "La pile 3D se construit sous vos yeux."], ["03", "Estimez", "Le budget initial et mensuel s’actualise."]].map(([number, title, text], index) => (
            <div key={number} className={`flex gap-3 px-5 py-4 sm:px-6 ${index > 0 ? "border-t border-[#EEF0F3] sm:border-l sm:border-t-0" : ""}`}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F0F0FF] text-xs font-bold text-[#5B5CF0]">{number}</span>
              <div><p className="text-sm font-semibold">{title}</p><p className="mt-0.5 text-xs leading-5 text-[#8A94A6]">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {saved ? <div role="status" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-2xl bg-[#111827] px-4 py-3 text-sm font-medium text-white shadow-2xl"><Icon name="check" className="h-4 w-4 text-[#A7F3D0]" />Configuration enregistrée dans l’aperçu</div> : null}

      <div className="grid gap-5 xl:grid-cols-[260px_minmax(380px,1fr)_290px]">
        <aside className="min-w-0 self-start rounded-[26px] border border-[#E1E4EA] bg-white p-4 shadow-[0_8px_26px_rgba(17,24,39,0.035)] xl:sticky xl:top-[92px]">
          <div className="flex items-center justify-between gap-3">
            <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5CF0]">Catalogue</p><h2 className="mt-1 text-lg font-semibold">Vos briques</h2></div>
            <span className="rounded-full bg-[#F2F4F7] px-2.5 py-1 text-[11px] font-semibold text-[#667085]">{selectedIds.length} choisie{selectedIds.length > 1 ? "s" : ""}</span>
          </div>

          <div className="mt-4 flex gap-1 overflow-x-auto pb-1 xl:flex-col" aria-label="Filtrer les briques">
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-xl px-3 py-2 text-left text-xs font-semibold transition ${activeCategory === category ? "bg-[#F0F0FF] text-[#5B5CF0]" : "text-[#667085] hover:bg-[#F7F8FA] hover:text-[#111111]"}`}>{category}</button>
            ))}
          </div>

          <div className="mt-4 space-y-2 pr-1 xl:max-h-[650px] xl:overflow-y-auto">
            {visibleModules.map((module) => {
              const selected = selectedIds.includes(module.id);
              return (
                <button key={module.id} type="button" onClick={() => toggleModule(module.id)} aria-pressed={selected} className={`group w-full rounded-2xl border p-3 text-left transition ${selected ? "border-[#BFC0FF] bg-[#F8F8FF] shadow-[0_0_0_3px_rgba(91,92,240,0.06)]" : "border-[#EEF0F3] bg-white hover:border-[#D9DAFF] hover:bg-[#FCFCFF]"}`}>
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: module.colors.soft, color: module.colors.main }}><Icon name={module.icon} className="h-4 w-4" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2"><span className="truncate text-sm font-semibold group-hover:text-[#5B5CF0]">{module.shortTitle}</span><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#5B5CF0] bg-[#5B5CF0] text-white" : "border-[#D7DAE2] text-transparent"}`}><Icon name="check" className="h-3 w-3" /></span></span>
                      <span className="mt-1 block text-[10px] leading-4 text-[#98A2B3]">{module.description}</span>
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-black/[0.05] pt-2 text-[10px] font-semibold"><span className="text-[#475467]">{formatPrice(module.setupPrice)} installation</span><span className="text-[#5B5CF0]">{formatPrice(module.monthlyPrice)}/mois</span></div>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="relative min-h-[680px] min-w-0 overflow-hidden rounded-[28px] border border-[#E1E4EA] bg-[linear-gradient(180deg,#FCFCFF_0%,#F4F5F9_100%)] p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(91,92,240,0.11),transparent_42%)]" />
          <div className="relative flex items-start justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5CF0]">Aperçu 3D</p><h2 className="mt-1 text-lg font-semibold">Votre solution Kirevo</h2><p className="mt-1 text-xs text-[#8A94A6]">Chaque clic ajoute une capacité à votre pile.</p></div>
            <span className="rounded-full border border-[#E1E4EA] bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-[#667085] shadow-sm backdrop-blur">{selectedModules.length} module{selectedModules.length > 1 ? "s" : ""}</span>
          </div>

          <div className="relative z-10 flex min-h-[565px] items-center justify-center px-1 pb-12 pt-14 sm:px-5">
            {selectedModules.length ? (
              <div className="w-full max-w-[620px]" aria-live="polite">
                <ol className="kirevo-brick-stack">{selectedModules.map((module, index) => <Brick key={module.id} module={module} index={index} onRemove={() => toggleModule(module.id)} />)}</ol>
                <div className="kirevo-brick-platform" aria-hidden="true"><span>KIREVO</span></div>
              </div>
            ) : (
              <div className="max-w-sm text-center"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] border border-dashed border-[#BFC0FF] bg-white text-[#5B5CF0] shadow-sm"><Icon name="plus" className="h-6 w-6" /></span><h3 className="mt-5 text-lg font-semibold">La pile est prête</h3><p className="mt-2 text-sm leading-6 text-[#667085]">Choisissez une première brique dans le catalogue pour commencer à construire votre solution.</p></div>
            )}
          </div>
        </section>

        <aside className="min-w-0 self-start rounded-[26px] border border-[#E1E4EA] bg-white p-5 shadow-[0_12px_34px_rgba(17,24,39,0.055)] xl:sticky xl:top-[92px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5B5CF0]">Votre estimation</p>
          <h2 className="mt-1 text-lg font-semibold">Résumé du projet</h2>
          <div className="mt-5 space-y-3">
            {selectedModules.length ? selectedModules.map((module) => (
              <div key={module.id} className="flex items-start gap-3 rounded-2xl bg-[#F8F9FB] p-3"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: module.colors.soft, color: module.colors.main }}><Icon name={module.icon} className="h-4 w-4" /></span><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">{module.shortTitle}</p><p className="mt-1 text-[10px] text-[#8A94A6]">{formatPrice(module.setupPrice)} + {formatPrice(module.monthlyPrice)}/mois</p></div></div>
            )) : <p className="rounded-2xl bg-[#F8F9FB] p-4 text-xs leading-5 text-[#8A94A6]">Aucune brique sélectionnée pour le moment.</p>}
          </div>

          <div className="my-5 border-t border-[#EEF0F3]" />
          <div className="space-y-4">
            <div className="flex items-end justify-between gap-3"><div><p className="text-xs font-medium text-[#667085]">Mise en place</p><p className="mt-1 text-[10px] text-[#98A2B3]">Paiement initial estimé</p></div><strong className="text-xl tracking-[-0.03em]">{formatPrice(setupTotal)}</strong></div>
            <div className="flex items-end justify-between gap-3 rounded-2xl bg-[#F0F0FF] p-4"><div><p className="text-xs font-semibold text-[#5B5CF0]">Suivi mensuel</p><p className="mt-1 text-[10px] text-[#7778D9]">Maintenance et supervision</p></div><div className="text-right"><strong className="text-2xl tracking-[-0.04em] text-[#4F46E5]">{formatPrice(monthlyTotal)}</strong><p className="text-[10px] font-semibold text-[#7778D9]">par mois</p></div></div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#F0DBB5] bg-[#FFFBF3] p-3.5 text-[10px] leading-4 text-[#8A6116]"><strong>Estimation indicative HT.</strong> Le périmètre, les outils tiers et le prix final sont confirmés après l’échange de cadrage.</div>
          <Link href="/demo" className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_28px_rgba(91,92,240,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(91,92,240,0.32)]">Faire valider mon projet<Icon name="arrow" className="h-4 w-4" /></Link>
          <p className="mt-3 text-center text-[10px] leading-4 text-[#98A2B3]">Aucune commande ni facturation automatique.</p>
        </aside>
      </div>
    </div>
  );
}
