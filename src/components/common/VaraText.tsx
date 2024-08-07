import { Theme } from "@/lib/types";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import Vara from "vara";

export function VaraText({ text }: { text: string }) {
  const { theme } = useTheme();
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = "";
    }

    new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          duration: 2000,
          fontSize: 18,
          strokeWidth: 2,
          color: theme === Theme.Dark ? "#cf4729" : "darkblue",
          letterSpacing: 1.5,
          autoAnimation: true,
          y: 10,
        },
      ]
    );
  }, [theme]);

  return (
    <div
      ref={textRef}
      id="vara-container"
      className="w-20 cursor-pointer"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1NnC87YL44xzszFYX2FIVyWS3VN8C7tMF",
          "_blank"
        )
      }
    />
  );
}
