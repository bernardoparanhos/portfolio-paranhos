// Chevron desenhado, não o caractere "←/→": mantém a espessura do traço igual
// à do resto da interface e acompanha a cor do botão.
export default function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "prev" ? "M15 5 8 12l7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
