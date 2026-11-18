"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function readText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
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
