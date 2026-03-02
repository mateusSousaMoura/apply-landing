import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://inhire.com.br";

export const metadata: Metadata = {
  title: {
    default: "InHire | Recrutamento e Seleção Inteligente",
    template: "%s | InHire"
  },
  description: "A plataforma completa para gerenciar processos seletivos, atrair talentos e otimizar o seu RH com inteligência e eficiência.",
  keywords: ["recrutamento", "seleção", "RH", "talentos", "gestão de pessoas", "vagas", "contratação"],
  authors: [{ name: "InHire Team" }],
  creator: "InHire",
  publisher: "InHire",
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
    title: "InHire | Recrutamento e Seleção Inteligente",
    description: "Otimize seu RH com a plataforma líder em recrutamento e seleção.",
    url: baseUrl,
    siteName: "InHire",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InHire | Recrutamento e Seleção Inteligente",
    description: "Otimize seu RH com a plataforma líder em recrutamento e seleção.",
    creator: "@inhire",
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
            name: "InHire",
            url: baseUrl,
            logo: `${baseUrl}/logo.png`,
            sameAs: [
              "https://linkedin.com/company/inhire",
              "https://instagram.com/inhire",
            ],
            description: "Plataforma de recrutamento e seleção inteligente.",
          }}
        />
        {children}
      </body>
    </html>
  );
}
