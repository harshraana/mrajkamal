import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ScrollTop from "@/components/scrollTop/ScrollTop";
import Preload from "@/components/preload/Preload";
import TopBar from "@/components/topBar/TopBar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Scripts from "@/components/scripts/Scripts";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Rajkamal - Premium Furniture Store",
  description:
    "Discover premium furniture for your home and office at M Rajkamal. Quality craftsmanship and elegant designs to suit every style.",
  keywords:
    "furniture, premium furniture, home decor, office furniture, M Rajkamal, elegant designs, quality craftsmanship",
  authors: [{ name: "M Rajkamal Team" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <div id='wrapper'>
          {/* Scroll Top */}
          <ScrollTop></ScrollTop>
          {/* preload */}
          <Preload></Preload>
          {/* .top-bar */}
          <TopBar></TopBar>
          {/* .header */}
          <Header></Header>

          {/* Main Content */}
          {children}

          {/* Footer */}
          <Footer></Footer>

          {/* Scripts */}
          <Scripts></Scripts>
        </div>
      </body>
    </html>
  );
}
