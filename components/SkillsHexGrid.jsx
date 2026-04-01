"use client";

import { motion, useReducedMotion } from "framer-motion";

import { allTechItems } from "./TechStack";

const TECH_LINKS = {
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/",
  React: "https://react.dev/",
  "Next.js": "https://nextjs.org/",
  "Redux Toolkit": "https://redux-toolkit.js.org/",
  Tailwind: "https://tailwindcss.com/",
  Bootstrap: "https://getbootstrap.com/",
  "Node.js": "https://nodejs.org/",
  Express: "https://expressjs.com/",
  "REST APIs": "https://restfulapi.net/",
  MongoDB: "https://www.mongodb.com/",
  PostgreSQL: "https://www.postgresql.org/",
  "Socket.io": "https://socket.io/",
  Axios: "https://axios-http.com/",
  "Framer Motion": "https://www.framer.com/motion/",
  Figma: "https://www.figma.com/",
  JWT: "https://jwt.io/",
  Git: "https://git-scm.com/",
  GitHub: "https://github.com/",
  Vercel: "https://vercel.com/",
  Netlify: "https://www.netlify.com/",
  Docker: "https://www.docker.com/",
  Firebase: "https://firebase.google.com/",
  Postman: "https://www.postman.com/",
  Jira: "https://www.atlassian.com/software/jira",
  Slack: "https://slack.com/",
  "OWASP / App sec": "https://owasp.org/",
  Stripe: "https://stripe.com/",
};

function mixOffset(index) {
  const x = (((index * 47) % 21) - 10) * 0.55;
  const y = (((index * 31) % 17) - 8) * 0.55;
  return { x, y };
}

