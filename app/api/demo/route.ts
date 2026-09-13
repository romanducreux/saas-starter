import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("MAKE_WEBHOOK_URL n'est pas configurée.");
    }

    const body = await request.json();

    if (!body?.nom || !body?.email || !body?.besoin) {
      return NextResponse.json(
        { success: false, message: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erreur webhook");
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erreur lors de la démo interactive :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible d'exécuter la démonstration.",
      },
      {
        status: 500,
      }
    );
  }
}
