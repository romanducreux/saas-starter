import Icon from "@/components/workspace/Icon";
import PageHeader from "@/components/workspace/PageHeader";

const values = [62, 74, 69, 88, 82, 96, 90, 108, 102, 118, 111, 128, 124, 142, 136, 154, 149, 168, 160, 178, 171, 188, 182, 201, 196, 214, 209, 226, 219, 238];

const breakdown = [
  { name: "Inscription JPO", runs: "1 248", time: "8 h 14", success: "99,4 %", width: "100%", color: "bg-[#5B5CF0]" },
  { name: "Relance des contacts", runs: "682", time: "5 h 36", success: "98,1 %", width: "71%", color: "bg-[#7C3AED]" },
  { name: "Qualification des demandes", runs: "506", time: "4 h 37", success: "97,8 %", width: "53%", color: "bg-[#0EA5E9]" },
];

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Performances" description="Mesurez l’impact de vos automatisations et repérez rapidement ce qui mérite votre attention." />

      <div className="flex flex-col gap-3 rounded-[22px] border border-[#E1E4EA] bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-1 overflow-x-auto" aria-label="Période d’analyse">
          {['7 jours', '30 jours', '3 mois', '12 mois'].map((period, index) => (
            <button key={period} type="button" className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${index === 1 ? 'bg-[#111111] text-white' : 'text-[#667085] hover:bg-[#F7F8FA] hover:text-[#111111]'}`}>{period}</button>
          ))}
        </div>
        <button type="button" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#E1E4EA] px-4 py-2 text-sm font-medium text-[#475467] transition hover:border-[#C9CBFF] hover:text-[#5B5CF0]"><Icon name="calendar" className="h-4 w-4" /> 20 oct. – 18 nov. 2026</button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Temps total gagné', '18 h 27', '≈ 2,5 journées de travail', 'clock'],
          ['Actions exécutées', '2 436', '+18 % par rapport à octobre', 'bolt'],
          ['Fiabilité globale', '98,6 %', '34 actions à vérifier', 'check'],
        ].map(([label, value, detail, icon]) => (
          <article key={label} className="rounded-[24px] border border-[#E1E4EA] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3 text-sm font-medium text-[#667085]"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0F0FF] text-[#5B5CF0]"><Icon name={icon as 'clock' | 'bolt' | 'check'} className="h-4 w-4" /></span>{label}</div>
            <p className="mt-5 text-3xl font-semibold tracking-[-0.04em]">{value}</p>
            <p className="mt-2 text-xs text-[#98A2B3]">{detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div><h2 className="text-lg font-semibold">Exécutions quotidiennes</h2><p className="mt-1 text-sm text-[#8A94A6]">Volume d’actions réalisées automatiquement</p></div>
          <div className="flex items-center gap-2 text-xs text-[#667085]"><span className="h-2.5 w-2.5 rounded-full bg-[#5B5CF0]" /> Exécutions réussies</div>
        </div>
        <div className="mt-8 flex h-72 items-end gap-1.5 rounded-2xl bg-[linear-gradient(to_bottom,#F0F1F4_1px,transparent_1px)] bg-[size:100%_25%] px-2 pt-4 sm:gap-2 sm:px-4" role="img" aria-label="Graphique en barres montrant une hausse progressive des exécutions sur trente jours">
          {values.map((value, index) => (
            <span key={`${value}-${index}`} title={`${value} exécutions`} className={`flex-1 rounded-t-md transition hover:opacity-75 ${index >= 27 ? 'bg-[#5B5CF0]' : 'bg-[#D9DAFF]'}`} style={{ height: `${value / 2.5}%` }} />
          ))}
        </div>
        <div className="mt-3 flex justify-between px-2 text-[11px] text-[#98A2B3]"><span>20 oct.</span><span>27 oct.</span><span>3 nov.</span><span>10 nov.</span><span>18 nov.</span></div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
          <h2 className="text-lg font-semibold">Détail par automatisation</h2>
          <div className="mt-6 space-y-6">
            {breakdown.map((item) => (
              <div key={item.name}>
                <div className="grid gap-2 text-sm sm:grid-cols-[1fr_auto_auto_auto] sm:items-center sm:gap-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-[#667085]"><strong className="text-[#111111]">{item.runs}</strong> exécutions</p>
                  <p className="text-[#667085]"><strong className="text-[#111111]">{item.time}</strong> gagnées</p>
                  <span className="w-fit rounded-full bg-[#ECFDF3] px-2.5 py-1 text-xs font-semibold text-[#079455]">{item.success}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#F0F1F4]"><div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[28px] border border-[#E1E4EA] bg-white p-5 sm:p-7">
          <div className="flex items-center justify-between"><h2 className="text-lg font-semibold">Santé du système</h2><span className="h-2.5 w-2.5 rounded-full bg-[#12B76A] shadow-[0_0_0_5px_rgba(18,183,106,0.12)]" /></div>
          <div className="mt-6 flex items-center justify-center py-3">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#5B5CF0_0deg_355deg,#EEF0F3_355deg_360deg)] p-3">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white"><strong className="text-3xl tracking-[-0.04em]">98,6 %</strong><span className="mt-1 text-xs text-[#98A2B3]">de réussite</span></div>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-[#667085]">Réussies</span><strong>2 402</strong></div>
            <div className="flex justify-between"><span className="text-[#667085]">À vérifier</span><strong>34</strong></div>
            <div className="flex justify-between"><span className="text-[#667085]">Temps moyen</span><strong>1,8 s</strong></div>
          </div>
        </article>
      </section>
    </div>
  );
}
