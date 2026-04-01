import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import { SCROLL_NAV_LOCK } from "../../components/Layout";
import { fadeIn } from "../../variants";

const Experience = () => {
  return (
    <div className="relative min-h-full w-full overflow-x-hidden overflow-y-auto bg-primary/30 py-10 sm:py-14 md:py-20 xl:h-full xl:overflow-hidden xl:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-page opacity-60 mix-blend-screen" aria-hidden />
      
      {/* Ambient Glows */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[250px] h-[250px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
      
      <Circles />

      <div className="container relative z-[1] mx-auto min-h-0 w-full px-4 sm:px-6">
        <div className="flex min-h-0 flex-col gap-10 xl:flex-row xl:gap-x-16 xl:items-start">
          
          {/* Left Text Content */}
          <div className="flex shrink-0 flex-col text-center lg:text-left xl:sticky xl:top-28 xl:w-[min(100%,28rem)] xl:max-w-xl xl:text-left z-10 glass-panel rounded-3xl border border-white/5 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-10">
            <motion.p
              variants={fadeIn("right", 0.08)}
              initial="hidden"
              animate="show"
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.4em] text-accent/90"
            >
              Career Trajectory
            </motion.p>
            
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            >
              My <span className="text-accent">Experience.</span>
            </motion.h2>
            
            <motion.p
              variants={fadeIn("right", 0.36)}
              initial="hidden"
              animate="show"
              className="mb-10 max-w-[420px] text-white/60 mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base relative w-full"
            >
              From early internships dealing with web infrastructure and AI chatbots to deploying production-ready frontend solutions at Scogo Networks.<br/><br/>
              Open for roles? Click <strong className="font-semibold text-white/90 hover:text-accent transition-colors cursor-pointer">Hire me</strong> in
              the navigation to securely view or download my resume.
            </motion.p>
            
            {/* Scroll Indicator */}
            <motion.div 
              variants={fadeIn("up", 0.45)}
              initial="hidden"
              animate="show"
              className="hidden xl:flex items-center gap-4 text-white/40 mt-auto pt-4"
            >
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-xs uppercase tracking-widest">Scroll timeline</span>
            </motion.div>
          </div>

          {/* Right Timeline */}
          <motion.div
            variants={fadeIn("left", 0.35)}
            initial="hidden"
            animate="show"
            className="min-h-0 w-full min-w-0 flex-1 xl:max-w-none relative z-20"
          >
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 xl:justify-start">
              <span className="rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Live Timeline
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                LinkedIn-aligned
              </span>
            </div>

            <div
              {...{ [SCROLL_NAV_LOCK]: true }}
              className="custom-scrollbar mx-auto max-h-[min(58dvh,520px)] min-h-[240px] w-full max-w-2xl overflow-y-auto overflow-x-hidden p-2 pr-3 sm:max-h-[min(65vh,600px)] sm:min-h-[280px] md:max-h-[min(68vh,680px)] xl:mx-0 xl:max-h-[calc(100vh-13rem)]"
            >
              <ExperienceTimeline />
            </div>
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Experience;
