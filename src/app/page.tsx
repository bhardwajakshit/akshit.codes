"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Theme } from "@/lib/types";
import { convertAniBinaryToCSS } from "ani-cursor";
import { Header } from "@/components/header/Header";
import { Socials } from "@/components/socials/Socials";
import { Scene } from "@/components/three/Scene";
import { Journey } from "@/components/journey/Journey";
import { FirePoints } from "@/components/common/FirePoints";
import { CopyrightTag } from "@/components/common/CopyrightTag";
import { useMobile } from "@/contexts/MobileContext";

export default function Home() {
  const { isMobile } = useMobile();
  const { theme } = useTheme();
  const darkTheme = theme === Theme.Dark;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [specifiedPositions, setSpecifiedPositions] = useState<
    Array<{ x: number; y: number; fire: boolean }>
  >(Array(7).fill({ x: -1000, y: -1000, fire: false }));
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function applyCursor(selector: string, aniUrl: string | URL | Request) {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());

    const style = document.createElement("style");
    style.innerText = convertAniBinaryToCSS(selector, data);

    document.head.appendChild(style);
  }

  function updateCursor(cursorUrl: string) {
    if (!isMobile) {
      applyCursor("#pointer", cursorUrl);
    }
  }

  useEffect(() => {
    if (!isMobile) {
      applyCursor("#pointer", darkTheme ? "./torch.ani" : "./smoke.ani");

      const handleMouseMove = (e: { clientX: any; clientY: any }) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [darkTheme, isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const screenWidth = window.innerWidth;
    const radius = screenWidth < 1600 ? 500 : 700;

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "destination-out";
      const gradient1 = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        300
      );
      gradient1.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient1.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient1;
      ctx.beginPath();
      ctx.arc(mousePosition.x, mousePosition.y, 300, 0, Math.PI * 2);
      ctx.fill();

      specifiedPositions.forEach(({ x, y, fire }) => {
        if (fire) {
          ctx.globalCompositeOperation = "destination-out";

          const gradient2 = ctx.createRadialGradient(x, y, 0, x, y, radius);
          gradient2.addColorStop(0, "rgba(255, 160, 160, 1)");
          gradient2.addColorStop(0.8, "rgba(255, 80, 0, 0.9)");
          gradient2.addColorStop(1, "rgba(255, 0, 0, 0)");

          ctx.fillStyle = gradient2;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalCompositeOperation = "source-over";
    };

    draw();

    return () => {};
  }, [mousePosition, specifiedPositions, darkTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isMobile && (
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      )}
      <div id="pointer" className="relative" key="pointer">
        {!isMobile && (
          <>
            <FirePoints setSpecifiedPositions={setSpecifiedPositions} />
            {theme == Theme.Dark && (
              <canvas
                ref={canvasRef}
                className="absolute z-20 inset-0 pointer-events-none"
                width={window.innerWidth}
                height={window.innerHeight}
              ></canvas>
            )}
          </>
        )}
        <motion.div
          key="main"
          className={`flex flex-col md:h-screen overflow-y-scroll no-scrollbar w-[85vw] lg:w-[76vw] items-center justify-center pt-4 md:pt-8 gap-4 mx-auto select-none ${
            darkTheme ? "bg-background" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-start justify-center gap-6 w-full p-4">
            <Header updateCursor={updateCursor} />
            <Socials />
          </div>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex justify-center lg:w-1/3">
              <Scene />
            </div>
            <Journey />
          </div>
          <CopyrightTag />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
