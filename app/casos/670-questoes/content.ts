// Estudo de caso 002 · "As 670 questões".
// Só em pt-BR: a peça cita literalmente log do banco e regras escritas em
// português — traduzir descaracterizaria a evidência.
//
// Nomenclatura: "estudo de caso" é a peça inteira; "bloco" é a subdivisão.
// Nunca "situação" (isso é do estudo 001).
//
// Regra dura de conteúdo: nenhum número que não esteja nesta especificação
// entra na página, e todo número grande vem com rótulo e denominador.

/* ── Hero ─────────────────────────────────────────────────────────── */
export const FICHA = [
  { label: "Meu papel", value: "Autoria e processo" },
  { label: "Instrumento", value: "Log do console do banco" },
  { label: "Período medido", value: "abr → jul / 2026" },
  { label: "Lote novo", value: "04 / ago" },
];

/* ── Faixa de números ─────────────────────────────────────────────── */
export const NUMEROS = [
  { num: "506", label: "comandos no log" },
  { num: "670", label: "questões medidas" },
  { num: "7", label: "famílias de defeito" },
  { num: "81%", label: "acerto de primeira", accent: true },
];

/* ── Bloco 00 · o fluxo de autoria ────────────────────────────────── */
// Três etapas de máquina (logo em quadro creme) e duas humanas (numeral em
// quadro terracota). O contraste é a informação — não uniformizar.
export const FLUXO = [
  {
    icon: "/icons/icon-openai.svg",
    alt: "OpenAI",
    // marca monocromática: dentro de <img> o currentColor resolve preto, que é
    // o correto no tema claro. No escuro entra a versão branca (ver globals.css).
    mono: true,
    step: "1 Planejar",
    title: "Roadmap",
    desc: "Do bloco, questão a questão",
  },
  {
    icon: "/icons/icon-gemini.svg",
    alt: "Gemini",
    step: "2 Gerar",
    title: "Escrever",
    desc: "As questões em lotes de 15",
  },
  {
    icon: "/icons/icon-claude.svg",
    alt: "Claude",
    step: "3 Revisar",
    title: "Conferir",
    desc: "Modelo diferente do que escreveu",
  },
  { num: "4", step: "4 Executar", title: "Rodar", desc: "O comando no banco" },
  { num: "5", step: "5 Conferir", title: "Olhar", desc: "Abro a plataforma e vejo na tela" },
];

/* ── Bloco 01 · o log cru ─────────────────────────────────────────── */
export const LOG = [
  {
    comment: "-- 2026-05-15 16:43:31  [mat-ia-plataform] [console]",
    pre: "UPDATE questoes SET alternativas = … ",
    hi: "\\not=",
    post: " …",
  },
  {
    comment: "-- 2026-05-15 16:46:35",
    pre: "UPDATE questoes SET alternativas = … ",
    hi: "≠ dentro do LaTeX",
    post: "",
  },
  {
    comment: "-- 2026-05-15 16:50:15",
    pre: "UPDATE questoes SET alternativas = … ",
    hi: "\\neq",
    post: " …",
  },
];

/* ── Bloco 02 · acerto de primeira por lote ───────────────────────── */
// Coordenadas do SVG (viewBox 0 0 822 330). `vy` é o y do rótulo do valor:
// quando o ponto está baixo (69, 74, 78) o número vai ABAIXO dele, pra não
// colidir com a linha.
export const SERIE = [
  { x: 90, y: 44.6, vy: 32, v: "98", d: "24/04" },
  { x: 166, y: 40, vy: 28, v: "100", d: "25/04" },
  { x: 242, y: 111.3, vy: 131, v: "69", d: "30/04" },
  { x: 318, y: 56.1, vy: 44, v: "93", d: "15/05" },
  { x: 394, y: 99.8, vy: 119, v: "74", d: "19/05" },
  { x: 470, y: 76.8, vy: 64, v: "84", d: "20/05" },
  { x: 546, y: 72.2, vy: 60, v: "86", d: "21/05" },
  { x: 622, y: 90.6, vy: 110, v: "78", d: "03/07" },
  { x: 698, y: 72.2, vy: 60, v: "86", d: "04/07" },
];
export const LOTE_NOVO = { x: 774, y: 76.8, vy: 62, v: "84", d: "04/08" };

