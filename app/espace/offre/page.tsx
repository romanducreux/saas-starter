import type { CSSProperties } from "react";
import Link from "next/link";
import Icon from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";
import { formatMoney, getWorkspaceData } from "@/lib/workspace/data";

const brickPalette = [
  { main: "#5B5CF0", top: "#818CF8", side: "#4142C7", ink: "#FFFFFF" },
  { main: "#7C3AED", top: "#A78BFA", side: "#5B21B6", ink: "#FFFFFF" },
  { main: "#0EA5E9", top: "#7DD3FC", side: "#0369A1", ink: "#FFFFFF" },
  { main: "#14B8A6", top: "#5EEAD4", side: "#0F766E", ink: "#FFFFFF" },
];

function formatDate(value: string | null) {
  return value
    ? new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T12:00:00`))
    : "À définir";
}

export default async function OfferPage() {
  const workspace = await getWorkspaceData();
  const { offer, modules } = workspace;

  if (!offer) {
    return (
      <div className="space-y-8">
        <PageHeader title="Mon offre" description="Retrouvez ici la solution Kirevo retenue pour votre entreprise." />
        <section className="overflow-hidden rounded-[30px] border border-[#E1E4EA] bg-white p-6 shadow-[0_12px_35px_rgba(17,24,39,0.045)] sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#F0F0FF] text-[#5B5CF0]"><Icon name="offer" className="h-7 w-7" /></span>
            <h2 className="mt-6 text-2xl font-semibold tracking-[-0.035em]">Votre offre n’est pas encore finalisée</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#667085]">Composez une première solution avec les briques Kirevo. Une fois validée ensemble, son détail, ses modules et son suivi apparaîtront ici.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/espace/automatisations/nouvelle" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2B2B2B]"><Icon name="plus" className="h-4 w-4" />Composer une solution</Link>
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-[#D7DAE2] px-5 py-3 text-sm font-semibold text-[#475467] transition hover:border-[#C9CBFF] hover:text-[#5B5CF0]">Échanger avec Kirevo</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const status = {
    active: { label: "Active", className: "bg-[#ECFDF3] text-[#067647]" },
    draft: { label: "En préparation", className: "bg-[#FFF4E8] text-[#B54708]" },
    paused: { label: "En pause", className: "bg-[#FFF4E8] text-[#B54708]" },
    ended: { label: "Terminée", className: "bg-[#F2F4F7] text-[#667085]" },
  }[offer.status];

  return (
    <div className="space-y-8">
      <PageHeader title="Mon offre" description="Une lecture claire de votre solution, des modules inclus et de son suivi." />

      <section className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <article className="rounded-[30px] border border-[#E1E4EA] bg-[#111827] p-6 text-white shadow-[0_18px_48px_rgba(17,24,39,0.14)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A5B4FC]">Offre Kirevo</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">{offer.name}</h2>
            </div>
            <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${status.className}`}>{status.label}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/60">{offer.description ?? "Une solution modulaire adaptée à votre fonctionnement."}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs text-white/50">Mise en place</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{formatMoney(offer.setupAmountCents, offer.currency)}</p>
              <p className="mt-1 text-xs text-white/40">paiement initial</p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs text-white/50">Accompagnement</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{formatMoney(offer.monthlyAmountCents, offer.currency)}</p>
              <p className="mt-1 text-xs text-white/40">par mois</p>
            </div>
          </div>

          <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
            <div className="flex items-center justify-between gap-4"><dt className="text-white/50">Début</dt><dd className="font-medium">{formatDate(offer.startsAt)}</dd></div>
            <div className="flex items-center justify-between gap-4"><dt className="text-white/50">Prochaine échéance</dt><dd className="font-medium">{formatDate(offer.renewsAt)}</dd></div>
            <div className="flex items-center justify-between gap-4"><dt className="text-white/50">Modules inclus</dt><dd className="font-medium">{modules.length}</dd></div>
          </dl>
        </article>

        <article className="rounded-[30px] border border-[#E1E4EA] bg-white p-5 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div><h2 className="text-lg font-semibold">Vos briques actives</h2><p className="mt-1 text-sm text-[#8A94A6]">Les capacités comprises dans votre solution.</p></div>
            <Link href="/espace/automatisations/nouvelle" className="text-sm font-semibold text-[#5B5CF0] hover:text-[#4546D9]">Faire évoluer l’offre</Link>
          </div>

          {modules.length ? (
            <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <ol className="kirevo-brick-stack" aria-label="Modules inclus dans l’offre">
                  {modules.map((module, index) => {
                    const color = brickPalette[index % brickPalette.length];
                    const style = {
                      "--brick-main": color.main,
                      "--brick-top": color.top,
                      "--brick-side": color.side,
                      "--brick-ink": color.ink,
                      "--brick-offset": `${Math.min(index * 5, 20)}px`,
                      "--brick-delay": `${index * 70}ms`,
                    } as CSSProperties;
                    return (
                      <li key={module.id} className="kirevo-brick-wrap" style={style}>
                        <div className="kirevo-brick">
                          <span className="kirevo-brick-stud kirevo-brick-stud-one" /><span className="kirevo-brick-stud kirevo-brick-stud-two" /><span className="kirevo-brick-stud kirevo-brick-stud-three" /><span className="kirevo-brick-stud kirevo-brick-stud-four" />
                          <div className="relative z-10 flex h-full items-center px-5"><span className="truncate text-sm font-semibold">{module.title}</span></div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
                <div className="kirevo-brick-platform" aria-hidden="true"><span>KIREVO</span></div>
              </div>
              <div className="space-y-3">
                {modules.map((module, index) => (
                  <div key={module.id} className="rounded-2xl border border-[#EEF0F3] p-4">
                    <div className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: brickPalette[index % brickPalette.length].main }} /><div><h3 className="text-sm font-semibold">{module.title}</h3><p className="mt-1 text-xs leading-5 text-[#8A94A6]">{module.description ?? "Module configuré pour votre entreprise."}</p></div></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-[24px] border border-dashed border-[#D7DAE2] bg-[#FAFAFC] p-8 text-center text-sm text-[#667085]">Les modules apparaîtront ici dès qu’ils auront été rattachés à l’offre.</div>
          )}
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Suivi transparent", "Consultez vos résultats et les actions réalisées depuis l’espace.", "chart"],
          ["Support centralisé", "Retrouvez l’aide et les prochaines étapes sans multiplier les outils.", "help"],
          ["Solution évolutive", "Ajoutez des briques lorsque vos besoins et votre activité évoluent.", "workflow"],
        ].map(([title, description, icon]) => (
          <article key={title} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name={icon as "chart" | "help" | "workflow"} className="h-5 w-5" /></span>
            <h3 className="mt-4 text-sm font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667085]">{description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
