# ✨ Reto 3 — La forma más creativa de capturar leads

> Parte del [proyecto Nacaré](../../README.md) · Concurso de vibe coding de Platzi

## 📋 Qué pedía el reto

Construir una herramienta que la gente quiera usar por sí misma, y que a cambio
del valor que entrega, las personas dejen sus datos voluntariamente. **Primero
das algo útil, después pides el contacto.** Debía incluir:

- ✅ Una herramienta interactiva que dé valor real **antes** de pedir nada.
- ✅ Un intercambio justo: la persona deja sus datos para recibir su resultado completo.
- ✅ Los datos capturados se guardan de verdad en una base de datos.
- ✅ **No** cuenta un formulario simple de suscripción — la creatividad del incentivo es lo que se evalúa.

## 🐚 Cómo lo resolvimos

El quiz **"¿Qué pieza de Nacaré va con tu energía?"**: la persona responde 5
preguntas rápidas y divertidas sobre su estilo y personalidad, y recibe:

1. Su **"energía Nacaré"** (Alma de Mar 🌊, Corazón Romántico 💕, Elegancia Serena ✨ o Espíritu Vibrante 🎨) con un diagnóstico personalizado.
2. La **pieza real del catálogo** que mejor va con ella, con foto y botón de WhatsApp.

**El intercambio justo:** todo eso lo recibe **gratis y al instante**. Solo
*después* de ver su resultado le ofrecemos: "¿Te enviamos tu diagnóstico
completo + un cupón?" → ahí deja su correo. El valor va primero; el contacto,
después.

### Por qué es creativo (no un formulario frío)

- El diagnóstico de personalidad es entretenido y se siente hecho para ti.
- Recomienda una pieza **real**, así que es útil de verdad (no genérico).
- El correo se pide como un regalo ("tu resultado + cupón"), no como un peaje.

### Cómo funciona por dentro

| Parte | Archivo |
|-------|---------|
| Preguntas + perfiles de energía | [`app/src/data/quiz.ts`](../../app/src/data/quiz.ts) |
| Algoritmo que calcula tu pieza ideal | [`app/src/lib/quiz.ts`](../../app/src/lib/quiz.ts) |
| Experiencia del quiz (UI) | [`app/src/components/quiz/quiz-flow.tsx`](../../app/src/components/quiz/quiz-flow.tsx) |
| API que guarda el lead (misma que P2) | [`app/src/app/api/leads/route.ts`](../../app/src/app/api/leads/route.ts) |

Los leads del quiz se guardan en la **misma tabla `leads`** de Supabase que el
catálogo, pero marcados con `source: "quiz"` y con el resultado del diagnóstico
en el campo `interest` — así sabes de dónde vino cada lead.

## ▶️ Cómo probarlo

1. Configura Supabase igual que en el [Reto 2](../reto-02-catalogo/README.md)
   (mismo `.env.local`, misma tabla `leads`).
2. Arranca la app (`cd app && npm run dev`) y entra a **http://localhost:3000/quiz**.
3. Responde las 5 preguntas → mira tu diagnóstico y tu pieza ideal.
4. Deja tu correo en "¿Te enviamos tu resultado + un cupón?".
5. En Supabase → **Table Editor → leads**, verás el registro con `source = quiz`. ✅

## 🔗 Entregables del reto

- **Link público:** <https://nacare-rho.vercel.app/quiz>
- **Qué lo hace único:** en vez de un "suscríbete a nuestro newsletter", la
  persona hace un quiz divertido que le recomienda una joya real según su
  personalidad. Da valor y entretenimiento primero; el correo se deja porque
  se quiere el resultado completo y el cupón, no por obligación.
