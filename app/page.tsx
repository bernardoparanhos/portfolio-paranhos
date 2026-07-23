import Image from "next/image";
import Effects from "@/components/Effects";
import portrait from "@/public/foto-perfil.jpeg";

const MARQUEE =
  "Engenharia de Produção\u00A0\u00A0✺\u00A0\u00A0Dados\u00A0\u00A0✺\u00A0\u00A0IA aplicada\u00A0\u00A0✺\u00A0\u00A0Processos\u00A0\u00A0✺\u00A0\u00A0KPIs de manutenção\u00A0\u00A0✺\u00A0\u00A0Full Stack\u00A0\u00A0✺\u00A0\u00A0Gestão\u00A0\u00A0✺\u00A0\u00A0";

export default function Home() {
  return (
    <div className="page">
      <Effects />

      {/* NAV */}
      <div className="nav-wrap">
        <nav id="siteNav" className="nav" aria-label="Navegação principal">
          <a href="#hero" className="nav-brand">
            Bernardo P.
          </a>
          <div id="navLinks" className="nav-links">
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
            <a href="#formacao" className="nav-link">
              Formação
            </a>
            <a href="#experiencia" className="nav-link">
              Experiência
            </a>
            <a href="#projetos" className="nav-link">
              Projetos
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </div>
          <span className="nav-lang">PT / EN</span>
          <button
            id="navToggle"
            type="button"
            className="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded="false"
            aria-controls="navLinks"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      <main>
        {/* HERO */}
        <section id="hero" className="container hero">
          <div data-reveal className="eyebrow">
            Engenharia de Produção · UTFPR Medianeira
          </div>
          <h1 data-reveal className="hero-title">
            Engenheiro de Produção que resolve <em>problemas de verdade.</em>
          </h1>
          <div data-reveal className="hero-grid">
            <div>
              <p className="hero-sub">
                Do controle de KPIs de manutenção a uma plataforma de IA para a universidade —
                aplico o que aprendo enquanto ainda estou aprendendo.
              </p>
              <div className="hero-ctas">
                <a href="#projetos" className="btn btn-primary">
                  Ver projetos
                </a>
                <a href="#contato" className="btn btn-secondary">
                  Vamos conversar
                </a>
              </div>
            </div>
            <div className="metrics">
              <div data-tilt className="metric metric-wide">
                <div className="metric-num-row">
                  <span className="metric-num">1</span>
                  <span className="metric-deg" />
                </div>
                <div className="metric-label">InovaGrad 2025</div>
                <div className="metric-sub">1º lugar no edital</div>
              </div>
              <div data-tilt className="metric">
                <span className="metric-num sage">2</span>
                <div className="metric-label">Projetos reais</div>
                <div className="metric-sub">Em produção</div>
              </div>
              <div data-tilt className="metric">
                <div className="metric-num-row">
                  <span className="metric-num">2</span>
                  <span className="metric-deg" style={{ width: 11, height: 11 }} />
                </div>
                <div className="metric-label">Período</div>
                <div className="metric-sub">UTFPR · 2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div id="marquee-track" className="marquee-track">
            <span className="marquee-item">{MARQUEE}</span>
          </div>
        </div>

        {/* 01 SOBRE */}
        <section id="sobre" className="container section">
          <div data-reveal className="sec-head sec-head-lg">
            <span className="sec-num">01</span>
            <span className="sec-label">Sobre</span>
          </div>
          <div className="about-grid">
            <div data-reveal className="portrait-wrap">
              <div className="blob blob-portrait" />
              <div className="portrait washed">
                <Image
                  src={portrait}
                  alt="Bernardo Paranhos"
                  fill
                  sizes="(max-width: 960px) 340px, 460px"
                  placeholder="blur"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="portrait-badge">Medianeira · PR</div>
            </div>
            <div data-reveal>
              <p className="about-lead">
                Resolvo problemas com organização, dados e um pouco de{" "}
                <span className="sage-word">código.</span>
              </p>
              <p className="about-body">
                Estudante de Engenharia de Produção na UTFPR Medianeira, com interesse real em como
                tecnologia pode resolver problemas de gestão. Desenvolvo uma plataforma de IA para
                nivelamento de alunos ingressantes em Engenharia como bolsista InovaGrad — projeto
                aprovado em 1º lugar no edital da universidade. Estagio em consultoria de gestão,
                onde trabalho diretamente com organização de processos e dados de clientes. Gosto de
                programar e vejo isso como diferencial dentro da Engenharia de Produção, não como
                desvio de rota.
              </p>
              <div className="lang-label">Idiomas</div>
              <div className="lang-row">
                <span className="lang-name">Português</span>
                <span className="tag tag-accent2">Nativo</span>
              </div>
              <div className="lang-row">
                <span className="lang-name">Inglês</span>
                <span className="tag tag-outline">Básico · em aprendizado</span>
              </div>
            </div>
          </div>
        </section>

        {/* 02 FORMAÇÃO */}
        <section id="formacao" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">02</span>
            <span className="sec-label">Formação</span>
          </div>
          <div data-reveal data-tilt className="edu-card">
            <div className="edu-circle" />
            <div className="edu-content">
              <h3 className="edu-degree">Bacharelado em Engenharia de Produção</h3>
              <div className="edu-school">Universidade Tecnológica Federal do Paraná</div>
              <div className="edu-meta">
                Campus Medianeira · PR&nbsp;&nbsp;/&nbsp;&nbsp;2025 — 2030 (previsto)
              </div>
              <div className="edu-tag-row">
                <span className="tag tag-accent">2º período · em andamento</span>
              </div>
            </div>
            <a
              href="https://www.utfpr.edu.br/cursos/coordenacoes/graduacao/medianeira/md-engenharia-de-producao"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary edu-btn"
            >
              Ver grade curricular
            </a>
          </div>
        </section>

        {/* 03 EXPERIÊNCIA */}
        <section id="experiencia" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">03</span>
            <span className="sec-label">Experiência</span>
          </div>
          <div className="exp-list">
            <div data-reveal className="exp-row">
              <div className="exp-date">Abr 2026 — Presente</div>
              <div>
                <h3 className="exp-role">Fundador &amp; Desenvolvedor Full Stack — MAT-IA</h3>
                <div className="exp-org">UTFPR / InovaGrad</div>
                <p className="exp-desc">
                  Desenvolvo do zero uma plataforma web educacional com IA para diagnóstico e
                  nivelamento em matemática de alunos ingressantes em Engenharia. Aprovado em 1º
                  lugar no edital InovaGrad 2025 com nota 9,6 entre candidatos de toda a UTFPR. A
                  plataforma conta com diagnóstico adaptativo de 20 questões, banco de 500+
                  exercícios em 10 blocos temáticos, correção automática de resoluções manuscritas
                  via GPT-4o Vision, gamificação com ranking em tempo real e relatórios para
                  professores via Google Sheets.
                </p>
                <div className="tag-row">
                  <span className="tag tag-outline">React</span>
                  <span className="tag tag-outline">Node.js</span>
                  <span className="tag tag-outline">PostgreSQL</span>
                  <span className="tag tag-outline">OpenAI</span>
                  <span className="tag tag-outline">Tailwind</span>
                  <span className="tag tag-accent2">UTFPR</span>
                </div>
              </div>
            </div>
            <div data-reveal className="exp-row">
              <div className="exp-date">Jun 2026 — Presente</div>
              <div>
                <h3 className="exp-role">Estagiário de Engenharia de Produção — Operacional</h3>
                <div className="exp-org">AntiFrágil — Gestão &amp; Consultoria</div>
                <p className="exp-desc exp-desc-tight">
                  Atuo no setor operacional de uma consultoria de gestão e processos, com contato
                  direto com clientes e participação nas atividades de análise de processos das
                  empresas atendidas.
                </p>
                <ul className="exp-bullets">
                  <li>
                    Gestão da comunicação recorrente com carteira de 26 clientes com acompanhamento
                    semanal de planos de ação.
                  </li>
                  <li>Elaboração de relatórios gerenciais.</li>
                  <li>Acompanhamento de reuniões.</li>
                  <li>Mapeamento de processos.</li>
                </ul>
                <div className="tag-row">
                  <span className="tag tag-outline">Microsoft Excel</span>
                  <span className="tag tag-outline">Comunicação com clientes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 PROJETOS */}
        <section id="projetos" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">04</span>
            <span className="sec-label">Projetos</span>
          </div>
          <div className="proj-grid">
            <a
              data-reveal
              data-tilt
              href="https://github.com/bernardoparanhos/gerador_kpis.py"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card"
            >
              <div className="proj-head">
                <h3 className="proj-name">Simulador PCM</h3>
                <span className="proj-status">
                  <span className="status-dot sage" />
                  Disponível
                </span>
              </div>
              <div className="proj-stack">
                <span className="tag tag-neutral">Python</span>
                <span className="tag tag-neutral">Pandas</span>
                <span className="tag tag-neutral">NumPy</span>
                <span className="tag tag-neutral">openpyxl</span>
              </div>
              <p className="proj-desc">
                Gerador de KPIs de manutenção industrial para PCM. Simula equipamentos por
                criticidade (Alta/Média/Baixa) e gera indicadores reais: MTBF, MTTR,
                disponibilidade, taxa de corretivas e custo por ordem. Exporta relatórios em Excel
                com 7 abas analíticas e CSVs prontos para Power BI ou Tableau.
              </p>
              <span className="proj-link">github.com/bernardoparanhos/gerador_kpis.py →</span>
            </a>
            <a
              data-reveal
              data-tilt
              href="https://mat-ia-plataform.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card"
            >
              <div className="proj-head">
                <h3 className="proj-name">MAT-IA</h3>
                <span className="proj-status">
                  <span className="status-dot" />
                  Em produção
                </span>
              </div>
              <div className="proj-stack">
                <span className="tag tag-neutral">React</span>
                <span className="tag tag-neutral">Node.js</span>
                <span className="tag tag-neutral">PostgreSQL</span>
                <span className="tag tag-neutral">OpenAI</span>
                <span className="tag tag-neutral">Tailwind</span>
                <span className="tag tag-neutral">Vercel</span>
              </div>
              <p className="proj-desc">
                Plataforma web educacional com IA para diagnóstico e nivelamento em matemática de
                alunos ingressantes em Engenharia. Diagnóstico adaptativo de 20 questões, banco de
                500+ exercícios em 10 blocos temáticos e relatórios para professores via Google
                Sheets. Aprovado em 1º lugar no InovaGrad 2025 com nota 9,6.
              </p>
              <span className="proj-link">mat-ia-plataform.vercel.app →</span>
            </a>
          </div>
        </section>

        {/* 05 CONTATO */}
        <section id="contato" className="container" style={{ paddingTop: 40 }}>
          <div data-reveal className="sec-head">
            <span className="sec-num">05</span>
            <span className="sec-label">Contato</span>
          </div>
          <div className="contact-grid">
            <div data-reveal className="contact-headline">
              <div className="blob blob-contact" />
              <h2 className="contact-title">
                Vamos <span className="accent-word">conversar.</span>
              </h2>
              <p className="contact-sub">
                Aberto a projetos, pesquisas colaborativas e novas conexões nas áreas de operações,
                IA aplicada e engenharia de processos.
              </p>
            </div>
            <div data-reveal className="contact-links">
              <a href="mailto:beparanhosborges@gmail.com" className="contact-link">
                <span className="contact-label">Email</span>
                <span className="contact-value">beparanhosborges@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/bernardo-paranhos/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">in/bernardo-paranhos →</span>
              </a>
              <a
                href="https://github.com/bernardoparanhos"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-label">GitHub</span>
                <span className="contact-value">@bernardoparanhos →</span>
              </a>
            </div>
          </div>
          <footer className="footer">
            <span>Bernardo Paranhos — Engenharia de Produção · UTFPR Medianeira · 2026</span>
            <span className="footer-mark">✺</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
