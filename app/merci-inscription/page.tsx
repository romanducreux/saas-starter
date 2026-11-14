import Link from "next/link";
import { getRegistrationEvent } from "@/lib/registration-events";

export const metadata = {
  title: "Inscription enregistrée",
  robots: { index: false, follow: false },
};

type MerciInscriptionPageProps = {
  searchParams: Promise<{ event?: string | string[] }>;
};

export default async function MerciInscriptionPage({
  searchParams,
}: MerciInscriptionPageProps) {
  const params = await searchParams;
  const registrationEvent = getRegistrationEvent(params.event);

  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#F7F8FA] px-6 py-20 text-[#111111]">
      <div className="max-w-xl text-center">
        <span
          aria-hidden="true"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-600"
        >
          ✓
        </span>

        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#5B5CF0]">
          Inscription enregistrée
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
          Merci, vos informations ont bien été enregistrées.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#667085]">
          Votre inscription à « {registrationEvent.name} » a été transmise.
          Vous recevrez les informations utiles à l&apos;adresse indiquée.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[#111827] px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#20283A]"
        >
          Découvrir Kirevo
        </Link>
      </div>
    </main>
  );
}
