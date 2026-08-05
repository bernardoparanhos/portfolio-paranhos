import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";

// Datas reais de última alteração de conteúdo (não a data do build): o
// lastModified só é útil pro crawler se refletir quando a página mudou.
// Atualizar a data da rota junto com a mudança de conteúdo.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/casos/mat-ia`,
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/casos/670-questoes`,
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
