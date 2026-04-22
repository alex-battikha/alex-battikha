"use client";

import { useEffect, useMemo, useState } from "react";
import { profile } from "@/lib/content";

type Command = {
  id: string;
  label: string;
  hint: string;
  group: "Navigate" | "Open" | "Action";
  shortcut?: string;
  run: () => void;
};

export function CommandPalette({
  onCopyEmail,
}: {
  onCopyEmail: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const commands = useMemo<Command[]>(
    () => [
      { id: "top", label: "Top", hint: "Hero", group: "Navigate", run: () => scrollTo("top") },
      { id: "work", label: "What I'm building", hint: "Ventures", group: "Navigate", run: () => scrollTo("work") },
      { id: "wins", label: "Wins", hint: "Recognition", group: "Navigate", run: () => scrollTo("wins") },
      { id: "how", label: "How I work", hint: "Operating system", group: "Navigate", run: () => scrollTo("how") },
      { id: "contact", label: "Contact", hint: "Let's talk", group: "Navigate", run: () => scrollTo("contact") },
      { id: "strvx", label: "Open strvX", hint: "strvx.com", group: "Open", run: () => openUrl("https://strvx.com") },
      { id: "cal", label: "Book 15 minutes", hint: profile.calendar.replace("https://", ""), group: "Open", run: () => openUrl(profile.calendar) },
      { id: "github", label: "GitHub", hint: "@alex-battikha", group: "Open", run: () => openUrl(profile.github) },
      { id: "linkedin", label: "LinkedIn", hint: "/in/alex-battikha", group: "Open", run: () => openUrl(profile.linkedin) },
      { id: "copy-email", label: "Copy email", hint: profile.email, group: "Action", shortcut: "⌘E", run: onCopyEmail },
      { id: "email", label: "Email Alex", hint: profile.email, group: "Action", run: () => openUrl(`mailto:${profile.email}`) },
    ],
    [onCopyEmail]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [query, commands]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (meta && e.key.toLowerCase() === "e") {
        e.preventDefault();
        onCopyEmail();
        return;
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCopyEmail]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[active];
      if (cmd) {
        cmd.run();
        setOpen(false);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh]"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        role="dialog"
        aria-label="Command palette"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#0a0c12]/95 shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <span className="text-white/40">⌘</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onListKey}
            placeholder="Search or jump to…"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
          />
          <kbd className="rounded border border-white/15 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-white/55">
            ESC
          </kbd>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto py-2" onKeyDown={onListKey}>
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-xs text-white/40">No matches</li>
          )}
          {filtered.map((c, i) => (
            <li key={c.id}>
              <button
                onMouseEnter={() => setActive(i)}
                onClick={() => {
                  c.run();
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition ${
                  i === active ? "bg-white/[0.06] text-white" : "text-white/75 hover:bg-white/[0.04]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-300/70">
                    {c.group}
                  </span>
                  <span>{c.label}</span>
                </span>
                <span className="flex items-center gap-3 text-xs text-white/40">
                  <span className="hidden sm:inline">{c.hint}</span>
                  {c.shortcut && (
                    <kbd className="rounded border border-white/15 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-white/55">
                      {c.shortcut}
                    </kbd>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 font-mono text-[10px] text-white/35">
          <span>↑↓ navigate · ↵ select</span>
          <span>⌘K to toggle</span>
        </div>
      </div>
    </div>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
