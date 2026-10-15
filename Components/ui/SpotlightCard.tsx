import type { HTMLAttributes, PointerEvent } from "react";

/** Glass card with a radial light that follows the cursor. */
const SpotlightCard = ({ className = "", onPointerMove, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    onPointerMove?.(e);
  };
  return <div className={`glass spot ${className}`} onPointerMove={handleMove} {...rest} />;
};

export default SpotlightCard;