function AmbientBubbles({ reduceMotion }) {
  const specs = [
    { className: "left-[8%] top-[18%] h-[min(42vw,220px)] w-[min(42vw,220px)] bg-white/[0.06]", d: 0, dur: 14 },
    { className: "right-[5%] top-[28%] h-[min(38vw,180px)] w-[min(38vw,180px)] bg-accent/[0.07]", d: 2, dur: 18 },
    { className: "left-[22%] bottom-[12%] h-[min(48vw,260px)] w-[min(48vw,260px)] bg-white/[0.045]", d: 4, dur: 16 },
    { className: "right-[18%] bottom-[20%] h-[min(32vw,150px)] w-[min(32vw,150px)] bg-accent/[0.05]", d: 1, dur: 20 },
    { className: "left-1/2 top-[8%] h-[min(36vw,200px)] w-[min(36vw,200px)] -translate-x-1/2 bg-white/[0.04]", d: 3, dur: 22 },
  ];

  if (reduceMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {specs.map((s, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-3xl ${s.className}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {specs.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${s.className}`}
          animate={{
            scale: [1, 1.12, 0.96, 1],
            opacity: [0.5, 0.85, 0.55, 0.5],
            x: [0, 12, -8, 0],
            y: [0, -10, 6, 0],
          }}
          transition={{
            duration: s.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.d,
          }}
        />
      ))}
    </div>
  );
}

function SkillIcon({ item, index, reduceMotion }) {
  const { x, y } = mixOffset(index);
  const link = TECH_LINKS[item.name];
  const phase = index * 0.14;
  const floatDur = reduceMotion ? 0 : 2.6 + (index % 5) * 0.32;
  const breatheDur = reduceMotion ? 0 : 4.2 + (index % 6) * 0.55;
  const breatheDelay = index * 0.28;

  return (
    <div
      style={{ transform: `translate(${x}px, ${y}px)` }}
      className="flex flex-col items-center justify-center"
    >
      <motion.a
        href={link || "#"}
        target={link ? "_blank" : undefined}
        rel={link ? "noreferrer noopener" : undefined}
        onClick={(e) => {
          if (!link) e.preventDefault();
        }}
        initial={{ opacity: 0, scale: 0.65, filter: "blur(6px)" }}
        animate={{
          opacity: reduceMotion ? 1 : [0.58, 1, 0.62, 0.94, 0.58],
          scale: 1,
          filter: "blur(0px)",
          y: reduceMotion ? 0 : [0, -5, 0, 3, 0],
          rotate: reduceMotion ? 0 : [0, -1.2, 0, 1.2, 0],
        }}
        transition={{
          opacity: reduceMotion
            ? { duration: 0.4, delay: index * 0.02 }
            : {
                duration: breatheDur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: breatheDelay,
              },
          scale: {
            type: "spring",
            stiffness: 380,
            damping: 22,
            delay: index * 0.025,
          },
          filter: { duration: 0.5, delay: index * 0.025 },
          y: reduceMotion
            ? { duration: 0 }
            : {
                duration: floatDur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: phase,
              },
          rotate: reduceMotion
            ? { duration: 0 }
            : {
                duration: floatDur * 1.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: phase + 0.2,
              },
        }}
        whileHover={
          reduceMotion
            ? { scale: 1.06, opacity: 1 }
            : {
                scale: 1.12,
                opacity: 1,
                rotate: 0,
                transition: { type: "spring", stiffness: 420, damping: 16 },
              }
        }
        className={`group relative z-[1] flex flex-col items-center justify-center ${
          link ? "cursor-pointer" : "cursor-default"
        }`}
        aria-label={
          link ? `${item.name} official website` : `${item.name} icon`
        }
      >
        <span className="sr-only">{item.name}</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -m-4 rounded-full bg-accent/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        />
        <item.Icon
          className={`relative z-[1] text-[clamp(1.75rem,4.2vmin,2.5rem)] drop-shadow-[0_2px_16px_rgba(0,0,0,0.88)] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_26px_rgba(241,48,36,0.55)] sm:text-[clamp(1.9rem,3.9vmin,2.65rem)] ${item.color}`}
          aria-hidden
        />
        <span className="pointer-events-none absolute top-full z-[2] mt-2 max-w-[9rem] -translate-x-1/2 left-1/2 whitespace-normal rounded-md bg-black/85 px-2 py-1 text-center text-[10px] font-medium leading-tight text-white/95 opacity-0 shadow-lg backdrop-blur-sm transition duration-200 group-hover:opacity-100 sm:text-[11px]">
          {item.name}
        </span>
      </motion.a>
    </div>
  );
}

const SkillsHexGrid = () => {
  const reduceMotion = useReducedMotion();
  const items = allTechItems;

  return (
    <div className="relative flex h-full min-h-0 w-full flex-1 flex-col overflow-x-hidden overflow-y-auto px-3 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 xl:overflow-hidden">
      <AmbientBubbles reduceMotion={reduceMotion} />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_64%_at_50%_44%,transparent_0%,rgba(2,2,3,0.92)_80%)]"
        aria-hidden
      />

      <header className="relative z-[1] shrink-0 pb-2 text-center sm:pb-3 md:pb-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40 sm:text-[11px]">
          Stack
        </p>
      </header>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="relative z-[1] flex min-h-0 w-full max-w-[min(100%,58rem)] flex-1 list-none flex-wrap content-start items-center justify-center gap-x-[0.75rem] gap-y-[clamp(0.9rem,3vmin,1.75rem)] overflow-visible py-2 sm:mx-auto sm:content-center sm:gap-x-9 sm:gap-y-10 md:gap-x-10 md:gap-y-11"
      >
        {items.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="flex items-center justify-center pb-5 sm:pb-6"
          >
            <SkillIcon item={item} index={index} reduceMotion={reduceMotion} />
          </li>
        ))}
      </motion.ul>

      <p className="relative z-[1] shrink-0 pt-1 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-white/32 sm:pt-2 sm:text-[11px]">
        Hover icons for labels
      </p>
    </div>
  );
};

export default SkillsHexGrid;
