import { cn } from "@/lib/utils";

/**
 * Logo de Nacaré — ilustración lineal de concha/nácar + wordmark.
 *
 * Recrea la identidad descrita en el extract de IG (círculo crema, concha lineal,
 * iniciales N·SM, estética beige/dorado). Es un placeholder de alta calidad:
 * cuando tu amiga entregue el logo real, se reemplaza este componente.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="24" cy="24" r="23" fill="var(--nacar-cream)" stroke="var(--nacar-gold)" strokeWidth="1.5" />
        {/* Concha lineal estilizada */}
        <path
          d="M24 13c-6 0-11 5-11 11 0 4 2 7 5 9M24 13c6 0 11 5 11 11 0 4-2 7-5 9M24 13v20"
          stroke="var(--nacar-gold-deep)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18.5 16.5c-1 3-1.5 6-1.5 9m6-11v14m5.5-12c1 3 1.5 6 1.5 9"
          stroke="var(--nacar-gold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Nacaré
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-gold-deep">
            · SM ·
          </span>
        </span>
      )}
    </span>
  );
}
