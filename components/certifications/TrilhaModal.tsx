"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Dict } from "@/app/i18n";
import Chevron from "./Chevron";
import NodeDetail from "./NodeDetail";
import { FEITOS, NOS, TOTAL, contar } from "./trilha-data";

const FOCAVEIS = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function TrilhaModal({
  t,
  indice,
  onIr,
  onClose,
}: {
  t: Dict["repertoire"]["trilha"];
  /** módulo em que o modal abre */
  indice: number;
  /** devolve a navegação pro cartão, que fica no mesmo módulo ao fechar */
  onIr: (i: number) => void;
  onClose: () => void;
}) {
  const [atual, setAtual] = useState(indice);
  const [mounted, setMounted] = useState(false);
  const painel = useRef<HTMLDivElement>(null);
  const botaoX = useRef<HTMLButtonElement>(null);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // ao abrir, o foco vai para o X — de onde o Tab passa a circular no painel
  useEffect(() => {
    if (mounted) botaoX.current?.focus();
  }, [mounted]);

  const ir = (delta: number) => {
    const i = (atual + delta + TOTAL) % TOTAL;
    setAtual(i);
    onIr(i);
  };

  // Esc fecha, setas trocam de módulo e o Tab fica preso no painel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        setAtual((i) => {
          const proximo = (i + (e.key === "ArrowLeft" ? -1 : 1) + TOTAL) % TOTAL;
          onIr(proximo);
          return proximo;
        });
        return;
      }
      if (e.key !== "Tab" || !painel.current) return;
      const focaveis = painel.current.querySelectorAll<HTMLElement>(FOCAVEIS);
      if (!focaveis.length) return;
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onIr]);

  if (!mounted) return null;

  return createPortal(
    // o overlay fecha; o painel nao — por isso o stopPropagation dentro
    <div className="trilha-lb" onClick={onClose}>
      <div
        ref={painel}
        className="trilha-lb-panel"
        role="dialog"
        aria-modal="true"
        aria-label={t.modalTitulo}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={botaoX}
          type="button"
          className="trilha-x"
          aria-label={t.fecharBtn}
          onClick={onClose}
        >
          ✕
        </button>

        <span className="trilha-lb-kicker">{t.emissor}</span>
        <h3 className="trilha-lb-titulo">{t.modalTitulo}</h3>

        <div className="trilha-progresso">
          <div className="trilha-barras" aria-hidden="true">
            {NOS.map((n, i) => (
              <span
                key={n.id}
                className={`trilha-barra${i === atual ? " atual" : ""}${i < FEITOS ? " feita" : ""}`}
              />
            ))}
          </div>
          <span className="trilha-progresso-txt">{contar(t.progresso)}</span>
        </div>

        {/* a key reanima a troca de módulo em vez de trocar o texto no lugar */}
        <NodeDetail key={atual} t={t} indice={atual} />

        <div className="trilha-lb-foot">
          <div className="trilha-lb-nav">
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
              {NOS[atual].num} / {NOS[TOTAL - 1].num}
            </span>
          </div>
          <span className="trilha-lb-hint">{t.fechar}</span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
