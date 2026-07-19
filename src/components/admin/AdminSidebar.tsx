"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ExternalLink,
  KeyRound,
  LayoutDashboard,
  LogOut,
  Package,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { adminSignOut } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { ADMIN_BASE, adminPath } from "@/lib/admin-paths";

const NAV = [
  { href: ADMIN_BASE, label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: adminPath("/products"), label: "Products", icon: Package, exact: false },
  {
    href: adminPath("/site"),
    label: "Site content",
    icon: SlidersHorizontal,
    exact: false,
  },
  { href: adminPath("/account"), label: "Account", icon: KeyRound, exact: false },
];

export default function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();

  return (
    <aside className='flex w-full sticky top-0 md:fixed z-10 shrink-0 flex-col border-b border-sidebar-border bg-sidebar text-sidebar-foreground md:h-dvh md:w-[240px] md:border-r md:border-b-0'>
      <div className='px-5 py-5'>
        <p className='font-heading text-lg italic'>M Rajkamal</p>
        <p className='text-xs text-muted-foreground'>Admin</p>
      </div>

      <nav className='flex-1 px-3'>
        <ul className='flex gap-1 md:flex-col'>
          {NAV.map(({ href, label, icon: Icon, exact }) => {
            const active = exact
              ? pathname === href
              : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition hover:no-underline",
                    active
                      ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                  )}
                >
                  <Icon size={16} />
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href='/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground hover:no-underline'
            >
              <ExternalLink size={16} />
              View site
            </a>
          </li>
        </ul>
      </nav>

      <div className='border-t border-sidebar-border px-3 py-4'>
        <p
          className='truncate px-3 pb-2 text-xs text-muted-foreground'
          title={email}
        >
          {email}
        </p>
        {/* A Server Action, so signing out works with JavaScript disabled. */}
        <form action={adminSignOut}>
          <Button
            type='submit'
            variant='ghost'
            size='sm'
            className='w-full justify-start gap-2 text-muted-foreground'
          >
            <LogOut size={16} />
            Sign out
          </Button>
        </form>
      </div>
    </aside>
  );
}
