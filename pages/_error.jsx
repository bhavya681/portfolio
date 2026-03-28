import Link from "next/link";

function Error({ statusCode }) {
  const code = statusCode ?? "Error";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-accent/90">
        {code}
      </p>
      <h1 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mb-8 max-w-md text-white/55">
        {statusCode
          ? `Server responded with ${statusCode}. Try refreshing or return home.`
          : "A client error occurred. Try refreshing the page."}
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
