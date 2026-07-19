import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/dal";
import { isEmailConfigured } from "@/lib/email";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * `requireAdmin()` reads cookies (a runtime API), so it sits inside <Suspense>,
 * like the other admin pages under Cache Components.
 */
async function Account() {
  const { email } = await requireAdmin();

  return (
    <>
      <header className='mb-8'>
        <h1 className='font-heading text-3xl italic'>Account</h1>
        <p className='mt-1 text-sm text-muted-foreground'>
          Signed in as <span className='font-medium text-foreground'>{email}</span>.
        </p>
      </header>

      <ChangePasswordForm emailConfigured={isEmailConfigured()} />
    </>
  );
}

export default function AccountPage() {
  return (
    <div className='mx-auto max-w-[820px]'>
      <Suspense fallback={<Skeleton className='h-[400px] rounded-xl' />}>
        <Account />
      </Suspense>
    </div>
  );
}
