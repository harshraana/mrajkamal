import Link from "next/link";

export default function NotFound() {
  return (
    <div className='main-content tf-spacing-10'>
      <div className='tf-container'>
        <div className='text-center'>
          <h2 className='title text-capitalize mb_24'>Page not found</h2>
          <p className='text-body-default mb_40'>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href='/' className='tf-btn btn-bg-primary'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
