import { Suspense, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { requireAdmin } from "@/lib/auth/dal";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Reads the session (cookies → a request-time API).
 *
 * It lives in its own component, behind <Suspense>, because Cache Components
 * requires every runtime-API read to sit inside a boundary — and the segment
 * escape hatches that used to cover this are gone: `dynamic`, `dynamicParams`,
 * `revalidate` and `fetchCache` are all REMOVED when cacheComponents is enabled.
 * Suspense is the only option, not a stylistic preference.
 */
async function SidebarSlot() {
  const { email } = await requireAdmin();
  return <AdminSidebar email={email} />;
}

function SidebarSkeleton() {
  return (
    <div className='w-full shrink-0 border-b border-sidebar-border bg-sidebar p-5 md:h-dvh md:w-[240px] md:border-r md:border-b-0'>
      <Skeleton className='h-6 w-32' />
      <div className='mt-6 space-y-2'>
        <Skeleton className='h-8 w-full' />
        <Skeleton className='h-8 w-full' />
        <Skeleton className='h-8 w-full' />
      </div>
    </div>
  );
}

/**
 * Guards what is RENDERED under /admin/(protected) — and nothing more.
 *
 * `src/proxy.ts` already bounced anonymous visitors, but it only checks that a
 * session cookie EXISTS; a forged one gets past it. `requireAdmin()` verifies
 * the session and the role for real.
 *
 * This still does not protect the Server Actions. Those are POSTs to their own
 * route, so each one calls `requireAdmin()` itself.
 */
export default function ProtectedAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex min-h-dvh flex-col md:flex-row'>
      <Suspense fallback={<SidebarSkeleton />}>
        <SidebarSlot />
      </Suspense>
      <main className='min-w-0 ml-0 md:ml-[240px] flex-1 p-5 sm:p-8'>
        {children}
      </main>
      <Toaster position='top-right' />
    </div>
  );
}
