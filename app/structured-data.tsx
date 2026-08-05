import { SITE_URL, SITE_NAME } from "./site-config";

// JSON-LD (schema.org) global, renderizado em todas as páginas via layout.
// Um @graph com Person + WebSite, ambos com @id estável: as páginas de estudo
// de caso referenciam esses ids nos próprios schemas de Article, então o
// buscador entende que é tudo uma entidade só (pessoa → site → artigos).
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Bernardo Paranhos Borges Oliveira",
      alternateName: ["Bernardo Paranhos", "Engenheiro Paranhos"],
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/foto-perfil.jpeg`,
      jobTitle:
        "Graduando em Engenharia de Produção · Coordenação de Projeto e Produto (MAT-IA/InovaGrad) · Estagiário em Consultoria de Gestão",
      description:
        "Graduando em Engenharia de Produção na UTFPR Medianeira, com foco em gestão, organização de processos, projetos e produto. Bolsista InovaGrad aprovado em 1º lugar (nota 9,6), coordena projeto e produto do MAT-IA e estagia em consultoria de gestão. Publica estudos de caso em que mede o próprio processo, declarando o que os indicadores sustentam e o que não permitem afirmar. Usa IA, dados e código como ferramentas de trabalho, não como fim.",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Universidade Tecnológica Federal do Paraná",
        alternateName: "UTFPR",
        url: "https://www.utfpr.edu.br/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Medianeira",
          addressRegion: "PR",
          addressCountry: "BR",
        },
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "AntiFrágil · Gestão & Consultoria",
          description: "Consultoria de gestão e processos",
        },
        {
          "@type": "Organization",
          name: "UTFPR · InovaGrad",
          description: "Programa de inovação pedagógica da UTFPR",
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Certificação Claude Impressionador",
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "Hashtag Treinamentos",
        },
      },
      knowsAbout: [
        "Engenharia de Produção",
        "Planejamento e Controle da Produção (PCP)",
        "Gestão da Qualidade",
        "Melhoria Contínua",
        "Lean Seis Sigma",
        "Mapeamento de Processos",
        "Indicadores de Desempenho (KPIs)",
        "Medição de Retrabalho e Refugo",
        "Gestão de Projetos",
        "Gestão de Produto",
        "Organização de Processos",
        "Kanban",
        "Planos de Ação",
        "Consultoria de Gestão",
        "Análise de Dados",
        "Automação de Relatórios",
        "Inteligência Artificial aplicada à Educação",
        "IA como ferramenta de trabalho",
        "Microsoft Excel",
        "Power BI",
        "Python",
        "SQL",
      ],
      sameAs: [
        "https://www.linkedin.com/in/bernardo-paranhos/",
        "https://github.com/bernardoparanhos",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: `${SITE_NAME} · Portfolio`,
      alternateName: "Engenheiro Paranhos",
      url: `${SITE_URL}/`,
      inLanguage: "pt-BR",
      publisher: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
    },
  ],
};

// Ids exportados para os schemas de Article das páginas de estudo de caso.
export { PERSON_ID, WEBSITE_ID };

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON estático controlado por nós — sem entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
