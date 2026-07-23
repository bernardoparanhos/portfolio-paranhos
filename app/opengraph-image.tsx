import { ImageResponse } from "next/og";

export const alt = "Bernardo Paranhos — Engenharia de Produção, Inovação e IA | UTFPR Medianeira";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG image gerada em build time com a paleta Organic do site (sem assets externos
// nem glifos que exijam download de fonte — o Satori só tem a fonte latina padrão).
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
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#c67139",
            color: "#f5ead8",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          B
        </div>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#8a4a22" }}>
          UTFPR MEDIANEIRA · ENGENHARIA DE PRODUÇÃO
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          Bernardo Paranhos
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#5c5348",
            maxWidth: 940,
            lineHeight: 1.3,
          }}
        >
          Engenheiro de Produção que resolve problemas de verdade. Dados, IA aplicada e processos.
        </div>
      </div>
      <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#6e6355" }}>
        <span>InovaGrad 2025 · 1º lugar</span>
        <span>·</span>
        <span>MAT-IA · plataforma com IA</span>
      </div>
    </div>,
    { ...size },
  );
}
