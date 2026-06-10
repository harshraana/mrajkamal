import type { Metadata } from "next";
import { adminSignIn } from "@/app/actions/home";

export const metadata: Metadata = { title: "Admin Login | M Rajkamal" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <div className='card shadow' style={{ width: 400 }}>
        <div className='card-body p-4'>
          <h4 className='card-title mb-1 fw-bold'>Admin Login</h4>
          <p className='text-muted small mb-4'>M Rajkamal Management</p>

          {error && (
            <div className='alert alert-danger py-2 small'>
              Invalid email or password. Please try again.
            </div>
          )}

          <form action={adminSignIn}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label small fw-semibold'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                className='form-control'
                required
                autoComplete='email'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='form-label small fw-semibold'
              >
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                className='form-control'
                required
                autoComplete='current-password'
              />
            </div>
            <button type='submit' className='btn btn-dark w-100'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
