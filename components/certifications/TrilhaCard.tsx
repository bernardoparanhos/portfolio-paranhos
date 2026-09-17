"use client";
/* eslint-disable @next/next/no-img-element -- os distintivos sao PNGs servidos
   como estao: aparecem em tamanho fixo no palco e em resolucao cheia na ficha,
   sem ganho real nos breakpoints do next/image. */

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/app/i18n";
import Chevron from "./Chevron";
import TrilhaModal from "./TrilhaModal";
import { FEITOS, NOS, TOTAL, contar } from "./trilha-data";

export default function TrilhaCard({ t }: { t: Dict["repertoire"]["trilha"] }) {
  const [ativo, setAtivo] = useState(0);
  const [aberto, setAberto] = useState<number | null>(null);
  // guarda quem abriu o modal, pra devolver o foco no lugar certo ao fechar
  const origem = useRef<HTMLElement | null>(null);
  const abas = useRef<HTMLDivElement>(null);

  // até 680px a lista de módulos vira uma fila rolável: quem chega pelas setas
  // precisa ver a aba que acabou de virar a ativa
  useEffect(() => {
    const aba = abas.current?.querySelectorAll<HTMLElement>("[role=tab]")[ativo];
    aba?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [ativo]);

  const no = NOS[ativo];
  const texto = t.nos[ativo];
  const status = no.done ? t.concluido : no.final ? t.passoFinal : t.emConstrucao;

  const ir = (delta: number) => {
    const i = (ativo + delta + TOTAL) % TOTAL;
    setAtivo(i);
    // com o foco na lista, navegar tem que mover o foco junto (padrão de tabs)
    if (abas.current?.contains(document.activeElement)) {
      abas.current.querySelectorAll<HTMLButtonElement>("[role=tab]")[i]?.focus();
    }
  };

  const abrir = (e: React.MouseEvent) => {
    origem.current = e.currentTarget as HTMLElement;
    setAberto(ativo);
  };

  // setas do teclado percorrem a lista, como manda o padrão de tablist
  const teclaNasAbas = (e: React.KeyboardEvent) => {
    const passo = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!passo) return;
    e.preventDefault();
    ir(passo);
  };

  return (
    <>
      <article className="cert-card trilha-card">
        <span className="trilha-glow" aria-hidden="true" />

        <div className="cert-top">
          <span className="cert-area">{t.kicker}</span>
          <span className="trilha-contador">
            <span className="trilha-ponto" aria-hidden="true" />
            {contar(t.progresso)}
          </span>
        </div>

        <h3 className="cert-name">{t.titulo}</h3>
        <div className="cert-issuer">{t.sub}</div>

        <div className="trilha-palco">
          <div
            ref={abas}
            className="trilha-abas"
            role="tablist"
            aria-label={t.modalTitulo}
            aria-orientation="vertical"
            onKeyDown={teclaNasAbas}
          >
            {NOS.map((n, i) => (
              <button
                key={n.id}
                type="button"
                role="tab"
                id={`trilha-aba-${n.id}`}
                aria-controls={`trilha-painel-${n.id}`}
                aria-selected={i === ativo}
                tabIndex={i === ativo ? 0 : -1}
                className={`trilha-aba${i === ativo ? " ativa" : ""}${n.done ? " feito" : ""}`}
                onClick={() => setAtivo(i)}
              >
                <span className="trilha-aba-num">
                  {n.num} <span aria-hidden="true">{n.done ? "✓" : "···"}</span>
                </span>
                <span className="trilha-aba-nome">{t.nos[i].curto}</span>
              </button>
            ))}
          </div>

          <div
            className="trilha-painel"
            role="tabpanel"
            id={`trilha-painel-${no.id}`}
            aria-labelledby={`trilha-aba-${no.id}`}
          >
            <button
              type="button"
              className={`trilha-palco-badge${no.done ? "" : " vazio"}`}
              aria-label={`${t.verModulo}: ${texto.titulo}`}
              onClick={abrir}
            >
              {no.done ? (
                <img src={no.img} alt="" loading="lazy" decoding="async" />
              ) : (
                <>
                  <span className="trilha-palco-num">{no.num}</span>
                  <span className="trilha-no-selo">{t.emBreve}</span>
                </>
              )}
            </button>

            <div className="trilha-palco-info">
              <span className="trilha-ficha-kicker">
                {t.modulo} {no.num} · {status}
              </span>
              <h4 className="trilha-palco-titulo">{texto.titulo}</h4>
              <div className="trilha-ficha-sub">
                {t.emissor} · {texto.data || t.previsto}
              </div>
              <p className="trilha-palco-resumo">{texto.resumo}</p>

              <div className="trilha-ficha-acao">
                <button type="button" className="trilha-verificar" onClick={abrir}>
                  {t.verModulo}
                </button>
                {no.done && (
                  <a
                    className="trilha-externo"
                    href={no.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.verificar}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="trilha-nav">
          <button
            type="button"
            className="trilha-seta"
            aria-label={t.anterior}
            onClick={() => ir(-1)}
          >
            <Chevron dir="prev" />
          </button>
          <button
            type="button"
            className="trilha-seta"
            aria-label={t.proximo}
            onClick={() => ir(1)}
          >
            <Chevron dir="next" />
          </button>

          <span className="trilha-nav-cont">
            {no.num} / {NOS[TOTAL - 1].num}
          </span>

          <div className="trilha-barras" aria-hidden="true">
            {NOS.map((n, i) => (
              <span
                key={n.id}
                className={`trilha-barra${i === ativo ? " atual" : ""}${i < FEITOS ? " feita" : ""}`}
              />
            ))}
          </div>

          <span className="trilha-tag">{t.tag}</span>
        </div>
      </article>

      {aberto !== null && (
        <TrilhaModal
          t={t}
          indice={aberto}
          onIr={setAtivo}
          onClose={() => {
            setAberto(null);
            origem.current?.focus();
          }}
        />
      )}
    </>
  );
}
