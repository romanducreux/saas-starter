export default function MerciPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F9FB] px-8 text-[#111827]">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#5B5CF0]">
          Demande envoyée
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Merci pour votre demande.
        </h1>

        <p className="mt-6 text-lg text-[#6B7280]">
          Nous vous recontacterons sous 24 à 48 heures.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-2xl bg-[#111827] px-8 py-4 font-semibold text-white"
        >
          Retour à l’accueil
        </a>
      </div>
    </main>
  );
}