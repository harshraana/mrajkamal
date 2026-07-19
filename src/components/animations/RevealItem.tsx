"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  directionOffset,
  REVEAL_EASE,
  type RevealDirection,
} from "./motion-helpers";

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "section";
  /** The side this item travels in FROM (default: bottom). */
  from?: RevealDirection;
  distance?: number;
  duration?: number;
};

/**
 * A single staggered, directional child of <RevealGroup>. It inherits the
 * group's in-view trigger and stagger timing via shared variant names, so it
 * doesn't set its own whileInView. Respects "prefers-reduced-motion".
 */
const RevealItem = ({
  children,
  className,
  as = "div",
  from = "bottom",
  distance = 28,
  duration = 0.6,
}: RevealItemProps) => {
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
        ease: REVEAL_EASE,
      },
    },
  };

  const MotionTag =
    as === "li" ? motion.li : as === "section" ? motion.section : motion.div;

  return (
    // The `reveal` class is what the <noscript> escape hatch in app/layout.tsx
    // targets. Only <Reveal> emitted it before, so with JavaScript disabled every
    // RevealItem — which is the whole of /about and four sections of the home
    // page — stayed at opacity:0 forever. The safety net existed and had a hole
    // in it.
    <MotionTag className={cn("reveal", className)} variants={variants}>
      {children}
    </MotionTag>
  );
};

export default RevealItem;
