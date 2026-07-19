"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  /** Element to render. */
  as?: "section" | "div" | "ul";
  /** Seconds between each child's animation. */
  stagger?: number;
  /** Seconds to wait before the first child animates. */
  delayChildren?: number;
  repeat?: boolean;
  triggerOffset?: number;
};

/**
 * Stagger container: when scrolled into view it triggers its <RevealItem>
 * children in sequence. Children inherit the trigger, so they must NOT set
 * their own whileInView — just render <RevealItem>s inside.
 */
const RevealGroup = ({
  children,
  className,
  as = "div",
  stagger = 0.12,
  delayChildren = 0,
  repeat = false,
  triggerOffset = 25,
}: RevealGroupProps) => {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };

  const MotionTag =
    as === "section" ? motion.section : as === "ul" ? motion.ul : motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: !repeat, margin: `0px 0px -${triggerOffset}% 0px` }}
    >
      {children}
    </MotionTag>
  );
};

export default RevealGroup;
