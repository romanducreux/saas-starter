import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import AuthForm from "@/components/workspace/AuthForm";
import Icon from "@/components/workspace/Icon";
import { isSupabaseConfigured } from "@/lib/supabase/config";

type AuthMode = "login" | "signup" | "forgot";

const benefits = [
  "Construisez vos automatisations sans jargon technique",
  "Suivez les exécutions et le temps réellement gagné",
  "Gardez une validation humaine sur les actions importantes",
];

export default function AuthPage({ mode }: { mode: AuthMode }) {
  return (
    <main className="min-h-screen bg-[#F7F8FA] px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-[1380px] overflow-hidden rounded-[30px] border border-[#E1E4EA] bg-white shadow-[0_28px_90px_rgba(17,24,39,0.09)] sm:min-h-[calc(100vh-3rem)] lg:grid-cols-[0.92fr_1.08fr]">
        <section className="flex flex-col px-6 py-6 sm:px-10 sm:py-8 lg:px-14 xl:px-20">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Kirevo — Accueil" className="inline-flex rounded-xl">
              <BrandLogo />
            </Link>
            <Link href="/" className="text-xs font-semibold text-[#667085] transition hover:text-[#111111] sm:text-sm">
              Retour au site
            </Link>
          </div>

          <div className="my-auto w-full max-w-[520px] py-12 lg:py-16">
            <AuthForm mode={mode} configured={isSupabaseConfigured} />
          </div>

          <p className="text-xs leading-5 text-[#98A2B3]">
            © 2026 Kirevo · Accès privé et sécurisé.
          </p>
        </section>

        <aside className="relative hidden overflow-hidden bg-[#111827] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_14%,rgba(91,92,240,0.55),transparent_32%),radial-gradient(circle_at_82%_85%,rgba(124,58,237,0.35),transparent_28%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur">
              <Icon name="sparkles" className="h-4 w-4" />
              Un espace pensé pour rester simple
            </span>
            <h2 className="mt-8 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] xl:text-5xl">
              Transformez une idée en parcours automatisé.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/65">
              Assemblez les étapes comme des briques, vérifiez le résultat et pilotez l’ensemble depuis une seule interface.
            </p>
          </div>

          <div className="relative mt-12 rounded-[30px] border border-white/12 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl xl:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Relance après inscription</p>
                <p className="mt-1 text-xs text-white/50">4 étapes configurées</p>
              </div>
              <span className="rounded-full bg-[#A7F3D0]/15 px-3 py-1.5 text-xs font-semibold text-[#A7F3D0]">Prêt</span>
            </div>
            <div className="mt-6 space-y-3">
              {[
                ["form", "Formulaire reçu", "Déclencheur"],
                ["database", "Contact enregistré", "Google Sheets"],
                ["email", "Confirmation envoyée", "E-mail"],
              ].map(([icon, label, detail], index) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#C7D2FE]">
                    <Icon name={icon as "form" | "database" | "email"} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{label}</p>
                    <p className="mt-0.5 text-xs text-white/45">{detail}</p>
                  </div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A7F3D0]/15 text-[#A7F3D0]">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {index < 2 ? <span className="sr-only">Étape suivante</span> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 space-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 text-sm text-white/70">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#C7D2FE]">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
