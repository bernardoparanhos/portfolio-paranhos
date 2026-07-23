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
    "Engenheiro Paranhos",
    "Engenharia de Produção",
    "UTFPR Medianeira",
    "InovaGrad",
    "MAT-IA",
    "AntiFrágil Consultoria",
    "estagiário engenharia de produção",
    "bolsista inovação",
    "plataforma educacional IA",
    "IA aplicada",
    "análise de dados",
    "automação",
    "KPIs de manutenção",
    "Full Stack",
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
  themeColor: "#f5ead8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${heading.variable} ${body.variable} ${mono.variable}`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
