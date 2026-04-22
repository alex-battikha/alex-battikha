"use client";

import { useEffect, useState } from "react";

const CACHE_KEY = "ab.shipped.v1";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

type Cached = { ts: number; iso: string; repo: string };

function relative(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.round(diff / 60_000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 14) return `${days}d ago`;
  const weeks = Math.round(days / 7);
  if (weeks < 8) return `${weeks}w ago`;
  const months = Math.round(days / 30);
  return `${months}mo ago`;
}

export function ShippedBadge({ user = "alex-battikha" }: { user?: string }) {
  const [data, setData] = useState<Cached | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cached = readCache();
    if (cached) setData(cached);

    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) return;

    let cancelled = false;
    fetch(`https://api.github.com/users/${user}/events/public`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((events: Array<{ type: string; repo?: { name?: string }; created_at?: string }>) => {
        if (cancelled) return;
        const push = events.find((e) => e.type === "PushEvent" && e.created_at);
        if (!push?.created_at) {
          setError(true);
          return;
        }
        const next: Cached = {
          ts: Date.now(),
          iso: push.created_at,
          repo: push.repo?.name?.split("/").pop() ?? "repo",
        };
        setData(next);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(next));
        } catch {}
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (error && !data) return null;
  if (!data) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] text-white/40 backdrop-blur-xl">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30" />
        Loading shipping signal…
      </span>
    );
  }
  return (
    <a
      href={`https://github.com/${user}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/65 backdrop-blur-xl transition hover:border-white/20 hover:text-white"
    >
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/80 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      Last shipped {relative(data.iso)} · {data.repo}
    </a>
  );
}

function readCache(): Cached | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Cached;
  } catch {
    return null;
  }
}
