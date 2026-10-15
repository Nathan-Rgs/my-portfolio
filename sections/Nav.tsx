import ThemeToggle from "@/Components/ui/ThemeToggle";
import { navItems } from "@/data/content";

/** Floating glass dock. Scrolls horizontally on very small screens instead of hiding links. */
const Nav = () => (
  <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
    <nav aria-label="Primary" className="glass flex max-w-full items-center gap-1 !rounded-full p-1.5 shadow-2xl shadow-black/20">
      <a
        href="#top"
        aria-label="Nathan Roberto, back to top"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-a1 to-a2 font-mono text-xs font-medium text-white"
      >
        NR
      </a>
      <ul className="flex items-center overflow-x-auto text-sm text-muted [scrollbar-width:none]">
        {navItems.map(({ href, label, desktopOnly }) => (
          <li key={href} className={desktopOnly ? "hidden sm:block" : undefined}>
            <a href={href} className="block whitespace-nowrap rounded-full px-2 py-3 transition hover:bg-ink/5 hover:text-ink sm:px-3">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  </header>
);

export default Nav;
