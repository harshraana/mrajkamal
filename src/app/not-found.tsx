import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex min-h-[100svh] items-center justify-center px-4 py-20'>
      <div className='max-w-[600px] text-center'>
        <p className='font-heading italic text-6xl sm:text-7xl text-primary'>
          404
        </p>
        <h2 className='font-heading italic text-2xl sm:text-3xl mt-4'>
          Page not found
        </h2>
        <p className='mt-4 font-light text-gray-600'>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href='/'
          className='mt-8 inline-flex items-center w-fit rounded-full bg-primary text-background px-6 py-2.5 font-semibold hover:no-underline'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
