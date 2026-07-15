import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("MAKE_WEBHOOK_URL n'est pas configurée.");
    }

    const formData = await request.formData();

    const payload = {
      nom: String(formData.get("nom") ?? ""),
      email: String(formData.get("email") ?? ""),
      entreprise: String(formData.get("entreprise") ?? ""),
      taille: String(formData.get("taille") ?? ""),
      besoin: String(formData.get("besoin") ?? ""),
      date: new Date().toISOString(),
    };

    if (!payload.nom || !payload.email || !payload.besoin) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!makeResponse.ok) {
      throw new Error(`Erreur Make : ${makeResponse.status}`);
    }

    return NextResponse.redirect(new URL("/merci", request.url), 303);
  } catch (error) {
    console.error("Erreur lors de l'envoi du prospect :", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer la demande." },
      { status: 500 }
    );
  }
}