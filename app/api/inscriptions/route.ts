import { NextResponse } from "next/server";
import { getRegistrationEvent } from "@/lib/registration-events";

const MAX_LENGTHS = {
  prenom: 80,
  nom: 100,
  email: 254,
  telephone: 30,
  formation_actuelle: 160,
  formation_interet: 160,
  event_id: 80,
  source: 40,
} as const;

function readField(
  formData: FormData,
  field: keyof typeof MAX_LENGTHS
) {
  return String(formData.get(field) ?? "")
    .trim()
    .slice(0, MAX_LENGTHS[field]);
}

function successResponse(request: Request, eventId: string) {
  if (request.headers.get("accept")?.includes("application/json")) {
    return NextResponse.json({ ok: true });
  }

  const redirectUrl = new URL("/merci-inscription", request.url);
  redirectUrl.searchParams.set("event", eventId);

  return NextResponse.redirect(redirectUrl, 303);
}

export async function POST(request: Request) {
  try {
    const webhookUrl =
      process.env.MAKE_INSCRIPTION_WEBHOOK_URL ??
      process.env.MAKE_PROSPECT_WEBHOOK_URL ??
      process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("Le webhook Make des inscriptions n'est pas configuré.");
    }

    const webhook = new URL(webhookUrl);

    if (webhook.protocol !== "https:") {
      throw new Error("Le webhook Make doit utiliser HTTPS.");
    }

    const formData = await request.formData();
    const requestedEventId = readField(formData, "event_id");
    const registrationEvent = getRegistrationEvent(requestedEventId);

    if (String(formData.get("website") ?? "").trim()) {
      return successResponse(request, registrationEvent.id);
    }

    const payload = {
      client_id: registrationEvent.clientId,
      event_id: registrationEvent.id,
      event_name: registrationEvent.name,
      prenom: readField(formData, "prenom"),
      nom: readField(formData, "nom"),
      email: readField(formData, "email").toLowerCase(),
      telephone: readField(formData, "telephone"),
      formation_actuelle: readField(formData, "formation_actuelle"),
      formation_interet: readField(formData, "formation_interet"),
      consentement_relance:
        String(formData.get("consentement_relance") ?? "") === "oui",
      source: readField(formData, "source") || "QR Code",
    };

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    const phoneIsValid = /^[+0-9().\s-]{8,30}$/.test(payload.telephone);

    if (
      !payload.prenom ||
      !payload.nom ||
      !emailIsValid ||
      !phoneIsValid ||
      !payload.formation_actuelle ||
      !payload.formation_interet
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

    return successResponse(request, registrationEvent.id);
  } catch (error) {
    console.error("Erreur lors de l'inscription étudiant :", error);

    return NextResponse.json(
      { error: "Impossible d'enregistrer l'inscription." },
      { status: 500 }
    );
  }
}
