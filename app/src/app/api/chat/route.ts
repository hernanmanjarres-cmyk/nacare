import { NextRequest, NextResponse } from "next/server";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { getOpenRouter, AI_MODEL, buildSystemPrompt } from "@/lib/ai";

/**
 * P1 — Asistente de IA de Nacaré (streaming).
 *
 * Recibe el historial del chat (formato UIMessage del AI SDK) y devuelve la
 * respuesta en streaming. El system prompt (lib/ai.ts) contiene la base de
 * conocimiento real y la regla de "no inventar / admitir cuando no sabe".
 */

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const openrouter = getOpenRouter();
  if (!openrouter) {
    return NextResponse.json(
      {
        error:
          "El asistente no está configurado. Agrega OPENROUTER_API_KEY en .env.local.",
      },
      { status: 503 },
    );
  }

  let messages: UIMessage[];
  try {
    const body = await req.json();
    messages = body.messages;
    if (!Array.isArray(messages)) throw new Error("messages debe ser un array");
  } catch {
    return NextResponse.json({ error: "Petición inválida" }, { status: 400 });
  }

  const result = streamText({
    model: openrouter(AI_MODEL),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
    temperature: 0.6,
  });

  return result.toUIMessageStreamResponse();
}
