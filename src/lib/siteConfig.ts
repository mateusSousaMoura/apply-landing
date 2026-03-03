/**
 * Site Config — Landing Page
 *
 * Variáveis centrais de marca. Altere aqui para renomear
 * todo o site de uma só vez.
 */

export const siteConfig = {
  /** Nome exibido na UI (header, footer, textos) */
  brandName: 'BlueHire',

  /** Sigla / abreviação usada no logo */
  brandInitials: 'Bh',

  /** Tagline principal usada em <title> e OG */
  tagline: 'Recrutamento e Seleção Inteligente',

  /** Razão social (rodapé / legal) */
  legalName: 'BlueHire Tecnologia',

  /** Domínio padrão (fallback quando NEXT_PUBLIC_BASE_URL não existe) */
  baseUrl: 'https://bluehire.com.br',

  /** Handle do Twitter sem @ */
  twitterHandle: 'bluehire',

  /** Links de redes sociais */
  socials: {
    linkedin: 'https://linkedin.com/company/bluehire',
    instagram: 'https://instagram.com/bluehire',
  },
} as const;
