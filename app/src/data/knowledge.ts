/**
 * Base de conocimiento de Nacaré.Sm — datos reales del negocio.
 *
 * Fuente: extract del Instagram @nacare.sm. Alimenta al asistente de IA (P1).
 * Cumple el requisito del reto: "mínimo 10 datos concretos del negocio".
 *
 * Regla del reto: el asistente responde con esta info y ADMITE cuando algo
 * no está aquí (no inventa). Ver el system prompt en src/lib/ai.ts.
 */

export const WHATSAPP_URL = "https://w.app/nacare";
export const INSTAGRAM_URL = "https://www.instagram.com/nacare.sm/";

/** Datos del negocio en lenguaje natural, listos para el contexto del LLM. */
export const businessFacts: { topic: string; fact: string }[] = [
  {
    topic: "Qué es Nacaré",
    fact: "Nacaré.Sm es una marca de joyería y bisutería artesanal hecha a mano, ubicada en Santa Marta, Colombia. Nuestro lema es 'Accesorios que cuentan tu esencia'. El nombre viene del nácar, y la marca se inspira en el mar y la cultura costeña.",
  },
  {
    topic: "Ubicación",
    fact: "Estamos en Santa Marta, Colombia 🇨🇴.",
  },
  {
    topic: "Cómo comprar",
    fact: "Todas las compras se hacen por WhatsApp. Escríbenos con la pieza que te gustó y coordinamos el pedido, el pago y el envío. El enlace directo es w.app/nacare.",
  },
  {
    topic: "Precios",
    fact: "Los precios se consultan por WhatsApp según la pieza y la cantidad (tenemos precios de menudeo y precios especiales al por mayor para revendedoras). Escríbenos y te pasamos el precio de lo que te interese.",
  },
  {
    topic: "Envíos",
    fact: "Hacemos envíos nacionales dentro de Colombia e internacionales. El costo y el tiempo del envío se coordinan por WhatsApp según tu ubicación.",
  },
  {
    topic: "Personalización",
    fact: "Muchas piezas son personalizables: puedes elegir los colores de las cuentas y, en algunas colecciones, los dijes (concha, ballena, tortuga, palma, etc.). Pídelo por WhatsApp y lo armamos a tu gusto.",
  },
  {
    topic: "Disponibilidad",
    fact: "Algunas colecciones están disponibles para entrega inmediata y otras se hacen por encargo. Las ediciones limitadas y temáticas (como la Selección Colombia) se agotan rápido.",
  },
  {
    topic: "Colecciones",
    fact: "Trabajamos por colecciones temáticas que van rotando: Perla de Mar, Fiestas del Mar, Bubblegum, Santa Marta 501 años, Selección Colombia, y piezas para fechas especiales como el Día del Docente.",
  },
  {
    topic: "Materiales",
    fact: "Usamos perlas, concha de nácar, cuentas de piedra, cuentas de colores, cadenas doradas y plateadas, jade y dijes esmaltados. Todo hecho a mano con amor.",
  },
  {
    topic: "Al por mayor",
    fact: "Sí vendemos al por mayor. Somos mayoristas de bisutería y tenemos precios especiales para revendedoras y tiendas. Escríbenos por WhatsApp para el catálogo mayorista y los precios por volumen.",
  },
  {
    topic: "Tono de la marca",
    fact: "Somos un emprendimiento familiar. Nos gusta el trato cercano, cálido y cariñoso. Cada pieza está hecha a mano con dedicación.",
  },
  {
    topic: "Redes sociales",
    fact: "Nuestro Instagram es @nacare.sm, donde publicamos las novedades y las nuevas colecciones.",
  },
  {
    topic: "Formas de pago",
    fact: "Coordinamos el método de pago por WhatsApp al momento de tu pedido.",
  },
];

/** Preguntas frecuentes exactas (sugerencias para el chat). */
export const suggestedQuestions = [
  "¿Cómo compro una pieza?",
  "¿Hacen envíos a mi ciudad?",
  "¿Puedo personalizar los colores?",
  "¿Tienen precios al por mayor?",
  "¿Qué colecciones tienen ahora?",
];
