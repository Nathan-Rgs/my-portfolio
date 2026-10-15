import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ eyebrow, title, description, center }: Props) => (
  <Reveal className={center ? "mx-auto max-w-2xl text-center" : undefined}>
    <p className="eyebrow grad-text">{eyebrow}</p>
    <h2 className="mt-4 text-h2 font-semibold">{title}</h2>
    {description && <p className="mt-4 text-lg text-muted">{description}</p>}
  </Reveal>
);

export default SectionHeading;
