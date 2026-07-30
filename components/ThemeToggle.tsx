"use client";

import { useEffect, useState } from "react";

const SUN = (size: number) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const MOON = (size: number) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

// Switch de tema. O visual é dirigido por CSS a partir de [data-theme] no <html>
// (definido pelo script bloqueante do layout, antes da hidratação — sem flash).
// O JS só troca o atributo, persiste em 'bp-theme' e atualiza aria-checked.
export default function ThemeToggle({ iconSize = 15 }: { iconSize?: number }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("bp-theme", next);
    } catch {
      /* Safari private mode */
    }
    setDark(next === "dark");
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Alternar tema claro e escuro"
      className="theme-toggle"
      onClick={toggle}
    >
      <span className="theme-thumb" aria-hidden="true" />
      <span className="theme-sun">{SUN(iconSize)}</span>
      <span className="theme-moon">{MOON(iconSize)}</span>
    </button>
  );
}
