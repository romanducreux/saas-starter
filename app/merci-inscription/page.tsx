import { getRegistrationEvent } from "@/lib/registration-events";

export const metadata = {
  title: { absolute: "Inscription enregistrée" },
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
    <main className="flex min-h-screen items-center justify-center bg-[#F4F7FB] px-6 py-20 text-[#182230]">
      <div className="max-w-2xl rounded-[2rem] border border-[#D9E2EF] bg-white px-7 py-12 text-center shadow-[0_30px_80px_rgba(28,45,74,0.12)] sm:px-12 sm:py-16">
        <span
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl text-emerald-600"
        >
          ✓
        </span>

        <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
          Inscription enregistrée
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
          Merci, vos informations ont bien été enregistrées.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#667085]">
          Votre inscription à « {registrationEvent.name} » a été transmise.
          Vous recevrez son récapitulatif à l&apos;adresse indiquée.
        </p>

        <p className="mt-8 text-sm text-[#7C8497]">
          Vous pouvez maintenant fermer cette page.
        </p>
      </div>
    </main>
  );
}
