import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowUpRightIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import SpotlightCard from "@/Components/ui/SpotlightCard";
import { education, links, profile, services } from "@/data/content";

const serviceIcons = [CodeBracketSquareIcon, RocketLaunchIcon, CommandLineIcon];
const tabs = ["Profile", "Education"] as const;
type Tab = (typeof tabs)[number];

const Profile = () => (
  <>
    <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <div>
        <p className="text-lg leading-relaxed text-muted sm:text-xl">{profile.summary}</p>
        <blockquote className="mt-8 border-l-2 border-a2/60 pl-5 text-muted">
          <p>“{profile.quote.text}”</p>
          <footer className="mt-2 font-mono text-sm text-ink">— {profile.quote.author}</footer>
        </blockquote>
        <a href={links.cv} id="download_cv_about" className="btn-ghost mt-8">
          <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" /> Download CV
        </a>
      </div>
      <div className="relative mx-auto w-full max-w-sm">
        <div className="glass overflow-hidden p-2">
          <Image
            src={profile.aboutPhoto}
            alt={`${profile.name} in London`}
            width={500}
            height={500}
            sizes="(min-width: 1024px) 384px, 90vw"
            className="aspect-square w-full rounded-[14px] object-cover"
          />
        </div>
        <a
          href={links.aws}
          target="_blank"
          rel="noopener noreferrer"
          id="aws_certification_about"
          aria-label="AWS Certified Cloud Practitioner credential (opens in a new tab)"
          className="glass absolute -bottom-4 -right-2 !rounded-2xl px-4 py-3 transition hover:ring-2 hover:ring-ink/40 sm:-right-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Certified</p>
          <p className="text-xl font-semibold">
            AWS <span className="text-sm font-normal text-muted">Cloud Practitioner</span>
          </p>
        </a>
      </div>
    </div>

    <ul className="mt-14 grid gap-4 md:grid-cols-3">
      {services.map((s, i) => {
        const Icon = serviceIcons[i];
        return (
          <Reveal as="li" key={s.title} delay={i * 0.1}>
            <SpotlightCard id={`${s.title.toLowerCase()}_service`} className="h-full p-7 transition-transform duration-300 hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-a1/25 to-a2/5">
                <Icon className="h-5 w-5 text-a1" aria-hidden="true" />
              </div>
              <h3 className="mt-6 flex items-baseline justify-between text-lg font-semibold">
                {s.title} <span className="font-mono text-xs font-normal text-muted">{s.years}</span>
              </h3>
              <p className="mt-2 text-muted">{s.description}</p>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </ul>
  </>
);

const Education = () => (
  <ul className="grid gap-4 sm:grid-cols-2">
    {education.map((e, i) => (
      <Reveal as="li" key={e.school} delay={i * 0.08}>
        <a
          href={e.url}
          target="_blank"
          rel="noopener noreferrer"
          id={`${e.school.toLowerCase()}_academic`}
          className="glass spot group flex h-full items-start gap-5 p-6 transition-transform duration-300 hover:-translate-y-1"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-a3/25 to-a3/5">
            <AcademicCapIcon className="h-5 w-5 text-a3" aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="flex items-center justify-between gap-2 text-lg font-semibold">
              {e.school}
              <ArrowUpRightIcon className="h-4 w-4 text-muted transition group-hover:text-ink" aria-hidden="true" />
            </span>
            <span className="mt-1 block text-muted">{e.course}</span>
            <span className="mt-3 block font-mono text-xs text-muted">{e.period}</span>
          </span>
        </a>
      </Reveal>
    ))}
  </ul>
);

const About = () => {
  const [tab, setTab] = useState<Tab>("Profile");
  const reduced = useReducedMotion();

  // WAI-ARIA tabs: Left/Right (and Home/End) move between tabs and activate them.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = tabs.indexOf(tab);
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const t = tabs[(next + tabs.length) % tabs.length];
    setTab(t);
    document.getElementById(`tab-${t}`)?.focus();
  };

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="01 — About me" title={<>Transforming <span className="grad-text">visions</span>.</>} />
          <div role="tablist" aria-label="About sections" onKeyDown={onKeyDown} className="glass flex w-fit gap-1 !rounded-full p-1">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                id={`tab-${t}`}
                aria-selected={tab === t}
                aria-controls={tab === t ? `panel-${t}` : undefined}
                tabIndex={tab === t ? 0 : -1}
                onClick={() => setTab(t)}
                className={`relative min-h-11 rounded-full px-4 py-2 text-sm transition ${tab === t ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {tab === t && <motion.span layoutId="about-tab" className="absolute inset-0 rounded-full bg-ink/10" />}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={tab}
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          tabIndex={0}
          className="mt-12 rounded-[20px]"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "Profile" ? <Profile /> : <Education />}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
