import { Sora } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import Header from "../components/Header";
import Nav, { navData } from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

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

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling.current) return;
      const direction = e.deltaY;
      const currentIndex = navData.findIndex(item => item.path === router.pathname);
      
      if (direction > 0 && currentIndex < navData.length - 1) {
        isScrolling.current = true;
        router.push(navData[currentIndex + 1].path);
        setTimeout(() => { isScrolling.current = false; }, 1200);
      } else if (direction < 0 && currentIndex > 0) {
        isScrolling.current = true;
        router.push(navData[currentIndex - 1].path);
        setTimeout(() => { isScrolling.current = false; }, 1200);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - touchEndY;
      
      if (Math.abs(delta) < 50) return;

      const currentIndex = navData.findIndex(item => item.path === router.pathname);

      if (delta > 0 && currentIndex < navData.length - 1) {
        isScrolling.current = true;
        router.push(navData[currentIndex + 1].path);
        setTimeout(() => { isScrolling.current = false; }, 1200);
      } else if (delta < 0 && currentIndex > 0) {
        isScrolling.current = true;
        router.push(navData[currentIndex - 1].path);
        setTimeout(() => { isScrolling.current = false; }, 1200);
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

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Bhavya Wade | Portfolio</title>
        <meta
          name="description"
          content="Bhavya Wade is a Software developer with 3+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Bhavya Wade" />
        <link rel="icon" href="/bhavya.png" type="image/png" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
