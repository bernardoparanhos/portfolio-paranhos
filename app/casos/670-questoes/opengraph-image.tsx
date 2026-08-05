import { ImageResponse } from "next/og";

export const alt =
  "As 670 questões · estudo de caso 002 · Bernardo Paranhos · Engenharia de Produção";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG do estudo 002, no leito escuro dos cards de número da página (o 002 tem
// identidade mais escura que o 001 — a OG acompanha).
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#211a12",
        color: "#f5ead8",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#d9884c" }}>
        BASTIDORES · ESTUDO DE CASO 002 · AGO/2026
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.12,
            maxWidth: 1020,
          }}
        >
          Eu tinha um processo na cabeça. Fui medir e descobri que ele estava certo.
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#d9884c", fontWeight: 700 }}>
          O registro é que estava errado.
        </div>
      </div>
      <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#b9ab97" }}>
        <span>506 comandos no log</span>
        <span>·</span>
        <span>670 questões medidas</span>
        <span>·</span>
        <span>engenheiroparanhos.com.br</span>
      </div>
    </div>,
    { ...size },
  );
}
