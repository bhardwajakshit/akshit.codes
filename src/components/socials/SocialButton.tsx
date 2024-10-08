import { motion } from "framer-motion";

export const SocialButton = ({
  icon,
  link,
  color,
  label,
}: {
  icon: JSX.Element;
  link: string;
  color: string;
  label: string;
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${color} duration-300 transition-all`}
      initial={{ scale: 0, opacity: 0, rotate: 180, x: 50 }}
      animate={{ scale: 1, opacity: 1, rotate: 0, x: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      {icon}
    </motion.a>
  );
};
