import { motion } from "framer-motion";
import { ThemeToggle } from "../common/ThemeToggle";
import { useTheme } from "next-themes";
import { Theme } from "@/lib/types";

export const Header = ({
  updateCursor,
}: {
  updateCursor: (cursorUrl: string) => void;
}) => {
  const { theme } = useTheme();

  return (
    <motion.div className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-2" id="container">
        <motion.h1
          className="text-xl md:text-2xl 2xl:text-3xl font-[550]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello! I&apos;m Akshit. 👨🏻‍💻
        </motion.h1>
        <motion.p
          className="text-sm md:text-base 2xl:text-lg font-normal"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          I bring ideas to life through full-stack{" "}
          <span
            className="py-1.5 bg-clip-text text-transparent hover:text-white dark:hover:text-transparent bg-gradient-to-r from-indigo-600 dark:from-[#cf4729] via-purple-600 dark:via-yellow-500 to-pink-600 dark:bg-red-700 animated-gradient transition-colors duration-300"
            onMouseEnter={() => {
              theme === Theme.Light && updateCursor("/kickflip.ani");
            }}
            onMouseLeave={() => {
              theme === Theme.Light && updateCursor("./smoke.ani");
            }}
          >
            magic!
          </span>
        </motion.p>
      </div>
      <ThemeToggle />
    </motion.div>
  );
};
