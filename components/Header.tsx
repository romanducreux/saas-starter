"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import BrandLogo from "@/components/BrandLogo";

const navigation = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/solutions", label: "Solutions" },
  { href: "/cas-clients", label: "Cas clients" },
  { href: "/about", label: "À propos" },
  { href: "/tarifs", label: "Tarifs" },
];

function Brand() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center rounded-xl"
      aria-label="Kirevo — Accueil"
    >
      <BrandLogo />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const isCurrent = (href: string) =>
    href === "/solutions"
      ? pathname.startsWith("/solutions")
      : pathname === href;

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between rounded-[24px] border border-black/[0.05] bg-white/95 px-4 py-3 shadow-[0_14px_45px_rgba(17,24,39,0.09)] backdrop-blur-xl sm:px-6">
        <Brand />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 text-sm font-medium text-[#667085] lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`rounded-lg px-1 py-2 transition-colors hover:text-[#111111] ${
                isCurrent(item.href) ? "text-[#5B5CF0]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/demo"
            className="hidden rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(91,92,240,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(91,92,240,0.32)] sm:inline-flex lg:px-6"
          >
            Demander une démo
          </Link>

          <details ref={mobileMenuRef} className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-[#E1E4EA] bg-white text-[#111111] transition hover:border-[#C9CBFF] hover:bg-[#F7F7FF] [&::-webkit-details-marker]:hidden">
              <span className="sr-only group-open:hidden">
                Ouvrir le menu principal
              </span>
              <span className="sr-only hidden group-open:inline">
                Fermer le menu principal
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 group-open:hidden"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="hidden h-5 w-5 group-open:block"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            </summary>

            <nav
              aria-label="Navigation mobile"
              className="absolute right-0 top-[calc(100%+12px)] w-[min(320px,calc(100vw-2rem))] rounded-3xl border border-[#E1E4EA] bg-white p-3 shadow-[0_22px_55px_rgba(17,24,39,0.16)]"
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => mobileMenuRef.current?.removeAttribute("open")}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[#F7F7FF] hover:text-[#5B5CF0] ${
                      isCurrent(item.href)
                        ? "bg-[#F1F1FF] text-[#5B5CF0]"
                        : "text-[#475467]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/demo"
                  onClick={() => mobileMenuRef.current?.removeAttribute("open")}
                  className="mt-2 rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-4 py-3 text-center text-sm font-semibold text-white sm:hidden"
                >
                  Demander une démo
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
