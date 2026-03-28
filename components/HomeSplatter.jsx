/** Top-left red atmospheric accent — matches reference “splash” without flooding the canvas */
const HomeSplatter = () => (
  <div
    className="pointer-events-none absolute -left-16 top-0 z-[2] h-[min(45vh,380px)] w-[min(85vw,440px)] opacity-[0.85]"
    aria-hidden
  >
    <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_70%_55%_at_20%_18%,rgba(255,51,51,0.22)_0%,rgba(241,48,36,0.1)_35%,transparent_65%)] blur-[2px]" />
    <div className="absolute -left-[10%] top-[5%] h-[55%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(241,48,36,0.18)_0%,transparent_65%)] blur-3xl" />
    <div className="absolute left-[15%] top-[25%] h-24 w-32 rotate-[-12deg] rounded-full bg-red-600/15 blur-2xl" />
  </div>
);

export default HomeSplatter;
