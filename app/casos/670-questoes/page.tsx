import type { Metadata } from "next";
import CaseContent from "./CaseContent";
import CaseSchema from "../case-schema";

const TITLE = "As 670 questões · Estudo de caso 002 · Bernardo Paranhos";
const DESCRIPTION =
  "Quatro meses escrevendo 670 questões de matemática, medidos pelo log do console do banco: 506 comandos, sete famílias de defeito, 81% de acerto de primeira, e o que o levantamento não alcança.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/casos/670-questoes" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/casos/670-questoes",
    title: TITLE,
    description:
      "Eu tinha um processo na cabeça. Fui medir e descobri que ele estava certo. O registro é que estava errado.",
    publishedTime: "2026-08-04",
    authors: ["Bernardo Paranhos"],
  },
  // Sem este bloco, o twitter:* herdaria o título e a descrição da home.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Caso670Questoes() {
  return (
    <>
      <CaseSchema
        slug="casos/670-questoes"
        headline="As 670 questões: medindo o próprio processo de autoria pelo log do banco"
        description={DESCRIPTION}
        datePublished="2026-08-04"
        dateModified="2026-08-05"
        breadcrumbName="Estudo de caso 002 · As 670 questões"
      />
      <CaseContent />
    </>
  );
}
