import React from "react";
import MRajKamalLogo from "@/assets/svg/main-m-rajkamal-logo.svg";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className='p-4 sm:p-6'>
      <div className='bg-gradient-to-t rounded-b-4xl from-orange-200/60 to-transparent px-6 pt-6'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex gap-4 flex-wrap flex-col sm:flex-row'>
            <div className='main-logo flex-2'>
              <MRajKamalLogo className='sm:w-full mx-auto my-6 sm:my-0' />
            </div>
            <div className='flex flex-3 gap-4'>
              <div className='flex-1'>
                <h6 className='font-heading text-xl uppercase mb-4'>
                  Quick links
                </h6>
                <ul className='space-y-2'>
                  <li>
                    <Link className='font-light' href={"/"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className='font-light' href={"/"}>
                      Sofa cum Beds
                    </Link>
                  </li>
                  <li>
                    <Link className='font-light' href={"/"}>
                      Lockers
                    </Link>
                  </li>
                  <li>
                    <Link className='font-light' href={"/"}>
                      Cupboards
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='flex-1'>
                <h6 className='font-heading text-xl uppercase mb-4'>
                  Find us on
                </h6>
                <ul className='space-y-2'>
                  <li>
                    <a
                      className='font-light underline'
                      target='_blank'
                      href={
                        "https://www.justdial.com/Mumbai/M-Rajkamal-Furniture-Dadar-West/022PXX22-XX22-160924164449-R7S2_BZDET"
                      }
                    >
                      Just Dial
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-light underline'
                      target='_blank'
                      href={"https://www.instagram.com/mrajkamalfurniture/"}
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-light underline'
                      target='_blank'
                      href={
                        "https://interio.com/furniture-stores/Maharashtra/Mumbai/Near-Sena-Bhawan/WDX004801"
                      }
                    >
                      Interio by Godreg
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-light underline'
                      target='_blank'
                      href={"https://www.indiamart.com/m-rajkamal-furniture/"}
                    >
                      IndiaMart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex-1'>
              <h6 className='font-heading text-xl uppercase mb-4'>Contact</h6>
              <ul className='space-y-2'>
                <li>
                  <p className='flex gap-x-2 items-center'>
                    <Phone size={16} className='shrink-0'></Phone>
                    <a
                      className='font-light whitespace-nowrap'
                      href={"tel:+91 983 353 3076"}
                    >
                      +91 983 353 3076
                    </a>
                  </p>
                </li>
                <li>
                  <p className='flex gap-x-2 items-center'>
                    <Mail size={16} className='shrink-0'></Mail>
                    <a
                      className='font-light whitespace-nowrap'
                      href={"mailto:mrajkamalfurniture@gmail.com"}
                    >
                      mrajkamalfurniture@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className='flex-2'>
              <h6 className='font-heading text-xl uppercase mb-2'>
                Shop Address
              </h6>
              <p className='mb-4 font-light leading-6'>
                7, Haji Ebrahim Patel Trust Building Junction of Gokhale Road,
                and, Ranade Rd, Dadar West, Dadar, Mumbai, Maharashtra 400028
              </p>
              <p className='italic font-light'>
                Opens: 10am - 8pm (Tue to Sun)
              </p>
            </div>
          </div>
        </div>

        <div className='text-center py-6'>
          <p className='my-0 text-orange-600 text-sm font-light italic'>
            Copyright © 2026 mrajkamalfurniture.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
