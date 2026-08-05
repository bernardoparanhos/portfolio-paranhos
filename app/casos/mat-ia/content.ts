// Conteúdo bilíngue do estudo de caso. **texto** vira negrito ao renderizar.
// Números idênticos entre idiomas (só o separador decimal muda: 9,1s / 9.1s).

export type CaseLang = "pt" | "en";

export type CaseData = {
  barTag: string;
  back: string;
  kicker: string;
  h1: { a: string; em: string; b: string };
  lead: string;
  meta: { label: string; value: string }[];
  lenteKicker: string;
  lenteP: string;
  lente: { step: string; title: string }[];
  situations: { num: string; label: string; h2: string; body: string[]; take: string }[];
  s1Stats: { label: string; exp: string }[];
  flowTitle: string;
  legendOp: string;
  legendInsp: string;
  flow: { stage: string; title: string; detail: string }[];
  beforeKicker: string;
  beforeUnit: string;
  beforeNote: string;
  afterKicker: string;
  afterTh: string[];
  afterRows: { op: string; acertos: string; tempo: string }[];
  afterP: string;
  disclaimer: string;
  precKicker: string;
  pills: string[];
  testCap: string;
  testTitle: string;
  testBody: string;
  medeHead: string;
  medeIntro: string;
  indicadores: { nome: string; porque: string }[];
  honestyKicker: string;
  honestyH2: string;
  honestyP: string;
  naoAfirmoLabel: string;
  naoAfirmo: string[];
  proximoLabel: string;
  proximo: string;
  closeH2: string;
  closeP: string;
  verPlataforma: string;
  voltar: string;
  footer: string;
};

