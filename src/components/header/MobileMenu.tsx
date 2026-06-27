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

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

/**
 * Mobile navigation shown below the `md` breakpoint, using the shadcn Drawer
 * (Vaul). Header.tsx stays a Server Component and just renders this.
 */
const MobileMenu = () => {
  return (
    <Drawer direction='bottom'>
      <DrawerTrigger
        aria-label='Open navigation menu'
        className='md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground'
      >
        <Menu size={24} />
      </DrawerTrigger>
      <DrawerContent className=''>
        <DrawerHeader>
          <DrawerTitle className='font-heading italic text-2xl'>
            Menu
          </DrawerTitle>
          <DrawerDescription className='sr-only'>
            Site navigation links
          </DrawerDescription>
        </DrawerHeader>
        <nav className='px-4 pb-6'>
          <ul className='flex flex-col '>
            {links.map((l, i) => (
              <li
                key={l.label}
                className={i !== links.length - 1 ? "border-b " : ""}
              >
                <DrawerClose asChild>
                  <Link href={l.href} className='block py-3 text-md'>
                    {l.label}
                  </Link>
                </DrawerClose>
              </li>
            ))}
            <li className='pt-4'>
              <DrawerClose asChild>
                <Button variant='outline' size='lg' className='w-full h-11'>
                  <Phone /> Call
                </Button>
              </DrawerClose>
            </li>
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
