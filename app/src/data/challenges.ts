/**
 * Configuración de los retos del concurso Platzi (Vibe Coders League).
 *
 * 👉 CUANDO PUBLIQUES cada reto en Platzi:
 *   1. Publica tu comentario en la clase.
 *   2. Clic derecho en la HORA de tu comentario → "Copiar dirección del enlace".
 *   3. Pega ese link en `voteUrl` del reto correspondiente y cambia `published` a true.
 *
 * Eso es todo — la página /vota se actualiza sola.
 */

export interface Challenge {
  id: string;
  number: number;
  emoji: string;
  title: string;
  /** Qué construiste, en una frase. */
  tagline: string;
  /** Qué problema resuelve, corto. */
  solves: string;
  /** Ruta interna para probar la demo en tu propio sitio. */
  demoPath: string;
  /** Link directo a TU comentario en Platzi (pégalo cuando publiques). */
  voteUrl: string;
  /** true cuando ya publicaste el comentario y pegaste el voteUrl. */
  published: boolean;
}

export const challenges: Challenge[] = [
  {
    id: "asistente",
    number: 1,
    emoji: "💬",
    title: "El asistente que responde por ti",
    tagline: "Un chat de IA que conoce Nacaré a fondo y responde al instante.",
    solves: "Que ninguna clienta se quede sin respuesta.",
    demoPath: "/asistente",
    voteUrl: "", // 👈 pega aquí el link a tu comentario del Reto 1
    published: false,
  },
  {
    id: "catalogo",
    number: 2,
    emoji: "🛍️",
    title: "El catálogo con datos reales",
    tagline: "La tienda en línea de Nacaré, con captura de clientas en base de datos.",
    solves: "Convierte el 'me encanta' de Instagram en un pedido por WhatsApp.",
    demoPath: "/",
    voteUrl: "", // 👈 pega aquí el link a tu comentario del Reto 2
    published: false,
  },
  {
    id: "quiz",
    number: 3,
    emoji: "✨",
    title: "El quiz que enamora",
    tagline: "¿Qué pieza de Nacaré va con tu energía? Da valor antes de pedir datos.",
    solves: "Convierte a un curioso en una clienta cariñosa.",
    demoPath: "/quiz",
    voteUrl: "", // 👈 pega aquí el link a tu comentario del Reto 3
    published: false,
  },
];

/** Link general del concurso, por si alguien quiere ver la competencia. */
export const CONTEST_URL = "https://platzi.com/vibe-coders";
