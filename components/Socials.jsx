import Link from "next/link";

import {
  RiGithubLine,
  RiGlobalLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bhavya-wade/",
    Icon: RiLinkedinLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/bhavya681",
    Icon: RiGithubLine,
  },
  {
    name: "Portfolio",
    link: "https://bhavyawade-hswa.vercel.app/",
    Icon: RiGlobalLine,
  },
  {
    name: "X",
    link: "https://x.com/wade_bhavy55123",
    Icon: RiTwitterXLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bhavya_wade",
    Icon: RiInstagramLine,
  },
];

const HEADER_ORDER = ["LinkedIn", "GitHub", "X", "Instagram"];

function getItems(variant) {
  if (variant === "header") {
    return HEADER_ORDER.map((name) => socialData.find((s) => s.name === name)).filter(
      Boolean,
    );
  }
  return socialData;
}

const Socials = ({ variant }) => {
  const items = getItems(variant);
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:gap-x-3 md:gap-x-5 lg:justify-end">
      {items.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`flex min-h-[44px] min-w-[44px] items-center justify-center text-lg text-white transition-all duration-300 sm:text-xl ${
            social.name === "GitHub"
              ? "rounded-full bg-accent p-2 text-white hover:text-white"
              : "rounded-xl hover:text-accent"
          } `}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
