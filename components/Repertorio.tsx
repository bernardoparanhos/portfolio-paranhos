"use client";

import { useState } from "react";
import type { Dict } from "@/app/i18n";
import { BRAND_ICONS } from "./brand-icons";

type Cat = "eng" | "tec";
type Filter = "all" | Cat;

// Metadados por coluna (não traduzíveis) — alinhados por índice com t.columns.
// glyph: cor do ✺ · cat: categoria do filtro · bold: índices em peso 600
// icons: null = coluna sem ícones (col 1 e 2) | array por item ([] = sem ícone → espaçador)
const COLS: {
  glyph: string;
  cat: Cat;
  bold: number[];
  icons: string[][] | null;
}[] = [
  { glyph: "var(--accent)", cat: "eng", bold: [0, 1], icons: null },
  { glyph: "var(--accent2)", cat: "eng", bold: [0, 1], icons: null },
  {
    glyph: "var(--accent)",
    cat: "tec",
    bold: [0, 3, 4],
    icons: [["python"], ["pandas"], ["numpy"], ["postgresql"], ["openai"], []],
  },
  {
    glyph: "var(--accent2)",
    cat: "tec",
    bold: [0, 1, 5],
    icons: [
      ["typescript"],
      ["react", "vite"],
      ["nodedotjs"],
      ["nextdotjs", "astro"],
      ["tailwindcss"],
      ["github"],
      ["vercel"],
      ["webstorm"],
    ],
  },
];

function BrandIcon({
  slug,
  size = 18,
  inline = false,
}: {
  slug: string;
  size?: number;
  inline?: boolean;
}) {
  const d = BRAND_ICONS[slug];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={inline ? "rep-icon rep-icon-inline" : "rep-icon"}
    >
      <path d={d} />
    </svg>
  );
}

// Label com possível 2º ícone inline antes do segundo termo (ex.: "React · [vite]Vite").
function Label({ text, secondIcon }: { text: string; secondIcon?: string }) {
  if (!secondIcon) return <span className="rep-label">{text}</span>;
  const [a, b] = text.split(" · ");
  return (
    <span className="rep-label">
      {a} · <BrandIcon slug={secondIcon} size={16} inline /> {b}
    </span>
  );
}

export default function Repertorio({ t }: { t: Dict["repertoire"] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const filters: Filter[] = ["all", "eng", "tec"];

  return (
    <div className="rep">
      <div className="rep-top">
        <p className="rep-intro">{t.intro}</p>
        <div className="rep-filters" role="group" aria-label={t.filters.all}>
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`rep-pill${filter === f ? " active" : ""}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {t.filters[f]}
            </button>
          ))}
        </div>
      </div>

      <div className="rep-grid">
        {t.columns.map((col, ci) => {
          const meta = COLS[ci];
          const dim = filter !== "all" && filter !== meta.cat;
          return (
            <div key={ci} className="rep-col" style={{ opacity: dim ? 0.24 : 1 }}>
              <div className="rep-head">
                <span className="rep-glyph" style={{ color: meta.glyph }}>
                  ✺
                </span>
                <span className="rep-kicker">
                  {col.kicker[0]}
                  <br />
                  {col.kicker[1]}
                </span>
              </div>
              <div className="rep-items">
                {col.items.map((item, i) => {
                  const bold = meta.bold.includes(i);
                  const icons = meta.icons ? meta.icons[i] : null;
                  return (
                    <div key={i} className="rep-row" style={bold ? { fontWeight: 600 } : undefined}>
                      {meta.icons &&
                        (icons && icons.length > 0 ? (
                          <BrandIcon slug={icons[0]} />
                        ) : (
                          <span className="rep-spacer" />
                        ))}
                      <Label
                        text={item}
                        secondIcon={icons && icons.length > 1 ? icons[1] : undefined}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rep-progress">
        <span className="rep-progress-label">{t.inProgressLabel}</span>
        {t.inProgress.map((x, i) => (
          <span key={i} className="tag tag-outline">
            {x}
          </span>
        ))}
      </div>

      {/* concluidas: tag preenchida separa do que ainda esta em curso */}
      <div className="rep-progress rep-certs">
        <span className="rep-progress-label">{t.certsLabel}</span>
        {t.certs.map((x, i) => (
          <span key={i} className="tag tag-accent">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
