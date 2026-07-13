import type { Metadata } from "next";
import Link from "next/link";
import {
  challenges,
  CONTEST_URL,
  META_RETOS,
  FECHA_CORTE,
  PLATZI_LOGIN_URL,
} from "@/data/challenges";
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
            joyería artesanal hecha a mano en Santa Marta.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-ink-soft">
            El reto va{" "}
            <strong className="text-clay">hasta el {FECHA_CORTE}</strong>: cada
            día subo un proyecto nuevo. <strong>Cada voto que consigas nos
            ayuda a crecer</strong> y a llevar esta marca hecha a mano a más
            personas. 🤍
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-cream/60 px-4 py-2 text-sm text-ink-soft">
            <span className="font-medium text-gold-deep">{publishedCount}</span>
            de {META_RETOS} retos completados
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6">
      {/* Cómo votar — flujo de 3 pasos, con el login como paso obligatorio */}
      <div className="rounded-[var(--radius-nacare)] border border-gold/20 bg-shell p-6">
        <h2 className="font-display text-xl font-semibold text-ink">
          Votar es gratis y toma 1 minuto 🐚
        </h2>

        {/* Aviso crítico */}
        <div className="mt-4 flex gap-3 rounded-2xl border border-coral/30 bg-coral/10 p-4">
          <span className="text-xl">⚠️</span>
          <p className="text-sm text-ink">
            <strong>Importante:</strong> tu voto solo cuenta si{" "}
            <strong>ya iniciaste sesión en Platzi</strong>. Si le das like sin
            estar registrado, se ve como que funcionó… pero{" "}
            <strong className="text-coral">el voto NO se registra</strong>. Por
            eso el Paso 1 es clave.
          </p>
        </div>

        {/* Pasos numerados */}
        <ol className="mt-5 space-y-4">
          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-deep text-sm font-semibold text-shell">
              1
            </span>
            <div className="flex-1">
              <p className="font-medium text-ink">
                Crea tu cuenta o inicia sesión en Platzi
              </p>
              <p className="mt-0.5 text-sm text-ink-soft">
                Es gratis con tu correo — no necesitas suscripción para votar.
              </p>
              <a
                href={PLATZI_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold-deep px-5 py-2.5 text-sm font-medium text-shell transition-colors hover:bg-gold"
              >
                Entrar a Platzi primero →
              </a>
            </div>
          </li>

          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-deep text-sm font-semibold text-shell">
              2
            </span>
            <div className="flex-1">
              <p className="font-medium text-ink">
                Vuelve aquí y vota mis 3 proyectos
              </p>
              <p className="mt-0.5 text-sm text-ink-soft">
                Ya con la sesión abierta, dale al botón{" "}
                <span className="font-medium text-clay">❤️ Votar</span> de cada
                reto y deja tu like en el comentario.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-deep text-sm font-semibold text-shell">
              3
            </span>
            <div className="flex-1">
              <p className="font-medium text-ink">
                Comparte con quien ame lo hecho a mano
              </p>
              <p className="mt-0.5 text-sm text-ink-soft">
                Cada persona que vote nos acerca a la meta. 🤍
              </p>
            </div>
          </li>
        </ol>
      </div>

      {/* Tarjetas de retos */}
      <div className="mt-8">
        <p className="mb-3 text-center text-sm text-ink-soft">
          ¿Ya iniciaste sesión? 👆 Ahora sí, vota cada uno:
        </p>
        <div className="space-y-4">
          {challenges.map((c) => (
            <ChallengeCard key={c.id} challenge={c} />
          ))}
        </div>
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

          {/* Stack técnico + cursos (desplegable) */}
          <details className="group mt-3">
            <summary className="cursor-pointer list-none text-xs font-medium text-gold-deep hover:text-gold">
              <span className="group-open:hidden">▸ Ver stack técnico y cursos</span>
              <span className="hidden group-open:inline">▾ Ocultar detalle técnico</span>
            </summary>

            <div className="mt-3 space-y-3 border-l-2 border-gold/20 pl-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-ink-soft/70">
                  Stack
                </p>
                <ul className="mt-1.5 space-y-1.5">
                  {c.stack.map((t) => (
                    <li key={t.name} className="text-xs text-ink-soft">
                      <span className="font-medium text-ink">{t.name}</span> —{" "}
                      {t.why}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-ink-soft/70">
                  Aprende este stack en Platzi
                </p>
                <ul className="mt-1.5 flex flex-wrap gap-1.5">
                  {c.courses.map((course) => (
                    <li key={course.url}>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-gold/30 bg-cream/60 px-2.5 py-1 text-[0.7rem] text-gold-deep transition-colors hover:bg-cream"
                      >
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>

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

            <ButtonLink
              href={c.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
            >
              {"</>"} Ver código
            </ButtonLink>
          </div>

          {canVote && (
            <p className="mt-2 text-xs text-ink-soft/70">
              💡 Recuerda: inicia sesión en Platzi antes, o el like no cuenta.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
