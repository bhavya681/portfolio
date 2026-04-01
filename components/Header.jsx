import Link from "next/link";

import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 pt-[max(0.65rem,env(safe-area-inset-top,0px))] sm:px-8 lg:px-12 xl:px-0 xl:h-[88px] xl:pt-0">
      <div className="container max-w-7xl">
        <div className="flex flex-col items-center gap-3 py-3.5 sm:gap-4 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0 lg:py-8">
          <Link href="/" className="shrink-0">
            <h1 className="text-center text-[1.35rem] font-bold font-sora tracking-wide text-white sm:text-2xl lg:text-left lg:text-3xl">
              Bhavya <span className="font-semibold text-accent">Wade.</span>
            </h1>
          </Link>

          <div className="flex w-full items-center justify-center lg:w-auto lg:justify-end">
            <Socials variant="header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
