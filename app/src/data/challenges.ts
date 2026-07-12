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

export interface TechItem {
  name: string;
  /** Por qué se usó esta tecnología en este reto. */
  why: string;
}

export interface Course {
  name: string;
  url: string;
}

export interface Challenge {
  id: string;
  number: number;
  emoji: string;
  title: string;
  /** Qué construiste, en una frase. */
  tagline: string;
  /** Qué problema resuelve, corto. */
  solves: string;
  /** Stack técnico con el "por qué" de cada pieza. */
  stack: TechItem[];
  /** Cursos de Platzi que refuerzan este stack. */
  courses: Course[];
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
    stack: [
      { name: "Vercel AI SDK", why: "Streaming de respuestas token a token para un chat fluido." },
      { name: "OpenRouter", why: "Una sola API key da acceso a modelos como Gemini Flash, barato y capaz." },
      { name: "System prompt con RAG ligero", why: "La base de conocimiento real se inyecta en el prompt para que responda con datos verdaderos." },
      { name: 'Regla "no inventar"', why: "El prompt obliga al asistente a admitir cuando no sabe y redirigir a WhatsApp." },
      { name: "Next.js Route Handlers", why: "El endpoint /api/chat corre en el servidor, la API key nunca llega al navegador." },
      { name: "Git + GitHub", why: "Todo versionado y publicado en un repo abierto para que otros lo aprendan." },
    ],
    courses: [
      { name: "Curso de Prompt Engineering", url: "https://platzi.com/cursos/prompt-engineering-2025/" },
      { name: "Curso de Fundamentos de LLMs", url: "https://platzi.com/cursos/llms/" },
      { name: "Curso de Next.js 14", url: "https://platzi.com/cursos/nextjs-14/" },
      { name: "Curso de Git y GitHub", url: "https://platzi.com/cursos/git-github/" },
    ],
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
    stack: [
      { name: "Next.js 16 + React 19", why: "App Router con Server Components para un catálogo rápido." },
      { name: "Supabase (PostgreSQL)", why: "Base de datos real donde se guardan los leads — no se pierden." },
      { name: "Row Level Security (RLS)", why: "Solo el backend puede escribir; nadie mete datos basura desde el navegador." },
      { name: "Zod", why: "Valida TODAS las entradas del formulario antes de guardarlas." },
      { name: "Tailwind CSS 4", why: "Diseño responsive con tokens de marca (se ve bien en celular y desktop)." },
      { name: "Git + GitHub", why: "Historial de commits limpio y repo público para clonar y reutilizar." },
    ],
    courses: [
      { name: "Curso de Supabase", url: "https://platzi.com/cursos/supabase/" },
      { name: "Curso de Supabase Avanzado", url: "https://platzi.com/cursos/supabase-avanzado/" },
      { name: "Curso de Next.js 14", url: "https://platzi.com/cursos/nextjs-14/" },
      { name: "Curso de Next.js: Seguridad Web con OWASP", url: "https://platzi.com/cursos/nextjs-owasp/" },
      { name: "Curso de Git y GitHub", url: "https://platzi.com/cursos/git-github/" },
    ],
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
    stack: [
      { name: "React (estado del flujo)", why: "Maneja las 5 preguntas y el resultado sin recargar la página." },
      { name: "Algoritmo de matching", why: "Puntúa cada respuesta contra los 'vibes' de las piezas reales del catálogo." },
      { name: "Supabase", why: "Los leads del quiz se guardan marcados con su fuente y resultado." },
      { name: "Zod + Route Handler", why: "El mismo endpoint validado que el catálogo, reutilizado (código limpio)." },
      { name: "Diseño de intercambio", why: "Da el diagnóstico gratis primero; pide el correo después (UX de valor primero)." },
      { name: "Git + GitHub", why: "Cada reto integrado al mismo monorepo, con commits atómicos y trazables." },
    ],
    courses: [
      { name: "Curso de React.js", url: "https://platzi.com/cursos/reactjs/" },
      { name: "Curso de Supabase", url: "https://platzi.com/cursos/supabase/" },
      { name: "Curso de Next.js 14", url: "https://platzi.com/cursos/nextjs-14/" },
      { name: "Curso de Git y GitHub", url: "https://platzi.com/cursos/git-github/" },
    ],
    demoPath: "/quiz",
    voteUrl: "", // 👈 pega aquí el link a tu comentario del Reto 3
    published: false,
  },
];

/** Link general del concurso, por si alguien quiere ver la competencia. */
export const CONTEST_URL = "https://platzi.com/vibe-coders";
