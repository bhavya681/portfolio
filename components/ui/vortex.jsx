import { motion } from "framer-motion";

export function Vortex({ children, className = "", backgroundColor = "black" }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.22),transparent_16%,rgba(255,255,255,0.12),transparent_36%,rgba(255,255,255,0.2),transparent_62%,rgba(255,255,255,0.1))]"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[105vmax] w-[105vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg,transparent_8%,rgba(255,255,255,0.12),transparent_30%,rgba(255,255,255,0.08),transparent_52%,rgba(255,255,255,0.14),transparent_75%)] mix-blend-screen"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_30%,rgba(0,0,0,0.58)_72%,rgba(0,0,0,0.85)_100%)]"
      />
      <div className="relative z-[2] h-full w-full">{children}</div>
    </div>
  );
}
