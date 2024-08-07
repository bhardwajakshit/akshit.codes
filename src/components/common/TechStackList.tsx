import React from "react";
import { motion } from "framer-motion";

const TechStackList = ({ techstack }: { techstack: string[] }) => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className="flex gap-2 overflow-x-auto w-[280px] md:w-[400px] no-scrollbar mt-auto"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {techstack.map((tech, index) => (
        <motion.li
          key={tech + index}
          className="px-2 py-0.5 rounded-md text-xs md:text-[13px] 2xl:text-[15px] font-[450] bg-blue-100 dark:bg-orange-600/10 text-blue-900 dark:text-orange-600 whitespace-nowrap"
          variants={itemVariants}
        >
          {tech}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TechStackList;
