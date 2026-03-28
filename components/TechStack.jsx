import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSlack,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import {
  SiAxios,
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiJira,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const techGroups = [
  {
    title: "Languages & markup",
    items: [
      { name: "HTML5", Icon: FaHtml5, color: "text-[#e34f26]" },
      { name: "CSS3", Icon: FaCss3, color: "text-[#1572b6]" },
      { name: "JavaScript", Icon: FaJs, color: "text-[#f7df1e]" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178c6]" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", Icon: FaReact, color: "text-[#61dafb]" },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "text-[#764abc]" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#06b6d4]" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "text-[#7952b3]" },
    ],
  },
  {
    title: "Backend & realtime",
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Express", Icon: SiExpress, color: "text-white" },
      { name: "REST APIs", Icon: TbApi, color: "text-[#a78bfa]" },
      { name: "MongoDB", Icon: SiMongodb, color: "text-[#47a248]" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#4169e1]" },
      { name: "Socket.io", Icon: SiSocketdotio, color: "text-white" },
    ],
  },
  {
    title: "Libraries & integration",
    items: [
      { name: "Axios", Icon: SiAxios, color: "text-[#5a29e4]" },
      { name: "Framer Motion", Icon: SiFramer, color: "text-[#0055ff]" },
      { name: "Figma", Icon: SiFigma, color: "text-[#f24e1e]" },
      { name: "JWT", Icon: SiJsonwebtokens, color: "text-[#d63aff]" },
    ],
  },
  {
    title: "Tools & deployment",
    items: [
      { name: "Git", Icon: SiGit, color: "text-[#f05032]" },
      { name: "GitHub", Icon: SiGithub, color: "text-white" },
      { name: "Vercel", Icon: SiVercel, color: "text-white" },
      { name: "Netlify", Icon: SiNetlify, color: "text-[#00ad9f]" },
      { name: "Docker", Icon: SiDocker, color: "text-[#2496ed]" },
      { name: "Firebase", Icon: SiFirebase, color: "text-[#ffca28]" },
      { name: "Postman", Icon: SiPostman, color: "text-[#ff6c37]" },
      { name: "Jira", Icon: SiJira, color: "text-[#0052cc]" },
      { name: "Slack", Icon: FaSlack, color: "text-[#4a154b]" },
    ],
  },
  {
    title: "Security & payments",
    items: [
      { name: "OWASP / App sec", Icon: MdSecurity, color: "text-[#22c55e]" },
      { name: "Stripe", Icon: SiStripe, color: "text-[#635bff]" },
    ],
  },
];

export const allTechItems = techGroups.flatMap((g) => g.items);

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.03 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

const TechCard = ({ name, Icon, color }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -4,
      transition: { type: "spring", stiffness: 420, damping: 24 },
    }}
    whileTap={{ scale: 0.98 }}
    className="group relative flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b0b0b] px-2 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-[border-color,box-shadow] duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-accent/[0.08] before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity hover:border-accent/30 hover:shadow-[0_12px_40px_-20px_rgba(241,48,36,0.2)] hover:before:opacity-100 sm:gap-3 sm:px-2.5 sm:py-5"
  >
    <span
      className={`relative z-[1] flex h-11 w-11 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/[0.07] transition-[ring-color,box-shadow] duration-300 group-hover:shadow-[0_0_24px_-8px_rgba(241,48,36,0.35)] group-hover:ring-accent/30 sm:h-[52px] sm:w-[52px] ${color}`}
      aria-hidden
    >
      <Icon className="text-[1.3rem] sm:text-[1.45rem]" />
    </span>
    <span className="relative z-[1] max-w-[9.5rem] text-center text-[9px] font-semibold uppercase leading-snug tracking-[0.11em] text-white/42 transition-colors group-hover:text-white/88 sm:text-[10px] sm:tracking-[0.13em]">
      {name}
    </span>
  </motion.div>
);

const TechStack = () => {
  return (
    <div className="w-full space-y-10 sm:space-y-12 md:space-y-14">
      {techGroups.map((group, groupIndex) => (
        <article
          key={group.title}
          className="relative rounded-2xl border border-white/[0.05] bg-gradient-to-br from-white/[0.03] via-transparent to-transparent p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:rounded-3xl sm:p-6 md:p-8"
        >
          <div
            className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-accent/80 via-accent/25 to-transparent sm:rounded-l-3xl"
            aria-hidden
          />

          <div className="mb-6 flex flex-col gap-3 pl-3 sm:mb-7 sm:flex-row sm:items-end sm:justify-between sm:pl-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="font-mono text-[11px] tabular-nums text-accent">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <div className="hidden h-px w-10 bg-gradient-to-r from-accent/50 to-transparent sm:block" />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-white sm:text-xs">
                {group.title}
              </h3>
            </div>
            <span className="font-mono text-[10px] text-white/28 sm:pb-0.5">
              {group.items.length} {group.items.length === 1 ? "tool" : "tools"}
            </span>
          </div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-3.5"
          >
            {group.items.map((item) => (
              <TechCard
                key={item.name}
                name={item.name}
                Icon={item.Icon}
                color={item.color}
              />
            ))}
          </motion.div>
        </article>
      ))}
    </div>
  );
};

export default TechStack;
