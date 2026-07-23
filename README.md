# Portfolio — Bernardo Paranhos (Next.js + TypeScript)

Versão Next.js (App Router) do portfolio premium, fiel ao design aprovado:
aurora que segue o cursor, cursor custom, tilt 3D nos cards, reveals no scroll
e marquee infinito sempre preenchido.

## Requisitos

- **Node.js 20.9+** (recomendado 22 LTS) — exigido pelo Next.js 16
- npm 10+

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — sobe o build de produção
- `npm run lint` — ESLint (next/core-web-vitals + typescript), zero warnings
- `npm run format` — Prettier (escreve) · `npm run format:check` (só valida)
- `npm run typecheck` — `tsc --noEmit`

## Configuração de deploy

A URL canônica (usada em metadata, Open Graph, sitemap e robots) vem de
`NEXT_PUBLIC_SITE_URL`. Defina essa variável no ambiente de deploy (ex.: Vercel)
com o domínio final. O fallback em `app/site-config.ts` só é usado localmente.

## Estrutura

- `app/layout.tsx` — fontes (Caprasimo, Figtree, JetBrains Mono via next/font), metadata completa e viewport
- `app/site-config.ts` — URL/nome/descrição centralizados
- `app/page.tsx` — todo o conteúdo do site (server component)
- `app/opengraph-image.tsx` — imagem OG gerada em build time (next/og)
- `app/sitemap.ts` · `app/robots.ts` · `app/manifest.ts` — SEO/PWA
- `app/icon.svg` — favicon da marca (✺)
- `components/Effects.tsx` — efeitos client-side (aurora, cursor, tilt, reveal, marquee)
- `app/globals.css` — design tokens (paleta Organic) e estilos
- `next.config.mjs` — security headers, CSP e otimização de imagem
- `public/foto-perfil.jpeg` — foto do perfil

## Segurança & performance

**Dependências**

- Next.js `16.2.11` + React `19.2.8` (versão estável mais recente, com todos os CVEs corrigidos).
- `postcss` e `sharp` fixados via `overrides` em versões sem vulnerabilidade.
- `npm audit` limpo: **0 vulnerabilidades** (0 high / 0 critical).

**HTTP security headers** (em `next.config.mjs`, aplicados a todas as rotas)

- `Content-Security-Policy` restrita: `default-src 'self'`, `object-src 'none'`,
  `base-uri 'self'`, `frame-ancestors 'none'`, `img-src 'self' data:`,
  `upgrade-insecure-requests`. As fontes são auto-hospedadas pelo `next/font`,
  então não é necessário liberar origens externas.
- `Strict-Transport-Security` (2 anos, `includeSubDomains`, `preload`)
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` desabilitando câmera, microfone, geolocalização, etc.
- `X-DNS-Prefetch-Control: on` e `X-Powered-By` removido.
- Todos os links externos usam `rel="noopener noreferrer"`.

**Performance & Core Web Vitals**

- Foto do perfil via `next/image` (AVIF/WebP, `sizes` responsivo, `placeholder="blur"`,
  dimensões reservadas via `aspect-ratio` → sem layout shift).
- Fontes `next/font` com `display: swap` (sem FOUT/CLS, apenas subsets latinos).
- `Effects.tsx`: loop `requestAnimationFrame` sob demanda (para em idle), pausa com a
  aba em background (`visibilitychange`), listeners `passive`, e limpeza completa no
  unmount. Respeita `prefers-reduced-motion: reduce` (desliga aurora, cursor, tilt e marquee).
- `Cache-Control: public, max-age=31536000, immutable` para assets estáticos.

**SEO & Acessibilidade**

- Metadata completa: Open Graph, Twitter card, canonical, `lang="pt-BR"`, `theme-color`, OG image.
- `sitemap.xml`, `robots.txt` e web app manifest.
- Marcos semânticos, ordem de headings e `:focus-visible` preservados; o cursor custom
  nunca cobre o outline de foco do teclado.
