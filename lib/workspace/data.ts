import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type WorkspaceOffer = {
  id: string;
  name: string;
  description: string | null;
  status: "draft" | "active" | "paused" | "ended";
  setupAmountCents: number;
  monthlyAmountCents: number;
  currency: string;
  startsAt: string | null;
  renewsAt: string | null;
};

export type WorkspaceModule = {
  id: string;
  key: string;
  title: string;
  description: string | null;
  setupAmountCents: number;
  monthlyAmountCents: number;
  position: number;
};

export type WorkspaceAutomation = {
  id: string;
  name: string;
  description: string;
  status: "draft" | "active" | "paused";
  runs: number;
  successRate: number | null;
  updatedAt: string;
};

export type WorkspaceActivity = {
  id: string;
  title: string;
  description: string;
  status: "info" | "success" | "warning" | "error";
  createdAt: string;
};

export type WorkspaceIntegration = {
  provider: string;
  label: string;
  status: "available" | "connected" | "attention" | "disabled";
};

export type WorkspaceData = {
  mode: "preview" | "live";
  user: { id: string; name: string; email: string; initials: string };
  organization: { id: string; name: string; role: "owner" | "admin" | "member"; sector: string | null; timezone: string };
  offer: WorkspaceOffer | null;
  modules: WorkspaceModule[];
  metrics: {
    executions: number;
    executionsChange: number | null;
    savedSeconds: number;
    successRate: number | null;
    activeAutomations: number;
    warnings: number;
    averageDurationMs: number | null;
  };
  dailyExecutions: Array<{ date: string; count: number }>;
  automations: WorkspaceAutomation[];
  activities: WorkspaceActivity[];
  integrations: WorkspaceIntegration[];
};

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return (parts.length > 1 ? `${parts[0][0]}${parts.at(-1)?.[0] ?? ""}` : parts[0]?.slice(0, 2) ?? "K")
    .toUpperCase();
}

function isoDaysAgo(days: number) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

function buildDailySeries(events: Array<{ executed_at: string }>) {
  const counts = new Map<string, number>();
  for (const event of events) {
    const key = event.executed_at.slice(0, 10);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return Array.from({ length: 30 }, (_, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (29 - index));
    const key = date.toISOString().slice(0, 10);
    return { date: key, count: counts.get(key) ?? 0 };
  });
}

function previewData(): WorkspaceData {
  const dailyCounts = [62, 74, 69, 88, 82, 96, 90, 108, 102, 118, 111, 128, 124, 142, 136, 154, 149, 168, 160, 178, 171, 188, 182, 201, 196, 214, 209, 226, 219, 238];
  const dailyExecutions = dailyCounts.map((count, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - index));
    return { date: date.toISOString().slice(0, 10), count };
  });

  return {
    mode: "preview",
    user: { id: "preview", name: "Roman Ducreux", email: "contact@kirevo.fr", initials: "RD" },
    organization: { id: "preview", name: "Kirevo", role: "owner", sector: "Services aux entreprises", timezone: "Europe/Paris" },
    offer: {
      id: "preview",
      name: "Solution Kirevo sur mesure",
      description: "Une offre modulaire construite autour de vos besoins et de vos outils.",
      status: "active",
      setupAmountCents: 149000,
      monthlyAmountCents: 24900,
      currency: "EUR",
      startsAt: "2026-11-01",
      renewsAt: "2026-12-01",
    },
    modules: [
      { id: "1", key: "collecte", title: "Collecte intelligente", description: "Formulaires, validation et centralisation des données.", setupAmountCents: 45000, monthlyAmountCents: 7900, position: 1 },
      { id: "2", key: "communication", title: "Communication automatisée", description: "Confirmations, relances et notifications ciblées.", setupAmountCents: 52000, monthlyAmountCents: 8900, position: 2 },
      { id: "3", key: "pilotage", title: "Pilotage & performance", description: "Suivi des exécutions, alertes et indicateurs utiles.", setupAmountCents: 42000, monthlyAmountCents: 8100, position: 3 },
    ],
    metrics: { executions: 2436, executionsChange: 18, savedSeconds: 66420, successRate: 98.6, activeAutomations: 4, warnings: 34, averageDurationMs: 1800 },
    dailyExecutions,
    automations: [
      { id: "1", name: "Inscription JPO", description: "Formulaire → Google Sheets → E-mail", status: "active", runs: 1248, successRate: 99.4, updatedAt: new Date(Date.now() - 180000).toISOString() },
      { id: "2", name: "Relance des contacts", description: "Date atteinte → Vérification → Relance", status: "active", runs: 682, successRate: 98.1, updatedAt: new Date(Date.now() - 1080000).toISOString() },
      { id: "3", name: "Qualification des demandes", description: "E-mail → Analyse IA → Équipe", status: "active", runs: 506, successRate: 97.8, updatedAt: new Date(Date.now() - 2520000).toISOString() },
      { id: "4", name: "Suivi des devis", description: "Devis envoyé → Délai → Notification", status: "draft", runs: 0, successRate: null, updatedAt: new Date(Date.now() - 86400000).toISOString() },
    ],
    activities: [
      { id: "1", title: "Confirmation envoyée", description: "Inscription JPO", status: "success", createdAt: new Date(Date.now() - 180000).toISOString() },
      { id: "2", title: "Contact ajouté", description: "Google Sheets · JPO Bordeaux", status: "success", createdAt: new Date(Date.now() - 240000).toISOString() },
      { id: "3", title: "Parcours exécuté", description: "Relance des contacts", status: "info", createdAt: new Date(Date.now() - 1080000).toISOString() },
    ],
    integrations: [
      { provider: "google_sheets", label: "Google Sheets", status: "connected" },
      { provider: "brevo", label: "Brevo", status: "connected" },
      { provider: "make", label: "Make", status: "connected" },
    ],
  };
}

