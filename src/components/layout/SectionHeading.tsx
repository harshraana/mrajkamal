import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The site's one heading style — and, crucially, a heading LEVEL you have to
 * choose.
 *
 * The class string `font-heading italic text-3xl sm:text-4xl lg:text-[42px]` was
 * retyped seven times, applied to `h1`, `h2` and `h3` interchangeably. That is
 * why the document outline was incoherent: the visual size had drifted free of
 * the semantic rank.
 *
 * Making `as` an explicit, required-by-default prop means picking the level is a
 * decision, not an accident. Screen readers and Google both read the rank, not
 * the font size.
 */
export default function SectionHeading({
  children,
  as: Tag = "h2",
  size = "default",
  className,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "default" | "sm";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "font-heading italic",
        size === "default" && "text-3xl sm:text-4xl lg:text-[42px]",
        size === "sm" && "text-2xl sm:text-3xl lg:text-[32px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
