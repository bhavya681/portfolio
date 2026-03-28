import { motion } from "framer-motion";
import { useMemo } from "react";

import { allTechItems } from "./TechStack";

/** Deterministic “mixed” order so SSR and client match */
function mixedOrder(items) {
  return [...items].sort((a, b) => {
    const hash = (s) =>
      [...s].reduce((acc, c) => (acc << 5) - acc + c.charCodeAt(0), 0);
    return hash(a.name) - hash(b.name);
  });
}

const sizeClasses = [
  "text-[1.65rem] sm:text-[1.85rem]",
  "text-[1.85rem] sm:text-4xl",
  "text-3xl sm:text-[2.1rem]",
  "text-[2rem] sm:text-4xl",
  "text-[1.75rem] sm:text-[2rem]",
];

/**
 * Dense grid of technology logos only — no captions (names are sr-only).
 */
const TechIconBulk = () => {
  const items = useMemo(() => mixedOrder(allTechItems), []);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      className="mx-auto grid w-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(3.25rem,1fr))] justify-items-center gap-x-3 gap-y-4 sm:grid-cols-[repeat(auto-fill,minmax(3.75rem,1fr))] sm:gap-x-4 sm:gap-y-5 md:gap-x-5 md:gap-y-6"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          className="flex items-center justify-center"
          whileHover={{ scale: 1.12, y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <motion.span
            className={`flex items-center justify-center ${item.color} ${sizeClasses[i % sizeClasses.length]}`}
            aria-hidden
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.8 + (i % 5) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.04,
            }}
          >
            <item.Icon />
          </motion.span>
          <span className="sr-only">{item.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechIconBulk;
