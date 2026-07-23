"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Effects from "@/components/Effects";
import portrait from "@/public/foto-perfil.jpeg";
import { translations, type Lang } from "./i18n";

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

        {/* 04 PROJETOS */}
        <section id="projetos" className="container section-mid">
          <div data-reveal className="sec-head">
            <span className="sec-num">04</span>
            <span className="sec-label">{t.sections.projects}</span>
          </div>
          <div className="proj-list">
            {/* MAT-IA — projeto em destaque */}
            <article data-reveal className="proj-featured">
              <a
                href="https://landing.plataformamati.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="proj-featured-main"
              >
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
                <span className="proj-link">{t.proj2.link}</span>
              </a>

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

        {/* 05 CONTATO */}
        <section id="contato" className="container" style={{ paddingTop: 40 }}>
          <div data-reveal className="sec-head">
            <span className="sec-num">05</span>
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
            <span>{t.footer}</span>
            <span className="footer-mark">✺</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
