import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import ResetPasswordForm from "@/components/workspace/ResetPasswordForm";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Nouveau mot de passe",
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto min-h-[calc(100vh-2rem)] max-w-2xl rounded-[30px] border border-[#E1E4EA] bg-white px-6 py-6 shadow-[0_28px_90px_rgba(17,24,39,0.09)] sm:min-h-[calc(100vh-3rem)] sm:px-10 sm:py-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="Kirevo — Accueil"><BrandLogo /></Link>
          <Link href="/connexion" className="text-sm font-semibold text-[#667085] hover:text-[#111111]">Retour à la connexion</Link>
        </div>
        <div className="mx-auto flex min-h-[70vh] max-w-lg items-center py-14">
          <ResetPasswordForm configured={isSupabaseConfigured} />
        </div>
      </div>
    </main>
  );
}
