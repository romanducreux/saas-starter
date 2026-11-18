"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function readText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

const modulePricing: Record<string, { setup: number; monthly: number }> = {
  collecte: { setup: 390, monthly: 19 },
  contacts: { setup: 290, monthly: 19 },
  emails: { setup: 490, monthly: 39 },
  relances: { setup: 590, monthly: 49 },
  qualification: { setup: 690, monthly: 59 },
  notifications: { setup: 290, monthly: 19 },
  dashboard: { setup: 590, monthly: 49 },
  integration: { setup: 790, monthly: 69 },
};

const allowedModuleIds = new Set(Object.keys(modulePricing));

export type SaveCompositionResult = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function saveAutomationCompositionAction(input: {
  name: string;
  moduleIds: string[];
}): Promise<SaveCompositionResult> {
  const name = input.name.trim().slice(0, 160);
  const moduleIds = [...new Set(input.moduleIds)].filter((id) => allowedModuleIds.has(id));

  if (name.length < 2) {
    return { status: "error", message: "Donnez un nom à votre composition." };
  }
  if (!moduleIds.length || moduleIds.length !== input.moduleIds.length) {
    return { status: "error", message: "Sélectionnez au moins une brique valide." };
  }

  const estimates = moduleIds.reduce(
    (totals, id) => ({
      setup: totals.setup + modulePricing[id].setup,
      monthly: totals.monthly + modulePricing[id].monthly,
    }),
    { setup: 0, monthly: 0 },
  );

  const supabase = await createClient();
  if (!supabase) {
    return { status: "error", message: "La sauvegarde sera disponible après l’activation de votre compte." };
  }

  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;
  if (!user) return { status: "error", message: "Reconnectez-vous pour enregistrer cette composition." };

  const { data: membership } = await supabase
    .from("organization_members")
    .select("organization_id, role")
    .eq("user_id", user.id)
    .limit(1)
    .maybeSingle();

  if (!membership?.organization_id || !["owner", "admin"].includes(membership.role)) {
    return { status: "error", message: "Seul un administrateur peut créer un brouillon." };
  }

  const { error } = await supabase.from("automations").insert({
    organization_id: membership.organization_id,
    created_by: user.id,
    name,
    description: `${moduleIds.length} brique${moduleIds.length > 1 ? "s" : ""} à cadrer avec Kirevo`,
    status: "draft",
    configuration: {
      module_ids: moduleIds,
      estimated_setup_amount_eur: estimates.setup,
      estimated_monthly_amount_eur: estimates.monthly,
      source: "kirevo_3d_builder",
    },
  });

  if (error) {
    return { status: "error", message: "Le brouillon n’a pas pu être enregistré. Réessayez dans un instant." };
  }

  revalidatePath("/espace/automatisations");
  revalidatePath("/espace");
  return { status: "success", message: "Composition enregistrée dans vos automatisations." };
}

export async function updateWorkspaceSettingsAction(formData: FormData) {
  const supabase = await createClient();
  if (!supabase) redirect("/espace/parametres?erreur=configuration");

  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;
  if (!user) redirect("/connexion");

  const fullName = readText(formData, "fullName");
  const organizationName = readText(formData, "organizationName");
  const sector = readText(formData, "sector");
  const timezone = readText(formData, "timezone") || "Europe/Paris";
  const organizationId = readText(formData, "organizationId");

  if (fullName.length < 2 || organizationName.length < 2 || !organizationId) {
    redirect("/espace/parametres?erreur=validation");
  }

  const { data: membership } = await supabase
    .from("organization_members")
    .select("role")
    .eq("organization_id", organizationId)
    .eq("user_id", user.id)
    .maybeSingle();
  const canEditOrganization = membership?.role === "owner" || membership?.role === "admin";

  const profileUpdate = await supabase.from("profiles").update({ full_name: fullName }).eq("user_id", user.id);
  const organizationUpdate = canEditOrganization
    ? await supabase.from("organizations").update({ name: organizationName, sector: sector || null, timezone }).eq("id", organizationId)
    : { error: null };

  if (profileUpdate.error || organizationUpdate.error) {
    redirect("/espace/parametres?erreur=enregistrement");
  }

  await supabase.auth.updateUser({ data: { ...user.user_metadata, full_name: fullName, company_name: organizationName } });
  revalidatePath("/espace", "layout");
  redirect("/espace/parametres?enregistre=1");
}
