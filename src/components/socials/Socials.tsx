import { Github, Linkedin, Mail, X } from "iconoir-react";
import { SocialButton } from "./SocialButton";
import { motion } from "framer-motion";
import { VaraText } from "../common/VaraText";

type Social = {
  id: number;
  icon: JSX.Element;
  label: string;
  link: string;
  color: string;
};

export const Socials = () => {
  const socials = [
    {
      id: 1,
      icon: <Github />,
      label: "github",
      link: "https://github.com/bhardwajakshit",
      color: "hover:text-green-500",
    },
    {
      id: 2,
      icon: <Linkedin />,
      label: "linkedin",
      link: "https://www.linkedin.com/in/akshitbhardwaj/",
      color: "hover:text-blue-500",
    },
    {
      id: 3,
      icon: <X />,
      label: "twitter",
      link: "https://www.twitter.com/bhardwajaks_",
      color: "hover:text-red-500",
    },
    {
      id: 4,
      icon: <Mail />,
      label: "mail",
      link: "mailto:akshit.dev@hotmail.com",
      color: "hover:text-purple-500",
    },
  ] as Social[];

  return (
    <motion.div
      className="flex items-center justify-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {socials.map((social) => (
        <SocialButton
          key={social.id}
          icon={social.icon}
          link={social.link}
          color={social.color}
          label={social.label}
        />
      ))}
      {/* <VaraText text="Resume" /> */}
    </motion.div>
  );
};
