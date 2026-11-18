import Link from "next/link";
import Icon from "@/components/workspace/Icon";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: {
    href: string;
    label: string;
  };
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667085] sm:text-base">
          {description}
        </p>
      </div>

      {action ? (
        <Link
          href={action.href}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#5B5CF0] to-[#7C3AED] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(91,92,240,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(91,92,240,0.3)]"
        >
          <Icon name="plus" className="h-4 w-4" />
          {action.label}
        </Link>
      ) : null}
    </header>
  );
}
