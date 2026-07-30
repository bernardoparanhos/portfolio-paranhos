"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CV_PATH = "/cv-bernardo-paranhos.pdf";

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
// com um botão premium pra salvar. Modal via portal (acima da nav), fecha no
// ×, clique fora ou Esc, trava o scroll do body e gerencia o foco.
export default function CvButton({
  label,
  title,
  download,
}: {
  label: string;
  title: string;
  download: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  return (
    <>
      <button type="button" className="cv-pill" aria-label={title} onClick={() => setOpen(true)}>
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
                <span className="cv-card-title">{title}</span>
                <div className="cv-card-actions">
                  <a href={CV_PATH} download className="cv-download">
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
              <iframe className="cv-frame" src={`${CV_PATH}#toolbar=0&navpanes=0`} title={title} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
