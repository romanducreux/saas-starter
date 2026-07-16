export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-6 py-32 text-[#111827]">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold">Contact</h1>

        <p className="mt-8 text-lg text-gray-600">
          Une question ou un projet d’automatisation ?
        </p>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Kirevo</h2>

          <div className="mt-6 space-y-4 text-gray-700">
            <p>Email : contact@kirevo.fr</p>

            <p>
              Réserver un appel :
              {" "}
              <a
                href="https://calendly.com/roman-ducreux/decouverte-kirevo"
                className="font-semibold text-[#5B5CF0]"
              >
                Calendly
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}