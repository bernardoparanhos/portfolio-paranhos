// Dicionário de idiomas — fonte única de todo o texto do site.
// Escalável: adicionar um idioma = adicionar uma entrada com o mesmo formato de `pt`.
// O tipo de `en` é travado em `typeof pt`, então o TypeScript exige as mesmas chaves.

export type Lang = "pt" | "en";

const pt = {
  htmlLang: "pt-BR",
  nav: {
    about: "Sobre",
    education: "Formação",
    experience: "Experiência",
    repertoire: "Repertório",
    projects: "Projetos",
    contact: "Contato",
    langLabel: "Idioma",
    main: "Navegação principal",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Engenharia de Produção · UTFPR Medianeira",
    titleLead: "Engenheiro de Produção que resolve ",
    titleEm: "problemas de verdade.",
    sub: "Do controle de KPIs de manutenção a uma plataforma de IA para a universidade — aplico o que aprendo enquanto ainda estou aprendendo.",
    ctaProjects: "Ver projetos",
    ctaTalk: "Vamos conversar",
  },
  metrics: {
    m1Label: "InovaGrad 2025",
    m1Sub: "1º lugar no edital",
    m2Label: "Projetos reais",
    m2Sub: "Em produção",
    m3Label: "Período",
    m3Sub: "UTFPR · 2026",
  },
  marquee:
    "Engenharia de Produção  ✺  Dados  ✺  IA aplicada  ✺  Processos  ✺  KPIs de manutenção  ✺  Full Stack  ✺  Gestão  ✺  ",
  sections: {
    about: "Sobre",
    education: "Formação",
    experience: "Experiência",
    repertoire: "Repertório",
    projects: "Projetos",
    contact: "Contato",
  },
  about: {
    leadLead: "Resolvo problemas com organização, dados e um pouco de ",
    leadAccent: "código.",
    body: "Estudante de Engenharia de Produção na UTFPR Medianeira, com interesse real em como tecnologia pode resolver problemas de gestão. Desenvolvo uma plataforma de IA para nivelamento de alunos ingressantes em Engenharia como bolsista InovaGrad — projeto aprovado em 1º lugar no edital da universidade. Estagio em consultoria de gestão, onde trabalho diretamente com organização de processos e dados de clientes. Gosto de programar e vejo isso como diferencial dentro da Engenharia de Produção, não como desvio de rota.",
    languagesLabel: "Idiomas",
    ptName: "Português",
    ptLevel: "Nativo",
    enName: "Inglês",
    enLevel: "Básico · em aprendizado",
    badge: "Medianeira · PR",
  },
  education: {
    degree: "Bacharelado em Engenharia de Produção",
    school: "Universidade Tecnológica Federal do Paraná",
    meta: "Campus Medianeira · PR  /  2025 — 2030 (previsto)",
    tag: "2º período · em andamento",
    btn: "Ver grade curricular",
  },
  exp1: {
    date: "Abr 2026 — Presente",
    role: "Bolsista de Inovação · Coordenação de Projeto e Produto — MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "Concebi e conduzo o MAT-IA, projeto de inovação aprovado em 1º lugar no Edital InovaGrad 2025 (nota 9,6 entre candidatos de toda a UTFPR) — da definição do problema e do escopo à entrega. Atuo na coordenação do produto: levantamento de requisitos com os professores, priorização de roadmap, definição de indicadores de aprendizagem e acompanhamento de resultados. Um caso prático de engenharia de produção aplicada à educação — organizando processo, dados e tecnologia num produto real em produção (diagnóstico adaptativo, 650+ questões, correção por IA e relatórios para docentes).",
  },
  exp2: {
    date: "Jun 2026 — Presente",
    role: "Estagiário de Engenharia de Produção — Operacional",
    org: "AntiFrágil — Gestão & Consultoria",
    desc: "Atuo no setor operacional de uma consultoria de gestão e processos, com contato direto com clientes e participação nas atividades de análise de processos das empresas atendidas.",
    bullets: [
      "Gestão da comunicação recorrente com carteira de 26 clientes com acompanhamento semanal de planos de ação.",
      "Elaboração de relatórios gerenciais.",
      "Acompanhamento de reuniões.",
      "Mapeamento de processos.",
    ],
    tagCommunication: "Comunicação com clientes",
  },
  proj1: {
    name: "Simulador PCM",
    status: "Disponível",
    desc: "Gerador de KPIs de manutenção industrial para PCM. Simula equipamentos por criticidade (Alta/Média/Baixa) e gera indicadores reais: MTBF, MTTR, disponibilidade, taxa de corretivas e custo por ordem. Exporta relatórios em Excel com 7 abas analíticas e CSVs prontos para Power BI ou Tableau.",
  },
  proj2: {
    name: "MAT-IA",
    status: "Em produção",
    tagline: "Plataforma de Suporte Inteligente ao Aprendizado de Matemática",
    desc: "Sistema educacional com IA para diagnóstico, nivelamento e reforço em matemática de ingressantes em Engenharia na UTFPR Medianeira. Conduzo o MAT-IA como coordenador de produto — da concepção e escopo à entrega: requisitos com professores, roadmap e indicadores de aprendizagem — unindo gestão de projetos e engenharia de produção a um produto real em produção.",
    link: "plataformamati.dev →",
    stats: [
      { num: "+650", label: "questões" },
      { num: "+10", label: "blocos temáticos" },
      { num: "20", label: "Q. diagnóstico" },
    ],
    panel: {
      award: "1º lugar · InovaGrad 2025",
      grade: "nota final 9,6",
      window: "diagnóstico",
      donut: "84%",
      donutLabel: "nível dominado",
      barsLabel: "desempenho por bloco temático",
    },
  },
  repertoire: {
    intro:
      "A base é engenharia — processo, método e número. A tecnologia entra como alavanca: quando a planilha não dá conta, eu escrevo a ferramenta.",
    filters: { all: "Tudo", eng: "Engenharia & gestão", tec: "Dados & tecnologia" },
    inProgressLabel: "Em curso",
    inProgress: ["Inglês técnico", "Lean Seis Sigma Yellow Belt"],
    columns: [
      {
        kicker: ["Engenharia de", "Produção"],
        items: [
          "Mapeamento de processos",
          "KPIs de manutenção · MTBF, MTTR, OEE",
          "Análise de indicadores",
          "Melhoria contínua",
        ],
      },
      {
        kicker: ["Gestão &", "Organização"],
        items: [
          "Planos de ação",
          "Relatórios gerenciais",
          "Gestão de carteira · 26 clientes",
          "Condução de reuniões & follow-up",
          "Excel avançado",
          "Power BI · dashboards",
          "Documentação de rotinas",
        ],
      },
      {
        kicker: ["Dados &", "Análise"],
        items: [
          "Python",
          "Pandas",
          "NumPy",
          "PostgreSQL · SQL",
          "API OpenAI · IA aplicada",
          "Análise exploratória",
        ],
      },
      {
        kicker: ["Desenvolvimento", "& Ferramentas"],
        items: [
          "TypeScript",
          "React · Vite",
          "Node · Express",
          "Next.js · Astro",
          "Tailwind CSS",
          "Git · GitHub",
          "Vercel · deploy contínuo",
          "WebStorm · VS Code · Cursor",
        ],
      },
    ],
  },
  contact: {
    titleLead: "Vamos ",
    titleAccent: "conversar.",
    sub: "Aberto a projetos, pesquisas colaborativas e novas conexões nas áreas de operações, IA aplicada e engenharia de processos.",
    emailLabel: "Email",
  },
  footer: {
    builtBy: "Desenhado e desenvolvido por",
    stack: "Next.js · TypeScript · Caprasimo & Figtree",
    location: "Medianeira · PR",
    repo: "Código aberto no GitHub",
    updated: "© 2026 · atualizado em jul/2026",
  },
};

