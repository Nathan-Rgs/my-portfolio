import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const Icon = theme === "dark" ? SunIcon : MoonIcon;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted transition hover:bg-ink/5 hover:text-ink"
    >
      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
