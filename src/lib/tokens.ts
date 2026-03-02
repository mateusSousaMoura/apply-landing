/**
 * Design Tokens — Landing Page
 * 
 * Fonte única de verdade para cores, espaçamento e estilos visuais.
 */

export const colors = {
    primary: '#2563eb',       // blue-600
    primaryHover: '#1d4ed8',  // blue-700
    primaryLight: '#dbeafe',  // blue-100

    surface: '#ffffff',
    surfaceGlass: 'rgba(255, 255, 255, 0.70)',
    surfaceElevated: '#f8fafc', // slate-50

    bg: '#f1f5f9',            // slate-100

    border: 'rgba(226, 232, 240, 0.60)', // slate-200 60%
    borderGlass: 'rgba(255, 255, 255, 0.20)',

    text: {
        primary: '#0f172a',     // slate-900
        secondary: '#475569',   // slate-600
        muted: '#94a3b8',       // slate-400
        inverse: '#ffffff',
    },

    success: '#16a34a',       // green-600
    danger: '#dc2626',        // red-600
} as const;

export const spacing = {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
} as const;

export const radius = {
    sm: '0.5rem',    // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    full: '9999px',  // badges
} as const;

export const glass = {
    card: 'bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl',
    nav: 'bg-white/70 backdrop-blur-xl border-b border-white/20',
    subtle: 'bg-white/50 backdrop-blur-md border border-white/15 rounded-2xl',
} as const;

export const card = {
    base: 'bg-white border border-slate-200/60 shadow-sm rounded-2xl',
    hover: 'transition-all duration-300 hover:shadow-xl hover:border-blue-200/50 hover:-translate-y-1',
} as const;

/**
 * Fake Data Content
 */

