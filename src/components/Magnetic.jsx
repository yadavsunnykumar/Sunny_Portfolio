import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const finePointer =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Wraps content so it "leans" toward the cursor while hovered and
 * springs back on leave — the [data-magnetic] effect from rubenmarcus.dev.
 */
function Magnetic({ children, strength = 6, className, as = "span" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  if (!finePointer) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    x.set(Math.max(-1, Math.min(1, dx)) * strength);
    y.set(Math.max(-1, Math.min(1, dy)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[as] || motion.span;

  return (
    <MotionTag
      ref={ref}
      onPointerMove={handleMove}
      onMouseMove={handleMove}
      onPointerLeave={reset}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default Magnetic;
