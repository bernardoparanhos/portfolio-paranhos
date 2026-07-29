"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CASE, type CaseLang } from "./content";

// negrito via **...**
function Rich({ text }: { text: string }) {
  return <>{text.split("**").map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p))}</>;
}

// metadados estruturais (iguais nos dois idiomas), alinhados por índice com o conteúdo
const STAT_META = [
  { fig: "3", tone: "a", pct: false },
  { fig: "−30", tone: "b", pct: true },
  { fig: "US$", tone: "a", pct: false },
];
const FLOW_TYPE = ["entrada", "inspecao", "operacao", "inspecao", "operacao", "inspecao", "saida"];
const LENTE_TONE = ["a", "b", "a"];
const PILL_CLASS = [
  "case-pill-root",
  "case-pill-a",
  "case-pill-a",
  "case-pill-a",
  "case-pill-b",
  "case-pill-b",
];

export default function CaseContent() {
  const [lang, setLang] = useState<CaseLang>("pt");

  // Segue o idioma escolhido na página principal (mesma chave do localStorage).
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "en") setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  // scroll reveal (respeita prefers-reduced-motion)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
      el.style.transition =
        "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const t = en.target as HTMLElement;
            t.style.opacity = "1";
            t.style.transform = "none";
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const c = CASE[lang];
  const s = c.situations;

  return (
    <div className="case">
      {/* barra superior */}
      <div className="case-bar">
        <div className="case-bar-inner">
          <Link href="/" className="case-back">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {c.back}
          </Link>
          <span className="case-bar-tag">{c.barTag}</span>
        </div>
      </div>

      {/* abertura */}
      <header data-reveal className="case-open">
        <div className="case-blob case-blob-tr" />
        <div className="case-open-inner">
          <div className="case-kicker">{c.kicker}</div>
          <h1 className="case-h1">
            {c.h1.a}
            <em>{c.h1.em}</em>
            {c.h1.b}
          </h1>
          <p className="case-lead">{c.lead}</p>
          <div className="case-meta">
            {c.meta.map((m) => (
              <div key={m.label} className="case-meta-cell">
                <span className="case-meta-label">{m.label}</span>
                <span className="case-meta-value">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* A lente */}
      <section data-reveal className="case-wrap">
        <div className="case-lente">
          <div className="case-panel-kicker">{c.lenteKicker}</div>
          <p className="case-lente-p">
            <Rich text={c.lenteP} />
          </p>
          <div className="case-lente-grid">
            {c.lente.map((l, i) => (
              <div key={l.step} className={`case-lente-col tone-${LENTE_TONE[i]}`}>
                <span className="case-lente-step">{l.step}</span>
                <span className="case-lente-title">{l.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situação 01 */}
      <section data-reveal className="case-wrap case-situ">
        <div className="case-situ-head">
          <span className="case-situ-num">{s[0].num}</span>
          <span className="case-situ-label">{s[0].label}</span>
        </div>
        <h2 className="case-h2">{s[0].h2}</h2>
        {s[0].body.map((p, i) => (
          <p key={i} className="case-body">
            <Rich text={p} />
          </p>
        ))}

        <div className="case-stats">
          {c.s1Stats.map((st, i) => (
            <div key={i} className="case-stat">
              <div className={`case-stat-fig tone-${STAT_META[i].tone}`}>
                {STAT_META[i].fig}
                {STAT_META[i].pct && <span className="case-stat-pct">%</span>}
              </div>
              <div className="case-stat-label">{st.label}</div>
              <div className="case-stat-exp">{st.exp}</div>
            </div>
          ))}
        </div>

        <div className="case-flow">
          <div className="case-flow-head">
            <span className="case-flow-title">{c.flowTitle}</span>
            <div className="case-flow-legend">
              <span className="case-legend-item">
                <span className="case-mk case-mk-op" /> {c.legendOp}
              </span>
              <span className="case-legend-item">
                <span className="case-mk case-mk-insp" /> {c.legendInsp}
              </span>
            </div>
          </div>
          <div className="case-flow-rows">
            {c.flow.map((r, i) => {
              const type = FLOW_TYPE[i];
              return (
                <div key={i} className="case-flow-row">
                  <span className={`case-flow-stage stage-${type}`}>{r.stage}</span>
                  <div
                    className={`case-flow-body type-${type}${i === c.flow.length - 1 ? " last" : ""}`}
                  >
                    <span className={`case-mk case-mk-${type}`} />
                    <div className="case-flow-line">{r.title}</div>
                    {r.detail && <div className="case-flow-detail">{r.detail}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="case-take">{s[0].take}</p>
      </section>

      {/* Situação 02 */}
      <section data-reveal className="case-wrap case-situ">
        <div className="case-situ-head">
          <span className="case-situ-num">{s[1].num}</span>
          <span className="case-situ-label">{s[1].label}</span>
        </div>
        <h2 className="case-h2">{s[1].h2}</h2>
        {s[1].body.map((p, i) => (
          <p key={i} className="case-body">
            <Rich text={p} />
          </p>
        ))}

        <div className="case-ba">
          <div className="case-before">
            <span className="case-panel-kicker">{c.beforeKicker}</span>
            <div className="case-before-fig">150</div>
            <div className="case-before-unit">{c.beforeUnit}</div>
            <div className="case-before-note">{c.beforeNote}</div>
          </div>
          <div className="case-after">
            <span className="case-panel-kicker accent">{c.afterKicker}</span>
            <div className="case-after-table">
              <span className="case-th">{c.afterTh[0]}</span>
              <span className="case-th right">{c.afterTh[1]}</span>
              <span className="case-th right">{c.afterTh[2]}</span>

              <span className="case-td strong finding">{c.afterRows[0].op}</span>
              <span className="case-td right strong finding">{c.afterRows[0].acertos}</span>
              <span className="case-td right strong finding">{c.afterRows[0].tempo}</span>

              <span className="case-td strong">{c.afterRows[1].op}</span>
              <span className="case-td right">{c.afterRows[1].acertos}</span>
              <span className="case-td right">{c.afterRows[1].tempo}</span>
            </div>
            <p className="case-after-p">
              <Rich text={c.afterP} />
            </p>
          </div>
        </div>

        <p className="case-disclaimer">{c.disclaimer}</p>
        <p className="case-take">{s[1].take}</p>
      </section>

      {/* Situação 03 */}
      <section data-reveal className="case-wrap case-situ">
        <div className="case-situ-head">
          <span className="case-situ-num">{s[2].num}</span>
          <span className="case-situ-label">{s[2].label}</span>
        </div>
        <h2 className="case-h2">{s[2].h2}</h2>
        {s[2].body.map((p, i) => (
          <p key={i} className="case-body">
            <Rich text={p} />
          </p>
        ))}

        <div className="case-prec">
          <div className="case-panel-kicker">{c.precKicker}</div>
          <div className="case-prec-row">
            {c.pills.map((p, i) => (
              <span key={i} className="case-prec-item">
                <span className={`case-pill ${PILL_CLASS[i]}`}>{p}</span>
                {i < c.pills.length - 1 && <span className="case-prec-arrow">→</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="case-test">
          <div className="case-test-fig">
            <span className="case-test-num">23</span>
            <span className="case-test-cap">{c.testCap}</span>
          </div>
          <div>
            <h3 className="case-test-title">{c.testTitle}</h3>
            <p className="case-test-body">
              <Rich text={c.testBody} />
            </p>
          </div>
        </div>

        <p className="case-take">{s[2].take}</p>
      </section>

      {/* O que a plataforma mede */}
      <section data-reveal className="case-wrap">
        <div className="case-plain-head">{c.medeHead}</div>
        <p className="case-body">{c.medeIntro}</p>
        <div className="case-ind">
          {c.indicadores.map((it) => (
            <div key={it.nome} className="case-ind-row">
              <span className="case-ind-name">{it.nome}</span>
              <span className="case-ind-why">{it.porque}</span>
            </div>
          ))}
        </div>
      </section>

      {/* O que eu ainda não sei medir */}
      <section data-reveal className="case-wrap">
        <div className="case-honesty">
          <div className="case-panel-kicker">{c.honestyKicker}</div>
          <h2 className="case-honesty-h2">{c.honestyH2}</h2>
          <p className="case-honesty-p">{c.honestyP}</p>
          <div className="case-honesty-cols">
            <div className="case-honesty-col">
              <div className="case-honesty-label na">{c.naoAfirmoLabel}</div>
              <div className="case-honesty-list">
                {c.naoAfirmo.map((n, i) => (
                  <p key={i}>{n}</p>
                ))}
              </div>
            </div>
            <div className="case-honesty-col">
              <div className="case-honesty-label next">{c.proximoLabel}</div>
              <p className="case-honesty-next">
                <Rich text={c.proximo} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* fechamento */}
      <section data-reveal className="case-wrap case-close">
        <div className="case-blob case-blob-tl" />
        <div className="case-close-inner">
          <h2 className="case-close-h2">{c.closeH2}</h2>
          <p className="case-close-p">{c.closeP}</p>
          <div className="case-close-ctas">
            <a
              href="https://plataformamati.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {c.verPlataforma}
            </a>
            <Link href="/" className="btn btn-secondary">
              {c.voltar}
            </Link>
          </div>
          <div className="case-footer">
            <span>{c.footer}</span>
            <span className="case-footer-mark">✺</span>
          </div>
        </div>
      </section>
    </div>
  );
}
