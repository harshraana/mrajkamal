/** Shared bits for the scroll-reveal animation primitives. */

export type RevealDirection = "top" | "bottom" | "left" | "right";

/** Initial offset (px) for an element that animates IN FROM the given side. */
export const directionOffset = (from: RevealDirection, distance: number) => {
  switch (from) {
    case "top":
      return { y: -distance };
    case "bottom":
      return { y: distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
  }
};

/** Gentle ease-out used across every reveal. */
export const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
