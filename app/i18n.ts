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
    role: "Fundador & Desenvolvedor Full Stack — MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "Desenvolvo do zero uma plataforma web educacional com IA para diagnóstico e nivelamento em matemática de alunos ingressantes em Engenharia. Aprovado em 1º lugar no edital InovaGrad 2025 com nota 9,6 entre candidatos de toda a UTFPR. A plataforma conta com diagnóstico adaptativo de 20 questões, banco de 500+ exercícios em 10 blocos temáticos, correção automática de resoluções manuscritas via GPT-4o Vision, gamificação com ranking em tempo real e relatórios para professores via Google Sheets.",
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
    desc: "Plataforma web educacional com IA para diagnóstico e nivelamento em matemática de alunos ingressantes em Engenharia. Diagnóstico adaptativo de 20 questões, banco de 500+ exercícios em 10 blocos temáticos e relatórios para professores via Google Sheets. Aprovado em 1º lugar no InovaGrad 2025 com nota 9,6.",
  },
  contact: {
    titleLead: "Vamos ",
    titleAccent: "conversar.",
    sub: "Aberto a projetos, pesquisas colaborativas e novas conexões nas áreas de operações, IA aplicada e engenharia de processos.",
    emailLabel: "Email",
  },
  footer: "Bernardo Paranhos — Engenharia de Produção · UTFPR Medianeira · 2026",
};

const en: typeof pt = {
  htmlLang: "en",
  nav: {
    about: "About",
    education: "Education",
    experience: "Experience",
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
    role: "Founder & Full Stack Developer — MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "I'm building from scratch an educational web platform with AI for math diagnosis and leveling of incoming Engineering students. Approved in 1st place in the InovaGrad 2025 call with a 9.6 score among candidates across all of UTFPR. The platform features a 20-question adaptive diagnosis, a bank of 500+ exercises in 10 thematic blocks, automatic grading of handwritten solutions via GPT-4o Vision, gamification with a real-time ranking, and reports for teachers via Google Sheets.",
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
    desc: "An educational web platform with AI for math diagnosis and leveling of incoming Engineering students. 20-question adaptive diagnosis, a bank of 500+ exercises in 10 thematic blocks, and reports for teachers via Google Sheets. Approved in 1st place in InovaGrad 2025 with a 9.6 score.",
  },
  contact: {
    titleLead: "Let's ",
    titleAccent: "talk.",
    sub: "Open to projects, collaborative research and new connections in operations, applied AI and process engineering.",
    emailLabel: "Email",
  },
  footer: "Bernardo Paranhos — Production Engineering · UTFPR Medianeira · 2026",
};

export const translations: Record<Lang, typeof pt> = { pt, en };
