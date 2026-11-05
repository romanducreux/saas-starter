import { NextResponse } from "next/server";

const MAX_LENGTHS = {
  nom: 120,
  email: 254,
  entreprise: 160,
  taille: 80,
  besoin: 3000,
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

  return NextResponse.redirect(new URL("/merci", request.url), 303);
}

export async function POST(request: Request) {
  try {
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("MAKE_WEBHOOK_URL n'est pas configurée.");
    }

    const webhook = new URL(webhookUrl);

    if (webhook.protocol !== "https:") {
      throw new Error("MAKE_WEBHOOK_URL doit utiliser HTTPS.");
    }

    const formData = await request.formData();

    if (String(formData.get("website") ?? "").trim()) {
      return successResponse(request);
    }

    const payload = {
      nom: readField(formData, "nom"),
      email: readField(formData, "email").toLowerCase(),
      entreprise: readField(formData, "entreprise"),
      taille: readField(formData, "taille"),
      besoin: readField(formData, "besoin"),
      source: readField(formData, "source") || "site-web",
      confidentialite:
        String(formData.get("confidentialite") ?? "") === "acceptee",
      date: new Date().toISOString(),
    };

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);

    if (
      !payload.nom ||
      !emailIsValid ||
      !payload.entreprise ||
      payload.besoin.length < 10 ||
      !payload.confidentialite
    ) {
      return NextResponse.json(
        { error: "Certaines informations sont manquantes ou invalides." },
        { status: 400 }
      );
    }

    const makeResponse = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    if (!makeResponse.ok) {
      throw new Error(`Erreur Make : ${makeResponse.status}`);
    }

    return successResponse(request);
  } catch (error) {
    console.error("Erreur lors de l'envoi du prospect :", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer la demande." },
      { status: 500 }
    );
  }
}
