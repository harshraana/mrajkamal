"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang='en'>
      <body>
        <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <h2>Something went wrong</h2>
          <p style={{ margin: "1rem 0 2rem" }}>
            {error.message || "A critical error occurred. Please try again."}
          </p>
          <button onClick={reset}>Try again</button>
        </div>
      </body>
    </html>
  );
}
