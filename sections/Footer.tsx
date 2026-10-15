import { profile } from "@/data/content";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page flex flex-col justify-between gap-3 py-8 font-mono text-xs text-muted sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
      <a href="#top" className="-my-3 inline-flex min-h-11 items-center transition hover:text-ink">
        Back to top ↑
      </a>
    </div>
  </footer>
);

export default Footer;
