"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { LinkDTO } from "@/types";

/**
 * Mobile navigation below the `md` breakpoint.
 *
 * The links now arrive as a prop from the CMS — this used to keep its own
 * hardcoded copy of the array that Header also hardcoded.
 */
export default function MobileMenu({
  nav,
  callHref,
}: {
  nav: LinkDTO[];
  callHref: string;
}) {
  return (
    <Drawer direction='bottom'>
      <DrawerTrigger
        aria-label='Open navigation menu'
        className='inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden'
      >
        <Menu size={24} />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className='font-heading text-2xl italic'>Menu</DrawerTitle>
          <DrawerDescription className='sr-only'>Site navigation links</DrawerDescription>
        </DrawerHeader>

        <nav aria-label='Mobile' className='px-4 pb-6'>
          <ul className='flex flex-col'>
            {nav.map((link, i) => (
              <li
                key={`${link.href}-${link.label}`}
                className={i !== nav.length - 1 ? "border-b" : ""}
              >
                <DrawerClose asChild>
                  <Link
                    href={link.href}
                    className='text-md block py-3'
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </DrawerClose>
              </li>
            ))}

            <li className='pt-4'>
              {/* Was a Button with no href — inert. Now a real tel: link. */}
              <a href={callHref} className='block hover:no-underline'>
                <Button variant='outline' size='lg' className='h-11 w-full'>
                  <Phone /> Call
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
