import ScrollTop from "@/components/scrollTop/ScrollTop";
import Preload from "@/components/preload/Preload";
import TopBar from "@/components/topBar/TopBar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Scripts from "@/components/scripts/Scripts";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import MiscControls from "@/components/miscControls/MiscControls";
import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div id='wrapper'>
        <ScrollTop />
        <Preload />
        <TopBar />
        <Header />
        {children}
        <Footer />
        <Scripts />
      </div>
      <MobileMenu />
      <MiscControls />
    </>
  );
}