const pt: CaseData = {
  barTag: "Estudo de caso · MAT-IA",
  back: "Portfolio",
  kicker: "Engenharia de Produção aplicada a software",
  h1: {
    a: "Eu não construí um site. Construí uma ",
    em: "linha de produção",
    b: " que fabrica diagnóstico.",
  },
  lead: "O MAT-IA descobre onde um aluno de Engenharia está travado em matemática e devolve um plano de estudo. Por dentro, ele é um processo: entra matéria-prima, passa por operações, tem pontos de inspeção, tem limite de retrabalho e tem custo por peça. É por essa lente que eu escrevo aqui.",
  meta: [
    { label: "Meu papel", value: "Coordenação de produto e desenvolvimento" },
    { label: "Contexto", value: "InovaGrad · UTFPR" },
    { label: "Situação", value: "Em produção" },
    { label: "Desde", value: "abr / 2026" },
  ],
  lenteKicker: "A lente",
  lenteP:
    "Software normalmente é discutido por ferramenta: qual framework, qual banco. Engenharia de Produção pergunta outra coisa: **onde está o desperdício, o que garante a qualidade e quanto custa cada unidade produzida.** As três situações abaixo são exatamente isso.",
  lente: [
    { step: "Situação 01", title: "Uma linha com inspeção e custo por peça" },
    { step: "Situação 02", title: "Medir peça, não lote" },
    { step: "Situação 03", title: "Quem decide é a regra, não a IA" },
  ],
  situations: [
    {
      num: "01",
      label: "A linha de correção",
      h2: "O aluno fotografa a resolução no papel. A partir daí, é uma linha de produção.",
      body: [
        "Corrigir atividade manuscrita era trabalho manual do professor. Hoje o aluno tira uma foto, o sistema lê a resolução por visão computacional, aplica o critério de correção e entrega a nota, e o professor entra só quando discorda. Não é mágica: é uma linha com operações, inspeções e um registro de custo em cada peça que passa.",
        "Três decisões de processo importam mais que a tecnologia usada:",
      ],
      take: "O que eu levaria para uma fábrica: inspeção antes de gastar recurso, critério de aceitação escrito, e apontamento de custo na peça, não no fim do mês.",
    },
    {
      num: "02",
      label: "Medir peça, não lote",
      h2: "Eu media o lote. E o lote escondia justamente quem desistia.",
      body: [
        "Existe um jogo de operações matemáticas na plataforma. Ele mandava um resumo só quando a criança terminava a fase: pontuação, total de acertos, lista de contas erradas. Quem acertava tudo gerava uma linha quase vazia. Quem fechava a aba no meio não gerava nada. Eu tinha o resultado do lote e nenhuma informação sobre o processo.",
        "Reescrevi o apontamento para **um evento por questão respondida**: qual conta apareceu, o que a criança respondeu, se acertou e quanto tempo levou. A diferença apareceu no primeiro teste:",
      ],
      take: "O que eu levaria para uma fábrica: se o apontamento é por lote, o problema aparece só depois de pronto. Apontamento por peça é o que transforma refugo em causa.",
    },
    {
      num: "03",
      label: "Quem decide é a regra",
      h2: "A IA escreve. Ela não decide.",
      body: [
        "Depois do diagnóstico, o aluno recebe um plano de estudo explicado em linguagem humana. Usar IA para escrever essa explicação é fácil; o risco é ela inventar número, citar assunto que não existe ou contradizer a tela. Tratei a IA como **fornecedor externo**: útil, mas de qualidade variável, e por isso não entra na especificação.",
        "O servidor decide tudo que é número: quais assuntos entram, em que ordem e quantas questões cada parada tem. E a ordem não é opinião: obedece pré-requisito, como roteiro de fabricação:",
      ],
      take: "O que eu levaria para uma fábrica: fornecedor variável não define especificação: ele passa por inspeção de recebimento. E regra de decisão se testa antes de entrar em produção, não depois da reclamação.",
    },
  ],
  s1Stats: [
    {
      label: "Tentativas por questão",
      exp: "Teto de retrabalho. Sem limite, o aluno tenta no chute e a linha vira fila.",
    },
    {
      label: "Critério escrito",
      exp: "A penalidade por desorganização e as faixas de nota estão no código, não na cabeça de alguém.",
    },
    {
      label: "Custo por correção",
      exp: "Cada peça registra o próprio custo de IA. É o número que decide se dá para atender mais uma turma.",
    },
  ],
  flowTitle: "Fluxo da correção · da foto à nota lançada",
  legendOp: "Operação",
  legendInsp: "Inspeção",
  flow: [
    { stage: "Entrada", title: "O aluno fotografa a resolução", detail: "" },
    {
      stage: "Inspeção 1",
      title: "Já usou as 3 tentativas?",
      detail: "Se sim, o envio é bloqueado antes de gastar processamento.",
    },
    {
      stage: "Operação",
      title: "Ler a resolução e aplicar o critério",
      detail:
        "Visão computacional + o gabarito do professor. Erro eliminatório zera; desorganização custa 30%.",
    },
    {
      stage: "Inspeção 2",
      title: "A nota faz sentido?",
      detail:
        "Se a questão não foi identificada ou a nota saiu fora da faixa, vira não conformidade e o aluno pode reenviar; ele nunca recebe erro na tela.",
    },
    {
      stage: "Operação",
      title: "Apontar o custo da peça",
      detail:
        "Cada correção grava o próprio consumo de IA, com professor e submissão de referência.",
    },
    {
      stage: "Inspeção 3",
      title: "Humana, e só por exceção",
      detail:
        "O professor não revisa tudo: ele intervém quando discorda, e a alteração fica registrada com autor e horário.",
    },
    { stage: "Saída", title: "Nota lançada e devolvida ao aluno com feedback", detail: "" },
  ],
  beforeKicker: "Antes · por lote",
  beforeUnit: "pontos na fase",
  beforeNote: "Um número que não diz onde ela travou, nem se ela travou.",
  afterKicker: "Depois · por questão",
  afterTh: ["Operação", "Acertos", "Tempo/questão"],
  afterRows: [
    { op: "Subtração", acertos: "0/4", tempo: "9,1s" },
    { op: "Adição", acertos: "6/8", tempo: "4,2s" },
  ],
  afterP:
    "Mesma criança, mesma sessão. Ela não é ruim em matemática: ela trava em subtração, e leva **mais que o dobro do tempo** ali. O tempo por questão revelou a dificuldade que o acerto sozinho escondia.",
  disclaimer:
    "Amostra de teste controlado, 12 eventos: o jogo em produção ainda envia no formato antigo. É medição de validação, não de turma real.",
  precKicker: "Precedência de operações · não se pula etapa",
  pills: [
    "números inteiros",
    "frações",
    "potências",
    "raízes",
    "equação 1º grau",
    "equação 2º grau",
  ],
  testCap: "Testes · 23 passando",
  testTitle: "Um teste reprovou a minha regra, e a regra mudou",
  testBody:
    "Testei o caso do aluno que erra tudo. Com nota zero, todos os assuntos empatavam, e o critério de desempate era alfabético, então “números inteiros”, que é a base de toda a cadeia, era descartado e o plano começava em equação. Um teste vermelho apontou isso antes de qualquer aluno ver. Corrigi o desempate para respeitar o pré-requisito.",
  medeHead: "O que a plataforma mede",
  medeIntro:
    "Indicador que ninguém usa é enfeite. Estes existem porque respondem a uma pergunta de decisão:",
  indicadores: [
    {
      nome: "Acerto por bloco de conteúdo",
      porque:
        "Mostra o assunto a retomar em aula. Faixas declaradas: abaixo de 65 é crítico, 65 a 79 é reforço, 80 ou mais está bom.",
    },
    {
      nome: "Acerto por questão",
      porque: "Separa conteúdo difícil de questão mal escrita, que é defeito meu, não do aluno.",
    },
    {
      nome: "Custo de IA por correção",
      porque:
        "É o custo que cresce com o número de alunos. Governa a resposta de “dá para atender mais uma turma?”.",
    },
    {
      nome: "Tentativas por atividade",
      porque:
        "Retrabalho por peça. Muitas tentativas indicam enunciado ambíguo ou critério mal calibrado.",
    },
    {
      nome: "Aderência ao diagnóstico",
      porque:
        "Quantos fizeram, pularam ou estão pendentes. Sem cobertura, todo indicador acima perde representatividade.",
    },
  ],
  honestyKicker: "O que eu ainda não sei medir",
  honestyH2: "A parte mais útil de um levantamento é saber onde ele não alcança.",
  honestyP:
    "Eu poderia escrever aqui que reduzi o tempo de correção do professor em algum percentual. Ficaria bonito, e eu não conseguiria sustentar numa entrevista, porque nunca cronometrei o processo manual. Então:",
  naoAfirmoLabel: "Não afirmo",
  naoAfirmo: [
    "Que reduzi X% do tempo de correção: o tempo manual nunca foi medido.",
    "Que melhorei o desempenho dos alunos: não há segunda medição nem grupo de comparação.",
    "Que está validado em turma real: as métricas existem, a validação com turma ainda não aconteceu.",
  ],
  proximoLabel: "O próximo indicador que vou construir",
  proximo:
    "A **divergência entre a nota da IA e a nota final do professor.** Os dois campos já são gravados, e ninguém calcula a diferença. É o indicador de confiança do processo automático: sem ele, dizer que a correção é confiável é fé, não engenharia.",
  closeH2: "É isso que eu quero fazer em operações.",
  closeP:
    "Estou no 3º período. Não tenho anos de fábrica, mas tenho um sistema em produção onde precisei decidir onde inspecionar, o que padronizar, quanto custa cada unidade e o que eu ainda não posso afirmar. É a mesma conversa de uma linha de montagem, num objeto que eu conseguia construir sozinho.",
  verPlataforma: "Ver a plataforma",
  voltar: "Voltar ao portfolio",
  footer: "Bernardo Paranhos · Estudo de caso MAT-IA · 2026",
};

