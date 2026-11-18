"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import BrandLogo from "@/components/BrandLogo";
import Icon, { type IconName } from "@/components/workspace/Icon";
import { signOutAction } from "@/app/actions/auth";

const primaryNavigation: Array<{
  href: string;
  label: string;
  icon: IconName;
  exact?: boolean;
}> = [
  { href: "/espace", label: "Vue d’ensemble", icon: "dashboard", exact: true },
  { href: "/espace/offre", label: "Mon offre", icon: "offer" },
  { href: "/espace/performances", label: "Performances", icon: "chart" },
  { href: "/espace/automatisations", label: "Automatisations", icon: "workflow" },
  { href: "/espace/activite", label: "Activité", icon: "activity" },
  { href: "/espace/integrations", label: "Connexions", icon: "integration" },
];

const secondaryNavigation: Array<{
  href: string;
  label: string;
  icon: IconName;
}> = [
  { href: "/espace/parametres", label: "Paramètres", icon: "settings" },
  { href: "/espace/aide", label: "Aide", icon: "help" },
];

function isCurrent(pathname: string, href: string, exact = false) {
  return exact ? pathname === href : pathname.startsWith(href);
}

function NavigationLink({
  href,
  label,
  icon,
  exact,
  onClick,
}: {
  href: string;
  label: string;
  icon: IconName;
  exact?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = isCurrent(pathname, href, exact);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group flex min-h-11 items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[#F0F0FF] text-[#4F46E5] shadow-[inset_0_0_0_1px_rgba(91,92,240,0.08)]"
          : "text-[#667085] hover:bg-[#F7F8FA] hover:text-[#111111]"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-xl transition ${
          active
            ? "bg-white text-[#5B5CF0] shadow-sm"
            : "bg-[#F7F8FA] text-[#98A2B3] group-hover:text-[#5B5CF0]"
        }`}
      >
        <Icon name={icon} className="h-[17px] w-[17px]" />
      </span>
      <span>{label}</span>
    </Link>
  );
}

function WorkspaceNavigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <nav aria-label="Navigation de l’espace" className="space-y-1">
        {primaryNavigation.map((item) => (
          <NavigationLink key={item.href} {...item} onClick={onNavigate} />
        ))}
      </nav>

      <div className="my-5 border-t border-[#EEF0F3]" />

      <nav aria-label="Aide et paramètres" className="space-y-1">
        {secondaryNavigation.map((item) => (
          <NavigationLink key={item.href} {...item} onClick={onNavigate} />
        ))}
      </nav>
    </>
  );
}

type AppShellProps = {
  children: React.ReactNode;
  identity: { name: string; email: string; initials: string; organizationName: string };
  mode: "preview" | "live";
};

export default function AppShell({ children, identity, mode }: AppShellProps) {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => mobileMenuRef.current?.removeAttribute("open");

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#111111]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[272px] border-r border-[#E8EAF0] bg-white px-4 py-5 lg:flex lg:flex-col">
        <Link
          href="/"
          aria-label="Kirevo — Retour au site"
          className="inline-flex w-fit rounded-xl px-2"
        >
          <BrandLogo />
        </Link>

        <div className="mt-7 flex-1 overflow-y-auto pr-1">
          <WorkspaceNavigation />
        </div>

        <div className="rounded-[22px] border border-[#E1E4EA] bg-[#F9FAFB] p-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B5CF0] to-[#8B5CF6] text-sm font-semibold text-white">
              {identity.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{identity.name}</p>
              <p className="truncate text-xs text-[#8A94A6]">{identity.organizationName}</p>
            </div>
            {mode === "live" ? (
              <form action={signOutAction}>
                <button type="submit" aria-label="Se déconnecter" title="Se déconnecter" className="flex h-8 w-8 items-center justify-center rounded-xl text-[#98A2B3] transition hover:bg-white hover:text-[#5B5CF0] focus:outline-none focus:ring-2 focus:ring-[#5B5CF0]/20">
                  <Icon name="logout" className="h-4 w-4" />
                </button>
              </form>
            ) : <Icon name="more" className="h-5 w-5 text-[#98A2B3]" />}
          </div>
        </div>
      </aside>

      <div className="lg:pl-[272px]">
        <header className="sticky top-0 z-30 border-b border-[#E8EAF0] bg-white/90 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3">
            <div className="flex items-center gap-2 lg:hidden">
              <details ref={mobileMenuRef} className="group relative">
                <summary className="flex h-11 w-11 list-none items-center justify-center rounded-2xl border border-[#E1E4EA] bg-white text-[#111111] transition hover:border-[#C9CBFF] hover:bg-[#F7F7FF] [&::-webkit-details-marker]:hidden">
                  <span className="sr-only">Ouvrir le menu de l’espace</span>
                  <Icon name="menu" className="h-5 w-5 group-open:hidden" />
                  <Icon name="close" className="hidden h-5 w-5 group-open:block" />
                </summary>
                <div className="absolute left-0 top-[calc(100%+10px)] w-[min(330px,calc(100vw-2rem))] rounded-[26px] border border-[#E1E4EA] bg-white p-3 shadow-[0_24px_65px_rgba(17,24,39,0.17)]">
                  <div className="mb-3 flex items-center justify-between border-b border-[#EEF0F3] px-2 pb-3">
                    <BrandLogo />
                  </div>
                  <WorkspaceNavigation onNavigate={closeMobileMenu} />
                </div>
              </details>
              <Link href="/espace" aria-label="Kirevo — Espace" className="rounded-xl">
                <BrandLogo />
              </Link>
            </div>

            <div className="hidden max-w-sm flex-1 items-center gap-3 rounded-2xl border border-[#E1E4EA] bg-[#F9FAFB] px-3.5 py-2.5 md:flex lg:ml-0">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#5B5CF0] shadow-sm">
                <Icon name="offer" className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-[#98A2B3]">Espace de travail</span>
                <span className="block truncate text-sm font-semibold text-[#344054]">{identity.organizationName}</span>
              </span>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <span className="hidden rounded-full border border-[#D9DAFF] bg-[#F2F2FF] px-3 py-1.5 text-xs font-semibold text-[#5B5CF0] sm:inline-flex">
                {mode === "preview" ? "Aperçu produit" : "Espace sécurisé"}
              </span>
              <Link
                href="/espace/activite"
                className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E1E4EA] bg-white text-[#667085] transition hover:border-[#C9CBFF] hover:text-[#5B5CF0]"
                aria-label="Consulter l’activité"
              >
                <Icon name="bell" className="h-[18px] w-[18px]" />
              </Link>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B5CF0] to-[#8B5CF6] text-xs font-semibold text-white sm:hidden">
                {identity.initials}
              </span>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
