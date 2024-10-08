import { Theme } from "@/lib/types";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { useMobile } from "@/contexts/MobileContext";
import { motion } from "framer-motion";
import { experienceData, projectData } from "@/lib/data";

export const Journey = () => {
  const { theme } = useTheme();
  const { isMobile } = useMobile();
  const [bottom, setBottom] = useState<boolean>(false);
  const divRef = useRef(null) as any;

  const handleScroll = () => {
    const element = divRef.current;
    if (element) {
      const bottom =
        element.scrollHeight - element.scrollTop - element.clientHeight < 30;
      if (bottom) {
        setBottom(true);
      } else {
        setBottom(false);
      }
    }
  };

  return (
    <motion.div
      className={`${
        theme === Theme.Light && "relative"
      } flex flex-col md:h-[65vh] 2xl:h-[75vh] w-full`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="overflow-auto max-h-full no-scrollbar"
        ref={divRef}
        onScroll={handleScroll}
      >
        <Header
          className="px-6 md:pb-2 text-blue-900 dark:text-orange-600"
          title="Experience"
        />
        <div className="flex flex-col gap-2">
          {experienceData.map(
            ({ title, company, description, techstack, from, to }) => (
              <Experience
                key={title}
                title={title}
                company={company}
                description={description}
                techstack={techstack}
                from={from}
                to={to}
              />
            )
          )}
        </div>
        <Header
          className="px-6 pt-8 md:pb-2 text-blue-900 dark:text-orange-600"
          title="Projects"
        />
        <div className="flex flex-col gap-2">
          {projectData.map(
            ({ title, thumbnail, description, techstack, link }) => (
              <Project
                key={title}
                title={title}
                thumbnail={thumbnail}
                description={description}
                techstack={techstack}
                link={link}
              />
            )
          )}
        </div>
      </div>
      {theme === Theme.Light && !bottom && !isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      )}
    </motion.div>
  );
};

const Header = ({ className, title }: { className: string; title: string }) => {
  return (
    <div className={className}>
      <h1 className="text-sm md:text-base 2xl:text-lg font-medium">{title}</h1>
    </div>
  );
};
