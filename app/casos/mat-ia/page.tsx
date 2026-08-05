import type { Metadata } from "next";
import CaseContent from "./CaseContent";
import CaseSchema from "../case-schema";

const TITLE = "MAT-IA · estudo de caso | Bernardo Paranhos";
const DESCRIPTION =
  "O MAT-IA visto pela lente da Engenharia de Produção: processo, pontos de inspeção, custo por peça, limite de retrabalho e o que ainda não dá para afirmar.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/casos/mat-ia" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/casos/mat-ia",
    title: TITLE,
    description:
      "Um sistema em produção lido como uma linha de produção: onde inspecionar, o que padronizar, quanto custa cada unidade.",
    publishedTime: "2026-07-29",
    authors: ["Bernardo Paranhos"],
  },
  // Sem este bloco, o twitter:* herdaria o título e a descrição da home.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CasoMatIA() {
  return (
    <>
      <CaseSchema
        slug="casos/mat-ia"
        headline="MAT-IA sob a ótica da Engenharia de Produção: um sistema em produção lido como linha de produção"
        description={DESCRIPTION}
        datePublished="2026-07-29"
        dateModified="2026-08-05"
        breadcrumbName="Estudo de caso 001 · MAT-IA"
      />
      <CaseContent />
    </>
  );
}
