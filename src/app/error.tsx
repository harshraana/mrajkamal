"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='main-content tf-spacing-10'>
      <div className='tf-container w-1246'>
        <div className='text-center'>
          <h2 className='title text-capitalize mb_24'>Something went wrong</h2>
          <p className='text-body-default mb_40'>
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
          <button onClick={reset} className='tf-btn btn-bg-primary'>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
