import { motion } from "framer-motion";

import SkillsHexGrid from "../../components/SkillsHexGrid";
import { fadeIn } from "../../variants";

/**
 * Full-viewport section (within layout nav safe area): icon cloud uses all available height.
 */
const Skills = () => {
  return (
    <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden bg-[#020203]">
      <div
        className="pointer-events-none absolute inset-0 mesh-page opacity-[0.06]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(95vmin,640px)] w-[min(95vmin,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.055] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_48%,rgba(241,48,36,0.08)_0%,transparent_58%)]"
        aria-hidden
      />

      <motion.h1
        variants={fadeIn("up", 0.04)}
        initial="hidden"
        animate="show"
        className="sr-only"
      >
        Technical skills — interactive stack
      </motion.h1>

      <motion.div
        variants={fadeIn("up", 0.06)}
        initial="hidden"
        animate="show"
        className="relative z-[1] flex min-h-0 flex-1 flex-col"
      >
        <SkillsHexGrid />
      </motion.div>
    </div>
  );
};

export default Skills;
