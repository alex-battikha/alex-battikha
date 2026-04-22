"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(t: Theme) {
  const html = document.documentElement;
  html.setAttribute("data-theme", t);
  html.classList.toggle("dark", t === "dark");
  html.classList.toggle("light", t === "light");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = (localStorage.getItem("ab.theme") as Theme | null) ?? "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  if (!theme) {
    return <div className="h-9 w-9" aria-hidden />;
  }

  const next: Theme = theme === "dark" ? "light" : "dark";
  const toggle = () => {
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem("ab.theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 backdrop-blur-xl transition hover:bg-white/[0.08] dark:text-white/80"
    >
      {theme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
