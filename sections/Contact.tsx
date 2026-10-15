import { ArrowDownTrayIcon, DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/Components/ui/BrandIcons";
import SpotlightCard from "@/Components/ui/SpotlightCard";
import Reveal from "@/Components/ui/Reveal";
import { links, profile } from "@/data/content";

const socials = [
  { id: "github_footer", href: links.github, label: "GitHub", Icon: GitHubIcon },
  { id: "linkedin_footer", href: links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { id: "instagram_footer", href: links.instagram, label: "Instagram", Icon: InstagramIcon },
];

const Contact = () => (
  <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
    <div className="aurora !bottom-0 !top-auto -z-10 !h-[80vh] opacity-70" aria-hidden="true">
      <div className="blob b2 !top-[30%]" />
      <div className="blob b3 !top-[40%]" />
    </div>
    <div className="container-page">
      <Reveal>
        <SpotlightCard className="p-8 text-center sm:p-14">
          <p className="eyebrow grad-text">05 — Contact</p>
          <h2 className="mt-5 text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            Have a product to build?
            <br />
            <span className="grad-text">Let&apos;s talk.</span>
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${links.email}`} id="mail_footer" className="cta">
              <span>
                <EnvelopeIcon className="h-4 w-4" aria-hidden="true" /> {links.email}
              </span>
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" id="phone_footer" className="btn-ghost">
              <DevicePhoneMobileIcon className="h-4 w-4" aria-hidden="true" /> {links.phone}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-2 text-sm">
            {socials.map(({ id, href, label, Icon }) => (
              <li key={id}>
                <a id={id} href={href} target="_blank" rel="noopener noreferrer" className="chip inline-flex items-center gap-2 !py-2 transition hover:!text-ink">
                  <Icon /> {label}
                </a>
              </li>
            ))}
            <li>
              <a id="download_cv_contact" href={links.cv} className="chip inline-flex items-center gap-2 !py-2 transition hover:!text-ink">
                <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" /> CV
              </a>
            </li>
            <li>
              <a id="address_footer" href={links.maps} target="_blank" rel="noopener noreferrer" className="chip inline-flex items-center gap-2 !py-2 transition hover:!text-ink">
                <MapPinIcon className="h-4 w-4" aria-hidden="true" /> {profile.location}
              </a>
            </li>
          </ul>
        </SpotlightCard>
      </Reveal>
    </div>
  </section>
);

export default Contact;
