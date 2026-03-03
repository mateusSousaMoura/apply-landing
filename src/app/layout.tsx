import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || siteConfig.baseUrl;

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brandName}`
  },
  description: "A plataforma completa para gerenciar processos seletivos, atrair talentos e otimizar o seu RH com inteligência e eficiência.",
  keywords: ["recrutamento", "seleção", "RH", "talentos", "gestão de pessoas", "vagas", "contratação"],
  authors: [{ name: `${siteConfig.brandName} Team` }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    description: "Otimize seu RH com a plataforma líder em recrutamento e seleção.",
    url: baseUrl,
    siteName: siteConfig.brandName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    description: "Otimize seu RH com a plataforma líder em recrutamento e seleção.",
    creator: `@${siteConfig.twitterHandle}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.brandName,
            url: baseUrl,
            logo: `${baseUrl}/logo.png`,
            sameAs: [
              siteConfig.socials.linkedin,
              siteConfig.socials.instagram,
            ],
            description: "Plataforma de recrutamento e seleção inteligente.",
          }}
        />
        {children}
      </body>
    </html>
  );
}
