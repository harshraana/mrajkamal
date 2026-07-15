import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site-url";
// Import Swiper styles
import "swiper/css";

/*
 * Geist used to be loaded here as `--font-sans`, but globals.css also declares
 * `--font-sans: Inter, …` on :root — so the two fought over the same variable
 * and Geist never actually rendered anywhere. It was a font download for nothing.
 * The site uses exactly two families: Playfair Display for headings, Inter for body.
 */
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/**
 * `metadataBase` is what makes every relative OG image, canonical and sitemap URL
 * resolve to an absolute one. Without it Next warns and emits relative OG URLs,
 * which crawlers — including WhatsApp's — cannot follow. It was missing entirely.
 *
 * The `title.template` was also dead config: no page exported metadata, so every
 * route rendered the same default title. Each route now supplies its own.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "M Rajkamal – Premium Furniture Store in Dadar West, Mumbai",
    template: "%s | M Rajkamal",
  },
  description:
    "Authorised Godrej Interio dealer in Dadar West, Mumbai since 1962. Sofas, wardrobes, home lockers, beds and made-to-measure steel furniture.",
  applicationName: "M Rajkamal Furniture",
  authors: [{ name: "M Rajkamal" }],
  openGraph: {
    type: "website",
    siteName: "M Rajkamal Furniture",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en-IN'
      className={cn(playfairDisplay.variable, inter.variable, "h-full")}
    >
      <body className='h-full bg-background'>
        {/*
          No-JS / failed-bundle safety net: scroll-reveal sections render at
          opacity:0 until Framer Motion animates them in, so without JS they
          would stay invisible forever.

          This rule targets `.reveal` — and until now ONLY <Reveal> emitted that
          class. <RevealItem> did not, which meant the whole of /about and four
          sections of the home page stayed blank with JavaScript off. The net
          existed and had a hole in it; RevealItem now emits the class too.
        */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
