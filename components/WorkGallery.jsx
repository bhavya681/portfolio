import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

import { SCROLL_NAV_LOCK } from "./Layout";

/** Project thumbnails live in /public/assets (PNG). */
const projects = [
  {
    title: "ShipLink",
    category: "Full-stack · Logistics",
    description:
      "Smart shipping platform: shippers & users, bidding, chat, proximity search, secure payments.",
    link: "https://shiplink.onrender.com/",
    image: "/assets/shiplink.png",
    date: "Apr 2025",
  },
  {
    title: "TailTenders",
    category: "AI · Fashion",
    description:
      "AI-powered personal stylist — outfit suggestions and a polished product UI.",
    link: "https://trialtailtender-xiab-one.vercel.app/",
    image: "/assets/tailtenders.png",
    date: "Feb 2025",
  },
  {
    title: "Job Portal",
    category: "MERN · Careers",
    description:
      "Auth, job posts, application tracking, search filters, and dashboards.",
    link: "https://mernjobportal-2-1cwi.onrender.com/",
    image: "/assets/jobportal.png",
    date: "Dec 2021",
  },
  {
    title: "FinVue",
    category: "Finance · Dashboard",
    description: "Stock portfolio dashboard — holdings, performance charts, dark UI.",
    link: "https://finvue-portfolio-dash.vercel.app/",
    image: "/assets/finvue.png",
    date: "Apr 2025",
  },
  {
    title: "The Hidden Astrologer",
    category: "Next.js · Tarot & astrology",
    description:
      "Tarot, astrology, and past-life insights — immersive landing experience on Vercel.",
    link: "https://thehiddenastrologer.vercel.app/",
    image: "/projects/hidden-astrologer.svg",
    date: "Mar 2026",
  },
  {
    title: "WeatherWear",
    category: "Travel · UX",
    description:
      "Weather-based outfit suggestions — travel companion and style guide.",
    link: "https://weatherwear-orcin.vercel.app/",
    image: "/assets/weatherwear.png",
    date: "Apr 2023",
  },
  {
    title: "Footify",
    category: "E-commerce · React",
    description:
      "Sleek responsive React + TypeScript storefront — dynamic UI and performance.",
    link: "https://footify-commerce-133cddb3-j686.vercel.app/",
    image: "/assets/footify.png",
    date: "Apr 2025",
  },
  {
    title: "LearnNova",
    category: "Productivity",
    description:
      "Tools for academic and personal development — simplify everyday web workflows.",
    link: "https://learnnova-9fgg.vercel.app/",
    image: "/assets/learnnova.png",
    date: "Jun 2023",
  },
  {
    title: "Thumbnail Hub",
    category: "Tooling",
    description:
      "Create and manage thumbnails for websites, social posts, and digital content.",
    link: "https://thumbnail-hub-lemg.vercel.app/",
    image: "/assets/thumbnail-hub.png",
    date: "Jul 2023",
  },
  {
    title: "CodeBuddy",
    category: "Social · Full-stack",
    description:
      "Developer social platform with profiles, posts, and real-time chat.",
    link: "https://codebuddy-gamma.vercel.app/",
    image: "/assets/codebuddy.png",
    date: "Aug 2022",
  },
  {
    title: "CryptoTracker",
    category: "APIs · Data",
    description:
      "Cryptocurrency prices with currency toggle (INR/USD/EUR) and card grid UI.",
    link: "https://crypto-app1-seven.vercel.app/",
    image: "/assets/cryptostuff.png",
    date: "May 2022",
  },
  {
    title: "Movie Search",
    category: "React · TMDB",
    description: "Search movies, browse posters, and view release years in a responsive grid.",
    link: "https://movie-search-tan.vercel.app/",
    image: "/assets/moviesearch.png",
    date: "Feb 2023",
  },
  {
    title: "Personal portfolio",
    category: "Next.js",
    description:
      "Earlier portfolio with projects and blog — Next.js and motion experiments.",
    link: "https://mine-portolio.vercel.app/",
    image: "/assets/portfoliostuff.png",
    date: "Mar 2023",
  },
  {
    title: "CrowdFund Connect",
    category: "Frontend · Campaigns",
    description:
      "Crowdfunding UI — donors and causes; hero, campaigns, and dark purple theme.",
    link: "https://crowdforward-o5zj.vercel.app/",
    image: "/assets/crowdfund.png",
    date: "Mar 2023",
  },
  {
    title: "Tic Tac Toe",
    category: "TypeScript · Game",
    description: "React + TypeScript classic game with a minimal interactive board.",
    link: "https://tictactoe-delta-wheat.vercel.app/",
    image: "/assets/xo.png",
    date: "Mar 2023",
  },
  {
    title: "Fast Food Hub",
    category: "React · Delivery",
    description: "Food delivery landing — hero, menu teasers, and order CTA (frontend).",
    link: "https://advan-food-app.vercel.app/",
    image: "/assets/fast-food.png",
    date: "May 2023",
  },
  {
    title: "E-commerce showcase",
    category: "React · Storefront",
    description: "Scalable product UI with search and catalog-style layout [frontend].",
    link: "https://react-eccomernce-app.vercel.app/",
    image: "/assets/ecommerce.png",
    date: "Jan 2023",
  },
  {
    title: "Portfolio (this site)",
    category: "Next.js · Live",
    description:
      "Current portfolio — Framer Motion, particles, full-page layout, and deploy.",
    link: "https://bhavyawade-hswa.vercel.app/",
    image: "/projects/portfolio-site.svg",
    date: "2026",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const WorkGallery = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      <div
        {...{ [SCROLL_NAV_LOCK]: true }}
        className="custom-scrollbar max-h-[min(52dvh,540px)] overflow-y-auto overflow-x-hidden pr-2 pb-6 sm:max-h-[min(62vh,640px)] md:max-h-[min(68vh,720px)] xl:max-h-[calc(100vh-10rem)]"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${project.link}`}
              variants={item}
              className="group relative flex flex-col h-full"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col flex-1 block overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] shadow-lg transition-all duration-500 hover:bg-white/[0.06] hover:border-accent/50 hover:shadow-[0_0_35px_rgba(241,48,36,0.25)] hover:-translate-y-2 backdrop-blur-md"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50 border-b border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.08] group-hover:rotate-1"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={index < 4}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-80 transition duration-500 group-hover:opacity-40"
                    aria-hidden
                  />
                  
                  {/* Category Badge Floating on Image */}
                  <div className="absolute top-4 left-4 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="inline-block rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon floating on Image */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 transform translate-x-4 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-[0_0_20px_2px_rgba(241,48,36,0.6)]">
                      <BsArrowUpRight className="text-xl stroke-[0.5px]" aria-hidden />
                    </span>
                  </div>
                </div>

                {/* Content Section below the image */}
                <div className="flex-1 flex flex-col p-6 pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl tracking-tight font-extrabold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.date && (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 group-hover:text-white/70 transition-colors">
                        {project.date}
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-2 text-sm text-white/60 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
                
                {/* Bottom Glowing line effect on hover */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-accent transition-all duration-[600ms] ease-out group-hover:w-full" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkGallery;
