import Image from "next/image";
import Reveal from "@/Components/ui/Reveal";
import SectionHeading from "@/Components/ui/SectionHeading";
import SpotlightCard from "@/Components/ui/SpotlightCard";
import { experience } from "@/data/content";

const Experience = () => (
  <section id="experience" className="border-t border-line py-24 sm:py-32">
    <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr]">
      <div className="self-start lg:sticky lg:top-28">
        <SectionHeading
          eyebrow="04 — Experience"
          title={<>Professional <span className="grad-text">experience</span>.</>}
          description="From mechatronics in Sorocaba to cloud computing in Aachen, Germany, and full-stack product work today."
        />
      </div>

      <ol className="timeline relative space-y-4">
        {experience.map((job) => (
          <Reveal as="li" key={job.company} className="relative sm:pl-16">
            <Image
              src={job.logo}
              alt={`${job.company} logo`}
              width={48}
              height={48}
              className="absolute left-0 top-5 hidden h-12 w-12 rounded-xl bg-white object-contain p-1.5 ring-4 ring-bg sm:block"
            />
            <SpotlightCard id={`experience_${job.company.toLowerCase().replace(/\W+/g, "_")}`} className="p-6">
              <Image src={job.logo} alt="" width={40} height={40} className="mb-4 h-10 w-10 rounded-lg bg-white object-contain p-1 sm:hidden" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.role} <span className="whitespace-nowrap font-normal text-muted">@ {job.company}</span>
                </h3>
                <span className={`chip ${job.current ? "!border-a3/40 !text-ink" : ""}`}>{job.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>
              <p className="mt-3 leading-relaxed text-muted">{job.description}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
