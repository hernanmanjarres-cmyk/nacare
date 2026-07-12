/**
 * P3 — Quiz "¿Qué pieza de Nacaré va con tu energía?"
 *
 * Herramienta interactiva que da VALOR antes de pedir datos (requisito del reto):
 * la persona responde 5 preguntas y recibe un diagnóstico de su "energía Nacaré"
 * + la pieza real del catálogo que mejor le va. El correo se pide DESPUÉS, para
 * enviarle su resultado completo + un cupón. El diagnóstico es el gancho.
 *
 * Cada opción suma a uno o varios "vibes" que existen en products.ts, así que el
 * resultado siempre apunta a una pieza real del catálogo.
 */

export interface QuizOption {
  label: string;
  emoji: string;
  /** Vibes que suma esta opción (deben existir en los `vibes` de products.ts). */
  vibes: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "plan",
    question: "Tu plan perfecto un sábado es…",
    options: [
      { label: "Playa, sol y mar", emoji: "🌊", vibes: ["playera", "veraniega", "marina", "costera"] },
      { label: "Café y un buen libro", emoji: "📖", vibes: ["elegante", "minimalista", "sofisticada"] },
      { label: "Salir con las amigas", emoji: "💃", vibes: ["divertida", "juvenil", "vibrante"] },
      { label: "Algo con propósito o causa", emoji: "🤍", vibes: ["significativa", "regalo", "tierna"] },
    ],
  },
  {
    id: "color",
    question: "El color que más te representa hoy es…",
    options: [
      { label: "Tonos tierra y naturales", emoji: "🍂", vibes: ["natural", "terrenal", "boho", "relajada"] },
      { label: "Pasteles suaves", emoji: "🌸", vibes: ["dulce", "romántica", "soñadora", "tierna"] },
      { label: "Colores vivos y llamativos", emoji: "🎨", vibes: ["vibrante", "alegre", "expresiva", "festiva"] },
      { label: "Dorado y neutros elegantes", emoji: "✨", vibes: ["elegante", "clásica", "sofisticada"] },
    ],
  },
  {
    id: "estilo",
    question: "Cuando eliges un accesorio, buscas…",
    options: [
      { label: "Que sea único y personalizable", emoji: "🎯", vibes: ["personalizable", "única", "creativa"] },
      { label: "Algo delicado y discreto", emoji: "🕊️", vibes: ["minimalista", "delicada", "elegante"] },
      { label: "Una pieza statement que resalte", emoji: "🔥", vibes: ["statement", "atrevida", "vibrante"] },
      { label: "Algo con historia o significado", emoji: "🐚", vibes: ["significativa", "local", "orgullo costeño"] },
    ],
  },
  {
    id: "ocasion",
    question: "¿Para qué momento la quieres?",
    options: [
      { label: "Para el día a día", emoji: "☀️", vibes: ["cotidiana", "cálida", "relajada"] },
      { label: "Para una ocasión especial", emoji: "🎉", vibes: ["elegante", "festiva", "statement"] },
      { label: "Para regalar a alguien especial", emoji: "🎁", vibes: ["regalo", "tierna", "detallista"] },
      { label: "Para sentirme yo misma", emoji: "💫", vibes: ["expresiva", "única", "atrevida"] },
    ],
  },
  {
    id: "esencia",
    question: "En una palabra, tu esencia es…",
    options: [
      { label: "Romántica", emoji: "💕", vibes: ["romántica", "soñadora", "tierna"] },
      { label: "Libre", emoji: "🌿", vibes: ["boho", "natural", "relajada", "playera"] },
      { label: "Auténtica", emoji: "⭐", vibes: ["única", "expresiva", "orgullo costeño"] },
      { label: "Elegante", emoji: "👑", vibes: ["elegante", "sofisticada", "clásica"] },
    ],
  },
];

/** Perfiles de "energía" según el vibe dominante — el diagnóstico que da valor. */
export const energyProfiles: Record<
  string,
  { title: string; description: string; matchVibes: string[] }
> = {
  costera: {
    title: "Alma de Mar 🌊",
    description:
      "Tu energía es libre, luminosa y con sabor a Caribe. Te mueven el sol, la arena y lo auténtico. Necesitas piezas que lleven el mar contigo a donde vayas.",
    matchVibes: ["playera", "marina", "veraniega", "costera", "boho", "natural"],
  },
  romantica: {
    title: "Corazón Romántico 💕",
    description:
      "Eres pura ternura y detalle. Te enamoran las cosas con significado, los pasteles y los pequeños gestos. Tu joya ideal es dulce y soñadora, como tú.",
    matchVibes: ["romántica", "soñadora", "tierna", "dulce", "regalo"],
  },
  elegante: {
    title: "Elegancia Serena ✨",
    description:
      "Menos es más para ti. Te distinguen la sutileza, lo atemporal y el buen gusto. Tu pieza ideal es delicada, dorada y con clase.",
    matchVibes: ["elegante", "minimalista", "sofisticada", "delicada", "clásica"],
  },
  expresiva: {
    title: "Espíritu Vibrante 🎨",
    description:
      "Llegas y se nota. Amas el color, lo statement y expresar quién eres sin miedo. Tu joya ideal es única, atrevida y llena de vida.",
    matchVibes: ["vibrante", "divertida", "expresiva", "atrevida", "statement", "personalizable", "única"],
  },
};
