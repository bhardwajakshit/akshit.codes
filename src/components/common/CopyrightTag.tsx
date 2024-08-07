import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
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
          <Button
            variant="link"
            className="text-gray-400 text-xs md:text-sm 2xl:text-base font-light"
            aria-label={`Akshit Bhardwaj © ${year}`}
          >
            Akshit Bhardwaj © {year}
          </Button>
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
      className="text-blue-800 hover:text-blue-600 dark:text-orange-800 dark:hover:text-orange-600"
    >
      {title}
    </a>
  );
};
