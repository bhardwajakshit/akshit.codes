import React from "react";
import { motion } from "framer-motion";

const StaggerText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const words = text.split(" ");

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.p
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default StaggerText;
