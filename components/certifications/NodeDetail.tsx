"use client";
/* eslint-disable @next/next/no-img-element -- ver nota em TrilhaCard.tsx */

import { useRef } from "react";
import type { Dict } from "@/app/i18n";
import { tiltLeave, tiltMove } from "./tilt";
import { NOS } from "./trilha-data";

export default function NodeDetail({
  t,
  indice,
}: {
  t: Dict["repertoire"]["trilha"];
  indice: number;
}) {
  const no = NOS[indice];
  const texto = t.nos[indice];
  const scan = useRef<HTMLDivElement>(null);
  const brilho = useRef<HTMLSpanElement>(null);

  const status = no.done ? `✓ ${t.concluido}` : no.final ? t.passoFinal : t.emConstrucao;
  // concluído fala no passado (o que rendeu); em construção fala no futuro
  // (o que vem e por que está na trilha)
  const blocos = no.done
    ? [
        { label: t.labelAchei, corpo: texto.achei },
        { label: t.labelEstudei, corpo: texto.estudei },
        { label: t.labelAplicar, corpo: texto.aplicar },
      ]
    : [
        { label: t.labelEstudarei, corpo: texto.estudarei },
        { label: t.labelPorque, corpo: texto.porque },
      ];

  return (
    <div className="trilha-ficha">
      <div className="trilha-ficha-grid">
        <div className="trilha-ficha-esq">
          {no.done ? (
            <>
              <div
                ref={scan}
                className="trilha-scan"
                onMouseMove={(e) => tiltMove(scan.current!, e, 10, brilho.current)}
                onMouseLeave={() => tiltLeave(scan.current!, brilho.current)}
              >
                <img src={no.img} alt={texto.titulo} />
                <span ref={brilho} className="trilha-scan-brilho" aria-hidden="true" />
              </div>
              <span className="trilha-scan-dica">{t.tiltDica}</span>
            </>
          ) : (
            <div className="trilha-scan-ph">
              <span className="trilha-scan-num">{no.num}</span>
              <span className="trilha-no-selo">{t.emBreve}</span>
            </div>
          )}
        </div>

        <div className="trilha-ficha-dir">
          <span className="trilha-ficha-kicker">
            {t.modulo} {no.num} · {status}
          </span>
          <h4 className="trilha-ficha-titulo">{texto.titulo}</h4>
          <div className="trilha-ficha-sub">
            {t.emissor} · {texto.data || t.previsto}
          </div>

          {blocos.map((b) => (
            <div key={b.label} className="trilha-bloco">
              <span className="trilha-bloco-label">{b.label}</span>
              <p className="trilha-bloco-corpo">{b.corpo}</p>
            </div>
          ))}

          <div className="trilha-ficha-acao">
            {no.done ? (
              <a
                className="trilha-verificar"
                href={no.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.verificar}
              </a>
            ) : (
              <span className="trilha-no-selo">{t.emObras}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
