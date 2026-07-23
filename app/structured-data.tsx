import { SITE_URL, SITE_NAME } from "./site-config";

// JSON-LD (schema.org Person) — portado do portfolio anterior e mantido em sincronia
// com o domínio central (site-config). Ajuda buscadores a entenderem quem é a pessoa.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  alternateName: "Engenheiro Paranhos",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/foto-perfil.jpeg`,
  jobTitle: "Estudante de Engenharia de Produção — UTFPR Medianeira",
  description:
    "Estudante de Engenharia de Produção na UTFPR Medianeira, bolsista InovaGrad aprovado em 1º lugar com nota 9,6 e estagiário em consultoria de gestão. Desenvolve o MAT-IA, plataforma educacional com IA para diagnóstico e nivelamento matemático em cursos de Engenharia.",
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
      name: "AntiFrágil — Gestão & Consultoria",
      description: "Consultoria de gestão e processos",
    },
    {
      "@type": "Organization",
      name: "UTFPR — InovaGrad",
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
    "Inteligência Artificial aplicada à Educação",
    "Análise de Dados",
    "Automação de Processos",
    "Gestão de Projetos",
    "Desenvolvimento Full Stack",
    "Consultoria de Gestão",
    "Microsoft Excel",
    "Python",
  ],
  sameAs: [
    "https://www.linkedin.com/in/bernardo-paranhos/",
    "https://github.com/bernardoparanhos",
    `${SITE_URL}/`,
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON estático controlado por nós — sem entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
