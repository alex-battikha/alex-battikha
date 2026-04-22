"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function Konami() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let buffer: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      buffer = [...buffer, k].slice(-SEQUENCE.length);
      if (buffer.length === SEQUENCE.length && buffer.every((v, i) => v === SEQUENCE[i])) {
        setActive(true);
        buffer = [];
        window.setTimeout(() => setActive(false), 4200);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 70 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 2.4 + Math.random() * 1.6,
        rotate: Math.random() * 720 - 360,
        color: ["#67e8f9", "#38bdf8", "#fcd34d", "#34d399", "#fff"][i % 5],
      })),
    []
  );

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          {particles.map((p) => (
            <span
              key={p.id}
              className="konami-particle"
              style={
                {
                  left: `${p.left}%`,
                  background: p.color,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`,
                  ["--rot" as string]: `${p.rotate}deg`,
                } as React.CSSProperties
              }
            />
          ))}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-[#0a0c12]/90 px-10 py-8 text-center shadow-2xl backdrop-blur-xl"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-cyan-300/80">
              FTC 11212 · The Clueless
            </div>
            <div className="mt-3 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-transparent">
              World Champions
            </div>
            <div className="mt-2 text-sm text-white/60">1st of 7,100+ teams · Houston 2024</div>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-white/35">
              You found the konami code 🤝
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
