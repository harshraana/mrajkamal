import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
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
    <html lang='en' className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
