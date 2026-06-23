import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

const MainWebLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex flex-col h-full'>
      <Header></Header>
      <>{children}</>
      <Footer></Footer>
    </div>
  );
};

export default MainWebLayout;
