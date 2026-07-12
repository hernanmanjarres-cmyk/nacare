# 💬 Reto 1 — El asistente que responde por tu negocio

> Parte del [proyecto Nacaré](../../README.md) · Concurso de vibe coding de Platzi

## 📋 Qué pedía el reto

Crear un asistente de IA que conozca un negocio a fondo y responda preguntas de
clientes. Debía incluir:

- ✅ Una base de conocimiento real (FAQ, precios, horarios, políticas). **Mínimo 10 datos.**
- ✅ Responder correctamente lo que está en su base, y **admitir cuando no sabe** (no inventar).
- ✅ Un tono de respuesta definido, coherente con el negocio.
- ✅ Un canal público donde cualquiera pueda hacerle preguntas.

## 🐚 Cómo lo resolvimos

El **asistente virtual de Nacaré**: responde sobre las piezas, colecciones,
envíos, personalización, cómo comprar y ventas al por mayor. Habla con el tono
cálido y cercano de la marca (una vendedora costeña que tutea y usa 🐚 ✨).

**Lo clave:** el asistente **solo responde con datos reales** de Nacaré y, cuando
le preguntan algo que no sabe (un precio exacto, algo fuera del negocio),
lo admite con honestidad y te invita a escribir por WhatsApp. **No inventa.**

### Cómo funciona por dentro

| Parte | Archivo |
|-------|---------|
| Base de conocimiento (13 datos reales) | [`app/src/data/knowledge.ts`](../../app/src/data/knowledge.ts) |
| Catálogo que el asistente conoce | [`app/src/data/products.ts`](../../app/src/data/products.ts) |
| Personalidad + regla de "no inventar" (system prompt) | [`app/src/lib/ai.ts`](../../app/src/lib/ai.ts) |
| API de chat con streaming | [`app/src/app/api/chat/route.ts`](../../app/src/app/api/chat/route.ts) |
| Widget de chat (UI) | [`app/src/components/assistant/chat-widget.tsx`](../../app/src/components/assistant/chat-widget.tsx) |

Usa el **Vercel AI SDK** con **OpenRouter** (una sola API key, muchos modelos).
El modelo por defecto es `google/gemini-2.0-flash-001` (bueno y económico).

## ▶️ Cómo probarlo

1. Consigue una API key gratis en [openrouter.ai/keys](https://openrouter.ai/keys).
2. Agrégala en `app/.env.local`:
   ```
   OPENROUTER_API_KEY=sk-or-tu-key
   ```
3. Arranca la app (`cd app && npm run dev`) y entra a **http://localhost:3000/asistente**.
   También aparece como botón flotante 💬 en todo el sitio.

### Pruébalo con estas preguntas

- *"¿Cómo compro una pieza?"* → responde con el proceso real (WhatsApp).
- *"¿Hacen envíos internacionales?"* → sí, según la base de conocimiento.
- *"¿Cuánto cuesta el collar de perlas?"* → **admite que el precio es por WhatsApp** (no lo inventa).
- *"¿Qué opinas del clima en Marte?"* → **admite que eso no lo sabe** y te redirige a WhatsApp.

## 🔗 Entregables del reto

- **Link público:** _(pega aquí la URL de Vercel cuando despliegues)_
- **Qué lo hace único:** conoce un negocio real (joyería artesanal de Santa Marta),
  habla con su tono auténtico, y respeta la regla de oro de no inventar —
  redirige a WhatsApp, que es el canal de venta real de la marca.
