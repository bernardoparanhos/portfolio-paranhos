"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CV_FILES = {
  pt: "/cv-bernardo-paranhos-pt.pdf",
  en: "/cv-bernardo-paranhos-en.pdf",
} as const;
type CvLang = keyof typeof CV_FILES;

function DownloadIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

// Botão de CV: abre um modal centralizado que pré-visualiza o PDF (sem baixar),
// com abas PT/EN pra trocar de versão sem fechar e um botão premium pra salvar
// a versão em vista. Modal via portal (acima da nav), fecha no ×, clique fora
// ou Esc, trava o scroll do body e gerencia o foco. Abre sempre na versão do
// idioma atual do site, mas o usuário pode ver a outra sem trocar o idioma dele.
export default function CvButton({
  lang,
  label,
  title,
  download,
  ptLabel,
  enLabel,
}: {
  lang: CvLang;
  label: string;
  title: string;
  download: string;
  ptLabel: string;
  enLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<CvLang>(lang);
  const closeRef = useRef<HTMLButtonElement>(null);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const abrir = () => {
    setView(lang);
    setOpen(true);
  };

  return (
    <>
      <button type="button" className="cv-pill" aria-label={title} onClick={abrir}>
        <DownloadIcon />
        <span className="cv-pill-label">{label}</span>
      </button>

      {open &&
        mounted &&
        createPortal(
          <div
            className="cv-modal"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={() => setOpen(false)}
          >
            <div className="cv-card" onClick={(e) => e.stopPropagation()}>
              <div className="cv-card-head">
                <div className="cv-card-headline">
                  <span className="cv-card-title">{title}</span>
                  <div className="cv-lang-tabs" role="tablist" aria-label={title}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={view === "pt"}
                      className={`cv-lang-tab${view === "pt" ? " ativa" : ""}`}
                      onClick={() => setView("pt")}
                    >
                      PT
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={view === "en"}
                      className={`cv-lang-tab${view === "en" ? " ativa" : ""}`}
                      onClick={() => setView("en")}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <div className="cv-card-actions">
                  <a
                    key={view}
                    href={CV_FILES[view]}
                    download
                    className="cv-download"
                    aria-label={`${download} — ${view === "pt" ? ptLabel : enLabel}`}
                  >
                    <DownloadIcon size={14} />
                    {download}
                  </a>
                  <button
                    ref={closeRef}
                    type="button"
                    className="cv-close"
                    aria-label="Fechar"
                    onClick={() => setOpen(false)}
                  >
                    ×
                  </button>
                </div>
              </div>
              <iframe
                key={view}
                className="cv-frame"
                src={`${CV_FILES[view]}#toolbar=0&navpanes=0`}
                title={`${title} — ${view === "pt" ? ptLabel : enLabel}`}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
