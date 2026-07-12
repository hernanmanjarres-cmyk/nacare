import type { Metadata } from "next";
import { ChatWidget } from "@/components/assistant/chat-widget";

export const metadata: Metadata = {
  title: "Asistente · Nacaré",
  description:
    "Pregúntale a nuestro asistente sobre piezas, envíos, precios y personalización.",
};

export default function AsistentePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <p className="text-3xl">💬</p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
          Habla con Nacaré
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-ink-soft">
          Nuestro asistente conoce el negocio a fondo: piezas, colecciones,
          envíos, personalización y cómo comprar. Si algo no lo sabe, te
          conecta con nosotras por WhatsApp. 🐚
        </p>
      </div>

      <ChatWidget embedded />
    </div>
  );
}
