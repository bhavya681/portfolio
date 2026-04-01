import Link from "next/link";
import { useRouter } from "next/router";

import {
  HiHome,
  HiUser,
  HiSquares2X2,
  HiDocumentText,
  HiBriefcase,
  HiEnvelope,
} from "react-icons/hi2";

/** Match routes including hash aliases */
export function navPathMatches(linkPath, pathname, asPath = "") {
  if (linkPath === "/about#education") {
    return pathname === "/about" && asPath.includes("#education");
  }
  if (linkPath === "/about") {
    return pathname === "/about" && !asPath.includes("#education");
  }
  if (linkPath === pathname) return true;
  if (linkPath === "/skills" && pathname === "/skill") return true;
  return false;
}

export function getActiveNavIndex(pathname, asPath, data) {
  const idx = data.findIndex((item) =>
    navPathMatches(item.path, pathname, asPath),
  );
  return idx >= 0 ? idx : 0;
}

/** Reference order: Home, About, Skills, Education, Portfolio, [Testimonials], Contact */
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "skills", path: "/skills", Icon: HiSquares2X2 },
  { name: "education", path: "/about#education", Icon: HiDocumentText },
  { name: "projects", path: "/projects", Icon: HiBriefcase },
  // { name: "testimonials", path: "/testimonials", Icon: HiChatBubbleLeftRight },
  { name: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
  const router = useRouter();
  const { pathname, asPath } = router;

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center xl:inset-x-auto xl:bottom-auto xl:left-auto xl:right-[1.25%] xl:top-0 xl:h-screen xl:w-[3.75rem] xl:max-w-none xl:items-center 2xl:right-[1.75%]"
    >
      <div
        className="pointer-events-auto flex h-[4.1rem] w-full max-w-none items-center justify-around gap-0 overflow-x-auto border-b border-white/[0.14] bg-[#1a1c22]/88 px-1 pb-1.5 pt-[max(0.45rem,env(safe-area-inset-top,0px))] shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-[4.5rem] sm:justify-evenly sm:px-3 sm:pb-2 md:px-8 xl:h-auto xl:w-full xl:flex-col xl:justify-center xl:gap-7 xl:overflow-visible xl:rounded-full xl:border xl:border-white/[0.14] xl:bg-[#181a20]/90 xl:px-2 xl:py-11 xl:shadow-[0_12px_48px_rgba(0,0,0,0.75)] xl:backdrop-blur-2xl"
      >
        {navData.map((link) => {
          const active = navPathMatches(link.path, pathname, asPath);
          return (
            <Link
              key={`${link.path}-${link.name}`}
              href={link.path}
              className={`group relative flex min-h-[42px] min-w-[42px] shrink-0 items-center justify-center rounded-xl text-[1.1rem] transition-colors duration-200 ease-out sm:min-h-[44px] sm:min-w-[44px] sm:text-[1.3rem] xl:text-[1.22rem] ${
                active
                  ? "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.28)]"
                  : "text-white/65 hover:text-white/95"
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 active:scale-95`}
              aria-current={active ? "page" : undefined}
            >
              <span
                role="tooltip"
                className="pointer-events-none absolute right-full z-10 mr-2 hidden pr-1 xl:group-hover:flex"
              >
                <span className="relative flex items-center rounded bg-[#2b2d36] px-2.5 py-1.5 text-[11px] font-semibold capitalize leading-none text-white/95 shadow-lg">
                  {link.name}
                  <span
                    className="absolute -right-1.5 top-1/2 -translate-y-1/2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-[#2b2d36]"
                    aria-hidden
                  />
                </span>
              </span>

              <link.Icon aria-hidden className="drop-shadow-sm" />
              <span className="sr-only">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
