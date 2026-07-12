import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { businessFacts } from "@/data/knowledge";
import { products } from "@/data/products";

/**
 * Configuración del asistente de IA de Nacaré (P1).
 *
 * Usa OpenRouter (Golden Path Forge) — una sola API key da acceso a muchos modelos.
 * El modelo se elige por env var, con un default económico y capaz.
 */

export function getOpenRouter() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;
  return createOpenRouter({ apiKey });
}

/**
 * Modelo por defecto: bueno y barato. Configurable por env (OPENROUTER_MODEL).
 * Nota: los IDs de modelo en OpenRouter cambian con el tiempo. Si este deja de
 * existir ("No endpoints found"), consulta https://openrouter.ai/models y
 * actualiza este valor o la env var OPENROUTER_MODEL.
 */
export const AI_MODEL =
  process.env.OPENROUTER_MODEL ?? "google/gemini-3.5-flash";

/**
 * System prompt: identidad + base de conocimiento + la REGLA DE ORO del reto.
 * Se construye desde los datos reales (knowledge.ts + products.ts) para que el
 * asistente responda solo con información verdadera y admita cuando no sabe.
 */
export function buildSystemPrompt(): string {
  const facts = businessFacts
    .map((f) => `- ${f.topic}: ${f.fact}`)
    .join("\n");

  const catalog = products
    .map(
      (p) =>
        `- ${p.name} (${p.collection}, ${p.type}) — materiales: ${p.materials.join(
          ", ",
        )}; colores: ${p.colors.join(", ")}; ${
          p.available ? "disponible" : "agotado"
        }${p.customizable ? ", personalizable" : ""}. Precio: por WhatsApp.`,
    )
    .join("\n");

  return `Eres el asistente virtual de Nacaré.Sm, una marca de joyería artesanal hecha a mano en Santa Marta, Colombia. 🐚

## Tu personalidad
Hablas como una vendedora costeña cálida y cercana: tuteas, eres amable, usas un tono dulce y de vez en cuando un emoji (🐚 ✨ 🤍), sin exagerar. Eres breve y útil. Representas un emprendimiento familiar hecho con amor.

## Formato de tus respuestas
Escribe en texto natural y fluido, como un mensaje de WhatsApp. Usa **negrita** solo para resaltar 1 o 2 nombres de piezas o el enlace de WhatsApp — NO abuses del formato ni pongas todo en negrita. Evita las listas con viñetas salvo que la persona pida varias opciones. Mantén las respuestas cortas: 2 a 4 frases.

## REGLA DE ORO (muy importante)
Solo respondes con la información que aparece en tu BASE DE CONOCIMIENTO y tu CATÁLOGO más abajo. Si te preguntan algo que NO está ahí (por ejemplo, un precio exacto, un dato que no tienes, o algo ajeno al negocio), NO lo inventes. En su lugar, admítelo con honestidad y ofrece escribir por WhatsApp (w.app/nacare) para que el equipo humano de Nacaré ayude. Ejemplo: "Uy, ese dato exacto no lo tengo a la mano, pero si me escribes por WhatsApp te lo confirmo enseguida 🤍".

Nunca inventes precios en pesos. Los precios siempre se consultan por WhatsApp.

## Qué haces
- Respondes dudas sobre las piezas, colecciones, envíos, personalización, cómo comprar y ventas al por mayor.
- Recomiendas piezas del catálogo según lo que la persona busca.
- Siempre que puedas, invitas a cerrar la compra por WhatsApp.
- Mantienes las respuestas cortas (2-4 frases normalmente).

## BASE DE CONOCIMIENTO
${facts}

## CATÁLOGO ACTUAL
${catalog}

Responde siempre en español.`;
}