type MembershipRow = {
  organization_id: string;
  role: "owner" | "admin" | "member";
  organizations: { id: string; name: string; sector: string | null; timezone: string } | Array<{ id: string; name: string; sector: string | null; timezone: string }> | null;
};

export const getWorkspaceData = cache(async (): Promise<WorkspaceData> => {
  const supabase = await createClient();
  if (!supabase) return previewData();

  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;
  if (!user) redirect("/connexion");

  const [{ data: profile }, { data: membershipData }] = await Promise.all([
    supabase.from("profiles").select("full_name").eq("user_id", user.id).maybeSingle(),
    supabase
      .from("organization_members")
      .select("organization_id, role, organizations(id, name, sector, timezone)")
      .eq("user_id", user.id)
      .limit(1)
      .maybeSingle(),
  ]);

  const membership = membershipData as MembershipRow | null;
  const relatedOrganization = Array.isArray(membership?.organizations)
    ? membership.organizations[0]
    : membership?.organizations;
  const organization = relatedOrganization ?? {
    id: membership?.organization_id ?? "",
    name: String(user.user_metadata.company_name ?? "Mon entreprise"),
    sector: null,
    timezone: "Europe/Paris",
  };
  const fullName = profile?.full_name ?? String(user.user_metadata.full_name ?? user.email?.split("@")[0] ?? "Client Kirevo");

  if (!organization.id) {
    return {
      ...previewData(),
      mode: "live",
      user: { id: user.id, name: fullName, email: user.email ?? "", initials: initialsFor(fullName) },
      organization: { id: "", name: organization.name, role: membership?.role ?? "member", sector: null, timezone: "Europe/Paris" },
      offer: null,
      modules: [],
      metrics: { executions: 0, executionsChange: null, savedSeconds: 0, successRate: null, activeAutomations: 0, warnings: 0, averageDurationMs: null },
      dailyExecutions: buildDailySeries([]),
      automations: [],
      activities: [],
      integrations: [],
    };
  }

  const sixtyDaysAgo = isoDaysAgo(59);
  const [offerResult, automationsResult, eventsResult, activitiesResult, integrationsResult] = await Promise.all([
    supabase.from("offers").select("*").eq("organization_id", organization.id).order("created_at", { ascending: false }).limit(1).maybeSingle(),
    supabase.from("automations").select("id, name, description, status, updated_at").eq("organization_id", organization.id).order("updated_at", { ascending: false }),
    supabase.from("execution_events").select("automation_id, status, duration_ms, estimated_seconds_saved, executed_at").eq("organization_id", organization.id).gte("executed_at", sixtyDaysAgo).order("executed_at", { ascending: true }),
    supabase.from("activity_events").select("id, title, description, status, created_at").eq("organization_id", organization.id).order("created_at", { ascending: false }).limit(20),
    supabase.from("integration_connections").select("provider, label, status").eq("organization_id", organization.id),
  ]);

  const offerRow = offerResult.data;
  const offer: WorkspaceOffer | null = offerRow ? {
    id: offerRow.id,
    name: offerRow.name,
    description: offerRow.description,
    status: offerRow.status,
    setupAmountCents: offerRow.setup_amount_cents,
    monthlyAmountCents: offerRow.monthly_amount_cents,
    currency: offerRow.currency,
    startsAt: offerRow.starts_at,
    renewsAt: offerRow.renews_at,
  } : null;

  const modulesResult = offer
    ? await supabase.from("offer_modules").select("*").eq("offer_id", offer.id).order("position", { ascending: true })
    : { data: [] };
  const modules: WorkspaceModule[] = (modulesResult.data ?? []).map((module) => ({
    id: module.id,
    key: module.module_key,
    title: module.title,
    description: module.description,
    setupAmountCents: module.setup_amount_cents,
    monthlyAmountCents: module.monthly_amount_cents,
    position: module.position,
  }));

  const events = eventsResult.data ?? [];
  const currentStart = new Date(isoDaysAgo(29));
  const currentEvents = events.filter((event) => new Date(event.executed_at) >= currentStart);
  const previousEvents = events.filter((event) => new Date(event.executed_at) < currentStart);
  const executionsChange = previousEvents.length
    ? ((currentEvents.length - previousEvents.length) / previousEvents.length) * 100
    : currentEvents.length ? 100 : null;
  const successes = currentEvents.filter((event) => event.status === "success").length;
  const durations = currentEvents.map((event) => event.duration_ms).filter((value): value is number => typeof value === "number");

  const automationStats = new Map<string, { runs: number; successes: number }>();
  for (const event of currentEvents) {
    if (!event.automation_id) continue;
    const stats = automationStats.get(event.automation_id) ?? { runs: 0, successes: 0 };
    stats.runs += 1;
    if (event.status === "success") stats.successes += 1;
    automationStats.set(event.automation_id, stats);
  }

  const automations: WorkspaceAutomation[] = (automationsResult.data ?? []).map((automation) => {
    const stats = automationStats.get(automation.id) ?? { runs: 0, successes: 0 };
    return {
      id: automation.id,
      name: automation.name,
      description: automation.description ?? "Parcours Kirevo",
      status: automation.status,
      runs: stats.runs,
      successRate: stats.runs ? (stats.successes / stats.runs) * 100 : null,
      updatedAt: automation.updated_at,
    };
  });

  return {
    mode: "live",
    user: { id: user.id, name: fullName, email: user.email ?? "", initials: initialsFor(fullName) },
    organization: { id: organization.id, name: organization.name, role: membership?.role ?? "member", sector: organization.sector, timezone: organization.timezone },
    offer,
    modules,
    metrics: {
      executions: currentEvents.length,
      executionsChange,
      savedSeconds: currentEvents.reduce((total, event) => total + event.estimated_seconds_saved, 0),
      successRate: currentEvents.length ? (successes / currentEvents.length) * 100 : null,
      activeAutomations: automations.filter((automation) => automation.status === "active").length,
      warnings: currentEvents.filter((event) => event.status !== "success").length,
      averageDurationMs: durations.length ? durations.reduce((sum, duration) => sum + duration, 0) / durations.length : null,
    },
    dailyExecutions: buildDailySeries(currentEvents),
    automations,
    activities: (activitiesResult.data ?? []).map((activity) => ({
      id: String(activity.id),
      title: activity.title,
      description: activity.description ?? "",
      status: activity.status,
      createdAt: activity.created_at,
    })),
    integrations: (integrationsResult.data ?? []).map((integration) => ({
      provider: integration.provider,
      label: integration.label,
      status: integration.status,
    })),
  };
});

export function formatDuration(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.round((totalSeconds % 3600) / 60);
  return hours ? `${hours} h ${String(minutes).padStart(2, "0")}` : `${minutes} min`;
}

export function formatRelativeDate(value: string) {
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 60) return "À l’instant";
  if (seconds < 3600) return `Il y a ${Math.floor(seconds / 60)} min`;
  if (seconds < 86400) return `Il y a ${Math.floor(seconds / 3600)} h`;
  if (seconds < 172800) return "Hier";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(new Date(value));
}

export function formatMoney(cents: number, currency = "EUR") {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency, maximumFractionDigits: 0 }).format(cents / 100);
}
