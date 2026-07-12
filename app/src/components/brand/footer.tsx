import { Logo } from "./logo";
import { whatsappLink } from "@/lib/utils";
import { INSTAGRAM_URL } from "@/data/knowledge";

/** Footer compartido con contacto real de la marca. */
export function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/15 bg-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-2">
          <Logo />
          <p className="max-w-xs text-sm text-ink-soft">
            Joyería artesanal hecha a mano en Santa Marta, Colombia 🇨🇴. Cada
            pieza, un pedacito de mar.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href={whatsappLink("¡Hola Nacaré! 🐚")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft transition-colors hover:text-gold-deep"
          >
            WhatsApp · w.app/nacare
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft transition-colors hover:text-gold-deep"
          >
            Instagram · @nacare.sm
          </a>
          <p className="pt-2 text-xs text-ink-soft/70">
            Santa Marta, Colombia · Hecho con amor ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
