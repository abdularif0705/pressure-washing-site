"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-32 pb-24 px-6 text-center">
            <h1 className="text-4xl font-serif font-bold text-secondary mb-4">Something went wrong!</h1>
            <p className="text-lg text-slate-500 mb-8">{error.message}</p>
            <button
               onClick={() => reset()}
               className="px-8 py-4 bg-primary text-secondary rounded-full font-bold hover:bg-primary-hover transition-colors"
            >
              Try again
            </button>
        </main>
      </body>
    </html>
  );
}
