import { cn } from "@/lib/utils";

/**
 * Video de fondo del hero — olas del Caribe (identidad "alma de mar" de Nacaré).
 *
 * - autoPlay + muted + loop + playsInline: reproducción de fondo, compatible con iOS.
 * - poster: se ve una imagen mientras carga el video (evita flash en blanco).
 * - Overlay degradado encima para que el texto del hero siga legible.
 * - `motion-reduce:hidden` en el video: si el usuario pidió menos animación
 *   (accesibilidad), se oculta el video y queda solo el poster + overlay.
 */
export function HeroVideo({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <video
        className="h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/olas-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/olas.mp4" type="video/mp4" />
      </video>

      {/* Poster de respaldo para usuarios con reduce-motion (el video está oculto) */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center motion-reduce:block"
        style={{ backgroundImage: "url(/video/olas-poster.jpg)" }}
        aria-hidden="true"
      />

      {/* Overlay: aclara el video hacia el fondo arena para que el texto se lea */}
      <div className="absolute inset-0 bg-gradient-to-b from-shell/55 via-shell/45 to-shell" />
    </div>
  );
}
