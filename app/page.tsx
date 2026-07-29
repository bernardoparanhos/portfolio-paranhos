"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Effects from "@/components/Effects";
import Repertorio from "@/components/Repertorio";
import portrait from "@/public/foto-perfil.jpeg";
import { translations, type Lang } from "./i18n";

// Ícones dos princípios (line icons estilo Lucide, tintados via currentColor).
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};
const PRINCIPLE_ICONS = [
  <svg key="0" {...iconProps}>
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="18" y1="20" x2="18" y2="10" />
  </svg>,
  <svg key="1" {...iconProps}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>,
  <svg key="2" {...iconProps}>
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </svg>,
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");

  // Restaura o idioma salvo (só no cliente, pra não quebrar a hidratação do SSR:
  // o HTML é sempre pré-renderizado em pt e ajustado aqui após a montagem).
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "en") setLang(saved);
  }, []);

  // Aplica o idioma: <html lang>, persistência e avisa o marquee para se refazer.
  useEffect(() => {
    const t = translations[lang];
    document.documentElement.lang = t.htmlLang;
    localStorage.setItem("lang", lang);
    window.dispatchEvent(new Event("langchange"));
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="page">
      <Effects />

      {/* NAV */}
      <div className="nav-wrap">
        <nav id="siteNav" className="nav" aria-label={t.nav.main}>
          <a href="#hero" className="nav-brand">
            Bernardo P.
          </a>
          <div id="navLinks" className="nav-links">
            <a href="#sobre" data-spy="sobre" className="nav-link">
              {t.nav.about}
            </a>
            <a href="#formacao" data-spy="formacao" className="nav-link">
              {t.nav.education}
            </a>
            <a href="#experiencia" data-spy="experiencia" className="nav-link">
              {t.nav.experience}
            </a>
            <a href="#repertorio" data-spy="repertorio" className="nav-link">
              {t.nav.repertoire}
            </a>
            <a href="#projetos" data-spy="projetos" className="nav-link">
              {t.nav.projects}
            </a>
            <a href="#contato" data-spy="contato" className="nav-link">
              {t.nav.contact}
            </a>
          </div>
          <div className="nav-lang" role="group" aria-label={t.nav.langLabel}>
            <button
              type="button"
              className={`lang-btn${lang === "pt" ? " active" : ""}`}
              aria-pressed={lang === "pt"}
              onClick={() => setLang("pt")}
            >
              PT
            </button>
            <button
              type="button"
              className={`lang-btn${lang === "en" ? " active" : ""}`}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <button
            id="navToggle"
            type="button"
            className="nav-toggle"
            aria-label={t.nav.menu}
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
            {t.hero.eyebrow}
          </div>
          <h1 data-reveal className="hero-title">
            {t.hero.titleLead}
            <em>{t.hero.titleEm}</em>
          </h1>
          <div data-reveal className="hero-grid">
            <div>
              <p className="hero-sub">{t.hero.sub}</p>
              <div className="hero-ctas">
                <a href="#projetos" className="btn btn-primary">
                  {t.hero.ctaProjects}
                </a>
                <a href="#contato" className="btn btn-secondary">
                  {t.hero.ctaTalk}
                </a>
              </div>
            </div>
            <div className="metrics">
              <div data-tilt className="metric metric-wide">
                <div className="metric-num-row">
                  <span className="metric-num">1</span>
                  <span className="metric-deg" />
                </div>
                <div className="metric-label">{t.metrics.m1Label}</div>
                <div className="metric-sub">{t.metrics.m1Sub}</div>
              </div>
              <div data-tilt className="metric">
                <span className="metric-num sage">2</span>
                <div className="metric-label">{t.metrics.m2Label}</div>
                <div className="metric-sub">{t.metrics.m2Sub}</div>
              </div>
              <div data-tilt className="metric">
                <div className="metric-num-row">
                  <span className="metric-num">2</span>
                  <span className="metric-deg" style={{ width: 11, height: 11 }} />
                </div>
                <div className="metric-label">{t.metrics.m3Label}</div>
                <div className="metric-sub">{t.metrics.m3Sub}</div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div id="marquee-track" className="marquee-track">
            <span className="marquee-item">{t.marquee}</span>
          </div>
        </div>

        {/* 01 SOBRE */}
        <section id="sobre" className="container section">
          <div data-reveal className="sec-head sec-head-lg">
            <span className="sec-num">01</span>
            <span className="sec-label">{t.sections.about}</span>
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
              <div className="portrait-badge">{t.about.badge}</div>
            </div>
            <div data-reveal>
              <p className="about-lead">
                {t.about.leadLead}
                <span className="sage-word">{t.about.leadAccent}</span>
              </p>
              <p className="about-body">{t.about.body}</p>
              <div className="lang-label">{t.about.languagesLabel}</div>
              <div className="lang-row">
                <span className="lang-name">{t.about.ptName}</span>
                <span className="tag tag-accent2">{t.about.ptLevel}</span>
              </div>
              <div className="lang-row">
                <span className="lang-name">{t.about.enName}</span>
                <span className="tag tag-outline">{t.about.enLevel}</span>
              </div>
            </div>
          </div>

          <div data-reveal className="principles">
            <div className="principles-label">{t.principles.label}</div>
            <div className="principles-grid">
              {t.principles.items.map((p, i) => (
                <div key={i} className="principle">
                  <span className="principle-icon">{PRINCIPLE_ICONS[i]}</span>
                  <h3 className="principle-title">{p.title}</h3>
                  <p className="principle-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 FORMAÇÃO */}
        <section id="formacao" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">02</span>
            <span className="sec-label">{t.sections.education}</span>
          </div>
          <div data-reveal data-tilt className="edu-card">
            <div className="edu-circle" />
            <div className="edu-content">
              <h3 className="edu-degree">{t.education.degree}</h3>
              <div className="edu-school">{t.education.school}</div>
              <div className="edu-meta">{t.education.meta}</div>
              <div className="edu-tag-row">
                <span className="tag tag-accent">{t.education.tag}</span>
              </div>
            </div>
            <a
              href="https://www.utfpr.edu.br/cursos/coordenacoes/graduacao/medianeira/md-engenharia-de-producao"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary edu-btn"
            >
              {t.education.btn}
            </a>
          </div>
        </section>

        {/* 03 EXPERIÊNCIA */}
        <section id="experiencia" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">03</span>
            <span className="sec-label">{t.sections.experience}</span>
          </div>
          <div className="exp-list">
            <div data-reveal className="exp-row">
              <div className="exp-date">{t.exp1.date}</div>
              <div>
                <h3 className="exp-role">{t.exp1.role}</h3>
                <div className="exp-org">{t.exp1.org}</div>
                <p className="exp-desc">{t.exp1.desc}</p>
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
              <div className="exp-date">{t.exp2.date}</div>
              <div>
                <h3 className="exp-role">{t.exp2.role}</h3>
                <div className="exp-org">{t.exp2.org}</div>
                <p className="exp-desc exp-desc-tight">{t.exp2.desc}</p>
                <ul className="exp-bullets">
                  {t.exp2.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  <span className="tag tag-outline">Microsoft Excel</span>
                  <span className="tag tag-outline">{t.exp2.tagCommunication}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 REPERTÓRIO */}
        <section id="repertorio" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">04</span>
            <span className="sec-label">{t.sections.repertoire}</span>
          </div>
          <div data-reveal>
            <Repertorio t={t.repertoire} />
          </div>
        </section>

        {/* 05 PROJETOS */}
        <section id="projetos" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">05</span>
            <span className="sec-label">{t.sections.projects}</span>
          </div>
          <div className="proj-list">
            {/* MAT-IA — projeto em destaque */}
            <article data-reveal className="proj-featured">
              <div className="proj-featured-main">
                <div className="proj-head">
                  <div>
                    <h3 className="proj-name">{t.proj2.name}</h3>
                    <div className="proj-tagline">{t.proj2.tagline}</div>
                  </div>
                  <span className="proj-status">
                    <span className="status-dot" />
                    {t.proj2.status}
                  </span>
                </div>
                <div className="proj-stack">
                  <span className="tag tag-neutral">React</span>
                  <span className="tag tag-neutral">Node.js</span>
                  <span className="tag tag-neutral">PostgreSQL</span>
                  <span className="tag tag-neutral">OpenAI</span>
                  <span className="tag tag-neutral">Tailwind</span>
                </div>
                <p className="proj-desc">{t.proj2.desc}</p>
                <div className="proj-stats">
                  {t.proj2.stats.map((s, i) => (
                    <div key={i} className="proj-stat">
                      <div className="proj-stat-num">{s.num}</div>
                      <div className="proj-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="matia-ctas">
                  <Link href="/casos/mat-ia" className="matia-cta-primary">
                    {t.proj2.caseCta}
                  </Link>
                  <a
                    href="https://landing.plataformamati.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="matia-cta-ghost"
                  >
                    {t.proj2.link}
                  </a>
                </div>
              </div>

              <aside className="proj-featured-side" aria-hidden="true">
                <div className="matia-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
                    <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
                  </svg>
                  <div>
                    <div className="matia-badge-title">{t.proj2.panel.award}</div>
                    <div className="matia-badge-sub">{t.proj2.panel.grade}</div>
                  </div>
                </div>
                <div className="matia-window">
                  <div className="matia-window-head">
                    <span className="matia-dot" />
                    <span className="matia-dot" />
                    <span className="matia-dot" />
                    <span className="matia-window-label">{t.proj2.panel.window}</span>
                  </div>
                  <div className="matia-diag">
                    <div className="matia-ring" />
                    <div>
                      <div className="matia-pct">{t.proj2.panel.donut}</div>
                      <div className="matia-pct-label">{t.proj2.panel.donutLabel}</div>
                    </div>
                  </div>
                  <div className="matia-bars">
                    {[46, 62, 40, 78, 90, 54, 68].map((h, i) => (
                      <span key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="matia-bars-label">{t.proj2.panel.barsLabel}</div>
                </div>
              </aside>
            </article>

            {/* Simulador PCM */}
            <a
              data-reveal
              href="https://github.com/bernardoparanhos/gerador_kpis.py"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card proj-card-wide"
            >
              <div className="proj-head">
                <h3 className="proj-name">{t.proj1.name}</h3>
                <span className="proj-status">
                  <span className="status-dot sage" />
                  {t.proj1.status}
                </span>
              </div>
              <div className="proj-stack">
                <span className="tag tag-neutral">Python</span>
                <span className="tag tag-neutral">Pandas</span>
                <span className="tag tag-neutral">NumPy</span>
                <span className="tag tag-neutral">openpyxl</span>
              </div>
              <p className="proj-desc">{t.proj1.desc}</p>
              <span className="proj-link">github.com/bernardoparanhos/gerador_kpis.py →</span>
            </a>
          </div>
        </section>

        {/* 06 CONTATO */}
        <section id="contato" className="container" style={{ paddingTop: 40 }}>
          <div data-reveal className="sec-head">
            <span className="sec-num">06</span>
            <span className="sec-label">{t.sections.contact}</span>
          </div>
          <div className="contact-grid">
            <div data-reveal className="contact-headline">
              <div className="blob blob-contact" />
              <h2 className="contact-title">
                {t.contact.titleLead}
                <span className="accent-word">{t.contact.titleAccent}</span>
              </h2>
              <p className="contact-sub">{t.contact.sub}</p>
            </div>
            <div data-reveal className="contact-links">
              <a href="mailto:beparanhosborges@gmail.com" className="contact-link">
                <span className="contact-label">{t.contact.emailLabel}</span>
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
            <div className="footer-col">
              <p className="footer-credit">
                {t.footer.builtBy} <strong>Bernardo Paranhos</strong>.
              </p>
              <p className="footer-sub">{t.footer.stack}</p>
            </div>
            <div className="footer-col footer-col-center">
              <span className="footer-mark">✺</span>
              <p className="footer-sub">{t.footer.location}</p>
            </div>
            <div className="footer-col footer-col-end">
              <a
                href="https://github.com/bernardoparanhos/portfolio-paranhos"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-repo"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                </svg>
                {t.footer.repo}
              </a>
              <p className="footer-sub">{t.footer.updated}</p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
