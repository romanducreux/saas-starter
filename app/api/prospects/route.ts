import { NextResponse } from "next/server";

const MAX_LENGTHS = {
  prenom: 80,
  nom: 100,
  email: 254,
  telephone: 30,
  entreprise: 160,
  fonction: 120,
  interet: 120,
  message: 2000,
  client: 80,
  campagne: 80,
  source: 80,
} as const;

function readField(
  formData: FormData,
  field: keyof typeof MAX_LENGTHS
) {
  return String(formData.get(field) ?? "")
    .trim()
    .slice(0, MAX_LENGTHS[field]);
}

function successResponse(request: Request) {
  if (request.headers.get("accept")?.includes("application/json")) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.redirect(new URL("/merci-prospect", request.url), 303);
}

export async function POST(request: Request) {
  try {
    const webhookUrl =
      process.env.MAKE_PROSPECT_WEBHOOK_URL ?? process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("Le webhook Make du formulaire prospect n'est pas configuré.");
    }

    const webhook = new URL(webhookUrl);

    if (webhook.protocol !== "https:") {
      throw new Error("Le webhook Make doit utiliser HTTPS.");
    }

    const formData = await request.formData();

    if (String(formData.get("website") ?? "").trim()) {
      return successResponse(request);
    }

    const payload = {
      type: "prospect-client",
      prenom: readField(formData, "prenom"),
      nom: readField(formData, "nom"),
      email: readField(formData, "email").toLowerCase(),
      telephone: readField(formData, "telephone"),
      entreprise: readField(formData, "entreprise"),
      fonction: readField(formData, "fonction"),
      interet: readField(formData, "interet"),
      message: readField(formData, "message"),
      client: readField(formData, "client") || "kirevo-demo",
      campagne: readField(formData, "campagne") || "formulaire-general",
      source: readField(formData, "source") || "qr-code",
      confidentialite:
        String(formData.get("confidentialite") ?? "") === "acceptee",
      date: new Date().toISOString(),
    };

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);

    if (
      !payload.prenom ||
      !payload.nom ||
      !emailIsValid ||
      !payload.interet ||
      !payload.confidentialite
    ) {
      return NextResponse.json(
        { error: "Certaines informations sont manquantes ou invalides." },
        { status: 400 }
      );
    }

    const makeResponse = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    if (!makeResponse.ok) {
      throw new Error(`Erreur Make : ${makeResponse.status}`);
    }

    return successResponse(request);
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire prospect :", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer les informations." },
      { status: 500 }
    );
  }
}
