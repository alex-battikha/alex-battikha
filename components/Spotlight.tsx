"use client";

import { useEffect, useRef } from "react";

/** Global mouse spotlight. Writes CSS vars to <html>. */
export function GlobalSpotlight() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div className="cursor-spotlight" aria-hidden />;
}

function useCardSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--card-mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--card-my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return ref;
}

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export function SpotlightDiv({
  className = "",
  children,
  ...rest
}: BaseProps & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useCardSpotlight<HTMLDivElement>();
  return (
    <div ref={ref} className={`spotlight-card ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function SpotlightLink({
  className = "",
  children,
  href,
  ...rest
}: BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useCardSpotlight<HTMLAnchorElement>();
  return (
    <a ref={ref} href={href} className={`spotlight-card ${className}`} {...rest}>
      {children}
    </a>
  );
}
