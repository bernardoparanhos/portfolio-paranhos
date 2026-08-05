"use client";
/* eslint-disable @next/next/no-img-element -- os quatro logos entram via <img>
   por especificação (evita colisão de ids de gradiente entre SVGs inline e
   mantém o cache do browser); os prints do bloco 06 já vêm cortados e são
   servidos como estão — reprocessá-los no next/image alteraria a evidência. */

import { useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import {
  FICHA,
  NUMEROS,
  FLUXO,
  LOG,
  SERIE,
  LOTE_NOVO,
  FAMILIAS,
  REESCRITAS,
  LOTES,
  SESSAO,
  NAO_AFIRMO,
  FALTA_MEDIR,
} from "./content";

// Linha da média (81%) no sistema de coordenadas do gráfico.
const MEDIA_Y = 83.7;

export default function CaseContent() {
  // A peça é só em pt-BR (ver content.ts). Fixa o idioma do documento sem
  // mexer na chave 'lang' do site — quem voltar pra home mantém a escolha.
  useEffect(() => {
    document.documentElement.lang = "pt-BR";
  }, []);

  // Reveal no scroll — desligado quando o usuário pede menos movimento.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
      el.style.transition =
        "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const t = en.target as HTMLElement;
            t.style.opacity = "1";
            t.style.transform = "none";
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const polyline = SERIE.map((p) => `${p.x},${p.y}`).join(" ");
  const ultimo = SERIE[SERIE.length - 1];

  return (
    <div className="c2">
      {/* barra superior */}
      <div className="case-bar">
        <div className="case-bar-inner">
          {/* cada estudo é uma peça independente: a volta é sempre o portfólio */}
          <Link href="/" className="case-back">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Portfolio
          </Link>
          <div className="case-bar-right">
            <span className="case-bar-tag">Estudo de caso 002 · as 670 questões</span>
            <ThemeToggle iconSize={14} />
          </div>
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <header data-reveal data-screen-label="Hero" className="c2-hero">
        <div className="c2-rail">
          <span className="c2-rail-l">Bastidores · Estudo de caso 002</span>
          <span style={{ flex: 1 }} />
          <span className="c2-rail-r">Um experimento medido · ago 2026</span>
        </div>
        <h1 className="c2-h1">
          Eu tinha um processo na cabeça. Fui medir e descobri que ele estava certo.{" "}
          <span>O registro é que estava errado.</span>
        </h1>
        <p className="c2-lead">
          Em quatro meses eu escrevi 670 questões de matemática para a plataforma. As regras que
          evitavam defeito existiam, mas viviam em conversas de chat e na minha memória. O console
          do banco tinha guardado tudo sem que ninguém planejasse: 506 comandos, com hora e
          resultado. Fui ler.
        </p>
        <div className="c2-ficha">
          {FICHA.map((f) => (
            <div key={f.label} className="c2-ficha-cell">
              <span className="c2-ficha-label">{f.label}</span>
              <span className="c2-ficha-value">{f.value}</span>
            </div>
          ))}
        </div>
      </header>

      {/* ── FAIXA DE NÚMEROS ───────────────────────────────────── */}
      <section data-reveal data-screen-label="Números" className="c2-numeros-sec">
        <div className="c2-numeros">
          {NUMEROS.map((n) => (
            <div key={n.label} className="c2-numero">
              <div className={`c2-numero-fig${n.accent ? " accent" : ""}`}>{n.num}</div>
              <div className="c2-numero-label">{n.label}</div>
            </div>
          ))}
        </div>
        {/* obrigatória: sem ela, 670 e 739 se contradizem */}
        <p className="c2-numeros-nota">
          Acervo em 03/08/2026. Depois do lote novo são 739 questões ativas.
        </p>
      </section>

      {/* ── 00 · COMO UMA QUESTÃO NASCIA ───────────────────────── */}
      <section data-reveal data-screen-label="00 Como nascia" className="c2-sec">
        <div className="c2-head">
          <span className="c2-num">00</span>
          <span className="c2-kicker">Como uma questão nascia</span>
        </div>
        <h2 className="c2-h2">Três assistentes, cinco etapas, nenhuma regra escrita.</h2>
        <p className="c2-body">
          Cada questão passava por três modelos de IA diferentes, cada um com uma função. Um
          planejava o bloco. Outro escrevia as questões. Um terceiro revisava, de propósito um
          modelo diferente do que escreveu. Depois eu rodava o comando no banco e conferia na tela.
        </p>
        <p className="c2-body" style={{ marginBottom: 36 }}>
          O fluxo existia e funcionava. O que não existia era registro: as regras que evitavam
          defeito viviam nas conversas, e cada conversa nova começava do zero.
        </p>

        <div className="c2-painel c2-painel-strong">
          <div className="c2-painel-head">
            <span className="c2-painel-kicker">O fluxo de autoria · 5 etapas</span>
            <span className="c2-legend">
              <span className="c2-legend-item">
                <span className="c2-sq c2-sq-maq" />
                Máquina
              </span>
              <span className="c2-legend-item">
                <span className="c2-sq c2-sq-hum" />
                Humano
              </span>
            </span>
          </div>

          <div className="c2-fluxo">
            {FLUXO.map((e) => (
              <div key={e.step} className={`c2-etapa${e.num ? " humano" : ""}`}>
                <span className="c2-etapa-box">
                  {e.icon ? (
                    // via <img>: evita colisão de ids de gradiente e mantém o cache
                    <img
                      src={e.icon}
                      alt={e.alt}
                      width={30}
                      height={30}
                      className={e.mono ? "mono" : undefined}
                    />
                  ) : (
                    <span className="c2-etapa-num">{e.num}</span>
                  )}
                </span>
                <span className="c2-etapa-step">{e.step}</span>
                <span className="c2-etapa-title">{e.title}</span>
                <span className="c2-etapa-desc">{e.desc}</span>
              </div>
            ))}
          </div>

          <p className="c2-tese">
            As três inspeções do processo aconteciam <em>depois</em> da peça pronta. Nenhuma
            verificação durante a geração.
          </p>
          {/* obrigatória: são marcas de terceiros */}
          <p className="c2-nota">
            Os logos identificam as ferramentas usadas no processo. Não há vínculo, patrocínio ou
            endosso.
          </p>
        </div>
      </section>

      {/* ── 01 · O INSTRUMENTO ─────────────────────────────────── */}
      <section data-reveal data-screen-label="01 Instrumento" className="c2-sec">
        <div className="c2-head">
          <span className="c2-num">01</span>
          <span className="c2-kicker">O instrumento que ninguém planejou</span>
        </div>
        <h2 className="c2-h2">O console do banco guardava tudo. Eu só não tinha olhado.</h2>
        <p className="c2-body" style={{ marginBottom: 30 }}>
          O editor que eu uso registra cada comando executado no banco: data, hora, o comando
          inteiro e quantas linhas afetou. Ninguém planejou isso como instrumentação. Mas é o rastro
          completo de como cada questão nasceu, foi corrigida ou descartada.
        </p>

        <div className="c2-log">
          {LOG.map((l, i) => (
            <div key={i}>
              <div className="c2-log-comment">{l.comment}</div>
              <div className="c2-log-cmd">
                <span>
                  {l.pre}
                  <span className="hi">{l.hi}</span>
                  {l.post}
                </span>
                <span className="c2-log-rows">1 linha</span>
              </div>
            </div>
          ))}
        </div>

        <div className="c2-alerta">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4M12 17h.01" />
          </svg>
          <p>
            O instrumento é frágil. Em 04/08 o editor atualizou de versão e passou a escrever o log
            noutra pasta. A cópia congelada do estudo parou em 24/07. Se eu tivesse aceitado o
            primeiro resultado, teria concluído que a sessão nova não foi registrada.
          </p>
        </div>
      </section>

      {/* ── 02 · O QUE A MEDIÇÃO ACHOU ─────────────────────────── */}
      <section data-reveal data-screen-label="02 Medição" className="c2-sec">
        <div className="c2-head">
          <span className="c2-num">02</span>
          <span className="c2-kicker">O que a medição achou</span>
        </div>
        <h2 className="c2-h2" style={{ marginBottom: 30 }}>
          A linha de base não é baixa. E ela não melhora com o tempo.
        </h2>

        <div className="c2-painel c2-painel-strong c2-painel-graf">
          <div className="c2-painel-head">
            <span className="c2-painel-kicker">
              Acerto de primeira, por lote · ordem cronológica
            </span>
            <span className="c2-legend">
              <span className="c2-legend-item">
                <span className="c2-dot c2-dot-hist" />
                Histórico
              </span>
              <span className="c2-legend-item">
                <span className="c2-dot c2-dot-novo" />
                Lote novo
              </span>
            </span>
          </div>

          {/* O gráfico existe para mostrar AUSÊNCIA de tendência: sem seta de
              crescimento, sem gradiente, sem área preenchida sob a curva. */}
          <svg
            viewBox="0 0 822 330"
            style={{ width: "100%", height: "auto" }}
            role="img"
            aria-label="Gráfico de linha do acerto de primeira por lote; a série oscila entre 69 e 100 por cento sem tendência, com média de 81, e o lote novo fica em 84"
          >
            <line x1="52" y1="40" x2="52" y2="270" stroke="var(--n300)" strokeWidth="1" />
            <line x1="52" y1="270" x2="790" y2="270" stroke="var(--n300)" strokeWidth="1" />

            <text x="40" y="44" textAnchor="end" className="c2-ax">
              100
            </text>
            <text x="40" y="159" textAnchor="end" className="c2-ax">
              50
            </text>
            <text x="40" y="273" textAnchor="end" className="c2-ax">
              0
            </text>

            {/* a média é o elemento mais importante; o rótulo fica à esquerda
                para não colidir com o ponto do lote novo */}
            <line
              x1="52"
              y1={MEDIA_Y}
              x2="790"
              y2={MEDIA_Y}
              stroke="var(--accent-700)"
              strokeWidth="1.5"
              strokeDasharray="6 5"
              opacity="0.55"
            />
            <text x="60" y="76" textAnchor="start" className="c2-media">
              média 81%
            </text>

            <polyline
              points={polyline}
              fill="none"
              stroke="var(--n400)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <line
              x1={ultimo.x}
              y1={ultimo.y}
              x2={LOTE_NOVO.x}
              y2={LOTE_NOVO.y}
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeDasharray="3 6"
              strokeLinecap="round"
            />

            {SERIE.map((p) => (
              <circle key={p.d + p.x} cx={p.x} cy={p.y} r="4.5" fill="var(--n400)" />
            ))}
            <circle cx={LOTE_NOVO.x} cy={LOTE_NOVO.y} r="6.5" fill="var(--accent)" />

            {SERIE.map((p) => (
              <text key={`v${p.x}`} x={p.x} y={p.vy} textAnchor="middle" className="c2-val">
                {p.v}
              </text>
            ))}
            <text
              x={LOTE_NOVO.x}
              y={LOTE_NOVO.vy}
              textAnchor="middle"
              className="c2-val c2-val-novo"
            >
              {LOTE_NOVO.v}
            </text>

            {SERIE.map((p) => (
              <text key={`d${p.x}`} x={p.x} y="290" textAnchor="middle" className="c2-date">
                {p.d}
              </text>
            ))}
            <text x={LOTE_NOVO.x} y="290" textAnchor="middle" className="c2-date c2-date-novo">
              {LOTE_NOVO.d}
            </text>

            <text x="242" y="308" textAnchor="middle" className="c2-anot">
              ↑ o maior lote, 210 questões
            </text>
            <text x="774" y="308" textAnchor="middle" className="c2-anot c2-anot-novo">
              ↑ lote novo
            </text>
          </svg>

          <p className="c2-graf-legenda">
            Média do acervo: 81%. O lote novo entra na faixa, não acima dela.
          </p>
        </div>

        <div className="c2-painel c2-familias">
          <span className="c2-painel-kicker">As sete famílias · 355 correções</span>
          <div className="c2-fam-rows">
            {FAMILIAS.map((f) => (
              <div key={f.nome} className="c2-fam-row">
                <span className={`c2-fam-nome tone-${f.tone}`}>{f.nome}</span>
                <span className="c2-fam-track">
                  <span
                    className={`c2-fam-bar tone-${f.tone}`}
                    style={{ width: `${f.w}%`, opacity: f.op }}
                  />
                </span>
                <span className="c2-fam-val">{f.val}</span>
              </div>
            ))}
          </div>
          <p className="c2-fam-nota">
            Duas dessas não são defeito. <strong>Substituição integral</strong> e{" "}
            <strong>Classificação</strong> são trabalho planejado: troca deliberada de questão e
            mudança de taxonomia. Descontando as duas, o acerto sobe de 68,8% para 81%.
          </p>
        </div>
      </section>

      {/* ── 03 · O CASO QUE RESUME TUDO ────────────────────────── */}
      <section data-reveal data-screen-label="03 O caractere" className="c2-sec">
        <div className="c2-head">
          <span className="c2-num">03</span>
          <span className="c2-kicker">O caso que resume tudo</span>
        </div>
        <h2 className="c2-h2">Sete reescritas em dezesseis minutos, por um caractere.</h2>
        <p className="c2-body" style={{ marginBottom: 30 }}>
          15 de maio, questão 454. O símbolo de &quot;diferente&quot; não renderizava. O registro
          fala sozinho:
        </p>

        <div className="c2-caso-grid">
          <div className="c2-log c2-log-tl">
            {REESCRITAS.map((r) => (
              <div key={r.t} className={`c2-tl-row${r.ok ? " ok" : ""}`}>
                <span className="c2-tl-t">{r.t}</span>
                <span className="c2-tl-tent">{r.tent}</span>
                <span className={`c2-tl-res${r.ok ? " ok" : ""}`}>{r.ok ? "✓" : "✗"}</span>
              </div>
            ))}
          </div>

          <div className="c2-painel c2-segundo">
            <span className="c2-painel-kicker">O segundo caso · questão 305</span>
            <div className="c2-segundo-fig">
              10<span> reescritas</span>
            </div>
            <p className="c2-segundo-p">
              Em catorze minutos, todas do mesmo desenho. Nenhuma tocou a matemática. É a questão
              mais retrabalhada do acervo inteiro.
            </p>
          </div>
        </div>

        <p className="c2-body" style={{ margin: "30px 0 14px" }}>
          A solução das 16:59 foi um contorno no dado, e virou regra em todos os prompts seguintes,
          por sete semanas. Até 04/07, quando uma linha entrou no código e resolveu a causa:
        </p>
        <div className="c2-code">
          DOMPurify.sanitize(parte.replace(/≠/g, <span className="ok">&apos;&amp;ne;&apos;</span>))
        </div>

        <p className="c2-fecho-frase">
          Defeito que reaparece em todo lote é candidato a correção no processo, não a mais uma
          linha na regra. Levei 50 dias para ver isso.
        </p>
        <p className="c2-nota">
          Evidências · questão id 454, 15/05, 7 comandos em 16 min · correção na causa em 04/07,
          commit b78b258 · id 305: 10 reescritas em 14 min, 30/04
        </p>
      </section>

      {/* ── 04 · O ACHADO CENTRAL ──────────────────────────────── */}
      <section data-reveal data-screen-label="04 O achado" className="c2-sec">
        <div className="c2-head">
          <span className="c2-num">04</span>
          <span className="c2-kicker">O achado central</span>
        </div>
        <h2 className="c2-h2">Três regras pareciam se contradizer. Nenhuma se contradizia.</h2>
        <p className="c2-body" style={{ marginBottom: 32 }}>
          Ao comparar o que estava escrito com o que o registro guardou, o padrão apareceu, e sempre
          na mesma direção.
        </p>

        {/* primeiro par — a borda diferencia fonte (sálvia) de registro (terracota) */}
        <div className="c2-par">
          <div className="c2-card-fonte">
            <span className="c2-par-kicker fonte">O que a fonte dizia</span>
            <p className="c2-par-frase">
              &quot;Nunca \text&#123;&#125; <u>nas alternativas</u>&quot;
            </p>
            <span className="c2-par-pe fonte">escopo declarado</span>
          </div>
          <div className="c2-card-registro">
            <span className="c2-par-kicker registro">O que o registro guardou</span>
            <p className="c2-par-frase">&quot;Nunca usar \text&#123;&#125;&quot;</p>
            <span className="c2-par-pe registro">escopo perdido</span>
          </div>
        </div>

        <p className="c2-entre">
          O escopo caiu na transcrição, e a regra passou a proibir o que está em produção.{" "}
          <code>$\text&#123;tg&#125;(x)$</code> e <code>$\text&#123;sen&#125;(x)$</code> são uso
          legítimo: itálico em nome de função é que seria errado.
        </p>

        {/* segundo par */}
        <div className="c2-par">
          <div className="c2-card-fonte">
            <span className="c2-par-kicker fonte">O que a fonte dizia</span>
            <p className="c2-par-frase sm">
              &quot;O comando \infty quebra a renderização, use unicode&quot;
            </p>
            <p className="c2-par-frase sm" style={{ marginTop: 12 }}>
              &quot;Infinito sempre dentro do LaTeX: $+\infty$&quot;
            </p>
            <span className="c2-par-pe fonte">contextos diferentes</span>
          </div>
          <div className="c2-card-registro">
            <span className="c2-par-kicker registro">O que o registro guardou</span>
            <p className="c2-par-frase sm">
              &quot;duas versões contraditórias da mesma regra&quot;
            </p>
            <span className="c2-par-pe registro">chamado de reversão</span>
          </div>
        </div>

        <p className="c2-entre" style={{ marginBottom: 0 }}>
          As duas frases estão no mesmo arquivo, as duas são instruções minhas. Não se contradizem.
          Falam de contextos diferentes: fora da fórmula, unicode; dentro, o comando.
        </p>

        <p className="c2-fecho-frase">
          Nas três vezes, a regra estava certa. Quem errou foi o registro, e sempre na mesma
          direção: tornando a regra mais absoluta do que ela era.
        </p>
        {/* obrigatória */}
        <p className="c2-nota">
          Nota de precisão · no terceiro caso (a regra permissiva que levou o gerador a aplicar
          escape duplo por segurança), o efeito está medido no banco, mas a citação original não
          pôde ser reconferida: o documento daquela versão não foi preservado. Relato com efeito
          verificado, não citação.
        </p>
      </section>

      {/* ── 05 · A INTERVENÇÃO ─────────────────────────────────── */}
      <section data-reveal data-screen-label="05 Intervenção" className="c2-sec">
        <div className="c2-head">
          <span className="c2-num">05</span>
          <span className="c2-kicker">A intervenção</span>
        </div>
        <h2 className="c2-h2">Escrevi as regras. Uma sessão, quatro lotes, setenta questões.</h2>
        <p className="c2-body" style={{ marginBottom: 34 }}>
          O processo tinha cinco etapas e três inspeções, todas depois da peça pronta. Escrevi as
          regras num só lugar, com escopo obrigatório em cada uma, e produzi um lote novo seguindo o
          que estava escrito. Cronometrado.
        </p>

        <div className="c2-painel c2-cofre">
          <div className="c2-cofre-head">
            <img src="/icons/icon-obsidian.svg" alt="Obsidian" width={34} height={34} />
            <div>
              <div className="c2-cofre-title">O cofre de regras</div>
              <div className="c2-cofre-sub">11 notas · Obsidian</div>
            </div>
          </div>
          <p className="c2-cofre-p">Cada regra passou a ter quatro campos obrigatórios:</p>
          <div className="c2-pills">
            <span className="c2-pill">o que é</span>
            {/* a pílula preenchida é a informação: é o campo que faltava */}
            <span className="c2-pill fill">onde vale</span>
            <span className="c2-pill">por quê</span>
            <span className="c2-pill">
              onde <strong>não</strong> vale
            </span>
          </div>
          <p className="c2-cofre-nota">
            <strong>&quot;Onde vale&quot; é o campo que faltava.</strong> Foi a ausência dele que
            fez três regras certas parecerem contraditórias. É o achado do bloco 04.
          </p>
        </div>

        <div className="c2-lotes">
          {LOTES.map((l) => (
            <div key={l.kicker} className={`c2-lote ${l.tone}`}>
              <div className="c2-lote-kicker">{l.kicker}</div>
              <div className="c2-lote-pct">{l.pct}</div>
              <div className="c2-lote-desc">{l.desc}</div>
            </div>
          ))}
        </div>

        <div className="c2-painel c2-sessao">
          <span className="c2-painel-kicker">A sessão de 04/08 · bloco equação de 2º grau</span>
          <div className="c2-sessao-grid">
            {SESSAO.map((s) => (
              <div key={s.label} className="c2-sessao-cell">
                <span className="c2-sessao-label">{s.label}</span>
                <span className="c2-sessao-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="c2-fecho-frase">
          O gargalo nunca foi gerar a questão. Foi conferir na tela e atualizar o documento: 2 a 3
          minutos por versão, cinco vezes.
        </p>
        <p className="c2-nota">
          Evidências · 70 questões, ids 863–932 · vazão 49,0 q/h (histórico: 53,4) · 0,19 correções
          por questão
        </p>
      </section>

      {/* ── 06 · O DEFEITO NA TELA ─────────────────────────────── */}
      <section data-reveal data-screen-label="06 Na tela" className="c2-sec">
        <div className="c2-head">
          <span className="c2-num">06</span>
          <span className="c2-kicker">O defeito na tela</span>
        </div>
        <h2 className="c2-h2" style={{ marginBottom: 30 }}>
          É assim que o defeito chega no aluno.
        </h2>

        <div className="c2-figs">
          <figure className="c2-fig">
            <div className="c2-fig-frame">
              <div className="c2-fig-bed">
                <img
                  src="/casos/670-questoes/q39-formfeed.png"
                  alt="Questão 39: as três alternativas com fórmula aparecem em vermelho como ␌rac{2}{3}; a alternativa D, texto puro, aparece perfeita"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <figcaption>
              O comando de fração escrito com uma barra em vez de duas. O leitor do banco tratou{" "}
              <code>\f</code> como caractere de controle e comeu o começo. A alternativa D, que era
              texto puro, ficou perfeita. O defeito não é da questão, é do campo.
            </figcaption>
          </figure>

          <figure className="c2-fig">
            <div className="c2-fig-frame">
              <div className="c2-fig-bed">
                <img
                  src="/casos/670-questoes/q45-cifrao.png"
                  alt="Questão 45: o cifrão de R$ abriu um delimitador de LaTeX e meia frase do enunciado virou itálico embaralhado"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <figcaption>
              <code>R$</code> dentro de um texto com fórmula. O cifrão do real abriu um delimitador
              de LaTeX e engoliu meia frase. Um caractere.
            </figcaption>
          </figure>

          {/* a borda em accent sinaliza: é a que desmonta o próprio indicador */}
          <figure className="c2-fig">
            <div className="c2-fig-frame destaque">
              <div className="c2-fig-bed">
                <img
                  src="/casos/670-questoes/q1-frac-cru.png"
                  alt="Questão 1 de Frações: enunciado e as quatro alternativas exibem \frac cru, sem renderizar"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <figcaption>
              <strong>
                Esta é de abril e nunca recebeu nenhuma correção. Na minha métrica, ela conta como
                acerto de primeira.
              </strong>{" "}
              É a imagem que desmonta o próprio indicador.
            </figcaption>
          </figure>

          <figure className="c2-fig">
            <div className="c2-fig-frame">
              <div className="c2-fig-bed">
                <img
                  src="/casos/670-questoes/q36-q42-antes-depois.png"
                  alt="Depois e antes: à esquerda a questão 42, produzida depois da regra escrita; à direita a questão 36, com comando cru e parábola fora de escala"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <figcaption>
              À esquerda, outra questão do mesmo bloco, produzida depois da regra escrita. À
              direita, o enunciado com o comando cru e a parábola fora de escala.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 07 · O QUE EU NÃO POSSO AFIRMAR ────────────────────── */}
      <section data-reveal data-screen-label="07 Não afirmo" className="c2-sec">
        <div className="c2-limites">
          <span className="c2-painel-kicker c2-limites-kicker">O que eu não posso afirmar</span>
          <h2 className="c2-limites-h2">
            A parte mais útil de um levantamento é saber onde ele não alcança.
          </h2>
          <div className="c2-limites-cols">
            <div>
              <div className="c2-limites-label na">Não afirmo</div>
              <div className="c2-limites-list">
                {NAO_AFIRMO.map((n) => (
                  <p key={n.strong}>
                    <strong>{n.strong}</strong>
                    {n.rest}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="c2-limites-label falta">O que falta medir</div>
              <div className="c2-limites-list">
                {FALTA_MEDIR.map((n) => (
                  <p key={n.strong}>
                    <strong>{n.strong}</strong>
                    {n.rest}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="c2-limites-fecho">
            Este estudo se corrigiu três vezes, e cada correção derrubou um número que eu já tinha
            escrito. O primeiro era 68,8% de acerto de primeira, com dois lotes catastróficos e uma
            boa história de aprendizado.{" "}
            <strong>Estava errado, e ficaria de pé se eu não tivesse ido conferir.</strong>
          </p>
        </div>
      </section>

      {/* ── FECHO ──────────────────────────────────────────────── */}
      <section data-reveal data-screen-label="Fecho" className="c2-sec c2-fecho-sec">
        <div className="c2-fecho">
          <h2 className="c2-fecho-h2">É isso que eu quero fazer em operações.</h2>
          <p className="c2-fecho-p">
            Não tenho anos de fábrica. Tenho um processo real que eu medi com instrumento próprio, e
            cujos números eu derrubei quando não se sustentaram. Documentar defeito impede que ele
            volte; mas só se a regra disser onde vale.
          </p>
          <div className="c2-fecho-ctas">
            <a
              href="https://plataformamati.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver a plataforma
            </a>
            <Link href="/" className="btn btn-secondary">
              Voltar ao portfolio
            </Link>
          </div>
        </div>
        <div className="c2-footer">
          <span>Bernardo Paranhos · Estudo de caso 002 · As 670 questões · 2026</span>
          <span className="c2-footer-mark">✺</span>
        </div>
      </section>
    </div>
  );
}
