import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        line: token("line"),
        ink: token("ink"),
        muted: token("muted"),
        a1: token("a1"),
        a2: token("a2"),
        a3: token("a3"),
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.4rem, 7vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        h2: ["clamp(2rem, 4.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
      },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
export default config;
