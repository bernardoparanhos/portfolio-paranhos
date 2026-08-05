import { SITE_URL } from "../site-config";
import { PERSON_ID, WEBSITE_ID } from "../structured-data";

// JSON-LD por estudo de caso: Article + BreadcrumbList num @graph.
// O author/publisher referencia o @id do Person do layout — mesma entidade,
// sem duplicar dados. Datas em ISO (YYYY-MM-DD).
type CaseSchemaProps = {
  slug: string; // ex.: "casos/670-questoes"
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  breadcrumbName: string; // nome curto da página no breadcrumb
};

export default function CaseSchema(p: CaseSchemaProps) {
  const url = `${SITE_URL}/${p.slug}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: p.headline,
        description: p.description,
        url,
        mainEntityOfPage: url,
        inLanguage: "pt-BR",
        datePublished: p.datePublished,
        dateModified: p.dateModified,
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        image: `${url}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Bernardo Paranhos",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: p.breadcrumbName,
            item: url,
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // JSON estático controlado por nós — sem entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
