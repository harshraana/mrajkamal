"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Element to render. Defaults to a semantic <section>. */
  as?: "section" | "div";
  /** Vertical distance (px) the content travels while fading in. */
  y?: number;
  /** Seconds to wait before the animation starts — handy for staggering siblings. */
  delay?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Replay every time the element re-enters the viewport (default: animate once). */
  repeat?: boolean;
  /**
   * How far the element must scroll up into the viewport before it animates,
   * as a percentage of viewport height measured from the bottom edge.
   * e.g. 25 ≈ wait until the element is a quarter of the way up the screen, so
   * the fade/slide is actually visible instead of finishing at the bottom edge.
   */
  triggerOffset?: number;
};

/**
 * Fades + slides its children into view the first time they are scrolled into
 * the viewport. Keep the parent a Server Component and pass the section markup
 * as children — only this wrapper crosses the client boundary.
 *
 * Respects the user's "prefers-reduced-motion" setting by skipping the movement.
 */
const Reveal = ({
  children,
  className,
  as = "section",
  y = 24,
  delay = 0,
  duration = 0.6,
  repeat = false,
  triggerOffset = 35,
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = as === "div" ? motion.div : motion.section;

  return (
    <MotionTag
      className={cn("reveal", className)}
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: !repeat, margin: `0px 0px -${triggerOffset}% 0px` }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
