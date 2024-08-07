import { ArrowUpRight } from "iconoir-react";
import Image from "next/image";
import StaggerText from "../common/StaggerText";
import { motion } from "framer-motion";
import TechStackList from "../common/TechStackList";

export const Project = ({
  title,
  thumbnail,
  description,
  techstack,
  link,
}: {
  title: string;
  thumbnail: string;
  description: string;
  techstack: string[];
  link: string;
}) => {
  return (
    <motion.div
      className="px-6 py-4 md:hover:bg-blue-50 md:dark:hover:bg-transparent md:dark:hover:border-orange-600 md:border md:border-transparent md:rounded-lg transition-all duration-300 group"
      onClick={() => window.open(link, "_blank")}
      whileHover={{ scale: 0.99 }}
    >
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col w-full gap-2">
          <motion.h2
            className="text-sm md:text-base 2xl:text-lg font-[450] md:group-hover:text-blue-900 md:dark:group-hover:text-orange-600 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {title}
          </motion.h2>
          <StaggerText
            className="text-xs md:text-sm 2xl:text-base text-gray-600 dark:text-gray-300 leading-normal font-normal"
            text={description}
          />
          <TechStackList techstack={techstack} />
        </div>
        <div className="flex md:w-1/2 items-start justify-center">
          <Image
            src={thumbnail}
            width={250}
            height={150}
            alt={title}
            className="rounded-lg"
          />
        </div>
        <ArrowUpRight
          width={32}
          height={32}
          className="group-hover:text-blue-600 dark:group-hover:text-orange-600 transition-colors duration-300"
        />
      </div>
    </motion.div>
  );
};
