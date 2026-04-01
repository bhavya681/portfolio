import { Sora } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import Header from "../components/Header";
import Nav, { getActiveNavIndex, navData } from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

/** When wheel/touch scrolls inside this element, skip full-page route changes (see Layout). */
export const SCROLL_NAV_LOCK = "data-scroll-nav-lock";
/** Tall sections that scroll with the window (not overflow:auto) — still skip route wheel/swiper. */
export const SCROLL_NAV_VIEWPORT = "data-scroll-nav-viewport";

function shouldSkipRouteFromWheel(e) {
  const el = e.target.closest(`[${SCROLL_NAV_LOCK}]`);
  if (!el) return false;
  if (el.hasAttribute(SCROLL_NAV_VIEWPORT)) return true;
  if (el.scrollHeight <= el.clientHeight + 2) return false;
  const { scrollTop, scrollHeight, clientHeight } = el;
  const delta = e.deltaY;
  const atTop = scrollTop <= 1;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
  if (delta > 0 && !atBottom) return true;
  if (delta < 0 && !atTop) return true;
  return false;
}

function shouldSkipRouteFromTouchSwipe(lockEl, deltaY) {
  if (!lockEl) return false;
  if (lockEl.hasAttribute(SCROLL_NAV_VIEWPORT)) return true;
  if (lockEl.scrollHeight <= lockEl.clientHeight + 2) return false;
  const { scrollTop, scrollHeight, clientHeight } = lockEl;
  const atTop = scrollTop <= 1;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
  if (deltaY > 0 && !atBottom) return true;
  if (deltaY < 0 && !atTop) return true;
  return false;
}

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const router = useRouter();
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const touchLockElRef = useRef(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    if (!desktopQuery.matches) return;

    const handleScroll = (e) => {
      if (isScrolling.current) return;
      if (shouldSkipRouteFromWheel(e)) return;
      const direction = e.deltaY;
      const currentIndex = getActiveNavIndex(
        router.pathname,
        router.asPath,
        navData,
      );
      
      if (direction > 0 && currentIndex < navData.length - 1) {
        isScrolling.current = true;
        router.push(navData[currentIndex + 1].path);
        setTimeout(() => { isScrolling.current = false; }, 650);
      } else if (direction < 0 && currentIndex > 0) {
        isScrolling.current = true;
        router.push(navData[currentIndex - 1].path);
        setTimeout(() => { isScrolling.current = false; }, 650);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchLockElRef.current = e.target.closest(`[${SCROLL_NAV_LOCK}]`);
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - touchEndY;

      if (Math.abs(delta) < 50) {
        touchLockElRef.current = null;
        return;
      }

      const lockEl = touchLockElRef.current;
      touchLockElRef.current = null;
      if (lockEl && shouldSkipRouteFromTouchSwipe(lockEl, delta)) return;

      const currentIndex = getActiveNavIndex(
        router.pathname,
        router.asPath,
        navData,
      );

      if (delta > 0 && currentIndex < navData.length - 1) {
        isScrolling.current = true;
        router.push(navData[currentIndex + 1].path);
        setTimeout(() => { isScrolling.current = false; }, 650);
      } else if (delta < 0 && currentIndex > 0) {
        isScrolling.current = true;
        router.push(navData[currentIndex - 1].path);
        setTimeout(() => { isScrolling.current = false; }, 650);
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router.pathname, router]);

  const mainBgClass =
    router.pathname === "/"
      ? "bg-[#05050a]"
      : "bg-black bg-site bg-cover bg-no-repeat bg-center";

  return (
    <main
      className={`page flex min-h-0 flex-col ${mainBgClass} text-white ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Bhavya Wade | Portfolio</title>
        <meta
          name="description"
          content="Bhavya Wade — Full-Stack Developer (MERN, Next.js, TypeScript) in Mumbai, Maharashtra. B.Tech AI, University of Mumbai. Frontend Developer at Scogo (since Jun 2024); Kodacy (AI/ML, IoT); Tata Steel. Open to SDE / React / full-stack roles."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Bhavya Wade" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      {router.pathname !== "/" ? <TopLeftImg /> : null}
      <Nav />
      <div className="hidden xl:block">
        <Header />
      </div>

      {/* Mobile/tablet: regular scroll flow. Desktop: full-page section layout. */}
      <div className="flex w-full min-h-0 flex-1 flex-col pt-[calc(4.75rem+env(safe-area-inset-top,0px))] pb-4 sm:pt-[calc(5.1rem+env(safe-area-inset-top,0px))] xl:pt-0 xl:pb-0">
        {children}
      </div>
    </main>
  );
};

export default Layout;
