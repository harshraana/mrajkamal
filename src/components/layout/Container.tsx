import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The page's horizontal rhythm, in one place.
 *
 * `max-w-[1200px] px-4 mx-auto` was retyped TEN times across the pages, and had
 * already drifted twice. This is the fix — one primitive, one width, one gutter.
 */
export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1200px] px-4", className)}>{children}</Tag>
  );
}
