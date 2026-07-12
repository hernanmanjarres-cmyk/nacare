"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import { suggestedQuestions } from "@/data/knowledge";
import { Logo } from "@/components/brand/logo";
import { RichText } from "./rich-text";
import { cn } from "@/lib/utils";

/**
 * Widget de chat embebido (P1). Botón flotante que abre el asistente de Nacaré.
 * Streaming de respuestas vía /api/chat. Incluye preguntas sugeridas.
 */
export function ChatWidget({
  embedded = false,
}: {
  /** Si true, se renderiza inline (no flotante) — para la página /asistente. */
  embedded?: boolean;
}) {
  const [open, setOpen] = useState(embedded);
  const pathname = usePathname();

  // El flotante no se muestra en /asistente (ahí ya está el chat embebido).
  if (!embedded && pathname === "/asistente") return null;

  if (embedded) {
    return (
      <div className="mx-auto h-[600px] max-w-2xl overflow-hidden rounded-[var(--radius-nacare)] border border-gold/20 bg-shell shadow-lg">
        <ChatPanel onClose={undefined} />
      </div>
    );
  }

  return (
    <>
      {/* Botón flotante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir asistente de Nacaré"
          className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 rounded-full bg-gold-deep px-5 text-shell shadow-lg transition-all hover:scale-105 hover:bg-gold"
        >
          <span className="text-xl">💬</span>
          <span className="text-sm font-medium">Pregúntame</span>
        </button>
      )}

      {/* Panel flotante */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[70vh] max-h-[600px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-[var(--radius-nacare)] border border-gold/25 bg-shell shadow-2xl">
          <ChatPanel onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}

function ChatPanel({ onClose }: { onClose?: () => void }) {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, status]);

  function send(text: string) {
    if (!text.trim() || isBusy) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gold/15 bg-cream/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <Logo showWordmark={false} />
          <div>
            <p className="text-sm font-semibold text-ink">Asistente Nacaré</p>
            <p className="flex items-center gap-1 text-xs text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> En línea
            </p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Cerrar chat"
            className="rounded-full p-1.5 text-ink-soft transition-colors hover:bg-sand hover:text-ink"
          >
            ✕
          </button>
        )}
      </div>

      {/* Mensajes */}
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="space-y-3">
            <div className="rounded-2xl rounded-tl-sm bg-cream px-4 py-3 text-sm text-ink">
              ¡Hola! 🐚 Soy el asistente de Nacaré. Pregúntame sobre nuestras
              piezas, envíos, personalización o cómo comprar.
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-gold/30 bg-shell px-3 py-1.5 text-xs text-gold-deep transition-colors hover:bg-cream"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => (
          <Message key={m.id} role={m.role} parts={m.parts} />
        ))}

        {status === "submitted" && (
          <div className="w-fit rounded-2xl rounded-tl-sm bg-cream px-4 py-3">
            <TypingDots />
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-gold/15 p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta…"
          className="flex-1 rounded-full border border-gold/25 bg-cream/50 px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-gold"
        />
        <button
          type="submit"
          disabled={isBusy || !input.trim()}
          aria-label="Enviar"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-deep text-shell transition-colors hover:bg-gold disabled:opacity-40"
        >
          ➤
        </button>
      </form>
    </>
  );
}

function Message({
  role,
  parts,
}: {
  role: string;
  parts: Array<{ type: string; text?: string }>;
}) {
  const text = parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "max-w-[85%] px-4 py-3 text-sm",
        isUser
          ? "ml-auto rounded-2xl rounded-tr-sm bg-gold-deep text-shell"
          : "rounded-2xl rounded-tl-sm bg-cream text-ink",
      )}
    >
      {isUser ? text : <RichText text={text} />}
    </div>
  );
}

function TypingDots() {
  return (
    <span className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-deep"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}
