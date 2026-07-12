import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combina clases de Tailwind resolviendo conflictos. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WHATSAPP_BASE = "https://w.app/nacare";

/**
 * Construye el link de WhatsApp con un mensaje pre-armado.
 * Centralizado aquí (Risk R3 del BMC): si el número/link cambia, se toca un solo lugar.
 */
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `${WHATSAPP_BASE}?text=${text}`;
}

/** Mensaje de pedido pre-armado para una pieza concreta. */
export function orderMessage(productName: string): string {
  return `¡Hola Nacaré! 🐚 Me encantó esta pieza y quiero pedirla: "${productName}". ¿Me cuentas precio y disponibilidad?`;
}
