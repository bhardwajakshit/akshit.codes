import { useMobile } from "@/contexts/MobileContext";
import { Theme } from "@/lib/types";
import { motion } from "framer-motion";
import { MoonSat, SunLight } from "iconoir-react";
import { useTheme } from "next-themes";
import { useRef } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { isMobile } = useMobile();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/fire.wav");
      audioRef.current.loop = true;
      audioRef.current.play().catch((error: string) => {
        console.error("Failed to play audio:", error);
      });
    }
  };

  const handleToggleTheme = () => {
    const updatedTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    if (theme === Theme.Light && !isMobile) {
      const img = new Image();
      img.src = "/torch-burning.gif";
      playAudio();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setTheme(updatedTheme);
  };

  return (
    <motion.button
      onClick={handleToggleTheme}
      initial={{ scale: 1, opacity: 0, rotate: 0 }}
      animate={{ scale: 1.1, opacity: 1, rotate: 180 }}
      whileHover={{ scale: 1.2, rotate: 0 }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      transition={{ duration: 0.5 }}
      className="outline-none"
      aria-label="Toggle Theme"
    >
      {theme === Theme.Dark ? <SunLight /> : <MoonSat />}
    </motion.button>
  );
};
