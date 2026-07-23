"use client";
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const cleanup: (() => void)[] = [];
    const aurora = document.getElementById("aurora");

    // Preenche o marquee até cobrir 2x a largura da tela (loop sempre preenchido).
    const fillMarquee = () => {
      const track = document.getElementById("marquee-track");
      if (!track) return;
      const base = track.children[0] as HTMLElement | undefined;
      if (!base) return;
      while (track.children.length > 1) track.removeChild(track.lastChild as Node);
      const w = Math.max(base.getBoundingClientRect().width, 1);
      const copies = Math.max(2, (Math.ceil(window.innerWidth / w) + 1) * 2);
      for (let i = 1; i < copies; i++) track.appendChild(base.cloneNode(true));
    };
    fillMarquee();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fillMarquee);
    window.addEventListener("resize", fillMarquee, { passive: true });
    // Refaz o marquee quando o idioma muda (o texto base é substituído pelo React).
    window.addEventListener("langchange", fillMarquee);
    cleanup.push(() => {
      window.removeEventListener("resize", fillMarquee);
      window.removeEventListener("langchange", fillMarquee);
    });

    // Menu hambúrguer (mobile): abre/fecha o dropdown, com a11y (aria-expanded),
    // fecha ao clicar num link, clicar fora ou apertar Esc. Roda sempre (mesmo com
    // reduced-motion) pois é navegação, não decoração.
    const nav = document.getElementById("siteNav");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (nav && navToggle && navLinks) {
      const setNav = (open: boolean) => {
        nav.classList.toggle("nav-open", open);
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      };
      const onToggle = (e: MouseEvent) => {
        e.stopPropagation();
        setNav(!nav.classList.contains("nav-open"));
      };
      const onLink = () => setNav(false);
      const onDocClick = (e: MouseEvent) => {
        if (nav.classList.contains("nav-open") && !nav.contains(e.target as Node)) setNav(false);
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setNav(false);
      };
      navToggle.addEventListener("click", onToggle);
      const links = Array.from(navLinks.querySelectorAll("a"));
      links.forEach((a) => a.addEventListener("click", onLink));
      document.addEventListener("click", onDocClick);
      document.addEventListener("keydown", onKey);
      cleanup.push(() => {
        navToggle.removeEventListener("click", onToggle);
        links.forEach((a) => a.removeEventListener("click", onLink));
        document.removeEventListener("click", onDocClick);
        document.removeEventListener("keydown", onKey);
      });
    }

    // Scroll-spy: destaca o link da seção que está no meio da viewport. É navegação,
    // não animação — por isso roda antes do early-return de reduced-motion.
    const spyLinks = Array.from(document.querySelectorAll<HTMLElement>("[data-spy]"));
    if (spyLinks.length) {
      const spyIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const id = (en.target as HTMLElement).id;
              spyLinks.forEach((a) =>
                a.classList.toggle("is-active", a.getAttribute("data-spy") === id),
              );
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      );
      spyLinks.forEach((a) => {
        const s = document.getElementById(a.getAttribute("data-spy")!);
        if (s) spyIO.observe(s);
      });
      cleanup.push(() => spyIO.disconnect());
    }

    // Respeita usuários que pedem menos movimento: nada de aurora, cursor custom,
    // tilt 3D ou reveals animados. O conteúdo aparece estático (CSS pausa marquee/blobs).
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      if (aurora) {
        aurora.style.transform = `translate(${window.innerWidth / 2}px, ${(
          window.innerHeight * 0.35
        ).toFixed(1)}px)`;
      }
      return () => cleanup.forEach((fn) => fn());
    }

    let tx = window.innerWidth / 2,
      ty = window.innerHeight * 0.35,
      cx = tx,
      cy = ty;
    const ring = document.getElementById("cur-ring");
    const dot = document.getElementById("cur-dot");
    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100,
      hoverLink = false;

    // rAF sob demanda: só roda enquanto há movimento (idle => para; reinicia no
    // próximo mousemove/scroll) e nunca com a aba em background.
    let raf = 0;
    let running = false;
    const startLoop = () => {
      if (running || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stopLoop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const loop = () => {
      const dxA = tx - cx,
        dyA = ty - cy;
      cx += dxA * 0.06;
      cy += dyA * 0.06;
      if (aurora) {
        aurora.style.transform = `translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px)`;
        const doc = document.documentElement;
        const p =
          doc.scrollHeight > window.innerHeight
            ? window.scrollY / (doc.scrollHeight - window.innerHeight)
            : 0;
        aurora.style.setProperty("--ah", (p * 70).toFixed(1) + "deg");
      }
      const dxR = mx - rx,
        dyR = my - ry;
      rx += dxR * 0.22;
      ry += dyR * 0.22;
      if (ring) {
        ring.style.transform = `translate(${rx.toFixed(1)}px, ${ry.toFixed(1)}px)`;
        const s = hoverLink ? 54 : 36;
        ring.style.width = s + "px";
        ring.style.height = s + "px";
        ring.style.margin = `-${s / 2}px 0 0 -${s / 2}px`;
      }
      if (dot) dot.style.transform = `translate(${mx}px, ${my}px)`;

      const idle =
        Math.abs(dxA) < 0.1 && Math.abs(dyA) < 0.1 && Math.abs(dxR) < 0.1 && Math.abs(dyR) < 0.1;
      if (idle) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement | null;
      hoverLink = !!(t && t.closest && t.closest("a, button, .btn"));
      if (ring) ring.style.opacity = "1";
      if (dot) dot.style.opacity = "1";
      startLoop();
    };
    const onLeaveDoc = () => {
      if (ring) ring.style.opacity = "0";
      if (dot) dot.style.opacity = "0";
    };
    const onScroll = () => startLoop();
    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveDoc);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    startLoop();

    if (window.matchMedia("(min-width: 961px)").matches) {
      document.body.style.cursor = "none";
    }

    cleanup.push(() => {
      stopLoop();
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeaveDoc);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      document.body.style.cursor = "";
    });

    // tilt 3D nos cards
    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(
          2,
        )}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-2px)`;
        el.style.transition = "transform .1s";
      };
      const leave = () => {
        el.style.transform = "";
        el.style.transition = "transform .45s cubic-bezier(.16,1,.3,1)";
      };
      el.addEventListener("mousemove", move, { passive: true });
      el.addEventListener("mouseleave", leave);
      cleanup.push(() => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    });

    // reveal no scroll
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
    revealEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition =
        "opacity .85s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1)";
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
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => io.observe(el));
    cleanup.push(() => io.disconnect());

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div id="aurora" />
      <div id="cur-ring" />
      <div id="cur-dot" />
    </>
  );
}
