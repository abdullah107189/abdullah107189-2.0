"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NumberTicker } from "./NumberTicker";
import FullStackListAnimation from "./FullStackPoints";
import { useTheme } from "next-themes";

interface WelcomeSplashProps {
  children: ReactNode;
  welcomeMessage?: string;
  duration?: number;
  strokeColor?: string;
}
function useThemeReady() {
  const { resolvedTheme } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReady(true);
    }
  }, [resolvedTheme]);

  return ready;
}
export default function WelcomeSplash({
  children,
  duration = 5,
  strokeColor = "var(--color-primary)",
}: WelcomeSplashProps) {
  const dynamicStroke = strokeColor;
  const [animationDone, setAnimationDone] = useState(false);

  // ✅ STEP–2: Use hook here
  const themeReady = useThemeReady();
  const hideSplash = animationDone && themeReady;

  // timer
  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);
  // const splashVariants = {
  //   initial: { opacity: 1 },
  //   exit: { opacity: 0, transition: { duration: 0.5, delay: 0.5 } },
  // };
  return (
    <AnimatePresence mode="wait">
      {!hideSplash && (
        <motion.div
          key="splash"
          // variants={splashVariants}
          // initial="initial"
          // animate="initial"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background"
        >
          <>
            <svg
              height="100%"
              stroke={dynamicStroke}
              strokeWidth="2"
              className="text-line"
              width="100%"
              style={{ display: "none" }}
            >
              <text
                x="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-[35px] md:text-[50px] lg:text-[80px] xl:text-[100px]"
                y="50%"
              >
                Md. Abdullah All Shamem
              </text>
              <style jsx>{`
                .text-line {
                  stroke-dasharray: 500;
                  stroke-dashoffset: 500;
                  animation: dash 5s linear forwards,
                    filling 4s ease-in forwards;
                  display: block !important;
                }

                .text-line text {
                  font-family: "Momo Signature", cursive;
                }

                @keyframes dash {
                  to {
                    stroke-dashoffset: 0;
                  }
                }

                @keyframes filling {
                  0%,
                  85% {
                    fill-opacity: 0;
                  }
                  90% {
                    fill-opacity: 1;
                  }
                  100% {
                    fill-opacity: 1;
                  }
                }
              `}</style>
            </svg>
            <div className="absolute bottom-2 right-2 font-mono">
              <NumberTicker
                className="text-3xl md:text-5xl lg:text-6xl font-semibold"
                style={{ fontFamily: "Momo Signature, cursive" }}
                value={100}
              ></NumberTicker>
            </div>
            <div className="absolute bottom-[50px] left-[50px] w-full">
              <FullStackListAnimation></FullStackListAnimation>
            </div>
          </>
        </motion.div>
      )}
      <div className={!hideSplash ? "opacity-0" : "opacity-100"}>
        {children}
      </div>
    </AnimatePresence>
  );
}
