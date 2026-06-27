import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// Import Swiper styles
import "swiper/css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "M Rajkamal – Premium Furniture Store",
    template: "%s | M Rajkamal",
  },
  description:
    "Discover premium furniture for your home and office at M Rajkamal. Quality craftsmanship and elegant designs to suit every style.",
  keywords:
    "furniture, premium furniture, home decor, office furniture, M Rajkamal, elegant designs, quality craftsmanship",
  authors: [{ name: "M Rajkamal Team" }],
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
      lang='en'
      className={cn(
        playfairDisplay.variable,
        inter.variable,
        "font-sans",
        geist.variable,
        "h-full",
      )}
    >
      <body className='h-full bg-background'>
        {/* No-JS / failed-bundle safety net: scroll-reveal sections render at
            opacity:0 until Framer Motion animates them in. Without JS they would
            stay invisible, so force them visible when scripting is disabled. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
