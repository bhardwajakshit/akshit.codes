import { Theme } from "@/lib/types";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import { useMobile } from "@/contexts/MobileContext";
import { motion } from "framer-motion";

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
          <Experience
            title="Software Engineer 1"
            company="Matt Young Media"
            description="Developed and maintained full-stack applications using React.js, Next.js, TypeScript, and Tailwind CSS, while collaborating closely with design and engineering teams, making critical engineering, product, and design decisions, and mentoring interns. Successfully migrated legacy codebase to TypeScript, significantly enhancing code maintainability and developer productivity, and ensured application reliability with the addition of Playwright testing. Leveraged AWS services by implementing Lambda functions integrated with SQS for streamlined data processing and managing scheduling services using Mergent and Defer for operational efficiency. Automated workflows by developing a GitHub bot and additional internal tools for the team, enhancing productivity. Seamlessly integrated DocuSign and Stripe APIs for secure transactions."
            techstack={[
              "Next.js",
              "TypeScript",
              "React.js",
              "Svelte",
              "TailwindCSS",
              "Express.js",
              "Auth.js",
              "Playwright",
              "MongoDB",
              "Stripe API",
              "AWS",
              "Zod",
              "DocuSign",
              "Mergent",
              "Defer",
              "OpenAI API",
              "Github API",
              "Probot",
              "Resend",
            ]}
            from="Apr 2023"
            to="Present"
          />
          <Experience
            title="Software Engineer Intern"
            company="Matt Young Media"
            description="Improved and maintained dynamic front-end applications using React.js and Tailwind CSS. Developed robust backend functionalities with Express.js, including designing and managing REST APIs. Integrated Stripe for seamless payment processing and trial management, ensuring secure and efficient transaction flows. Employed Hotjar for testing and gathering user feedback, significantly enhancing the user experience and interface design."
            techstack={[
              "React.js",
              "TailwindCSS",
              "Express.js",
              "Node.js",
              "REST APIs",
              "MongoDB",
              "Stripe API",
              "Hotjar",
            ]}
            from="Feb 2023"
            to="Apr 2023"
          />
          <Experience
            title="Software Engineering Virtual Experience"
            company="JPMorgan Chase & Co."
            description="Developed and styled interactive financial data interfaces using JPMorgan Chase’s open-source Perspective library with React and TypeScript. Utilized Perspective to create visually appealing live graphs for real-time data feeds, enhancing monitoring capabilities for traders."
            techstack={["React.js", "TypeScript", "Perspective", "Python"]}
            from="Mar 2022"
            to="Mar 2022"
          />
        </div>
        <Header
          className="px-6 pt-8 md:pb-2 text-blue-900 dark:text-orange-600"
          title="Projects"
        />
        <div className="flex flex-col gap-2">
          <Project
            title="Status Sphere"
            thumbnail="/status-sphere.png"
            description="A unified platform for monitoring the real-time status of essential services like GitHub, Vercel, OpenAI and more in one place."
            techstack={["Next.js", "TypeScript", "TailwindCSS"]}
            link="https://statussphere.tech"
          />
          <Project
            title="Eyescape (Coming Soon)"
            thumbnail="/eyescape.png"
            description="Designed to alleviate eye strain during focused sessions by encouraging effective breaks, promoting eye health through regular pauses."
            techstack={["Tauri", "Rust", "React.js"]}
            link="https://akshit.codes"
          />
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
