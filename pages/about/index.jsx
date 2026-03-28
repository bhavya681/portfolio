import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import EducationTimeline from "../../components/EducationTimeline";
import { fadeIn } from "../../variants";

const About = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (router.asPath.includes("#education")) {
      const el = document.getElementById("education");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [router.isReady, router.asPath]);

  return (
    <div className="relative min-h-full overflow-x-hidden overflow-y-auto bg-[#060606] py-20 text-center sm:py-24 md:py-28 xl:py-36 xl:text-left">
      {/* Quiet depth — single mesh, low contrast */}
      <div
        className="pointer-events-none absolute inset-0 mesh-page opacity-[0.22] mix-blend-screen"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px] sm:right-[5%]"
        aria-hidden
      />

      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute bottom-0 -left-[370px] hidden xl:flex"
      >
        <Avatar />
      </motion.div>

      <div className="container relative z-10 flex flex-col gap-14 px-4 sm:gap-16 sm:px-6 lg:gap-20 xl:flex-row xl:items-start xl:justify-between xl:gap-24">
        {/* Intro — simple column + accent rail */}
        <div className="relative flex w-full max-w-xl flex-1 flex-col xl:max-w-[min(100%,26rem)]">
          <span
            className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.35em] text-accent/85"
            aria-hidden
          >
            About
          </span>
          <div className="relative pl-5 sm:pl-6">
            <div
              className="absolute bottom-1 left-0 top-1 w-px bg-gradient-to-b from-accent/80 via-accent/25 to-transparent"
              aria-hidden
            />
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-0 text-balance sm:mt-1"
            >
              Building{" "}
              <span className="text-accent">modern solutions</span> for the
              digital world.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.32)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mt-5 max-w-prose text-[15px] leading-[1.75] text-white/65 xl:mx-0"
            >
              I am a driven and versatile developer with a passion for technology
              and problem-solving. I focus on secure, scalable, and user-friendly
              applications, continuous learning, and collaboration.
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.42)}
              initial="hidden"
              animate="show"
              className="mt-8"
            >
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:border-accent/35 hover:text-accent"
              >
                Full technology stack
                <span aria-hidden className="text-accent">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Education — single refined block */}
        <motion.div
          id="education"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative w-full max-w-xl flex-1 scroll-mt-28 xl:max-w-[min(100%,34rem)]"
        >
          <EducationTimeline />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
