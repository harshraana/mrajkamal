import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * Bare pass-through.
 *
 * It exists so `/m/admin/login` — which sits OUTSIDE the `(protected)` group — can
 * render without the sidebar chrome, while everything inside `(protected)` gets
 * it. The admin tree is also deliberately outside the site's `(main)` group, so
 * it never inherits the public Header and Footer.
 */
export const metadata: Metadata = {
  title: "Admin",
  // The admin panel must never be indexed.
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <div className='min-h-dvh bg-muted/30'>{children}</div>;
}
