import { auth } from "@/auth";
import { signOut } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div className='d-flex min-vh-100'>
      {/* Sidebar */}
      <nav
        className='d-flex flex-column p-3 bg-dark text-white'
        style={{ width: 240, minHeight: "100vh" }}
      >
        <div className='mb-4'>
          <span className='fw-bold fs-5'>M Rajkamal</span>
          <div className='text-white-50 small'>Admin Panel</div>
        </div>
        <ul className='nav nav-pills flex-column mb-auto gap-1'>
          <li className='nav-item'>
            <Link href='/admin' className='nav-link text-white'>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/products' className='nav-link text-white'>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/admin/home' className='nav-link text-white'>
              Home Content
            </Link>
          </li>
          <li className='nav-item mt-2'>
            <Link href='/' className='nav-link text-white-50' target='_blank'>
              View Site ↗
            </Link>
          </li>
        </ul>
        <div className='mt-auto pt-3 border-top border-secondary'>
          <div className='text-white-50 small mb-2'>{session.user?.email}</div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button
              type='submit'
              className='btn btn-outline-light btn-sm w-100'
            >
              Sign Out
            </button>
          </form>
        </div>
      </nav>

      {/* Main content */}
      <main className='flex-grow-1 p-4 bg-light'>{children}</main>
    </div>
  );
}