const en: typeof pt = {
  htmlLang: "en",
  nav: {
    about: "About",
    education: "Education",
    experience: "Experience",
    repertoire: "Repertoire",
    projects: "Projects",
    contact: "Contact",
    langLabel: "Language",
    main: "Main navigation",
    menu: "Menu",
  },
  hero: {
    eyebrow: "Production Engineering · UTFPR Medianeira",
    titleLead: "A Production Engineer who solves ",
    titleEm: "real problems.",
    sub: "From maintenance KPI control to an AI platform for the university — I apply what I learn while I'm still learning.",
    ctaProjects: "View projects",
    ctaTalk: "Let's talk",
  },
  metrics: {
    m1Label: "InovaGrad 2025",
    m1Sub: "1st place in the call",
    m2Label: "Real projects",
    m2Sub: "In production",
    m3Label: "Semester",
    m3Sub: "UTFPR · 2026",
  },
  marquee:
    "Production Engineering  ✺  Data  ✺  Applied AI  ✺  Processes  ✺  Maintenance KPIs  ✺  Full Stack  ✺  Management  ✺  ",
  sections: {
    about: "About",
    education: "Education",
    experience: "Experience",
    repertoire: "Repertoire",
    projects: "Projects",
    contact: "Contact",
  },
  about: {
    leadLead: "I solve problems with organization, data and a bit of ",
    leadAccent: "code.",
    body: "Production Engineering student at UTFPR Medianeira, with a real interest in how technology can solve management problems. I'm developing an AI platform to level up incoming Engineering students as an InovaGrad fellow — a project approved in 1st place in the university's call. I intern at a management consultancy, where I work directly with process organization and client data. I enjoy programming and see it as an edge within Production Engineering, not a detour.",
    languagesLabel: "Languages",
    ptName: "Portuguese",
    ptLevel: "Native",
    enName: "English",
    enLevel: "Basic · learning",
    badge: "Medianeira · PR",
  },
  education: {
    degree: "Bachelor's in Production Engineering",
    school: "Federal University of Technology — Paraná (UTFPR)",
    meta: "Medianeira Campus · PR  /  2025 — 2030 (expected)",
    tag: "2nd semester · in progress",
    btn: "View curriculum",
  },
  exp1: {
    date: "Apr 2026 — Present",
    role: "Innovation Fellow · Project & Product Coordination — MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "I conceived and lead MAT-IA, an innovation project approved in 1st place in the InovaGrad 2025 call (9.6 score among candidates across all of UTFPR) — from problem and scope definition to delivery. I handle product coordination: gathering requirements with professors, prioritizing the roadmap, defining learning indicators and tracking results. A practical case of production engineering applied to education — organizing process, data and technology into a real product in production (adaptive diagnosis, 650+ questions, AI grading and reports for teachers).",
  },
  exp2: {
    date: "Jun 2026 — Present",
    role: "Production Engineering Intern — Operations",
    org: "AntiFrágil — Management & Consulting",
    desc: "I work in the operations sector of a management and process consultancy, with direct client contact and participation in process-analysis activities for the served companies.",
    bullets: [
      "Managing recurring communication with a portfolio of 26 clients, with weekly follow-up of action plans.",
      "Preparing management reports.",
      "Following up on meetings.",
      "Process mapping.",
    ],
    tagCommunication: "Client communication",
  },
  proj1: {
    name: "PCM Simulator",
    status: "Available",
    desc: "An industrial maintenance KPI generator for PCM. It simulates equipment by criticality (High/Medium/Low) and produces real indicators: MTBF, MTTR, availability, corrective rate and cost per work order. Exports Excel reports with 7 analytical tabs and CSVs ready for Power BI or Tableau.",
  },
  proj2: {
    name: "MAT-IA",
    status: "In production",
    tagline: "Intelligent Support Platform for Math Learning",
    desc: "AI-powered educational system for math diagnosis, leveling and reinforcement for incoming Engineering students at UTFPR Medianeira. I lead MAT-IA as product coordinator — from concept and scope to delivery: requirements with professors, roadmap and learning indicators — combining project management and production engineering into a real product in production.",
    link: "plataformamati.dev →",
    stats: [
      { num: "+650", label: "questions" },
      { num: "+10", label: "thematic blocks" },
      { num: "20", label: "diagnostic Qs" },
    ],
    panel: {
      award: "1st place · InovaGrad 2025",
      grade: "final grade 9.6",
      window: "diagnostic",
      donut: "84%",
      donutLabel: "level mastered",
      barsLabel: "performance by thematic block",
    },
  },
  repertoire: {
    intro:
      "The foundation is engineering — process, method and numbers. Technology comes in as leverage: when the spreadsheet isn't enough, I write the tool.",
    filters: { all: "All", eng: "Engineering & management", tec: "Data & technology" },
    inProgressLabel: "In progress",
    inProgress: ["Technical English", "Lean Six Sigma Yellow Belt"],
    columns: [
      {
        kicker: ["Production", "Engineering"],
        items: [
          "Process mapping",
          "Maintenance KPIs · MTBF, MTTR, OEE",
          "Indicator analysis",
          "Continuous improvement",
        ],
      },
      {
        kicker: ["Management &", "Organization"],
        items: [
          "Action plans",
          "Management reports",
          "Portfolio management · 26 clients",
          "Meetings & follow-up",
          "Advanced Excel",
          "Power BI · dashboards",
          "Process documentation",
        ],
      },
      {
        kicker: ["Data &", "Analysis"],
        items: [
          "Python",
          "Pandas",
          "NumPy",
          "PostgreSQL · SQL",
          "OpenAI API · applied AI",
          "Exploratory analysis",
        ],
      },
      {
        kicker: ["Development", "& Tools"],
        items: [
          "TypeScript",
          "React · Vite",
          "Node · Express",
          "Next.js · Astro",
          "Tailwind CSS",
          "Git · GitHub",
          "Vercel · continuous deploy",
          "WebStorm · VS Code · Cursor",
        ],
      },
    ],
  },
  contact: {
    titleLead: "Let's ",
    titleAccent: "talk.",
    sub: "Open to projects, collaborative research and new connections in operations, applied AI and process engineering.",
    emailLabel: "Email",
  },
  footer: {
    builtBy: "Designed and developed by",
    stack: "Next.js · TypeScript · Caprasimo & Figtree",
    location: "Medianeira · PR",
    repo: "Open source on GitHub",
    updated: "© 2026 · updated jul/2026",
  },
};

export const translations: Record<Lang, typeof pt> = { pt, en };

export type Dict = typeof pt;
