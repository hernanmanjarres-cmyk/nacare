"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quiz";
import { computeQuizResult, type QuizResult } from "@/lib/quiz";
import { ProductImage } from "@/components/catalog/product-image";
import { Button, ButtonLink } from "@/components/ui/button";
import { cn, whatsappLink, orderMessage } from "@/lib/utils";

type Phase = "intro" | "quiz" | "result";

/**
 * Flujo del quiz P3. La persona recibe su diagnóstico + pieza recomendada
 * ANTES de que le pidamos el correo. El correo se pide para "enviar tu
 * resultado + un cupón" — intercambio justo (requisito del reto).
 */
export function QuizFlow() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [vibes, setVibes] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  function pick(optionVibes: string[]) {
    const nextVibes = [...vibes, ...optionVibes];
    setVibes(nextVibes);

    if (step + 1 < quizQuestions.length) {
      setStep(step + 1);
    } else {
      setResult(computeQuizResult(nextVibes));
      setPhase("result");
    }
  }

  function restart() {
    setPhase("intro");
    setStep(0);
    setVibes([]);
    setResult(null);
  }

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-xl rounded-[var(--radius-nacare)] border border-gold/20 bg-shell p-8 text-center sm:p-12">
        <p className="text-5xl">✨</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl">
          ¿Qué pieza de Nacaré va con tu energía?
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Responde 5 preguntas rápidas y descubre tu &ldquo;energía Nacaré&rdquo;
          + la joya artesanal que fue hecha para ti. 🐚
        </p>
        <Button onClick={() => setPhase("quiz")} size="lg" className="mt-8">
          Descubrir mi pieza →
        </Button>
        <p className="mt-4 text-xs text-ink-soft/60">
          Solo toma 30 segundos · gratis
        </p>
      </div>
    );
  }

  if (phase === "quiz") {
    const q = quizQuestions[step];
    const progress = ((step + 1) / quizQuestions.length) * 100;

    return (
      <div className="mx-auto max-w-xl">
        {/* Barra de progreso */}
        <div className="mb-6">
          <div className="mb-2 flex justify-between text-xs text-ink-soft">
            <span>
              Pregunta {step + 1} de {quizQuestions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-sand">
            <div
              className="h-full rounded-full bg-gold-deep transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="rounded-[var(--radius-nacare)] border border-gold/20 bg-shell p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {q.question}
          </h2>
          <div className="mt-6 grid gap-3">
            {q.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => pick(opt.vibes)}
                className="group flex items-center gap-4 rounded-2xl border border-gold/20 bg-cream/40 p-4 text-left transition-all hover:border-gold hover:bg-cream hover:shadow-sm"
              >
                <span className="text-2xl transition-transform group-hover:scale-110">
                  {opt.emoji}
                </span>
                <span className="text-ink">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // phase === "result"
  return <QuizResultView result={result!} onRestart={restart} />;
}

function QuizResultView({
  result,
  onRestart,
}: {
  result: QuizResult;
  onRestart: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Diagnóstico (el valor) */}
      <div className="rounded-[var(--radius-nacare)] border border-gold/25 bg-gradient-to-br from-cream to-shell p-8 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
          Tu energía Nacaré es
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">
          {result.profileTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-ink-soft">
          {result.profileDescription}
        </p>
      </div>

      {/* Pieza recomendada (pieza real del catálogo) */}
      <div className="overflow-hidden rounded-[var(--radius-nacare)] border border-gold/20 bg-shell">
        <div className="grid sm:grid-cols-2">
          <div className="relative aspect-square">
            <ProductImage product={result.product} />
          </div>
          <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Tu pieza ideal
            </p>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {result.product.name}
            </h2>
            <p className="text-sm text-ink-soft">{result.product.description}</p>
            <ButtonLink
              href={whatsappLink(orderMessage(result.product.name))}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="mt-2"
            >
              La quiero por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Captura de correo — el intercambio justo, DESPUÉS del valor */}
      <ResultLeadForm result={result} />

      <p className="text-center text-sm text-ink-soft">
        También te podría gustar:{" "}
        <span className="font-medium text-clay">{result.runnerUp.name}</span>
      </p>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="text-sm text-gold-deep underline underline-offset-4 hover:text-gold"
        >
          Repetir el quiz
        </button>
      </div>
    </div>
  );
}

function ResultLeadForm({ result }: { result: QuizResult }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          interest: `Quiz: ${result.profileTitle} → ${result.product.name}`,
          source: "quiz",
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(json.error ?? "Algo salió mal.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Sin conexión. Intenta de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-nacare)] border border-mint/40 bg-mint/10 p-6 text-center">
        <p className="text-2xl">🎁</p>
        <p className="font-display mt-2 text-lg font-semibold text-ink">
          ¡Listo! Revisa tu correo pronto.
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          Te enviaremos tu resultado completo y un cupón especial de Nacaré.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-3 rounded-[var(--radius-nacare)] border border-gold/25 bg-cream/50 p-6 text-center"
    >
      <p className="font-display text-lg font-semibold text-ink">
        ¿Te enviamos tu resultado + un cupón? 🎁
      </p>
      <p className="text-sm text-ink-soft">
        Déjanos tu correo y recibe tu diagnóstico completo y un descuento en tu
        primera pieza.
      </p>
      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Tu nombre"
          className="rounded-2xl border border-gold/25 bg-shell px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-gold"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="tu@correo.com"
          className="rounded-2xl border border-gold/25 bg-shell px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-gold"
        />
      </div>
      {status === "error" && (
        <p className="rounded-xl bg-coral/10 px-4 py-2 text-sm text-coral">
          {error}
        </p>
      )}
      <Button
        type="submit"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando…" : "Enviarme mi resultado"}
      </Button>
      <p className="text-xs text-ink-soft/60">Sin spam. Puedes salirte cuando quieras. 🤍</p>
    </form>
  );
}
