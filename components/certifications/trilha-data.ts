// Estrutura da trilha de formação em IA (Claude Academy · Anthropic).
// Aqui fica só o que NÃO é texto: ordem, estado, imagem do distintivo e link
// oficial. Os textos vivem no dicionário (`t.trilha.nos`), alinhados por
// indice com este array — mesmo padrao do CERT_META dos cartoes de credencial.
export type NoTrilha = {
  id: string;
  num: string;
  /** modulo concluido: ganha distintivo, trecho aceso na linha e ficha completa */
  done: boolean;
  /** scan do distintivo — so nos concluidos */
  img?: string;
  /** pagina oficial do distintivo na Claude Academy */
  link?: string;
  /** ultimo nó da trilha (muda o rotulo de status para "passo final") */
  final?: boolean;
};

export const NOS: NoTrilha[] = [
  {
    id: "mcp",
    num: "01",
    done: true,
    img: "/badges/badge-mcp.png",
    link: "https://academy.claude.com/verify/f1a0b498f7ae96c733ab36a313ff1972",
  },
  {
    id: "hat",
    num: "02",
    done: true,
    img: "/badges/badge-human-agent.png",
    link: "https://academy.claude.com/badges/9e821177-e3c3-4714-8fae-44bf0026ed86",
  },
  { id: "cap", num: "03", done: false },
  { id: "flu", num: "04", done: false },
  { id: "api", num: "05", done: false, final: true },
];

export const FEITOS = NOS.filter((n) => n.done).length;
export const TOTAL = NOS.length;

// Preenche os marcadores {feitos} e {total} das strings do dicionario.
export const contar = (molde: string) =>
  molde.replace("{feitos}", String(FEITOS)).replace("{total}", String(TOTAL));
