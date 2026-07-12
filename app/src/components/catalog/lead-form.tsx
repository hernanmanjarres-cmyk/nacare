"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Formulario de captura de leads (P2). Guarda en Supabase vía /api/leads.
 * Ejemplo de uso real: "Déjanos tus datos y te avisamos cuando llegue la
 * próxima colección o tengamos una promo."
 */
export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "catalogo" }),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "Algo salió mal. Intenta de nuevo.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("No hay conexión. Revisa tu internet e intenta de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-nacare)] border border-mint/40 bg-mint/10 p-8 text-center">
        <p className="text-3xl">🐚</p>
        <h3 className="font-display mt-3 text-xl font-semibold text-ink">
          ¡Gracias, quedaste en la lista!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Te avisaremos cuando lleguen nuevas piezas y promos de Nacaré.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-gold-deep underline underline-offset-4 hover:text-gold"
        >
          Registrar otro correo
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-[var(--radius-nacare)] border border-gold/20 bg-shell p-6 sm:p-8"
    >
      <div className="space-y-1 text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Sé la primera en enterarte ✨
        </h3>
        <p className="text-sm text-ink-soft">
          Déjanos tus datos y te avisamos de nuevas colecciones y promos.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Nombre" placeholder="Tu nombre" required />
        <Field
          name="email"
          label="Correo"
          type="email"
          placeholder="tu@correo.com"
          required
        />
      </div>

      <Field
        name="phone"
        label="WhatsApp (opcional)"
        placeholder="+57 300 000 0000"
      />

      <div className="space-y-1.5">
        <label htmlFor="interest" className="text-sm font-medium text-ink">
          ¿Qué te interesa? (opcional)
        </label>
        <textarea
          id="interest"
          name="interest"
          rows={2}
          placeholder="Ej: collares de la colección Perla de Mar"
          className="w-full resize-none rounded-2xl border border-gold/25 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-gold"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-coral/10 px-4 py-2 text-sm text-coral">
          {message}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando…" : "Quiero enterarme"}
      </Button>

      <p className="text-center text-xs text-ink-soft/60">
        Tus datos se guardan de forma segura. No enviamos spam. 🤍
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-gold/25 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-gold"
      />
    </div>
  );
}
