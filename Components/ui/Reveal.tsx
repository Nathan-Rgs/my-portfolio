import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}

/**
 * Fades and lifts its children in once they scroll into view.
 * The `.reveal` class forces it visible under prefers-reduced-motion (see globals.css):
 * the SSR markup ships with opacity:0 and framer-motion doesn't finish it in that mode.
 */
const Reveal = ({ children, delay = 0, className = "", as = "div" }: Props) => {
  const Tag = motion[as];
  return (
    <Tag
      className={`reveal ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
