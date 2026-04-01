import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { Vortex } from "../components/ui/vortex";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative h-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-[50]">
        <ParticlesContainer variant="home" />
      </div>

      {/* text */}
      <Vortex
        backgroundColor="black"
        className="relative z-10 h-full w-full"
      >
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
      </Vortex>

    </div>
  );
};

export default Home;
