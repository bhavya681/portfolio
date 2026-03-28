import { motion } from "framer-motion";

/**
 * Experience aligned with LinkedIn.
 */
export const experienceEntries = [
  {
    label: "Early 2024 – Present",
    role: "Frontend Developer",
    company: "Scogo Networks",
    location: "Maharashtra, India · Remote",
    isCurrent: true,
    highlights: [
      "Initially started as an Intern, and transitioned to Full-time on June 18, 2024 (continuing till date).",
      "Scalable UI with React.js, Next.js (SSR, ISR), Tailwind CSS, and Figma handoff.",
      "ShadCN, Zustand, secure REST with token-based auth and dynamic data rendering.",
      "Performance: dynamic imports, lazy loading, LCP/FCP; Agile (sprints, standups, reviews); CI/CD with GitHub & Jira.",
      "Accessibility: WCAG 2.1 and inclusive UI patterns.",
    ],
  },
  {
    label: "May 2024 – Jun 2024",
    role: "Advanced AI & ML Intern — Chatbot Development",
    company: "Kodacy",
    location: "Remote",
    isCurrent: false,
    highlights: [
      "NLP: intent classification, text preprocessing, dialogue systems.",
      "Python & Scikit-learn for conversational logic and response ranking.",
      "Model evaluation, feature extraction, deploying chatbots in web demos.",
    ],
  },
  {
    label: "Dec 2023",
    role: "IoT Intern",
    company: "Kodacy",
    location: "Remote",
    isCurrent: false,
    highlights: [
      "IoT prototypes with real-time sensor data (microcontrollers, MQTT).",
      "Edge-to-cloud integration, dashboards, embedded firmware basics.",
    ],
  },
  {
    label: "Jun 2023 – Jul 2023",
    role: "Network Engineer Intern",
    company: "Tata Steel",
    location: "Mumbai, Maharashtra · On-site",
    isCurrent: false,
    highlights: [
      "Ping monitoring system in Python for network health checks.",
      "Industrial IT visibility, protocols, OT/IT integration, safety standards.",
    ],
  },
];

const ExperienceTimeline = () => {
  const n = experienceEntries.length;

  return (
    <div className="w-full max-w-2xl text-left pb-10">
      <ul className="space-y-6 sm:space-y-8">
        {experienceEntries.map((item, i) => (
          <motion.li 
            key={`${item.company}-${item.label}-${i}`} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative flex gap-5 sm:gap-6 group"
          >
            {/* Timeline Line & Dot */}
            <div className="flex w-6 shrink-0 flex-col items-center">
              <span
                className={`z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 transition-all duration-300 ${
                  item.isCurrent 
                    ? "bg-accent border-accent shadow-[0_0_15px_3px_rgba(241,48,36,0.5)] scale-110" 
                    : "bg-primary border-white/40 group-hover:border-accent group-hover:shadow-[0_0_10px_2px_rgba(241,48,36,0.3)]"
                }`}
                aria-hidden
              />
              {i < n - 1 ? (
                <div className={`mt-2 w-[2px] flex-1 bg-gradient-to-b ${
                  item.isCurrent ? "from-accent to-white/10" : "from-white/20 to-white/5 group-hover:from-accent/50"
                } transition-colors duration-300`} />
              ) : null}
            </div>

            {/* Content Card */}
            <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 sm:p-6 md:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent/90 mb-2 flex flex-wrap items-center gap-2">
                {item.label}
                {item.isCurrent && (
                  <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-accent shrink-0">
                    CURRENT
                  </span>
                )}
              </p>
              
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                {item.role}
              </h4>
              <p className="text-sm font-medium text-white/70 mb-5">
                {item.company}
                <span className="text-white/30 mx-2">|</span>
                {item.location}
              </p>
              
              <ul className="space-y-3 text-sm leading-relaxed text-white/70">
                {item.highlights.map((line, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceTimeline;
