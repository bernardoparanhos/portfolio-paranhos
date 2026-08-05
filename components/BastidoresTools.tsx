/* eslint-disable @next/next/no-img-element -- os logos entram via <img> (evita
   colisão de ids de gradiente entre SVGs inline e mantém o cache do browser). */

// Faixa de ferramentas do card 002: quem moldou as questões, quem guardou as
// regras e o que continua sendo humano. Superfície escura própria, igual nos
// dois temas — por isso os literais e não os tokens.
export type Tool = { l1: string; l2: string };

const ICON = { width: 15, height: 15 } as const;

export default function BastidoresTools({ tools }: { tools: Tool[] }) {
  return (
    <div className="bast-tools">
      <div className="bast-tool">
        <span className="bast-tool-icons">
          {/* a marca da OpenAI é monocromática: no leito escuro entra a versão branca */}
          <img src="/icons/icon-openai.svg" alt="OpenAI" {...ICON} className="mono" />
          <img src="/icons/icon-claude.svg" alt="Claude" {...ICON} />
          <img src="/icons/icon-gemini.svg" alt="Gemini" {...ICON} />
        </span>
        <span className="bast-tool-label">
          {tools[0].l1}
          <br />
          {tools[0].l2}
        </span>
      </div>

      <div className="bast-tool">
        <span className="bast-tool-icons">
          <img src="/icons/icon-obsidian.svg" alt="Obsidian" {...ICON} />
        </span>
        <span className="bast-tool-label">
          {tools[1].l1}
          <br />
          {tools[1].l2}
        </span>
      </div>

      <div className="bast-tool">
        <span className="bast-tool-icons">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.9-3.9" />
          </svg>
        </span>
        <span className="bast-tool-label">
          {tools[2].l1}
          <br />
          {tools[2].l2}
        </span>
      </div>
    </div>
  );
}
