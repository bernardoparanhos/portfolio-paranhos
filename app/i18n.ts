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
    sub: "Da medição de um plano de ação a uma plataforma de IA para a universidade: aplico o que aprendo enquanto ainda estou aprendendo.",
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
    body: "Estudante de Engenharia de Produção na UTFPR Medianeira, com interesse real em como tecnologia pode resolver problemas de gestão. Desenvolvo uma plataforma de IA para nivelamento de alunos ingressantes em Engenharia como bolsista InovaGrad, projeto aprovado em 1º lugar no edital da universidade. Estagio em consultoria de gestão, onde trabalho diretamente com organização de processos e dados de clientes. Gosto de programar e vejo isso como diferencial dentro da Engenharia de Produção, não como desvio de rota.",
    languagesLabel: "Idiomas",
    ptName: "Português",
    ptLevel: "Nativo",
    enName: "Inglês",
    enLevel: "Básico · em aprendizado",
    badge: "Medianeira · PR",
  },
  principles: {
    label: "Princípios de trabalho",
    items: [
      {
        title: "Dados acima de achismo",
        desc: "Toda decisão precisa de um número atrás. Sem medir, é só opinião com sotaque técnico.",
      },
      {
        title: "Feito hoje, melhor depois",
        desc: "Entrego funcionando, escuto e corrijo. Perfeição na primeira versão costuma ser atraso disfarçado.",
      },
      {
        title: "Se repete três vezes, viro script",
        desc: "Trabalho repetitivo é desperdício. Automatizo e devolvo o tempo para o que exige decisão.",
      },
    ],
  },
  education: {
    degree: "Bacharelado em Engenharia de Produção",
    school: "Universidade Tecnológica Federal do Paraná",
    meta: "Campus Medianeira · PR  /  2025 a 2030 (previsto)",
    tag: "2º período · em andamento",
    btn: "Ver grade curricular",
  },
  exp1: {
    date: "Desde Abr 2026",
    role: "Bolsista de Inovação · Coordenação de Projeto e Produto · MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "Concebi e conduzo o MAT-IA, projeto de inovação aprovado em 1º lugar no Edital InovaGrad 2025 (nota 9,6 entre candidatos de toda a UTFPR): da definição do problema e do escopo à entrega. Atuo na coordenação do produto: levantamento de requisitos com os professores, priorização de roadmap, definição de indicadores de aprendizagem e acompanhamento de resultados. Um caso prático de engenharia de produção aplicada à educação, organizando processo, dados e tecnologia num produto real em produção (diagnóstico adaptativo, 650+ questões, correção por IA e relatórios para docentes).",
  },
  exp2: {
    date: "Desde Jun 2026",
    role: "Estagiário de Engenharia de Produção · Operacional",
    org: "AntiFrágil · Gestão & Consultoria",
    desc: "Atuo no setor operacional de uma consultoria de gestão e processos, com contato direto com clientes e participação nas atividades de análise de processos das empresas atendidas.",
    bullets: [
      "Gestão da comunicação recorrente com carteira de 26 clientes com acompanhamento semanal de planos de ação.",
      "Elaboração de relatórios gerenciais.",
      "Acompanhamento de reuniões.",
      "Mapeamento de processos.",
    ],
    tagCommunication: "Comunicação com clientes",
  },
  painel: {
    name: "Painel de aderência a plano de ação",
    status: "Disponível",
    kicker: "Seis indicadores de acompanhamento, cada um com a pergunta que ele decide",
    desc: "Toda consultoria tem plano de ação; quase nenhuma mede se o plano anda. A ferramenta modela uma carteira de clientes e devolve, em Excel, os indicadores que respondem se o acompanhamento está funcionando: cada um ao lado da decisão que governa. Nasceu de uma rotina real de reunião semanal e não usa dado de cliente: gera a base por código.",
    metrics: [
      { num: "6", label: "indicadores" },
      { num: "777", label: "ações" },
      { num: "26", label: "clientes" },
    ],
    cta: "Ver no GitHub",
    noteStrong: "Dados sintéticos",
    noteRest: ", gerados por código com semente fixa. Nenhum dado de cliente real.",
    resumoLabel: "aba Resumo",
    resumoAlt: "Aba Resumo da planilha, com os seis indicadores",
    agingLabel: "aba Aging",
    agingRight: "A faixa já traz a decisão",
    aging: [
      { faixa: "0–7 dias", n: "32", decision: "Dentro do ciclo de acompanhamento" },
      { faixa: "8–15 dias", n: "13", decision: "Merece cobrança na próxima reunião" },
      { faixa: "16–30 dias", n: "32", decision: "Fora do ciclo: repactuar prazo" },
      { faixa: "+30 dias", n: "73", decision: "Ação abandonada: repactuar ou cancelar" },
    ],
  },
  proj2: {
    name: "MAT-IA",
    status: "Em produção",
    tagline: "Plataforma de Suporte Inteligente ao Aprendizado de Matemática",
    desc: "Sistema educacional com IA para diagnóstico, nivelamento e reforço em matemática de ingressantes em Engenharia na UTFPR Medianeira. Conduzo o MAT-IA como coordenador de produto, da concepção e escopo à entrega (requisitos com professores, roadmap e indicadores de aprendizagem), unindo gestão de projetos e engenharia de produção a um produto real em produção.",
    studiesLabel: "Estudos de caso",
    studies: [
      { num: "002", title: "As 670 questões", meta: "ago/2026 · 7 blocos" },
      { num: "001", title: "A linha de produção", meta: "jul/2026 · 4 situações" },
    ],
    link: "plataformamati.dev",
    stats: [
      { num: "739", label: "questões" },
      { num: "20", label: "blocos temáticos" },
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
  // Faixa "Os bastidores do MAT-IA" — dois estudos de caso, peso visual igual.
  bastidores: {
    kicker: "Os bastidores do MAT-IA",
    h2: "Dois levantamentos escritos sobre o mesmo sistema.",
    intro:
      "O 001 lê a plataforma como linha de produção. O 002 mede um processo meu de ponta a ponta, e derruba os próprios números. Cada afirmação cita arquivo ou commit.",
    cta: "Ler o estudo de caso",
    c1: {
      kicker: "Estudo de caso 001 · jul/2026",
      h2: "Um sistema em produção, lido como linha de produção, com inspeção, custo por peça e limite de retrabalho.",
      descA:
        "Abri o MAT-IA pela lente da Engenharia de Produção: onde a linha inspeciona, o que é padronizado, quanto custa cada correção, e o que eu ainda ",
      descEm: "não",
      descB:
        " posso afirmar. Levantamento feito no próprio repositório, com evidência em cada afirmação.",
      meta: "4 situações · leitura de 6 min",
      timelineTitle: "A linha de correção",
      legendOp: "Operação",
      legendInsp: "Inspeção",
      steps: ["Foto", "3 tent.?", "Corrigir", "Nota ok?", "Custo", "Professor", "Nota"],
      quoteA:
        '"A parte mais útil de um levantamento é saber onde ele não alcança. Onde não há medição, está escrito ',
      quoteStrong: "não medido",
      quoteB: '."',
    },
    c2: {
      kicker: "Estudo de caso 002 · ago/2026",
      h2: "Eu tinha um processo na cabeça. Fui medir e descobri que ele estava certo. O registro é que estava errado.",
      desc: "Escrevi 670 questões em quatro meses. O console do banco gravou 506 comandos sem que ninguém planejasse. Fui ler o log, medi o retrabalho, escrevi as regras e produzi um lote novo para comparar.",
      meta: "7 blocos · leitura de 8 min",
      numsTitle: "O que o log guardou",
      numsPeriod: "abr → ago / 2026",
      nums: [
        { num: "506", label: "comandos no log" },
        { num: "670", label: "questões medidas" },
        { num: "7", label: "famílias de defeito" },
        { num: "81%", label: "acerto de primeira" },
      ],
      tools: [
        { l1: "Moldaram", l2: "as questões" },
        { l1: "Guardou", l2: "as regras" },
        { l1: "A inspeção", l2: "é minha" },
      ],
    },
  },
  repertoire: {
    intro:
      "A base é engenharia: processo, método e número. A tecnologia entra como alavanca. Quando a planilha não dá conta, eu escrevo a ferramenta.",
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
    updated: "© 2026 · atualizado em 05/08/2026",
  },
  cv: {
    label: "CV",
    title: "Currículo",
    download: "Baixar PDF",
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
    sub: "From maintenance KPI control to an AI platform for the university: I apply what I learn while I'm still learning.",
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
    body: "Production Engineering student at UTFPR Medianeira, with a real interest in how technology can solve management problems. I'm developing an AI platform to level up incoming Engineering students as an InovaGrad fellow, a project approved in 1st place in the university's call. I intern at a management consultancy, where I work directly with process organization and client data. I enjoy programming and see it as an edge within Production Engineering, not a detour.",
    languagesLabel: "Languages",
    ptName: "Portuguese",
    ptLevel: "Native",
    enName: "English",
    enLevel: "Basic · learning",
    badge: "Medianeira · PR",
  },
  principles: {
    label: "Working principles",
    items: [
      {
        title: "Data over guesswork",
        desc: "Every decision needs a number behind it. Without measuring, it's just opinion with a technical accent.",
      },
      {
        title: "Done today, better later",
        desc: "I ship it working, then listen and fix. Perfection in the first version is usually delay in disguise.",
      },
      {
        title: "Repeat it three times, I script it",
        desc: "Repetitive work is waste. I automate it and give the time back to what needs a decision.",
      },
    ],
  },
  education: {
    degree: "Bachelor's in Production Engineering",
    school: "Federal University of Technology · Paraná (UTFPR)",
    meta: "Medianeira Campus · PR  /  2025 to 2030 (expected)",
    tag: "2nd semester · in progress",
    btn: "View curriculum",
  },
  exp1: {
    date: "Since Apr 2026",
    role: "Innovation Fellow · Project & Product Coordination · MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "I conceived and lead MAT-IA, an innovation project approved in 1st place in the InovaGrad 2025 call (9.6 score among candidates across all of UTFPR): from problem and scope definition to delivery. I handle product coordination: gathering requirements with professors, prioritizing the roadmap, defining learning indicators and tracking results. A practical case of production engineering applied to education, organizing process, data and technology into a real product in production (adaptive diagnosis, 650+ questions, AI grading and reports for teachers).",
  },
  exp2: {
    date: "Since Jun 2026",
    role: "Production Engineering Intern · Operations",
    org: "AntiFrágil · Management & Consulting",
    desc: "I work in the operations sector of a management and process consultancy, with direct client contact and participation in process-analysis activities for the served companies.",
    bullets: [
      "Managing recurring communication with a portfolio of 26 clients, with weekly follow-up of action plans.",
      "Preparing management reports.",
      "Following up on meetings.",
      "Process mapping.",
    ],
    tagCommunication: "Client communication",
  },
  painel: {
    name: "Action-plan adherence dashboard",
    status: "Available",
    kicker: "Six tracking indicators, each with the question it decides",
    desc: "Every consultancy has an action plan; almost none measures whether the plan is moving. The tool models a client portfolio and returns, in Excel, the indicators that answer whether the follow-up is working: each next to the decision it governs. It was born from a real weekly-meeting routine and uses no client data: it generates the base by code.",
    metrics: [
      { num: "6", label: "indicators" },
      { num: "777", label: "actions" },
      { num: "26", label: "clients" },
    ],
    cta: "View on GitHub",
    noteStrong: "Synthetic data",
    noteRest: ", generated by code with a fixed seed. No real client data.",
    resumoLabel: "Resumo tab",
    resumoAlt: "Summary tab of the spreadsheet, with the six indicators",
    agingLabel: "Aging tab",
    agingRight: "The band already carries the decision",
    aging: [
      { faixa: "0–7 days", n: "32", decision: "Within the follow-up cycle" },
      { faixa: "8–15 days", n: "13", decision: "Deserves a nudge at the next meeting" },
      { faixa: "16–30 days", n: "32", decision: "Out of cycle: renegotiate the deadline" },
      { faixa: "+30 days", n: "73", decision: "Abandoned action: renegotiate or cancel" },
    ],
  },
  proj2: {
    name: "MAT-IA",
    status: "In production",
    tagline: "Intelligent Support Platform for Math Learning",
    desc: "AI-powered educational system for math diagnosis, leveling and reinforcement for incoming Engineering students at UTFPR Medianeira. I lead MAT-IA as product coordinator, from concept and scope to delivery (requirements with professors, roadmap and learning indicators), combining project management and production engineering into a real product in production.",
    studiesLabel: "Case studies",
    studies: [
      { num: "002", title: "The 670 questions", meta: "aug/2026 · 7 blocks" },
      { num: "001", title: "The production line", meta: "jul/2026 · 4 situations" },
    ],
    link: "plataformamati.dev",
    stats: [
      { num: "739", label: "questions" },
      { num: "20", label: "thematic blocks" },
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
  bastidores: {
    kicker: "Behind MAT-IA",
    h2: "Two write-ups about the same system.",
    intro:
      "The 001 reads the platform as a production line. The 002 measures a process of mine end to end, and knocks down its own numbers. Every claim cites a file or a commit.",
    cta: "Read the case study",
    c1: {
      kicker: "Case study 001 · jul/2026",
      h2: "A system in production, read as a production line, with inspection, cost per unit and a rework limit.",
      descA:
        "I opened MAT-IA through the lens of Production Engineering: where the line inspects, what is standardized, how much each correction costs, and what I still ",
      descEm: "cannot",
      descB: " claim. Surveyed in the repository itself, with evidence behind every statement.",
      meta: "4 situations · 6 min read",
      timelineTitle: "The correction line",
      legendOp: "Operation",
      legendInsp: "Inspection",
      steps: ["Photo", "3 tries?", "Correct", "Score ok?", "Cost", "Teacher", "Score"],
      quoteA:
        '"The most useful part of a survey is knowing where it does not reach. Where there is no measurement, it says ',
      quoteStrong: "not measured",
      quoteB: '."',
    },
    c2: {
      kicker: "Case study 002 · aug/2026",
      h2: "I had a process in my head. I went to measure it and found it was right. The record was what was wrong.",
      desc: "I wrote 670 questions in four months. The database console logged 506 commands with nobody planning for it. I read the log, measured the rework, wrote the rules and produced a new batch to compare.",
      meta: "7 blocks · 8 min read (in Portuguese)",
      numsTitle: "What the log kept",
      numsPeriod: "apr → aug / 2026",
      nums: [
        { num: "506", label: "commands in the log" },
        { num: "670", label: "questions measured" },
        { num: "7", label: "defect families" },
        { num: "81%", label: "right first time" },
      ],
      tools: [
        { l1: "Shaped", l2: "the questions" },
        { l1: "Kept", l2: "the rules" },
        { l1: "The inspection", l2: "is mine" },
      ],
    },
  },
  repertoire: {
    intro:
      "The foundation is engineering: process, method and numbers. Technology comes in as leverage. When the spreadsheet isn't enough, I write the tool.",
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
    updated: "© 2026 · updated 5 Aug 2026",
  },
  cv: {
    label: "CV",
    title: "Résumé",
    download: "Download PDF",
  },
};

export const translations: Record<Lang, typeof pt> = { pt, en };

export type Dict = typeof pt;
