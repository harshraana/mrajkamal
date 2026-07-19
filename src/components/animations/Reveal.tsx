"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  directionOffset,
  REVEAL_EASE,
  type RevealDirection,
} from "./motion-helpers";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Element to render. Defaults to a semantic <section>. */
  as?: "section" | "div";
  /** The side the content travels in FROM (default: bottom). */
  from?: RevealDirection;
  /** Distance (px) the content travels while fading in. */
  distance?: number;
  /** Seconds to wait before the animation starts — handy for staggering siblings. */
  delay?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Replay every time the element re-enters the viewport (default: animate once). */
  repeat?: boolean;
  /**
   * How far the element must scroll up into the viewport before it animates,
   * as a percentage of viewport height measured from the bottom edge.
   */
  triggerOffset?: number;
};

/**
 * Fades + slides its children into view the first time they are scrolled into
 * the viewport, optionally from a chosen direction. Keep the parent a Server
 * Component and pass the markup as children — only this wrapper is client-side.
 *
 * Respects "prefers-reduced-motion" by skipping the movement.
 */
const Reveal = ({
  children,
  className,
  as = "section",
  from = "bottom",
  distance = 24,
  delay = 0,
  duration = 0.6,
  repeat = false,
  triggerOffset = 30,
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(prefersReducedMotion ? {} : directionOffset(from, distance)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: REVEAL_EASE,
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
