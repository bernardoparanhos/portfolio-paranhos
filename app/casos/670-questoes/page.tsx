import type { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
  title: "As 670 questões · Estudo de caso 002 · Bernardo Paranhos",
  description:
    "Quatro meses escrevendo 670 questões de matemática, medidos pelo log do console do banco: 506 comandos, sete famílias de defeito, 81% de acerto de primeira, e o que o levantamento não alcança.",
  alternates: { canonical: "/casos/670-questoes" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/casos/670-questoes",
    title: "As 670 questões · Estudo de caso 002 · Bernardo Paranhos",
    description:
      "Eu tinha um processo na cabeça. Fui medir e descobri que ele estava certo. O registro é que estava errado.",
  },
};

export default function Caso670Questoes() {
  return <CaseContent />;
}
