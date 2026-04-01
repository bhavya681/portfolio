import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative h-full overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_110%_75%_at_8%_6%,rgba(241,48,36,0.22)_0%,rgba(241,48,36,0.08)_28%,transparent_60%),radial-gradient(ellipse_80%_55%_at_88%_72%,rgba(241,48,36,0.12)_0%,transparent_56%)] mix-blend-screen"
        aria-hidden
      />

      <motion.div
        aria-hidden
        animate={{ x: [0, 14, 0], y: [0, -10, 0], opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 -top-20 z-[2] h-[300px] w-[300px] rounded-full bg-accent/30 blur-[120px] sm:h-[360px] sm:w-[360px]"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.07, 1], opacity: [0.2, 0.38, 0.2] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[8%] top-[6%] z-[2] h-44 w-44 rounded-full border border-red-500/35"
      />

      <div className="pointer-events-none absolute inset-0 z-[50]">
        <ParticlesContainer variant="home" />
      </div>

      {/* Old red hero visual background */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-[2] h-full w-[1280px]">
        <div
          role="img"
          aria-hidden
          className="translate-z-0 absolute h-full w-full bg-red-950/60 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat xl:mix-blend-color-dodge"
        />
      </div>

      {/* text */}
      <div className="relative z-10 h-full w-full bg-gradient-to-r from-black/25 via-black/50 to-black/25">
        <div className="container mx-auto flex h-full min-h-[min(78dvh,760px)] flex-col justify-center px-5 py-8 text-center sm:min-h-[min(80dvh,820px)] sm:px-8 sm:py-10 md:px-10 md:py-12 xl:pt-40 xl:text-left">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            whileHover={{ y: -2 }}
            className="h1 will-change-transform"
          >
            Hi, I&apos;m Bhavya <br />
            <span className="text-accent">A Software Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            I am a passionate developer with expertise in creating user-friendly
            web applications and innovative solutions. I have completed over 70
            projects and bring 3+ years of experience to the table.
          </motion.p>

          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            whileHover={{ x: 6 }}
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Home;
