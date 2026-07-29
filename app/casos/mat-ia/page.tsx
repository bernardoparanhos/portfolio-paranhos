import type { Metadata } from "next";
import CaseContent from "./CaseContent";

export const metadata: Metadata = {
  title: "MAT-IA · estudo de caso | Bernardo Paranhos",
  description:
    "O MAT-IA visto pela lente da Engenharia de Produção: processo, pontos de inspeção, custo por peça, limite de retrabalho e o que ainda não dá para afirmar.",
  alternates: { canonical: "/casos/mat-ia" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "/casos/mat-ia",
    title: "MAT-IA · estudo de caso | Bernardo Paranhos",
    description:
      "Um sistema em produção lido como uma linha de produção: onde inspecionar, o que padronizar, quanto custa cada unidade.",
  },
};

export default function CasoMatIA() {
  return <CaseContent />;
}
