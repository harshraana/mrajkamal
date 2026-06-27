import React from "react";
import MRajKamalLogoLite from "@/assets/svg/m-rajkamal-logo-light.svg";
import GodrejInterioLogo from "@/assets/svg/godrej-interio.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className='py-3 fixed w-full left-0 top-0 bg-background z-10 shadow-2xs'>
      <div className='flex justify-between items-center max-w-[1200px] px-4 mx-auto'>
        <div className='header-logo flex items-center'>
          <MRajKamalLogoLite
            height={36}
            width={"auto"}
            className='h-8 sm:h-9 w-auto'
          />
          <span className='w-0.5 h-[20px] bg-foreground block rounded-2xl mx-2 sm:mx-4'></span>
          <GodrejInterioLogo
            height={32}
            width={"auto"}
            className='h-7 sm:h-8 w-auto mix-blend-darken'
          />
        </div>
        <div className='hidden md:block nav'>
          <ul className='flex items-center gap-x-2'>
            <li className='px-3'>
              <Link href={"/"}>Home</Link>
            </li>
            <li className='px-3'>
              <Link href={"/products"}>Products</Link>
            </li>
            <li className='px-3'>
              <Link href={"/about"}>About</Link>
            </li>
            <li className='pl-3'>
              <Button variant={"outline"} className={"px-5"} size={"lg"}>
                <Phone></Phone> Call
              </Button>
            </li>
          </ul>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
