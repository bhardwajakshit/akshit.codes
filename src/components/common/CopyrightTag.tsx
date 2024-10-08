import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export const CopyrightTag = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-auto">
      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            role="link"
            className="m-1.5 text-gray-500 text-xs md:text-sm 2xl:text-base font-light relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100"
            aria-label={`Akshit Bhardwaj © ${year}`}
          >
            Akshit Bhardwaj © {year}
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="/icon.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm 2xl:text-base font-normal text-primary/80">
                Built using <Tech link="https://nextjs.org/" title="Next.js" />
                , <Tech
                  link="https://tailwindcss.com/"
                  title="Tailwind CSS"
                />,{" "}
                <Tech
                  link="https://www.framer.com/motion/"
                  title="Framer Motion"
                />
                , <Tech link="https://threejs.org/" title="Three.js" /> and{" "}
                <Tech link="https://github.com/akzhy/Vara" title="Vara.js" /> by
                yours truly. 👨🏻‍💻
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

const Tech = ({ link, title }: { link: string; title: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      className="text-blue-800 hover:text-blue-600 dark:text-orange-800 dark:hover:text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-600 dark:after:bg-orange-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      {title}
    </a>
  );
};
