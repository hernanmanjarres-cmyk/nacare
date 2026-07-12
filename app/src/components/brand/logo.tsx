import { cn } from "@/lib/utils";

/**
 * Logo de Nacaré — recreación fiel del logo real de la marca:
 * concha de vieira (abanico con estrías radiales) abierta sobre su valva,
 * con una perla en la base. Trazo fino taupe sobre círculo crema.
 * Tagline: "Accesorios que cuentan tu esencia".
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
      <ShellMark className="h-9 w-9 shrink-0" />
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

/** La marca de la concha con perla (reutilizable a cualquier tamaño). */
export function ShellMark({ className }: { className?: string }) {
  const stroke = "var(--nacar-clay)";
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill="var(--nacar-cream)" stroke="var(--nacar-gold)" strokeWidth="1" />

      {/* Borde superior ondulado del abanico de la vieira */}
      <path
        d="M8.9 57.3 L11.9 48.3 L16.9 40.1 L23.6 33.4 L31.6 28.3 L40.6 25.1 L50 24 L59.4 25.1 L68.4 28.3 L76.4 33.4 L83.1 40.1 L88.1 48.3 L91.1 57.3"
        stroke={stroke}
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Estrías radiales que se abren en abanico desde la base */}
      <g stroke={stroke} strokeWidth="1.15" strokeLinecap="round">
        <path d="M50 66 L10.9 57.7" />
        <path d="M50 66 L13.7 49.1" />
        <path d="M50 66 L18.5 41.4" />
        <path d="M50 66 L24.8 34.9" />
        <path d="M50 66 L32.5 30" />
        <path d="M50 66 L41 27" />
        <path d="M50 66 L50 26" />
        <path d="M50 66 L59 27" />
        <path d="M50 66 L67.5 30" />
        <path d="M50 66 L75.2 34.9" />
        <path d="M50 66 L81.5 41.4" />
        <path d="M50 66 L86.3 49.1" />
        <path d="M50 66 L89.1 57.7" />
      </g>

      {/* Valva inferior (base de la concha, ligeramente abierta) */}
      <path
        d="M22 66 C30 73 40 76 50 76 C60 76 70 73 78 66"
        stroke={stroke}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M27 68.5 C34 73 42 74.5 50 74.5 C58 74.5 66 73 73 68.5"
        stroke={stroke}
        strokeWidth="0.8"
        opacity="0.55"
        strokeLinecap="round"
      />

      {/* La perla, apoyada en la charnela */}
      <circle cx="50" cy="66" r="6" fill="var(--nacar-shell)" stroke={stroke} strokeWidth="1.3" />
      <path
        d="M46.8 63.8 A3.5 3.5 0 0 1 51 64.4"
        stroke={stroke}
        strokeWidth="0.8"
        opacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
