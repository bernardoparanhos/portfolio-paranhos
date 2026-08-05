import { ImageResponse } from "next/og";

export const alt = "MAT-IA · estudo de caso · Bernardo Paranhos · Engenharia de Produção";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG do estudo 001, na paleta clara do site (mesmo esquema da OG da home:
// build time, sem assets externos, só a fonte latina padrão do Satori).
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f5ead8",
        color: "#201e1d",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#8a4a22" }}>
        BASTIDORES · ESTUDO DE CASO 001 · JUL/2026
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          Um sistema em produção, lido como linha de produção.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#5c5348",
            maxWidth: 940,
            lineHeight: 1.35,
          }}
        >
          Inspeção, custo por peça, limite de retrabalho, e o que ainda não dá para afirmar.
        </div>
      </div>
      <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#6e6355" }}>
        <span>Bernardo Paranhos</span>
        <span>·</span>
        <span>engenheiroparanhos.com.br</span>
      </div>
    </div>,
    { ...size },
  );
}
