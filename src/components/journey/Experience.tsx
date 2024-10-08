import { useMobile } from "@/contexts/MobileContext";
import StaggerText from "../common/StaggerText";
import { motion } from "framer-motion";
import TechStackList from "../common/TechStackList";

export const Experience = ({
  title,
  company,
  description,
  techstack,
  from,
  to,
}: {
  title: string;
  company: string;
  description: string[];
  techstack: string[];
  from: string;
  to: string;
}) => {
  const { isMobile } = useMobile();

  return (
    <motion.div
      className="px-6 py-4 md:hover:bg-blue-50 md:dark:hover:bg-transparent md:dark:hover:border-orange-600 md:border md:border-transparent md:rounded-lg transition-all duration-300 group"
      whileHover={{ scale: 0.99 }}
    >
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-full gap-2.5">
          <motion.h2
            className="text-sm md:text-base 2xl:text-lg font-[450] md:group-hover:text-blue-900 md:dark:group-hover:text-orange-600 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {title} • {company}
          </motion.h2>
          {isMobile && (
            <motion.div
              className="flex w-60 items-start justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[13px] font-normal text-gray-500">
                {from} - {to}
              </p>
            </motion.div>
          )}
          {description.map((desc, index) => (
            <div className="flex items-start gap-2" key={index}>
              <span className="text-blue-900 dark:text-orange-600">•</span>
              <StaggerText
                className="text-xs md:text-sm 2xl:text-base text-gray-600 dark:text-gray-300 leading-normal font-normal"
                text={desc}
              />
            </div>
          ))}
          <TechStackList techstack={techstack} />
        </div>
        {!isMobile && (
          <motion.div
            className="flex w-60 items-start justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[13px] md:text-[15px] 2xl:text-[17px] font-normal text-gray-500">
              {from} - {to}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
