import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-accent/90">
        404
      </p>
      <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-white/55">
        That route does not exist. Use the nav or go home.
      </p>
      <Link
        href="/"
        className="rounded-full border-2 border-accent px-6 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-black"
      >
        Back home
      </Link>
    </div>
  );
}