const en: CaseData = {
  barTag: "Case study · MAT-IA",
  back: "Portfolio",
  kicker: "Production Engineering applied to software",
  h1: {
    a: "I didn't build a website. I built a ",
    em: "production line",
    b: " that manufactures diagnosis.",
  },
  lead: "MAT-IA finds where an Engineering student is stuck in math and returns a study plan. Under the hood, it's a process: raw material comes in, goes through operations, has inspection points, has a rework limit and has a cost per part. That's the lens I write through here.",
  meta: [
    { label: "My role", value: "Product coordination and development" },
    { label: "Context", value: "InovaGrad · UTFPR" },
    { label: "Status", value: "In production" },
    { label: "Since", value: "Apr / 2026" },
  ],
  lenteKicker: "The lens",
  lenteP:
    "Software is usually discussed by tool: which framework, which database. Production Engineering asks something else: **where the waste is, what guarantees quality and how much each unit produced costs.** The three situations below are exactly that.",
  lente: [
    { step: "Situation 01", title: "A line with inspection and cost per part" },
    { step: "Situation 02", title: "Measure the part, not the batch" },
    { step: "Situation 03", title: "The rule decides, not the AI" },
  ],
  situations: [
    {
      num: "01",
      label: "The correction line",
      h2: "The student photographs the handwritten solution. From there, it's a production line.",
      body: [
        "Grading handwritten work used to be the teacher's manual job. Now the student takes a photo, the system reads the solution with computer vision, applies the grading criteria and returns the grade, and the teacher steps in only when they disagree. It's not magic: it's a line with operations, inspections and a cost record on every part that passes.",
        "Three process decisions matter more than the technology used:",
      ],
      take: "What I'd take to a factory: inspection before spending resources, a written acceptance criterion, and cost recorded on the part, not at the end of the month.",
    },
    {
      num: "02",
      label: "Measure the part, not the batch",
      h2: "I was measuring the batch. And the batch hid exactly who was giving up.",
      body: [
        "There's a math-operations game on the platform. It sent a summary only when the child finished the stage: score, total correct, list of wrong sums. Whoever got everything right generated an almost empty line. Whoever closed the tab midway generated nothing. I had the batch result and no information about the process.",
        "I rewrote the logging to **one event per answered question**: which sum appeared, what the child answered, whether it was right and how long it took. The difference showed up in the first test:",
      ],
      take: "What I'd take to a factory: if logging is by batch, the problem only appears once it's done. Logging by part is what turns scrap into a cause.",
    },
    {
      num: "03",
      label: "The rule decides",
      h2: "The AI writes. It doesn't decide.",
      body: [
        "After the diagnosis, the student receives a study plan explained in human language. Using AI to write that explanation is easy; the risk is it inventing a number, citing a topic that doesn't exist or contradicting the screen. I treated the AI as an **external supplier**: useful, but of variable quality, and for that reason it doesn't enter the specification.",
        "The server decides everything numeric: which topics enter, in what order and how many questions each stop has. And the order isn't opinion: it obeys prerequisites, like a manufacturing routing:",
      ],
      take: "What I'd take to a factory: a variable supplier doesn't define the specification: it goes through incoming inspection. And a decision rule is tested before entering production, not after the complaint.",
    },
  ],
  s1Stats: [
    {
      label: "Attempts per question",
      exp: "Rework ceiling. Without a limit, the student guesses and the line becomes a queue.",
    },
    {
      label: "Written criteria",
      exp: "The penalty for disorganization and the grade bands are in the code, not in someone's head.",
    },
    {
      label: "Cost per correction",
      exp: "Each part records its own AI cost. It's the number that decides whether we can take on one more class.",
    },
  ],
  flowTitle: "Correction flow · from photo to posted grade",
  legendOp: "Operation",
  legendInsp: "Inspection",
  flow: [
    { stage: "Entry", title: "The student photographs the solution", detail: "" },
    {
      stage: "Inspection 1",
      title: "Already used the 3 attempts?",
      detail: "If so, the submission is blocked before spending processing.",
    },
    {
      stage: "Operation",
      title: "Read the solution and apply the criteria",
      detail:
        "Computer vision + the teacher's answer key. An eliminatory error zeroes it; disorganization costs 30%.",
    },
    {
      stage: "Inspection 2",
      title: "Does the grade make sense?",
      detail:
        "If the question wasn't identified or the grade fell outside the band, it becomes a nonconformity and the student can resubmit; they never see an error on screen.",
    },
    {
      stage: "Operation",
      title: "Record the part's cost",
      detail:
        "Each correction logs its own AI consumption, with the teacher and submission of reference.",
    },
    {
      stage: "Inspection 3",
      title: "Human, and only by exception",
      detail:
        "The teacher doesn't review everything: they step in when they disagree, and the change is logged with author and time.",
    },
    { stage: "Exit", title: "Grade posted and returned to the student with feedback", detail: "" },
  ],
  beforeKicker: "Before · by batch",
  beforeUnit: "points in the stage",
  beforeNote: "A number that doesn't say where she got stuck, or if she got stuck.",
  afterKicker: "After · by question",
  afterTh: ["Operation", "Correct", "Time/question"],
  afterRows: [
    { op: "Subtraction", acertos: "0/4", tempo: "9.1s" },
    { op: "Addition", acertos: "6/8", tempo: "4.2s" },
  ],
  afterP:
    "Same child, same session. She's not bad at math: she gets stuck on subtraction, and takes **more than double the time** there. Time per question revealed the difficulty that the score alone was hiding.",
  disclaimer:
    "Controlled test sample, 12 events: the game in production still sends the old format. It's validation measurement, not a real class.",
  precKicker: "Precedence of operations · you don't skip a step",
  pills: [
    "whole numbers",
    "fractions",
    "powers",
    "roots",
    "1st-degree equation",
    "2nd-degree equation",
  ],
  testCap: "Tests · 23 passing",
  testTitle: "One test failed my rule, and the rule changed",
  testBody:
    "I tested the case of the student who gets everything wrong. With a zero score, all topics tied, and the tie-breaker was alphabetical, so “whole numbers”, which is the base of the whole chain, was discarded and the plan started at equations. A red test flagged this before any student saw it. I fixed the tie-breaker to respect the prerequisite.",
  medeHead: "What the platform measures",
  medeIntro:
    "An indicator nobody uses is decoration. These exist because they answer a decision question:",
  indicadores: [
    {
      nome: "Accuracy per content block",
      porque:
        "Shows the topic to revisit in class. Declared bands: below 65 is critical, 65 to 79 is reinforcement, 80 or more is good.",
    },
    {
      nome: "Accuracy per question",
      porque:
        "Separates hard content from a badly written question, which is my defect, not the student's.",
    },
    {
      nome: "AI cost per correction",
      porque:
        "It's the cost that grows with the number of students. It governs the answer to “can we take on one more class?”.",
    },
    {
      nome: "Attempts per activity",
      porque:
        "Rework per part. Many attempts indicate an ambiguous prompt or a poorly calibrated criterion.",
    },
    {
      nome: "Diagnosis adherence",
      porque:
        "How many did it, skipped it or are pending. Without coverage, every indicator above loses representativeness.",
    },
  ],
  honestyKicker: "What I still can't measure",
  honestyH2: "The most useful part of an assessment is knowing where it doesn't reach.",
  honestyP:
    "I could write here that I cut the teacher's correction time by some percentage. It would look good, and I couldn't back it up in an interview, because I never timed the manual process. So:",
  naoAfirmoLabel: "I don't claim",
  naoAfirmo: [
    "That I cut X% of correction time: manual time was never measured.",
    "That I improved student performance: there's no second measurement or comparison group.",
    "That it's validated with a real class: the metrics exist, validation with a class hasn't happened yet.",
  ],
  proximoLabel: "The next indicator I'll build",
  proximo:
    "The **divergence between the AI's grade and the teacher's final grade.** Both fields are already recorded, and nobody calculates the difference. It's the trust indicator of the automatic process: without it, saying the correction is reliable is faith, not engineering.",
  closeH2: "That's what I want to do in operations.",
  closeP:
    "I'm in my 3rd semester. I don't have years of factory experience, but I have a system in production where I had to decide where to inspect, what to standardize, how much each unit costs and what I still can't claim. It's the same conversation as an assembly line, on an object I could build on my own.",
  verPlataforma: "See the platform",
  voltar: "Back to portfolio",
  footer: "Bernardo Paranhos · MAT-IA case study · 2026",
};

export const CASE: Record<CaseLang, CaseData> = { pt, en };
