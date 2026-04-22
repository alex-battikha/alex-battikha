"use client";

import { useEffect, useState } from "react";

function partsForPT() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const hourFmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    hour12: false,
  });
  const time = fmt.format(new Date());
  const hour = parseInt(hourFmt.format(new Date()), 10);
  let phase: string;
  if (hour < 5) phase = "Burning the midnight oil from San Diego";
  else if (hour < 12) phase = "Good morning from San Diego";
  else if (hour < 17) phase = "Good afternoon from San Diego";
  else if (hour < 21) phase = "Good evening from San Diego";
  else phase = "Late shift in San Diego";
  return { time, phase };
}

export function Greeting() {
  const [state, setState] = useState<{ time: string; phase: string } | null>(null);

  useEffect(() => {
    setState(partsForPT());
    const id = window.setInterval(() => setState(partsForPT()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (!state) return null;
  return (
    <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:inline">
      · {state.phase} · {state.time} PT
    </span>
  );
}