// As duas famílias em sálvia (tone "b") NÃO são defeito: são trabalho
// planejado. A cor é o que comunica isso.
export const FAMILIAS = [
  { nome: "Alternativas", w: 100, tone: "a", op: 1, val: "126 · 35,5%" },
  { nome: "Renderização visual", w: 53, tone: "a", op: 0.82, val: "67 · 18,9%" },
  { nome: "Substituição integral", w: 49, tone: "b", op: 1, val: "62 · 17,5%" },
  { nome: "Texto do enunciado", w: 37, tone: "a", op: 0.68, val: "47 · 13,2%" },
  { nome: "Renderização LaTeX", w: 24.5, tone: "a", op: 0.58, val: "31 · 8,7%" },
  { nome: "Classificação", w: 9.6, tone: "b", op: 1, val: "12 · 3,4%" },
  { nome: "Gabarito errado", w: 7.9, tone: "a", op: 0.5, val: "10 · 2,8%" },
];

/* ── Bloco 03 · as sete reescritas da questão 454 ─────────────────── */
export const REESCRITAS = [
  { t: "16:43:31", tent: "\\not=", ok: false },
  { t: "16:46:35", tent: "≠ dentro do LaTeX", ok: false },
  { t: "16:50:15", tent: "\\neq", ok: false },
  { t: "16:52:25", tent: "string JSON com \\\\neq", ok: false },
  { t: "16:54:12", tent: "\\ne", ok: false },
  { t: "16:59:16", tent: "\\\\neq", ok: false },
  { t: "16:59:51", tent: "'x ≠ $\\frac{\\pi}{2}$'", ok: true },
];

/* ── Bloco 05 · os quatro lotes e a sessão ────────────────────────── */
export const LOTES = [
  { kicker: "Lote 1 · 20 questões", pct: "65%", desc: "sem documento", tone: "base" },
  { kicker: "Lote 2 · 20 questões", pct: "95%", desc: "documento v2", tone: "" },
  { kicker: "Lote 3 · 20 questões", pct: "85%", desc: "documento v3", tone: "" },
  {
    kicker: "Lote 4 · 10 questões",
    pct: "100%",
    desc: "documento v4: o único lote do acervo inteiro sem nenhuma correção",
    tone: "hi",
  },
];

export const SESSAO = [
  { label: "Duração", value: "1h21, cronometrada" },
  { label: "Produzidas", value: "70 questões, 4 lotes" },
  { label: "Escape de sessão", value: "0%, nada ficou para depois" },
  { label: "Erro matemático", value: "0 em 70" },
  { label: "Ids descartados", value: "0, com 70 slots para 70 questões" },
  { label: "Versões da especificação", value: "5, escritas durante a sessão" },
];

/* ── Bloco 07 · os limites do levantamento ────────────────────────── */
export const NAO_AFIRMO = [
  {
    strong: "Que o processo melhorou.",
    rest: " A série oscila e não sobe: 98 · 100 · 69 · 93 · 74 · 84 · 86 · 78 · 86. O lote novo (84%) fica acima da média e abaixo do melhor histórico (93%). Um lote não faz série.",
  },
  {
    strong: "Que lote menor dá melhor resultado.",
    rest: " O lote de 210 tem n=1, foi o primeiro grande, e no mesmo dia dois assistentes rodaram em paralelo. Três variáveis confundidas.",
  },
  {
    strong: "Que o log viu tudo.",
    rest: " Ele não vê correção feita no código, e não vê defeito interceptado antes de entrar no banco.",
  },
];

export const FALTA_MEDIR = [
  {
    strong: "Um segundo lote, no público novo.",
    rest: " O lote de 04/08 foi em terreno conhecido; o teste real é o fundamental, onde tudo é novo.",
  },
  {
    strong: "A taxa real de defeito na geração.",
    rest: " O log só vê o que sobreviveu às inspeções. No lote novo, um defeito foi corrigido antes de entrar no banco e não aparece em lugar nenhum.",
  },
  {
    strong: "Quanto foi corrigido no código.",
    rest: " Dois casos confirmados, nenhum dos dois gerou registro no banco.",
  },
];
