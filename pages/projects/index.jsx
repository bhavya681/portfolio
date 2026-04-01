import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkGallery from "../../components/WorkGallery";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div className="relative min-h-full w-full overflow-x-hidden overflow-y-auto bg-primary/30 py-10 sm:py-14 md:py-20 xl:h-full xl:overflow-hidden xl:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-page opacity-60 mix-blend-screen" aria-hidden />
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[250px] h-[250px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
      
      <Circles />

      <div className="container relative z-[1] mx-auto min-h-0 w-full px-4 sm:px-6">
        <div className="flex min-h-0 flex-col gap-10 xl:flex-row xl:gap-x-12 xl:items-start">
          
          {/* Left Text Content */}
          <div className="flex shrink-0 flex-col text-center lg:text-left xl:sticky xl:top-28 xl:w-[min(100%,28rem)] xl:max-w-xl xl:text-left z-10 glass-panel rounded-3xl border border-white/5 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <motion.p
              variants={fadeIn("up", 0.08)}
              initial="hidden"
              animate="show"
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.4em] text-accent/90"
            >
              Selected work
            </motion.p>
            
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            >
              My <span className="text-accent">Projects.</span>
            </motion.h2>
            
            <motion.div
              variants={fadeIn("up", 0.28)}
              initial="hidden"
              animate="show"
              className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              {["Live demos", "MERN", "Next.js", "TypeScript"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-accent hover:border-accent/40 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            <motion.p
              variants={fadeIn("up", 0.36)}
              initial="hidden"
              animate="show"
              className="mb-8 max-w-[420px] text-white/60 mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base relative w-full"
            >
              ShipLink, TailTenders, job portals, dashboards, and more — each card
              opens the live build. 
              <br className="hidden sm:block" /><br className="hidden sm:block" />
              Download my resume anytime via{" "}
              <strong className="font-semibold text-white/90 hover:text-accent transition-colors cursor-pointer">Hire me</strong> in
              the nav.
            </motion.p>
            
            {/* Scroll Indicator */}
            <motion.div 
              variants={fadeIn("up", 0.45)}
              initial="hidden"
              animate="show"
              className="hidden xl:flex items-center gap-4 text-white/40 mt-auto pt-4"
            >
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            </motion.div>
          </div>

          {/* Right Gallery */}
          <motion.div
            variants={fadeIn("left", 0.45)}
            initial="hidden"
            animate="show"
            className="min-h-0 w-full min-w-0 flex-1 xl:max-w-none relative z-20"
          >
            <div className="glass-panel p-4 sm:p-5 md:p-6 rounded-3xl bg-black/20 border border-white/5 backdrop-blur-md shadow-2xl">
              <WorkGallery />
            </div>
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Projects;
