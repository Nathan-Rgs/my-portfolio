import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useState, type CSSProperties } from "react";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import SpotlightCard from "@/Components/ui/SpotlightCard";
import { beamNodes, skills, stack } from "@/data/content";

const rows = [50, 160, 270];
const pathFor = (x: number, y: number) =>
  y === 160 ? `M${x} 160 L 400 160` : `M${x} ${y} C ${x === 150 ? 280 : 520} ${y}, ${x === 150 ? 280 : 520} 160, 400 160`;

/** Animated-beam diagram: client techs on the left, server techs on the right, flowing into one core. */
const BeamDiagram = () => (
  <svg viewBox="0 0 800 320" className="h-auto w-full" role="img" aria-label={`Diagram connecting ${[...beamNodes.left, ...beamNodes.right].join(", ")} to a single core`}>
    <defs>
      <linearGradient id="beam-l" x1="0" x2="1">
        <stop offset="0" style={{ stopColor: "rgb(var(--a1))" }} stopOpacity="0" />
        <stop offset=".5" style={{ stopColor: "rgb(var(--a2))" }} />
        <stop offset="1" style={{ stopColor: "rgb(var(--a3))" }} />
      </linearGradient>
      <linearGradient id="beam-r" x1="1" x2="0">
        <stop offset="0" style={{ stopColor: "rgb(var(--a3))" }} stopOpacity="0" />
        <stop offset=".5" style={{ stopColor: "rgb(var(--a2))" }} />
        <stop offset="1" style={{ stopColor: "rgb(var(--a1))" }} />
      </linearGradient>
      <radialGradient id="beam-core">
        <stop offset="0" style={{ stopColor: "rgb(var(--a2))" }} stopOpacity=".55" />
        <stop offset="1" style={{ stopColor: "rgb(var(--a2))" }} stopOpacity="0" />
      </radialGradient>
    </defs>
    {(["left", "right"] as const).map((side) => {
      const x = side === "left" ? 150 : 650;
      return beamNodes[side].map((label, i) => {
        const d = pathFor(x, rows[i]);
        return (
          <g key={label}>
            <path d={d} fill="none" style={{ stroke: "rgb(var(--line))" }} strokeWidth="1.5" />
            <path
              d={d}
              fill="none"
              strokeWidth="2.2"
              strokeLinecap="round"
              stroke={`url(#beam-${side === "left" ? "l" : "r"})`}
              className="beam"
              style={{ "--d": `${(side === "left" ? 0 : 0.3) + i * 0.6}s` } as CSSProperties}
            />
            <rect x={x - 110 + (side === "left" ? 0 : 100)} y={rows[i] - 22} width="120" height="44" rx="12" style={{ fill: "rgb(var(--surface))", stroke: "rgb(var(--line))" }} />
            <text x={x - 50 + (side === "left" ? 0 : 100)} y={rows[i] + 5} textAnchor="middle" style={{ fill: "rgb(var(--ink))" }} fontSize="13" className="font-mono">
              {label}
            </text>
          </g>
        );
      });
    })}
    <circle cx="400" cy="160" r="90" fill="url(#beam-core)" />
    <rect x="355" y="115" width="90" height="90" rx="24" style={{ fill: "rgb(var(--surface))" }} stroke="url(#beam-l)" strokeWidth="1.5" />
    <text x="400" y="168" textAnchor="middle" fontWeight="700" fontSize="26" style={{ fill: "rgb(var(--ink))" }} className="font-sans">
      NR
    </text>
  </svg>
);

const Stack = () => (
  <section id="stack" className="relative overflow-hidden border-y border-line py-24 sm:py-32">
    <div className="grid-bg absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
    <div className="container-page">
      <SectionHeading
        center
        eyebrow="02 — Skills & Stack"
        title="From database to interface."
        description="End-to-end applications, from database architecture and APIs / microservices to the client interface."
      />

      {/* Diagram text is unreadable below sm; the cards + marquee carry the content there. */}
      <Reveal delay={0.1} className="glass mt-14 hidden p-8 sm:block">
        <BeamDiagram />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 3) * 0.1}>
            <SpotlightCard className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-xs uppercase text-muted">{s.since}</p>
                {s.academic && <span className="chip !border-a2/50 !text-ink">Academic</span>}
              </div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 flex-1 text-muted">{s.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${s.title} tools`}>
                {s.tools.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>

      <TechMarquee />
    </div>
  </section>
);

/** Infinite tech marquee with an explicit pause control (WCAG 2.2.2: moving content > 5s). */
const TechMarquee = () => {
  const [paused, setPaused] = useState(false);
  const Icon = paused ? PlayIcon : PauseIcon;
  return (
    <div className="mt-10 flex items-center gap-3">
      <div className="marquee min-w-0 flex-1 overflow-hidden">
        <ul className="marquee-track" style={paused ? { animationPlayState: "paused" } : undefined} aria-label="Technologies">
          {[...stack, ...stack].map((t, i) => (
            <li key={i} className="chip" aria-hidden={i >= stack.length || undefined}>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Play technology list animation" : "Pause technology list animation"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-muted transition hover:text-ink"
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Stack;