export const siteData = {
    nav: {
        produto: [
            { label: 'Recrutamento & Seleção', sub: 'O funil completo para contratar os melhores talentos.', icon: 'Briefcase' },
            { label: 'Página de Carreiras', sub: 'Employer branding que converte visitantes em candidatos.', icon: 'Layout' },
            { label: 'Inteligência Artificial', sub: 'Triagem automatizada e ranking de candidatos com IA.', icon: 'Cpu' },
            { label: 'Gestão de Dados (KPIs)', sub: 'Relatórios profundos para decisões orientadas a dados.', icon: 'PieChart' },
            { label: 'Chrome Extension', sub: 'Sourcing avançado direto do LinkedIn e redes sociais.', icon: 'Chrome' },
            { label: 'Experiência do Candidato', sub: 'Comunicação fluida e portal dedicado ao talento.', icon: 'UserHeart' },
        ],
        empresa: [
            { label: 'Sobre nós', href: '#' },
            { label: 'Carreiras', href: '#' },
            { label: 'Novidades', href: '#' },
            { label: 'Central de Ajuda', href: '#' },
        ],
        cta: 'Falar com especialista',
    },
    hero: {
        headline: 'Liberte-se do operacional e foque no que importa: pessoas.',
        subheadline: 'A plataforma de recrutamento e seleção inteligente que acelera suas contratações em até 50% enquanto melhora a experiência do candidato.',
        primaryCTA: 'Falar com especialista',
        secondaryCTA: 'Ver demonstração',
        socialProof: {
            text: '+700 empresas escalam seu RH com InHire',
            logos: ['Nubank', 'iFood', 'Loggi', 'QuintoAndar', 'Gympass'],
        }
    },
    metrics: [
        { value: '50%', label: 'Redução no Time-to-Hire', sub: 'Contratações mais rápidas com automação.' },
        { value: '42%', label: 'Economia Operacional', sub: 'Menos tarefas manuais para o seu time.' },
        { value: '53%', label: 'Aumento em Qualidade', sub: 'Assertividade baseada em dados e IA.' },
        { value: '+30M', label: 'Candidatos Gerenciados', sub: 'Escalabilidade para grandes operações.' },
    ],
    funnel: {
        title: 'Um fluxo pensado para alta performance',
        steps: [
            {
                id: 'atrair',
                label: 'Atrair',
                title: 'Transforme visitantes em talentos',
                desc: 'Crie páginas de carreira personalizadas e divulgue vagas nos principais Job Boards com um clique.',
                features: ['Gestão de Job Boards', 'Sourcing Multicanal', 'Employer Branding'],
                image: '/images/mockup-atrair.png'
            },
            {
                id: 'selecionar',
                label: 'Selecionar',
                title: 'Identifique o "Perfect Match"',
                desc: 'Use IA para rankear candidatos e organize etapas de avaliação personalizáveis para cada vaga.',
                features: ['Inteligência de Ranking', 'Testes e Avaliações', 'Gestão de Pipeline'],
                image: '/images/mockup-selecionar.png'
            },
            {
                id: 'contratar',
                label: 'Contratar',
                title: 'Feche com segurança',
                desc: 'Envie propostas, gerencie documentos e garanta um onboarding inesquecível para o novo colaborador.',
                features: ['Assinatura Digital', 'Workflow de Aprovação', 'Onboarding Integrado'],
                image: '/images/mockup-contratar.png'
            }
        ]
    },
    highlights: [
        {
            title: 'Painel de Dados & KPIs',
            desc: 'Tome decisões baseadas em fatos. Visualize gargalos no funil, custo por contratação e performance de cada recrutador em tempo real.',
            link: 'Saiba mais sobre dados',
            image: '/images/data-panel.png'
        },
        {
            title: 'IA Generativa & Copilot',
            desc: 'Nossa IA cria descrições de vagas, analisa currículos e sugere perguntas para entrevistas, poupando horas de trabalho manual.',
            link: 'Saiba mais sobre IA',
            image: '/images/ai-suite.png'
        }
    ],
    differentiators: [
        { title: 'Flexibilidade Total', desc: 'Adapte o software ao seu processo seletivo, não o contrário. Workflows customizáveis por área.', icon: 'Settings' },
        { title: 'Foco no Candidato', desc: 'Comunicação automatizada e transparente que valoriza a marca empregadora no mercado.', icon: 'Smile' },
        { title: 'Segurança & LGPD', desc: 'Gestão de dados robusta com conformidade total às normas de privacidade nacionais.', icon: 'ShieldCheck' },
    ],
    testimonials: [
        {
            quote: "O InHire transformou nossa maneira de contratar. Saímos de processos manuais para uma operação totalmente orientada a métricas.",
            author: "Marcos Oliveira",
            role: "Head de Talent Acquisition",
            company: "Fintech Express",
            tags: ["Pioneira", "Fintech"]
        },
        {
            quote: "A experiência do candidato melhorou drasticamente. Recebemos feedbacks positivos constantes sobre a fluidez das nossas etapas.",
            author: "Juliana Silva",
            role: "Diretora de People @ B2B Solutions",
            company: "B2B Solutions",
            tags: ["Mid-Market", "SaaS"]
        },
        {
            quote: "A IA do InHire é um divisor de águas. Conseguimos filtrar 2000 candidatos em segundos com altíssima precisão.",
            author: "Roberto Costa",
            role: "Recruiter Senior",
            company: "Tech Giant",
            tags: ["Enterprise", "Tecnologia"]
        }
    ],
    press: {
        title: "InHire levanta R$ 25M em rodada Series A liderada pela Valor Capital",
        date: "Fev 2026",
        linkText: "Ver no LinkedIn",
        image: "/images/press-round.png"
    },
    faq: [
        { q: "Como funciona a implementação?", a: "Nossa equipe de Customer Success guia todo o processo de setup, treinamento e migração em até 15 dias." },
        { q: "Vocês cobram por vaga publicada?", a: "Não. Nosso modelo de precificação é baseado no número de usuários da plataforma, garantindo previsibilidade de custos." },
        { q: "É possível migrar dados de outro software?", a: "Sim, realizamos a migração completa de candidatos, históricos e notas de ATSs legados com total segurança." },
        { q: "A extensão do Chrome funciona em quais sites?", a: "Funciona nativamente no LinkedIn, GitHub e nas principais redes onde talentos se fazem presentes." },
        { q: "Quais são os canais de suporte?", a: "Oferecemos suporte via chat em tempo real, e-mail e gerente de conta dedicado para planos Enterprise." },
        { q: "O software é personalizável?", a: "Sim, você pode customizar desde os formulários de inscrição até os fluxos de aprovação de cada vaga." },
    ],
    footer: {
        produto: ['Plataforma', 'Funcionalidades', 'Cases de Sucesso', 'Demonstração'],
        empresa: ['Sobre', 'Blog', 'Investidores', 'Carreiras'],
        legal: ['Privacidade', 'Termos de Uso', 'Cookies', 'Portal LGPD'],
    }
} as const;
