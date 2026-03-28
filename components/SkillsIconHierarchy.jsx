import { motion } from "framer-motion";

import { techGroups } from "./TechStack";

function flatIndex(groupIndex, itemIndex) {
  let n = 0;
  for (let g = 0; g < groupIndex; g++) {
    n += techGroups[g].items.length;
  }
  return n + itemIndex;
}

const spineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Vertical hierarchy: accent spine + stacked levels, icons only (sr-only names).
 */
const SkillsIconHierarchy = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-1 py-1 sm:px-3">
      <div
        className="pointer-events-none absolute bottom-[6%] left-[13px] top-[6%] w-[2px] overflow-hidden rounded-full sm:left-4 md:left-5"
        aria-hidden
      >
        <motion.div
          variants={spineVariants}
          initial="hidden"
          animate="show"
          className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent/40 to-accent/70"
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-3.5 lg:gap-4">
        {techGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: gi * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center pl-6 sm:pl-8 md:pl-10"
          >
            <span
              className="absolute left-[7px] top-1/2 z-[1] h-2 w-2 -translate-y-1/2 rounded-full border border-black/60 bg-accent shadow-[0_0_12px_2px_rgba(241,48,36,0.5)] sm:left-[9px] md:left-[11px]"
              aria-hidden
            />
            <span className="sr-only">{group.title}</span>

            <div className="flex flex-1 flex-wrap items-center justify-center gap-1 sm:justify-start sm:gap-2 md:gap-2.5">
              {group.items.map((item, ii) => {
                const i = flatIndex(gi, ii);
                return (
                  <motion.div
                    key={`${group.title}-${item.name}`}
                    initial={{ opacity: 0, scale: 0.5, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 22,
                      delay: i * 0.028,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 450, damping: 20 },
                    }}
                    whileTap={{ scale: 0.92 }}
                    className="group relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-black/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-accent/45 hover:shadow-[0_0_20px_-6px_rgba(241,48,36,0.5)] sm:h-10 sm:w-10 sm:rounded-xl md:h-11 md:w-11"
                  >
                    <motion.span
                      className={`${item.color} flex items-center justify-center`}
                      aria-hidden
                      animate={{ y: [0, -1.5, 0] }}
                      transition={{
                        duration: 2.8 + (i % 5) * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.05,
                      }}
                    >
                      <item.Icon className="text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem]" />
                    </motion.span>
                    <span className="sr-only">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsIconHierarchy;
