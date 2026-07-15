import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The page's vertical rhythm.
 *
 * `my-20 md:my-28 lg:my-[145px]` appeared six times, plus two drifted variants.
 * `spacing="tight"` covers the smaller `py-12 md:py-16 lg:py-[80px]` cadence the
 * About and Products pages use.
 */
export default function Section({
  children,
  className,
  spacing = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  spacing?: "default" | "tight" | "none";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "default" && "my-20 md:my-28 lg:my-[145px]",
        spacing === "tight" && "py-12 md:py-16 lg:py-[80px]",
        className,
      )}
    >
      {children}
    </section>
  );
}
