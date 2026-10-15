import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { PointerEvent } from "react";
import { GitHubIcon } from "@/Components/ui/BrandIcons";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import { links, projects, type Project } from "@/data/content";

const backgrounds: Record<Project["mock"], string> = {
  dashboard: "radial-gradient(circle at 20% 20%, rgb(var(--a1)), transparent 55%), radial-gradient(circle at 85% 80%, rgb(var(--a2)), transparent 50%), #111528",
  api: "radial-gradient(circle at 50% 0%, rgb(var(--a2)), transparent 60%), radial-gradient(circle at 100% 100%, rgb(var(--a3)), transparent 45%), #140F24",
  vision: "radial-gradient(circle at 80% 15%, rgb(var(--a3)), transparent 50%), radial-gradient(circle at 10% 90%, rgb(var(--a1)), transparent 55%), #0D1B1E",
  gesture: "radial-gradient(circle at 20% 80%, rgb(var(--a3)), transparent 50%), radial-gradient(circle at 85% 20%, rgb(var(--a2)), transparent 55%), #101A1F",
  mobile: "radial-gradient(circle at 15% 15%, rgb(var(--a2)), transparent 55%), radial-gradient(circle at 90% 90%, rgb(var(--a1)), transparent 50%), #15112A",
};

const Bar = ({ className = "" }: { className?: string }) => <b className={`block rounded-md bg-white/15 ${className}`} />;

/** Abstract UI sketch used when a project has no screenshot. Decorative only. */
const Mock = ({ kind }: { kind: Project["mock"] }) => {
  if (kind === "api")
    return (
      <div className="absolute inset-x-4 top-11 space-y-1 font-mono text-[11px] leading-relaxed text-white/80">
        <p><span className="text-emerald-300">POST</span> /auth/token</p>
        <p className="opacity-60">→ 200 {"{ access_token, tenant }"}</p>
        <p><span className="text-sky-300">GET</span>&nbsp; /stock?tenant=OLEO</p>
        <p className="opacity-60">→ 200 [ 128 items ]</p>
        <p><span className="text-amber-300">PUT</span>&nbsp; /stock/42/move</p>
        <p className="opacity-60">→ 204</p>
      </div>
    );
  if (kind === "vision")
    return (
      <div className="absolute inset-x-4 bottom-4 top-11 rounded-lg border border-dashed border-white/40">
        <div className="absolute left-[18%] top-[22%] h-[45%] w-[30%] rounded border-2 border-emerald-300">
          <span className="absolute -top-5 left-0 rounded bg-emerald-300 px-1 font-mono text-[10px] text-black">object 0.94</span>
        </div>
        <div className="absolute right-[12%] top-[35%] h-[40%] w-[26%] rounded border-2 border-rose-300 bg-rose-300/10" />
      </div>
    );
  if (kind === "gesture") {
    // Hand landmarks: wrist + five finger chains, plus the predicted letter.
    const fingers = [[30, 62, 22, 50, 16, 40], [42, 44, 42, 30, 42, 18], [52, 44, 54, 28, 55, 15], [61, 46, 65, 33, 68, 22], [68, 52, 76, 44, 82, 37]];
    return (
      <div className="absolute inset-x-4 bottom-4 top-11 flex items-center justify-between">
        <svg viewBox="0 0 100 100" className="h-full" style={{ stroke: "#6ee7b7" }} strokeWidth="1.2">
          {fingers.map(([x1, y1, x2, y2, x3, y3], i) => (
            <g key={i}>
              <polyline points={`48,85 ${x1},${y1} ${x2},${y2} ${x3},${y3}`} fill="none" />
              {[[x1, y1], [x2, y2], [x3, y3]].map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#fff" stroke="none" />)}
            </g>
          ))}
          <circle cx="48" cy="85" r="2.5" fill="#fff" stroke="none" />
        </svg>
        <div className="mr-2 grid h-16 w-16 place-items-center rounded-xl border border-white/30 bg-black/30 text-3xl font-semibold text-white">B</div>
      </div>
    );
  }
  if (kind === "mobile")
    return (
      <div className="absolute inset-x-4 bottom-0 top-10 flex items-end justify-center gap-3">
        <div className="h-[92%] w-[30%] space-y-2 rounded-t-2xl border border-white/25 bg-black/20 p-2">
          <Bar className="h-3" /><Bar className="h-10" /><Bar className="h-10 opacity-60" />
        </div>
        <div className="hidden h-[80%] w-[52%] grid-cols-3 gap-2 rounded-t-xl border border-white/25 bg-black/20 p-2 sm:grid">
          {Array.from({ length: 6 }, (_, i) => <Bar key={i} className="h-full" />)}
        </div>
      </div>
    );
  return (
    <div className="absolute inset-x-4 bottom-4 top-11 grid grid-cols-3 grid-rows-[14px_1fr_1fr] gap-2">
      <Bar className="col-span-2" /><Bar className="opacity-40" />
      {Array.from({ length: 6 }, (_, i) => <Bar key={i} />)}
    </div>
  );
};

const Preview = ({ project }: { project: Project }) => (
  <div
    className={`relative overflow-hidden rounded-[14px] border border-line ${project.featured ? "aspect-video lg:aspect-auto lg:flex-1" : "aspect-[16/10]"}`}
    style={{ background: backgrounds[project.mock] }}
  >
    <div className="absolute inset-x-0 top-0 z-10 flex h-[26px] items-center gap-1.5 bg-black/25 px-2.5 backdrop-blur" aria-hidden="true">
      <i className="h-2 w-2 rounded-full bg-white/35" /><i className="h-2 w-2 rounded-full bg-white/35" /><i className="h-2 w-2 rounded-full bg-white/35" />
    </div>
    {project.image ? (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top pt-[26px] transition-transform duration-700 group-hover:scale-[1.03]"
      />
    ) : (
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]" aria-hidden="true">
        <Mock kind={project.mock} />
      </div>
    )}
  </div>
);

const tilt = (e: PointerEvent<HTMLElement>) => {
  if (e.pointerType !== "mouse" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
  el.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
};
const untilt = (e: PointerEvent<HTMLElement>) => {
  e.currentTarget.style.transform = "";
};

const ProjectCard = ({ project }: { project: Project }) => (
  <article
    onPointerMove={tilt}
    onPointerLeave={untilt}
    className="glass spot group flex h-full flex-col p-3 transition-transform duration-300 ease-out"
  >
    <Preview project={project} />
    <div className={`flex flex-col p-4 ${project.featured ? "" : "flex-1"}`}>
      <h3 className={`font-semibold ${project.featured ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.tags.map((t) => <li key={t} className="chip">{t}</li>)}
      </ul>
      <div className="mt-5 flex gap-4 text-sm font-medium">
        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
          <GitHubIcon /> Code <span className="sr-only">for {project.title} on GitHub</span>
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
            Live <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" /><span className="sr-only">demo of {project.title}</span>
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" className="py-24 sm:py-32">
    <div className="container-page">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="03 — Projects" title="Selected work." />
        <Reveal>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-muted transition hover:text-ink">
            <GitHubIcon /> All repositories →
          </a>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.title} delay={(i % 3) * 0.1} className={p.featured ? "md:col-span-2 lg:row-span-2" : undefined}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
