"use client";

import Error from "next/error";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
          <Error statusCode={404} />
        </div>
      </body>
    </html>
  );
}
