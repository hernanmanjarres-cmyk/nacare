import type { Metadata } from "next";
import Link from "next/link";
import { challenges, CONTEST_URL } from "@/data/challenges";
import { ButtonLink } from "@/components/ui/button";
import { ShellMark } from "@/components/brand/logo";
import { HeroVideo } from "@/components/brand/hero-video";

export const metadata: Metadata = {
  title: "Apoya a Nacaré · Vibe Coders League",
  description:
    "Vota los proyectos de Nacaré en el concurso de Platzi. Tu apoyo ayuda a un emprendimiento hecho a mano. 🐚",
};

export default function VotaPage() {
  const publishedCount = challenges.filter((c) => c.published).length;

  return (
    <div>
      {/* Encabezado con video de olas de fondo (igual que la home) */}
      <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-20">
        <HeroVideo />
        <div className="mx-auto max-w-2xl">
          <ShellMark className="mx-auto h-16 w-16" />
          <h1 className="font-display mt-5 text-3xl font-semibold text-ink sm:text-4xl">
            Ayúdanos a volar más alto 🐚
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Estoy compitiendo en la{" "}
            <a
              href={CONTEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-deep underline underline-offset-2"
            >
              Vibe Coders League de Platzi
            </a>{" "}
            con proyectos que construí para <strong>Nacaré</strong>, una marca de
            joyería artesanal hecha a mano en Santa Marta. Cada voto acerca este
            emprendimiento a más personas.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/60 px-4 py-2 text-sm text-ink-soft">
            <span className="font-medium text-gold-deep">{publishedCount}</span>
            de {challenges.length} retos publicados
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6">
      {/* Cómo votar */}
      <div className="rounded-[var(--radius-nacare)] border border-gold/20 bg-shell p-5 text-sm text-ink-soft">
        <p className="font-medium text-ink">¿Cómo votar? Es gratis y rápido:</p>
        <ol className="mt-2 list-inside list-decimal space-y-1">
          <li>
            Crea una cuenta gratuita en Platzi con tu correo (no necesitas
            suscripción para votar).
          </li>
          <li>Abre el proyecto con el botón &ldquo;Votar&rdquo; y dale like ❤️ a mi comentario.</li>
          <li>¡Comparte con quien creas que le encantará Nacaré!</li>
        </ol>
      </div>

      {/* Tarjetas de retos */}
      <div className="mt-8 space-y-4">
        {challenges.map((c) => (
          <ChallengeCard key={c.id} challenge={c} />
        ))}
      </div>

      {/* Cierre */}
      <p className="mt-10 text-center text-sm text-ink-soft">
        Gracias por apoyar lo hecho a mano con amor. 🤍{" "}
        <Link href="/" className="text-gold-deep underline underline-offset-2">
          Conoce el catálogo de Nacaré
        </Link>
      </p>
      </div>
    </div>
  );
}

function ChallengeCard({
  challenge: c,
}: {
  challenge: (typeof challenges)[number];
}) {
  const canVote = c.published && c.voteUrl.length > 0;

  return (
    <article className="rounded-[var(--radius-nacare)] border border-gold/20 bg-shell p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4">
        <span className="text-3xl" aria-hidden="true">
          {c.emoji}
        </span>
        <div className="flex-1">
          <p className="text-[0.68rem] font-medium uppercase tracking-widest text-gold-deep">
            Reto {c.number}
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">
            {c.title}
          </h2>
          <p className="mt-1.5 text-sm text-ink-soft">{c.tagline}</p>
          <p className="mt-1 text-xs text-ink-soft/70">✅ {c.solves}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {canVote ? (
              <ButtonLink
                href={c.voteUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                ❤️ Votar en Platzi
              </ButtonLink>
            ) : (
              <span className="inline-flex items-center rounded-full border border-gold/25 bg-cream/60 px-4 py-2 text-sm text-ink-soft">
                🔜 Próximamente
              </span>
            )}

            <ButtonLink
              href={c.demoPath}
              variant="outline"
              size="sm"
            >
              Probar demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
