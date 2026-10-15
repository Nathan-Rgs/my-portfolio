import { experience, links, profile } from "@/data/content"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import type { CSSProperties } from "react"

// Hero entrance uses CSS (.hero-in) rather than framer-motion so it starts before
// hydration and doesn't delay LCP.
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties

const lead = ["I", "build", "fast,", "reliable", "web", "products"]
const accent = ["end", "to", "end."]
const wordDelay = (i: number) => delay(0.15 + i * 0.08)

const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
  >
    <div className="aurora -z-10" aria-hidden="true">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
    </div>
    <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />

    <div className="container-page">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
        <div>
          <p
            className="hero-in chip inline-flex items-center gap-2.5 !px-3 !py-1.5 !text-ink"
            style={delay(0.05)}
          >
            <span className="pulse-dot" aria-hidden="true" /> Open to new
            opportunities
          </p>

          <h1 className="mt-6 text-display font-semibold">
            {lead.map((w, i) => (
              <span key={w}>
                <span className="hero-in inline-block" style={wordDelay(i)}>
                  {w}
                </span>{" "}
              </span>
            ))}
            {/* Keep "— end to end." together on one line */}
            <span className="whitespace-nowrap">
              {accent.map((w, i) => (
                <span key={w}>
                  <span
                    className="hero-in grad-text inline-block"
                    style={wordDelay(lead.length + i)}
                  >
                    {w}
                  </span>
                  {i < accent.length - 1 && " "}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="hero-in mt-6 max-w-xl text-lg text-muted"
            style={delay(0.9)}
          >
            <span className="font-medium text-ink">{profile.role}</span> ·
            TypeScript · Vue · React · Node
          </p>
          <p
            className="hero-in mt-2 font-mono text-sm text-muted"
            style={delay(1)}
          >
            Now at Omie · Ex-Fraunhofer IPT (Germany) · {profile.location}
          </p>

          <div className="hero-in mt-9 flex flex-wrap gap-3" style={delay(1.1)}>
            <a href="#contact" id="get_in_touch_hero" className="cta">
              <span>
                Get in touch <span aria-hidden="true">→</span>
              </span>
            </a>
            <a href={links.cv} id="download_cv_hero" className="btn-ghost">
              <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />{" "}
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="ring-glow h-56 w-56 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={352}
                height={352}
                priority
                sizes="(min-width: 1024px) 352px, (min-width: 640px) 288px, 224px"
                className="h-full w-full rounded-full border-4 border-bg object-cover"
              />
            </div>
            <div
              className="hero-in glass absolute -bottom-2 -left-4 !rounded-2xl px-4 py-3 sm:-left-10"
              style={delay(0.6)}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Experience
              </p>
              <p className="text-xl font-semibold">
                {profile.yearsOfExperience} years{" "}
                <span className="text-sm font-normal text-muted">building</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-in mt-20 flex flex-col gap-5 lg:flex-row lg:items-center"
        style={delay(1.3)}
      >
        <p className="eyebrow shrink-0 text-muted">── Worked at</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Companies">
          {experience.slice(0, 4).map((c) => (
            <li
              key={c.company}
              className="font-semibold uppercase tracking-wide text-muted transition hover:text-ink"
            >
              {c.company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Hero
