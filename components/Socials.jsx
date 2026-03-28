import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
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
    name: "Github",
    link: "https://github.com/bhavya681",
    Icon: RiGithubLine,
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

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
