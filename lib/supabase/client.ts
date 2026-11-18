import { createBrowserClient } from "@supabase/ssr";
import {
  isSupabaseConfigured,
  supabasePublishableKey,
  supabaseUrl,
} from "@/lib/supabase/config";

export function createClient() {
  if (!isSupabaseConfigured) {
    throw new Error("La connexion sécurisée Kirevo n’est pas encore configurée.");
  }

  return createBrowserClient(supabaseUrl, supabasePublishableKey);
}
