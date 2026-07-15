import Link from "next/link";
import { Phone } from "lucide-react";
import MRajKamalLogoLite from "@/assets/svg/m-rajkamal-logo-light.svg";
import GodrejInterioLogo from "@/assets/svg/godrej-interio.svg";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import Container from "@/components/layout/Container";
import type { LinkDTO } from "@/types";

/**
 * Takes the nav from the CMS and hands the SAME array to <MobileMenu>.
 *
 * The two used to hardcode their own copies of the link list, so adding a page
 * meant remembering to edit both — and sooner or later they'd disagree.
 */
export default function Header({ nav, callHref }: { nav: LinkDTO[]; callHref: string }) {
  return (
    <header className='fixed top-0 left-0 z-10 w-full bg-background py-3 shadow-2xs'>
      <Container className='flex items-center justify-between'>
        <Link
          href='/'
          aria-label='M Rajkamal home'
          className='flex items-center hover:no-underline'
        >
          <MRajKamalLogoLite height={36} width='auto' className='h-8 w-auto sm:h-9' />
          <span className='mx-2 block h-[20px] w-0.5 rounded-2xl bg-foreground sm:mx-4' />
          <GodrejInterioLogo
            height={32}
            width='auto'
            className='h-7 w-auto mix-blend-darken sm:h-8'
          />
        </Link>

        {/* A real <nav> landmark. This was <div className="nav"> — a cosmetic
            class with no CSS rule behind it, and no landmark for screen readers. */}
        <nav aria-label='Main' className='hidden md:block'>
          <ul className='flex items-center gap-x-2'>
            {nav.map((link) => (
              <li key={`${link.href}-${link.label}`} className='px-3'>
                <Link
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className='pl-3'>
              {/*
                The Call button had NO href and NO handler. The primary call to
                action on every page of a furniture shop did nothing when clicked.
                It's a real tel: link now.
              */}
              <a href={callHref} className='hover:no-underline'>
                <Button variant='outline' size='lg' className='px-5'>
                  <Phone /> Call
                </Button>
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu nav={nav} callHref={callHref} />
      </Container>
    </header>
  );
}
