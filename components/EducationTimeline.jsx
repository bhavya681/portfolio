import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";

export const educationEntries = [
  {
    title: "MBA — University of Mumbai (MU)",
    stage: "Aug 2025 – Present · Pursuing",
    isCurrent: true,
  },
  {
    title: "B.Tech Artificial Intelligence — University of Mumbai (MU)",
    stage: "Nov 2022 – May 2025 · Grade 8.4",
    isCurrent: false,
  },
  {
    title: "Diploma Computer Engineering — VIVA Institute of Technology",
    stage: "Sep 2019 – Jul 2022 · Grade 8.2",
    isCurrent: false,
  },
];

function splitStage(stage) {
  const idx = stage.indexOf(" · ");
  if (idx === -1) return { period: stage, detail: "" };
  return {
    period: stage.slice(0, idx).trim(),
    detail: stage.slice(idx + 3).trim(),
  };
}

const EducationTimeline = () => {
  const n = educationEntries.length;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] sm:rounded-3xl">
        {/* Header strip */}
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 sm:px-6 sm:py-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
              <HiAcademicCap className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 text-left">
              <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                Education
              </h3>
              <p className="text-[11px] text-white/40 sm:text-xs">
                {n} entries · newest first
              </p>
            </div>
          </div>
          <span className="hidden shrink-0 font-mono text-[10px] text-white/25 sm:block">
            01—{String(n).padStart(2, "0")}
          </span>
        </div>

        <ul className="divide-y divide-white/[0.06]">
          {educationEntries.map((item, i) => {
            const { period, detail } = splitStage(item.stage);
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06 + i * 0.08 }}
                className="group relative"
              >
                <div className="flex gap-0 sm:gap-1">
                  {/* Index + rail */}
                  <div className="flex w-12 shrink-0 flex-col items-center border-r border-white/[0.05] bg-black/20 py-5 sm:w-14 sm:py-6">
                    <span className="font-mono text-[10px] tabular-nums text-white/30 sm:text-[11px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`mt-3 h-2 w-2 rounded-full ring-2 ring-offset-2 ring-offset-[#060606] ${
                        item.isCurrent
                          ? "bg-accent ring-accent/40"
                          : "bg-white/25 ring-white/10 group-hover:bg-white/40"
                      }`}
                      aria-hidden
                    />
                  </div>

                  <div className="min-w-0 flex-1 px-4 py-5 text-left sm:px-6 sm:py-6">
                    <div className="flex flex-wrap items-baseline gap-2 gap-y-1">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent/90">
                        {period}
                      </span>
                      {item.isCurrent ? (
                        <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-[15px] font-medium leading-snug tracking-tight text-white sm:text-base">
                      {item.title}
                    </p>
                    {detail ? (
                      <p className="mt-1.5 text-sm text-white/45">{detail}</p>
                    ) : null}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EducationTimeline;
