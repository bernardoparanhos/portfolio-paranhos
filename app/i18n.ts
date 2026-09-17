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
    "Engenharia de Produção  ✺  Gestão  ✺  Processos  ✺  Projetos  ✺  Indicadores  ✺  Dados  ✺  IA aplicada  ✺  ",
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
    tag: "3º período · em andamento",
    btn: "Ver grade curricular",
  },
  exp1: {
    date: "Mar – Dez 2026",
    role: "Bolsista de Inovação · Coordenação de Projeto e Produto · MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "Concebi e conduzo o MAT-IA, projeto de inovação aprovado em 1º lugar no Edital InovaGrad 2025 (nota 9,6 entre candidatos de toda a UTFPR): da definição do problema e do escopo à entrega. Atuo na coordenação do produto: levantamento de requisitos com os professores, priorização de roadmap, definição de indicadores de aprendizagem e mais de 100 entregas registradas em quadro Kanban por marcos. Um caso prático de engenharia de produção aplicada à educação, organizando processo, dados e tecnologia num produto real em produção (diagnóstico adaptativo, 739 questões, correção por IA e relatórios para docentes).",
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
      "Levantamento e qualificação de mais de 400 empresas para o time comercial, com organização das informações e critério de priorização.",
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
    certsLabel: "Certificações",
    certsClose: "esc ou clique fora para fechar",
    certsCloseBtn: "fechar",
    certsSoon: "Scan do certificado em breve.",
    certsSoonShort: "em breve",
    certsZoom: "Ampliar certificado",
    certsView: "ver certificado",
    // Trilha de formação em IA — cartão de faixa larga + modal
    // (components/certifications). `nos` é alinhado por indice com NOS de
    // trilha-data.ts: `resumo` é a chamada curta que aparece no cartão, os
    // demais campos são os blocos da ficha. Um módulo concluído fala no
    // passado (achei/estudei/aplicar); um em construção fala no futuro
    // (estudarei/porque) e deixa os outros vazios.
    trilha: {
      kicker: "Trilha de formação · IA",
      titulo: "Formação em IA · Anthropic",
      sub: "Claude Academy · 5 módulos oficiais, do Model Context Protocol à construção com a API do Claude",
      progresso: "{feitos} de {total} concluídos",
      tag: "Interativo",
      emissor: "Claude Academy · Anthropic",
      modalTitulo: "Trilha de Formação em IA",
      rodape: "Trilha · Claude Academy",
      fechar: "esc ou clique fora para fechar",
      fecharBtn: "Fechar",
      anterior: "Módulo anterior",
      proximo: "Próximo módulo",
      verModulo: "ver o módulo",
      verificar: "ver e verificar",
      concluido: "concluído",
      emBreve: "em breve",
      emConstrucao: "em construção",
      passoFinal: "em construção · passo final",
      emObras: "Módulo em construção",
      modulo: "Módulo",
      previsto: "previsto",
      tiltDica: "passe o mouse — o distintivo reage",
      labelAchei: "O que achei do módulo",
      labelEstudei: "O que estudei",
      labelAplicar: "Como pretendo aplicar",
      labelEstudarei: "O que vou estudar",
      labelPorque: "Por que escolhi este passo",
      nos: [
        {
          titulo: "Introduction to Model Context Protocol",
          curto: "Intro ao Model Context Protocol",
          data: "set/2026",
          resumo:
            "Fundamentos do protocolo que conecta modelos a ferramentas, dados e sistemas externos — hosts, clients, servers e como expor ações com segurança.",
          achei:
            "Módulo direto e bem construído, com mão na massa no SDK Python. A arquitetura do MCP fica clara já nos primeiros exemplos, sem enrolação.",
          estudei:
            "O papel de hosts, clients e servers, e os três pilares do protocolo: tools (ações), resources (dados) e prompts (instruções prontas). Como expor dados e ações de forma padronizada e segura para o modelo, usando decorators e o inspector para testar.",
          aplicar:
            "Conectar o MAT-IA a fontes de dados via servidores MCP, padronizando as integrações em vez de reescrever código a cada ligação nova. Menos retrabalho, mais organização.",
          estudarei: "",
          porque: "",
        },
        {
          titulo: "Building effective human-agent teams",
          curto: "Human-agent teams",
          data: "set/2026",
          resumo:
            "Padrões de colaboração humano-agente: delegar com contexto e critérios claros, memória compartilhada e confiança liberada aos poucos.",
          achei:
            "Mudou minha forma de enxergar delegação: tratar o agente como parte da equipe, não como ferramenta isolada. Muito visual e prático.",
          estudei:
            "A diferença entre IA individual e multiplayer, e as três capacidades de um agente de time: identidade própria, memória compartilhada e contexto compartilhado. Além dos princípios de um time saudável: north star escrita, papéis claros e liberação gradual de confiança.",
          aplicar:
            "Estruturar os fluxos do MAT-IA e dos processos da AntiFrágil com contexto compartilhado, tirando decisões de conversas soltas e registrando onde a IA consiga ler. É reduzir silo e retrabalho, com lente de engenharia de produção.",
          estudarei: "",
          porque: "",
        },
        {
          titulo: "AI capabilities and limitations",
          curto: "AI capabilities & limitations",
          data: "",
          resumo:
            "O que vem por aí: o que os modelos realmente fazem e não fazem — conhecimento, memória de trabalho, contexto e seus limites.",
          achei: "",
          estudei: "",
          aplicar: "",
          estudarei:
            "O que os modelos por trás dessas ferramentas realmente fazem e não fazem: previsão de próximo token, conhecimento, memória de trabalho, contexto e seus limites.",
          porque:
            "Pra falar de IA com propriedade, sabendo onde ela ajuda e onde falha. É a base que separa quem usa IA de quem só aperta botão.",
        },
        {
          titulo: "AI Fluency: Framework and Foundations",
          curto: "AI Fluency",
          data: "",
          resumo:
            "O que vem por aí: um framework completo de fluência em IA — delegação, descrição, discernimento e diligência no uso diário.",
          achei: "",
          estudei: "",
          aplicar: "",
          estudarei:
            "O framework 4D de colaboração com IA: Delegação, Descrição, Discernimento e Diligência, além de práticas de uso ético e seguro.",
          porque:
            "Pra transformar o uso de IA num método, não em tentativa e erro. Vira vocabulário e critério que aplico em todo projeto, do MAT-IA ao estágio.",
        },
        {
          titulo: "Building with the Claude API",
          curto: "Building with the Claude API",
          data: "",
          resumo:
            "O passo final: desenvolvimento com a API do Claude de ponta a ponta — chamadas, ferramentas e integração em produto real.",
          achei: "",
          estudei: "",
          aplicar: "",
          estudarei:
            "O desenvolvimento com a API do Claude de ponta a ponta: chamadas, ferramentas, boas práticas e integração em produto real.",
          porque:
            "É o passo mais robusto da trilha e o que mais aproxima estudo de aplicação. Fecha o ciclo entre o que aprendo aqui e o que construo no MAT-IA e no Aulivo.",
        },
      ],
    },
    certs: [
      {
        area: "IA aplicada",
        date: "mai/2026",
        name: "Claude Impressionador",
        issuer: "Hashtag Treinamentos",
        hours: "24h",
        detail: "Ecossistema Claude: Cowork, Claude Code e Excel",
        full: "Claude Impressionador · Hashtag Treinamentos",
        pages: ["certificado", "módulos"],
        blurb:
          "Formação focada no ecossistema completo do Claude, de prompt engineering e projetos a Claude Code e integração com Excel. Aplicação prática voltada à automação de análise de dados e otimização de fluxos de trabalho em Engenharia de Produção.",
        rows: [
          { label: "Curso", value: "24 horas · 163 aulas · 100% EAD" },
          { label: "Certificado", value: "Emitido em 03/05/2026" },
          { label: "Aplicação", value: "Autoria assistida das questões do MAT-IA" },
        ],
      },
    ],
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
    ptLabel: "Português",
    enLabel: "English",
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
    "Production Engineering  ✺  Management  ✺  Processes  ✺  Projects  ✺  Indicators  ✺  Data  ✺  Applied AI  ✺  ",
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
    tag: "3rd semester · in progress",
    btn: "View curriculum",
  },
  exp1: {
    date: "Mar – Dec 2026",
    role: "Innovation Fellow · Project & Product Coordination · MAT-IA",
    org: "UTFPR / InovaGrad",
    desc: "I conceived and lead MAT-IA, an innovation project approved in 1st place in the InovaGrad 2025 call (9.6 score among candidates across all of UTFPR): from problem and scope definition to delivery. I handle product coordination: gathering requirements with professors, prioritizing the roadmap, defining learning indicators and over 100 deliveries tracked on a milestone Kanban board. A practical case of production engineering applied to education, organizing process, data and technology into a real product in production (adaptive diagnosis, 739 questions, AI grading and reports for teachers).",
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
      "Surveying and qualifying over 400 companies for the commercial team, organizing the information and setting priority criteria.",
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
    certsLabel: "Certifications",
    certsClose: "esc or click outside to close",
    certsCloseBtn: "close",
    certsSoon: "Certificate scan coming soon.",
    certsSoonShort: "coming soon",
    certsZoom: "Enlarge certificate",
    certsView: "view certificate",
    trilha: {
      kicker: "Learning path · AI",
      titulo: "AI training · Anthropic",
      sub: "Claude Academy · 5 official modules, from the Model Context Protocol to building with the Claude API",
      progresso: "{feitos} of {total} completed",
      tag: "Interactive",
      emissor: "Claude Academy · Anthropic",
      modalTitulo: "AI Learning Path",
      rodape: "Learning path · Claude Academy",
      fechar: "esc or click outside to close",
      fecharBtn: "Close",
      anterior: "Previous module",
      proximo: "Next module",
      verModulo: "open the module",
      verificar: "view and verify",
      concluido: "completed",
      emBreve: "coming soon",
      emConstrucao: "in progress",
      passoFinal: "in progress · final step",
      emObras: "Module in progress",
      modulo: "Module",
      previsto: "planned",
      tiltDica: "hover — the badge reacts",
      labelAchei: "What I thought of the module",
      labelEstudei: "What I studied",
      labelAplicar: "How I plan to apply it",
      labelEstudarei: "What I will study",
      labelPorque: "Why I picked this step",
      nos: [
        {
          titulo: "Introduction to Model Context Protocol",
          curto: "Intro to Model Context Protocol",
          data: "sep/2026",
          resumo:
            "The fundamentals of the protocol that connects models to tools, data and external systems — hosts, clients, servers and how to expose actions safely.",
          achei:
            "A straight, well-built module, hands-on with the Python SDK. The MCP architecture is clear from the very first examples, with no padding.",
          estudei:
            "The role of hosts, clients and servers, and the protocol's three pillars: tools (actions), resources (data) and prompts (ready-made instructions). How to expose data and actions to the model in a standard, safe way, using decorators and the inspector to test.",
          aplicar:
            "Connect MAT-IA to data sources through MCP servers, standardising the integrations instead of rewriting code for every new connection. Less rework, more structure.",
          estudarei: "",
          porque: "",
        },
        {
          titulo: "Building effective human-agent teams",
          curto: "Human-agent teams",
          data: "sep/2026",
          resumo:
            "Human-agent collaboration patterns: delegating with clear context and criteria, shared memory and trust released step by step.",
          achei:
            "It changed how I see delegation: treating the agent as part of the team, not as an isolated tool. Very visual and practical.",
          estudei:
            "The difference between single-player and multiplayer AI, and the three capabilities of a team agent: its own identity, shared memory and shared context. Plus the principles of a healthy team: a written north star, clear roles and trust released gradually.",
          aplicar:
            "Structure the MAT-IA workflows and AntiFrágil's processes around shared context, taking decisions out of scattered conversations and recording them where the AI can read them. Less silo and less rework, through a production engineering lens.",
          estudarei: "",
          porque: "",
        },
        {
          titulo: "AI capabilities and limitations",
          curto: "AI capabilities & limitations",
          data: "",
          resumo:
            "Coming up: what the models really do and do not do — knowledge, working memory, context and their limits.",
          achei: "",
          estudei: "",
          aplicar: "",
          estudarei:
            "What the models behind these tools really do and do not do: next-token prediction, knowledge, working memory, context and their limits.",
          porque:
            "So I can talk about AI with authority, knowing where it helps and where it fails. That is the base separating someone who uses AI from someone who just presses buttons.",
        },
        {
          titulo: "AI Fluency: Framework and Foundations",
          curto: "AI Fluency",
          data: "",
          resumo:
            "Coming up: a complete AI fluency framework — delegation, description, discernment and diligence in daily use.",
          achei: "",
          estudei: "",
          aplicar: "",
          estudarei:
            "The 4D framework for collaborating with AI: Delegation, Description, Discernment and Diligence, plus ethical and safe use practices.",
          porque:
            "To turn AI use into a method rather than trial and error. It becomes vocabulary and criteria I apply to every project, from MAT-IA to the internship.",
        },
        {
          titulo: "Building with the Claude API",
          curto: "Building with the Claude API",
          data: "",
          resumo:
            "The final step: end-to-end development with the Claude API — calls, tools and integration into a real product.",
          achei: "",
          estudei: "",
          aplicar: "",
          estudarei:
            "End-to-end development with the Claude API: calls, tools, best practices and integration into a real product.",
          porque:
            "It is the most demanding step of the path and the one that brings study closest to application. It closes the loop between what I learn here and what I build in MAT-IA and Aulivo.",
        },
      ],
    },
    certs: [
      {
        area: "Applied AI",
        date: "may/2026",
        name: "Claude Impressionador",
        issuer: "Hashtag Treinamentos",
        hours: "24h",
        detail: "Claude ecosystem: Cowork, Claude Code and Excel",
        full: "Claude Impressionador · Hashtag Treinamentos",
        pages: ["certificate", "modules"],
        blurb:
          "Training focused on the full Claude ecosystem, from prompt engineering and projects to Claude Code and Excel integration. Practical application aimed at automating data analysis and streamlining Production Engineering workflows.",
        rows: [
          { label: "Course", value: "24 hours · 163 lessons · fully online" },
          { label: "Certificate", value: "Issued 2026-05-03" },
          { label: "Applied in", value: "Assisted authoring of MAT-IA questions" },
        ],
      },
    ],
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
    ptLabel: "Português",
    enLabel: "English",
  },
};

export const translations: Record<Lang, typeof pt> = { pt, en };

export type Dict = typeof pt;
