import { motion } from "framer-motion";

import HomeSplatter from "../components/HomeSplatter";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative h-full min-h-[100dvh] w-full overflow-hidden bg-[#05050a] xl:min-h-0">
      {/* Gold constellation */}
      <div className="pointer-events-none absolute inset-0 z-[1] min-h-[100dvh]">
        <ParticlesContainer variant="home" />
      </div>

      <HomeSplatter />

      {/* Deep navy wash for reference tone */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_120%_80%_at_70%_50%,rgba(15,23,42,0.35)_0%,transparent_55%)]"
      />

      {/* Right: portal / explosion */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[36%] z-[2] sm:top-[34%] md:top-[30%] xl:inset-y-0 xl:left-[28%] xl:right-0 xl:top-0">
        <div
          role="img"
          aria-hidden
          className="absolute inset-0 bg-none opacity-45 mix-blend-normal sm:opacity-50 xl:bg-explosion xl:bg-cover xl:bg-[center_right] xl:bg-no-repeat xl:mix-blend-screen xl:opacity-[0.52]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-black/70 to-[#05050a] xl:bg-gradient-to-l xl:from-[#05050a] xl:via-black/50 xl:to-black/15"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-black/50 via-transparent to-[#05050a] xl:bg-gradient-to-r xl:from-[#05050a]/95 xl:via-black/30 xl:to-transparent"
      />

      <div className="relative z-10 flex min-h-[min(100dvh,900px)] w-full xl:min-h-0 xl:h-full">
        <div className="container flex min-h-[inherit] max-w-6xl flex-col justify-center px-5 py-12 text-center sm:px-8 sm:py-16 md:px-10 md:py-20 xl:h-full xl:min-h-0 xl:justify-center xl:py-0 xl:pl-12 xl:pr-8 xl:pt-24 xl:pb-16 xl:text-left">
          <motion.h1
            variants={fadeIn("down", 0.12)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="font-extrabold tracking-tight text-white"
          >
            <span className="block text-[1.9rem] leading-[1.1] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.35rem] xl:text-[3.65rem] xl:leading-[1.08]">
              Hi, I&apos;m Bhavya
            </span>
            <span className="mt-4 block text-[1.35rem] font-bold leading-tight sm:mt-5 sm:text-2xl md:text-3xl md:leading-snug lg:text-4xl xl:mt-6 xl:text-[2.65rem] xl:leading-tight">
              <span className="text-white">A </span>
              <span className="text-accent drop-shadow-[0_0_32px_rgba(255,51,51,0.45)]">
                Software Developer
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.22)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mt-8 max-w-[min(100%,36rem)] text-[15px] leading-[1.85] text-white/78 sm:mt-9 sm:text-base md:mt-10 md:text-lg xl:mx-0 xl:max-w-[26rem] xl:text-white/75"
          >
            I am a passionate developer with expertise in creating user-friendly
            web applications and innovative solutions. I have completed over 70
            projects and bring 3+ years of experience to the table.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            className="relative mt-11 flex justify-center sm:mt-12 xl:mt-14 xl:justify-start"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
