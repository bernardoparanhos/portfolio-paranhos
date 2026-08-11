"use client";
/* eslint-disable @next/next/no-img-element -- os scans sao servidos como estao
   (documento assinado nao passa por reprocessamento) e o lightbox precisa da
   imagem em resolucao cheia, sem os breakpoints do next/image. */

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Dict } from "@/app/i18n";

// Scans de cada credencial e sigla do emissor pro placeholder — alinhados por
// indice com t.certs (e `srcs` alinhado com t.certs[i].pages, que traz o rotulo
// de cada folha). `srcs: []` = certificado ainda nao entregue: entra o
// placeholder tracejado, na miniatura e no lightbox.
const CERT_META: { srcs: string[]; sigla: string; tilt: string }[] = [
  { srcs: [], sigla: "FM2S", tilt: "cert-thumb-a" },
  {
    srcs: ["/cert-claude.jpg", "/cert-claude-modulos.jpg"],
    sigla: "HASHTAG",
    tilt: "cert-thumb-b",
  },
];

export default function Certificacoes({ t }: { t: Dict["repertoire"] }) {
  const [aberto, setAberto] = useState<number | null>(null);
  const [pagina, setPagina] = useState(0);
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // Esc fecha o lightbox; o listener sai ao fechar e no unmount.
  useEffect(() => {
    if (aberto === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [aberto]);

  // abrir sempre volta pra primeira folha da credencial
  const abrir = (i: number) => {
    setPagina(0);
    setAberto(i);
  };
  const teclaAbre = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrir(i);
    }
  };

  const atual = aberto === null ? null : t.certs[aberto];
  const metaAtual = aberto === null ? null : CERT_META[aberto];

  return (
    <div className="certs">
      <span className="certs-kicker">{t.certsLabel}</span>

      <div className="certs-grid">
        {t.certs.map((c, i) => {
          const meta = CERT_META[i];
          // sem scan = credencial ainda em curso: o cartao existe, mas não abre
          const pendente = meta.srcs.length === 0;
          return (
            <article key={c.name} className="cert-card">
              <div className="cert-top">
                <span className="cert-area">{c.area}</span>
                <span className="cert-date">{c.date}</span>
              </div>
              <h3 className="cert-name">{c.name}</h3>
              <div className="cert-issuer">
                {c.issuer}
                {c.hours && ` · ${c.hours}`}
              </div>
              <div className="cert-detail">{c.detail}</div>

              <div className="cert-foot">
                {pendente ? (
                  <span className="cert-soon">{t.certsSoonShort}</span>
                ) : (
                  <button type="button" className="cert-link" onClick={() => abrir(i)}>
                    {t.certsView} ↗
                  </button>
                )}
                <span
                  role={pendente ? undefined : "button"}
                  tabIndex={pendente ? undefined : 0}
                  aria-label={pendente ? undefined : `${t.certsZoom} ${c.full}`}
                  className={`cert-thumb ${meta.tilt}${pendente ? " aguardando" : ""}`}
                  onClick={pendente ? undefined : () => abrir(i)}
                  onKeyDown={pendente ? undefined : (e) => teclaAbre(e, i)}
                >
                  {pendente ? (
                    <span className="cert-thumb-ph">{meta.sigla}</span>
                  ) : (
                    <img src={meta.srcs[0]} alt="" loading="lazy" decoding="async" />
                  )}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {aberto !== null &&
        atual &&
        metaAtual &&
        mounted &&
        createPortal(
          // o overlay fecha; o painel nao — por isso o stopPropagation dentro
          <div
            className="cert-lb"
            role="dialog"
            aria-modal="true"
            aria-label={atual.full}
            onClick={() => setAberto(null)}
          >
            <div className="cert-lb-panel" onClick={(e) => e.stopPropagation()}>
              <div className="cert-lb-left">
                <div className="cert-lb-paper">
                  {metaAtual.srcs.length ? (
                    <img
                      src={metaAtual.srcs[pagina]}
                      alt={`${atual.full} · ${atual.pages[pagina]}`}
                    />
                  ) : (
                    <div className="cert-lb-ph">{t.certsSoon}</div>
                  )}
                </div>

                {/* credencial com mais de uma folha: uma aba por folha */}
                {metaAtual.srcs.length > 1 && (
                  <div className="cert-lb-tabs">
                    {metaAtual.srcs.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`cert-lb-tab${i === pagina ? " ativa" : ""}`}
                        aria-current={i === pagina}
                        onClick={() => setPagina(i)}
                      >
                        {atual.pages[i]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="cert-lb-info">
                <span className="cert-lb-area">{atual.area}</span>
                <h3 className="cert-lb-name">{atual.name}</h3>
                <div className="cert-lb-issuer">{atual.issuer}</div>
                <p className="cert-lb-blurb">{atual.blurb}</p>

                <dl className="cert-lb-rows">
                  {atual.rows.map((r) => (
                    <div key={r.label} className="cert-lb-row">
                      <dt>{r.label}</dt>
                      <dd>{r.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="cert-lb-foot">
                  <span className="cert-lb-hint">{t.certsClose}</span>
                  <button type="button" className="cert-lb-close" onClick={() => setAberto(null)}>
                    {t.certsCloseBtn} ✕
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
