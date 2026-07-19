import { Suspense } from "react";
import Link from "next/link";
import LoginForm from "@/components/admin/LoginForm";
import MRajKamalLogo from "@/assets/svg/m-rajkamal-logo-light.svg";
import { Skeleton } from "@/components/ui/skeleton";
import { ADMIN_BASE } from "@/lib/admin-paths";

/**
 * `searchParams` is a Promise in Next 16, and reading it is a runtime API — so
 * under Cache Components the component that awaits it must sit inside <Suspense>
 * or the build fails. Everything around it stays a static shell.
 */
async function SignIn({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const { callbackUrl, error } = await searchParams;

  // Only ever redirect to a path on this origin. Trusting `callbackUrl`
  // verbatim would make the login page an open redirect:
  // /m/admin/login?callbackUrl=https://evil.example
  // The `//` check matters too — "//evil.example" is a protocol-relative URL
  // that starts with "/" and would otherwise pass.
  const safeCallback =
    callbackUrl && callbackUrl.startsWith("/") && !callbackUrl.startsWith("//")
      ? callbackUrl
      : ADMIN_BASE;

  return (
    <>
      {error === "forbidden" && (
        <p
          role='alert'
          className='mb-5 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive'
        >
          That account is not allowed in the admin panel.
        </p>
      )}
      <LoginForm callbackUrl={safeCallback} />
    </>
  );
}

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  return (
    <div className='flex min-h-dvh items-center justify-center px-4 py-12'>
      <div className='w-full max-w-[400px]'>
        <div className='mb-8 flex justify-center'>
          <MRajKamalLogo className='h-10 w-auto' />
        </div>

        <div className='rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8'>
          <h1 className='font-heading text-2xl italic'>Admin sign in</h1>
          <p className='mt-1 mb-6 text-sm text-muted-foreground'>
            Manage products, reviews and site content.
          </p>

          <Suspense fallback={<Skeleton className='h-[260px] w-full' />}>
            <SignIn searchParams={searchParams} />
          </Suspense>
        </div>

        <p className='mt-6 text-center text-sm text-muted-foreground'>
          <Link href='/' className='hover:text-primary'>
            ← Back to site
          </Link>
        </p>
      </div>
    </div>
  );
}
