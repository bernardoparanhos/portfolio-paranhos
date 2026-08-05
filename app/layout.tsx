import type { Metadata, Viewport } from "next";
import { Caprasimo, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "./site-config";
import StructuredData from "./structured-data";

const heading = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});
const body = Figtree({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  keywords: [
    "Bernardo Paranhos",
    "Bernardo Paranhos Borges Oliveira",
    "Engenheiro Paranhos",
    "Engenharia de Produção",
    "UTFPR Medianeira",
    "InovaGrad",
    "MAT-IA",
    "AntiFrágil Consultoria",
    "estagiário engenharia de produção",
    "bolsista inovação",
    "gestão de projetos",
    "coordenação de produto",
    "organização de processos",
    "estudo de caso engenharia de produção",
    "medição de processo",
    "acerto de primeira",
    "retrabalho e refugo",
    "mapeamento de processos",
    "melhoria contínua",
    "PCP",
    "gestão da qualidade",
    "Lean Seis Sigma",
    "indicadores de desempenho",
    "planos de ação",
    "plataforma educacional IA",
    "IA aplicada",
    "análise de dados",
    "automação de relatórios",
    "Excel avançado",
    "Power BI",
    "Python",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Bernardo",
    lastName: "Paranhos",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5ead8" },
    { media: "(prefers-color-scheme: dark)", color: "#201911" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

// Define o tema antes do primeiro paint (evita flash cream ao recarregar no dark).
const themeScript = `(function(){try{var t=localStorage.getItem('bp-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} ${mono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
