import { Fragment, type ReactNode } from "react";

/**
 * Renderizador de Markdown ligero para los mensajes del asistente.
 * Soporta **negrita**, *cursiva*, [texto](url) y saltos de línea — suficiente
 * para el chat, sin traer una librería completa de Markdown.
 */
export function RichText({ text }: { text: string }) {
  // Limpia marcadores de Markdown sueltos (asteriscos/guiones sin pareja) que
  // el modelo a veces deja al final o aislados.
  const cleaned = text
    .replace(/(^|\s)[*_]{1,2}(\s|$)/g, "$1$2")
    .replace(/[*_]+\s*$/g, "")
    .trimEnd();
  const lines = cleaned.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {parseInline(line)}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

// Negrita, cursiva y links en una sola pasada por prioridad.
function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Orden importa: **negrita** antes que *cursiva*
  const regex =
    /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));

    if (m[1] !== undefined) {
      nodes.push(<strong key={key++}>{m[1]}</strong>);
    } else if (m[2] !== undefined) {
      nodes.push(<em key={key++}>{m[2]}</em>);
    } else if (m[3] !== undefined && m[4] !== undefined) {
      nodes.push(
        <a
          key={key++}
          href={m[4]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gold-deep underline underline-offset-2"
        >
          {m[3]}
        </a>,
      );
    }
    last = regex.lastIndex;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
