"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  profile,
  ventures,
  achievements,
  projects,
  links,
  stats,
  pillars,
  now,
  toolbox,
} from "@/lib/content";
import { GlobalSpotlight, SpotlightDiv, SpotlightLink } from "@/components/Spotlight";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {/* ambient: subtle cyan + amber glows, no purple */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-cyan-400/[0.12] blur-[140px] aurora-1" />
        <div className="absolute right-[-10%] top-[15%] h-[520px] w-[520px] rounded-full bg-sky-400/[0.08] blur-[160px] aurora-2" />
        <div className="absolute bottom-[-25%] left-[15%] h-[580px] w-[580px] rounded-full bg-amber-300/[0.05] blur-[160px] aurora-3" />
      </div>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#05060a_80%)]" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-[0.06]" />

      <GlobalSpotlight />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 sm:py-12">
        <Nav />
        <Hero />
        <Marquee />
        <Now />
        <Stats />
        <Ventures />
        <Wins />
        <Projects />
        <Toolbox />
        <Philosophy />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

function Nav() {
  return (
    <nav className="mb-20 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-2 font-mono text-xs tracking-wider text-white/70">
        <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-cyan-300 to-sky-500" />
        <span>ab.</span>
      </a>
      <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl sm:flex">
        {[
          ["work", "Building"],
          ["wins", "Wins"],
          ["how", "How I work"],
          ["contact", "Contact"],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-full px-4 py-1.5 text-xs text-white/70 transition hover:bg-white/[0.08] hover:text-white"
          >
            {label}
          </a>
        ))}
      </div>
      <a
        href={profile.calendar}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
      >
        Book 15 min
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative grid items-center gap-14 pb-28 md:grid-cols-[1fr_auto] md:pb-36">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 backdrop-blur-xl"
        >
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Building from San Diego · B.S. Bioengineering, UCSD ’{profile.expectedGrad.slice(-2)}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl"
        >
          <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            {profile.name}.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          I build things. Currently:{" "}
          <a
            href="https://strvx.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition hover:decoration-cyan-200"
          >
            strvX
          </a>
          , AI that handles the busywork for small businesses so owners can actually run them. On
          the side, I research <span className="text-white">surgical robotics</span> at UC San Diego.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile.calendar}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-200/0 via-cyan-200/50 to-cyan-200/0 transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book 15 minutes</span>
            <span className="relative transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/90 backdrop-blur-xl transition hover:bg-white/[0.08]"
          >
            {profile.email}
          </a>
        </motion.div>
      </div>

      {/* portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative float"
      >
        <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-cyan-400/30 via-sky-400/20 to-amber-300/10 blur-2xl" />
        <div className="relative h-[380px] w-[300px] overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-2 backdrop-blur-xl">
          <Image
            src={profile.headshot}
            alt={profile.name}
            width={600}
            height={800}
            className="h-full w-full rounded-2xl object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-2 rounded-2xl bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              Founder · Researcher
            </div>
            <div className="mt-1 text-lg font-semibold">Jacobs Scholar</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [
    "FTC World Champion · 1st of 7,100+",
    "Jacobs Scholar · UC San Diego",
    "Patent Pending · Johns Hopkins",
    "Pending Nature publication",
    "U.S. Youth Delegate · UN conference",
    "San Diego's 25 Most Remarkable Teens",
  ];
  return (
    <section className="relative mb-24 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060a] to-transparent" />
      <div className="flex w-max marquee gap-12 whitespace-nowrap px-6 font-mono text-xs uppercase tracking-[0.2em] text-white/55">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            <span>{it}</span>
            <span className="text-cyan-300/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Now() {
  return (
    <section className="mb-24">
      <SectionHeader kicker="00 · Right now" title="What I'm working on this week" />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {now.map((line, i) => (
          <SpotlightDiv
            key={line}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl"
          >
            <span className="mt-1 font-mono text-[10px] text-cyan-300/70">0{i + 1}</span>
            <p className="text-sm leading-relaxed text-white/75">{line}</p>
          </SpotlightDiv>
        ))}
      </div>
    </section>
  );
}

function Toolbox() {
  return (
    <section className="mb-28">
      <SectionHeader kicker="04 · Toolbox" title="Tech I reach for" />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(toolbox).map(([group, items]) => (
          <SpotlightDiv
            key={group}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl"
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-300/80">
              {group}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/75"
                >
                  {it}
                </span>
              ))}
            </div>
          </SpotlightDiv>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mb-28 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
      <div className="grid grid-cols-2 divide-white/10 sm:grid-cols-4 sm:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="p-6">
            <div className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-white/50">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ventures() {
  return (
    <section id="work" className="mb-28">
      <SectionHeader kicker="01 · What I'm building" title="Ventures & research" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {ventures.map((v) => {
          const content = (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{v.name}</h3>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/50">
                    {v.role}
                  </div>
                </div>
                {v.href ? (
                  <span className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white">
                    ↗
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/70">{v.blurb}</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.04] px-3 py-1 text-[11px] text-cyan-200/90">
                <span className="relative inline-flex h-1 w-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1 w-1 rounded-full bg-emerald-400" />
                </span>
                {v.status}
              </div>
            </>
          );
          const cardCls =
            "group block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.04]";
          return v.href ? (
            <SpotlightLink
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className={cardCls}
            >
              {content}
            </SpotlightLink>
          ) : (
            <SpotlightDiv key={v.name} className={cardCls}>
              {content}
            </SpotlightDiv>
          );
        })}
      </div>
    </section>
  );
}

function Wins() {
  return (
    <section id="wins" className="mb-28">
      <SectionHeader kicker="02 · Signals" title="Wins & recognition" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {achievements.map((a) => (
          <SpotlightDiv
            key={a.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition hover:border-white/25"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold">{a.title}</h3>
              <span className="shrink-0 font-mono text-xs text-white/50">{a.year}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{a.detail}</p>
          </SpotlightDiv>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="mb-28">
      <SectionHeader kicker="03 · Shipped" title="Selected projects" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <SpotlightDiv
            key={p.name}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl transition hover:border-white/25"
          >
            <h4 className="font-medium">{p.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </SpotlightDiv>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="how" className="mb-28">
      <SectionHeader kicker="05 · Operating system" title="How I work" />
      <p className="mt-6 max-w-2xl text-white/60">
        Six years captaining FTC 11212, rookie season to World Champions (1st of 7,100+). A few
        things that stuck.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {pillars.map((p, i) => (
          <SpotlightDiv
            key={p.k}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 font-mono text-xs text-cyan-300/80">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.v}</p>
              </div>
            </div>
          </SpotlightDiv>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl sm:p-16"
    >
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-amber-300/15 blur-3xl" />
      <div className="relative">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
          Let's talk
        </div>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Have an idea, a deal, or want to jam on{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-sky-200 to-amber-200 bg-clip-text text-transparent">
            AI and robotics?
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-white/70">
          Founder intros, research collabs, wild ideas. I reply to all of them.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <SpotlightLink
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              <span className="text-xs uppercase tracking-wider text-white/50">{l.label}</span>
              <span className="font-mono text-sm text-white/90">
                {l.value} <span className="text-white/40">↗</span>
              </span>
            </SpotlightLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[11px] text-white/40">
      <span>© {new Date().getFullYear()} Alex Battikha</span>
      <span>San Diego → everywhere</span>
    </footer>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">{kicker}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
    </div>
  );
}
