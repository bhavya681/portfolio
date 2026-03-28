import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/projects"
        className="group relative flex h-[148px] w-[148px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat sm:h-[168px] sm:w-[168px] md:h-[185px] md:w-[185px]"
      >
        <Image
          src="/rounded-text.png"
          alt=""
          width={141}
          height={148}
          className="pointer-events-none h-full max-h-[118px] w-full max-w-[112px] animate-spin-slow select-none sm:max-h-[132px] sm:max-w-[126px] md:max-h-[148px] md:max-w-[141px]"
        />
        <HiArrowRight
          className="absolute text-3xl text-white transition-all duration-300 group-hover:translate-x-2 md:text-4xl"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
