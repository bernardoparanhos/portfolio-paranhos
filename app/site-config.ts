// Configuração central do site. Ajuste NEXT_PUBLIC_SITE_URL no deploy (Vercel)
// para o domínio final — o fallback abaixo é usado em dev e como padrão.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://engenheiroparanhos.com.br";

export const SITE_NAME = "Bernardo Paranhos";

export const SITE_TITLE =
  "Bernardo Paranhos — Engenharia de Produção, Inovação e IA | UTFPR Medianeira";

export const SITE_DESCRIPTION =
  "Bernardo Paranhos — estudante de Engenharia de Produção na UTFPR Medianeira, bolsista InovaGrad aprovado em 1º lugar (nota 9,6) e estagiário em consultoria de gestão. Desenvolve o MAT-IA, plataforma educacional com IA.";
