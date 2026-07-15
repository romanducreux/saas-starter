"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const workflowSteps = [
  {
    title: "Formulaire reçu",
    description: "Les informations du prospect sont récupérées.",
  },
  {
    title: "Analyse IA",
    description: "Le besoin est résumé et qualifié automatiquement.",
  },
  {
    title: "CRM mis à jour",
    description: "Le prospect est ajouté dans le CRM.",
  },
  {
    title: "Réponse générée",
    description: "Un e-mail personnalisé est préparé.",
  },
];

type Prospect = {
  name: string;
  company: string;
  email: string;
  need: string;
  priority: "Chaud" | "Moyen";
  status: string;
};

const initialProspects: Prospect[] = [
  {
    name: "Sophie Martin",
    company: "Agence Nova",
    email: "sophie@agence-nova.fr",
    need: "Automatiser les relances clients et le suivi des prospects.",
    priority: "Chaud",
    status: "Répondu",
  },
  {
    name: "Thomas Bernard",
    company: "Bernard Immobilier",
    email: "thomas@bernard-immo.fr",
    need: "Qualifier automatiquement les demandes reçues depuis le site.",
    priority: "Moyen",
    status: "Analysé",
  },
];

export default function DemoInteractivePage() {
  const [name, setName] = useState("Julien Moreau");
  const [company, setCompany] = useState("Moreau Conseil");
  const [email, setEmail] = useState("julien@moreau-conseil.fr");
  const [need, setNeed] = useState(
    "Nous souhaitons automatiser la qualification et la réponse aux demandes commerciales."
  );

  const [prospects, setProspects] =
    useState<Prospect[]>(initialProspects);

  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isRunning) return;

    setIsRunning(true);
    setIsFinished(false);
    setActiveStep(0);

    try {
      const apiRequest = fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: name,
          entreprise: company,
          email: email,
          taille: "Non renseignée",
          besoin: need,
          source: "Démo interactive",
        }),
      });

      for (let step = 1; step < workflowSteps.length; step += 1) {
        await new Promise((resolve) => setTimeout(resolve, 900));
        setActiveStep(step);
      }

      const response = await apiRequest;

      if (!response.ok) {
        throw new Error("L’automatisation n’a pas pu être exécutée.");
      }

      const newProspect: Prospect = {
        name: name,
        company: company,
        email: email,
        need: need,
        priority: need.length > 50 ? "Chaud" : "Moyen",
        status: "Envoyé",
      };

    setProspects((currentProspects) => [
      newProspect,
      ...currentProspects,
    ]);

    setIsFinished(true);
  } catch (error) {
    console.error(error);
    alert(
      "Une erreur est survenue pendant l’automatisation. Vérifie que le scénario Make est activé."
    );

    setActiveStep(-1);
  } finally {
    setIsRunning(false);
  }
}

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F9FB] text-[#111827]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(91,92,240,0.18),transparent_38%)]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
            <Image
              src="/kirevo-transparent.png"
              alt="Kirevo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
          </div>

          <span className="text-xl font-semibold tracking-tight">
            Kirevo
          </span>
        </a>

        <a
          href="/demo"
          className="rounded-full bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#5B5CF0]/25 transition hover:scale-105"
        >
          Demander une démo
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B5CF0]">
            Démo interactive
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Voyez Kirevo traiter un prospect en quelques secondes.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
            Modifiez les informations, puis lancez l’automatisation pour
            voir le workflow fonctionner.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="rounded-[2.5rem] border border-[#E5E7EB] bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold text-[#5B5CF0]">
              1. Nouvelle demande
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Simulez l’arrivée d’un prospect.
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Nom complet"
              />

              <input
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                required
                className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Entreprise"
              />

              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
                className="w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Email professionnel"
              />

              <textarea
                value={need}
                onChange={(event) => setNeed(event.target.value)}
                required
                className="min-h-36 w-full rounded-2xl border border-[#E5E7EB] px-5 py-4 outline-none transition focus:border-[#5B5CF0]"
                placeholder="Besoin du prospect"
              />

              <button
                type="submit"
                disabled={isRunning}
                className="w-full rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C7DFF] px-6 py-4 font-semibold text-white shadow-xl shadow-[#5B5CF0]/20 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {isRunning
                  ? "Automatisation en cours..."
                  : "Lancer l’automatisation"}
              </button>
            </form>
          </section>

          <section className="rounded-[2.5rem] bg-gradient-to-br from-[#111827] to-[#252B3A] p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">
                  Traitement en direct
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Workflow Kirevo
                </h2>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  isRunning
                    ? "bg-amber-400/10 text-amber-300"
                    : "bg-emerald-400/10 text-emerald-300"
                }`}
              >
                {isRunning ? "Traitement..." : "Opérationnel"}
              </span>
            </div>

            <div className="mt-10 space-y-5">
              {workflowSteps.map((step, index) => {
                const isActive = activeStep === index;
                const isCompleted = activeStep > index || isFinished;

                return (
                  <div
                    key={step.title}
                    className={`flex gap-4 rounded-2xl border p-5 transition-all duration-500 ${
                      isActive
                        ? "scale-[1.02] border-[#7C7DFF] bg-[#5B5CF0]/15 shadow-xl shadow-[#5B5CF0]/10"
                        : isCompleted
                          ? "border-emerald-400/20 bg-emerald-400/5"
                          : "border-white/10 bg-white/5 opacity-60"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition ${
                        isCompleted
                          ? "bg-emerald-400 text-[#111827]"
                          : isActive
                            ? "bg-[#7C7DFF] text-white"
                            : "bg-white text-[#111827]"
                      }`}
                    >
                      {isCompleted
                        ? "✓"
                        : String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <p className="font-semibold">{step.title}</p>

                      <p className="mt-1 text-sm leading-6 text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {isFinished && (
              <div className="mt-6 animate-rise rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-200">
                <p className="font-semibold">
                  Automatisation terminée
                </p>

                <p className="mt-1 text-sm text-emerald-100/70">
                  Le prospect a été analysé, ajouté au CRM et sa
                  réponse a été préparée.
                </p>
              </div>
            )}
          </section>
        </div>

        <section className="mt-10 rounded-[2.5rem] border border-[#E5E7EB] bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#5B5CF0]">
                Tableau de bord
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Prospects analysés
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [String(prospects.length), "Prospects"],
                [
                  String(
                    prospects.filter(
                      (prospect) => prospect.priority === "Chaud"
                    ).length
                  ),
                  "Prioritaires",
                ],
                ["18h", "Temps gagné"],
                ["98%", "Réussite"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-[#F8F9FB] px-5 py-4 text-center"
                >
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-xs text-[#6B7280]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-[#E5E7EB]">
            <div className="hidden grid-cols-[1fr_1fr_1.5fr_0.7fr_0.7fr] gap-4 bg-[#F8F9FB] px-6 py-4 text-sm font-semibold text-[#6B7280] md:grid">
              <span>Prospect</span>
              <span>Entreprise</span>
              <span>Besoin</span>
              <span>Priorité</span>
              <span>Statut</span>
            </div>

            {prospects.map((prospect, index) => (
              <div
                key={`${prospect.email}-${index}`}
                className="grid gap-3 border-t border-[#E5E7EB] px-6 py-5 first:border-t-0 md:grid-cols-[1fr_1fr_1.5fr_0.7fr_0.7fr] md:items-center"
              >
                <div>
                  <p className="font-semibold">{prospect.name}</p>
                  <p className="mt-1 text-xs text-[#6B7280]">
                    {prospect.email}
                  </p>
                </div>

                <span className="text-sm text-[#6B7280]">
                  {prospect.company}
                </span>

                <span className="text-sm text-[#6B7280]">
                  {prospect.need}
                </span>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    prospect.priority === "Chaud"
                      ? "bg-red-50 text-red-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {prospect.priority}
                </span>

                <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {prospect.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2.5rem] border border-[#E5E7EB] bg-white p-8">
            <p className="text-sm font-semibold text-[#5B5CF0]">
              Avant Kirevo
            </p>

            <div className="mt-6 space-y-4 text-[#6B7280]">
              <p>✕ Lire et trier chaque demande manuellement</p>
              <p>✕ Copier les informations dans le CRM</p>
              <p>✕ Décider quel prospect rappeler en premier</p>
              <p>✕ Rédiger chaque réponse depuis zéro</p>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#EEF0FF] p-8">
            <p className="text-sm font-semibold text-[#5B5CF0]">
              Avec Kirevo
            </p>

            <div className="mt-6 space-y-4 text-[#374151]">
              <p>✓ Analyse instantanée de chaque demande</p>
              <p>✓ Création automatique dans le CRM</p>
              <p>✓ Priorisation intelligente des prospects</p>
              <p>✓ Réponse personnalisée générée par l’IA</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}