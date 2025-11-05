"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeSplashProps {
  children: ReactNode;
  welcomeMessage?: string;
  duration?: number;
  strokeColor?: string;
}

export default function WelcomeSplash({
  children,
  duration = 3,
  strokeColor = "var(--color-primary)",
}: WelcomeSplashProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const dynamicStroke = strokeColor;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  const splashVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <AnimatePresence mode="wait">
      {!isLoaded && (
        <motion.div
          key="splash"
          variants={splashVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 flex flex-col items-center justify-center bg-background text-primary"
        >
          {!isLoaded && (
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
                    filling 5s ease-in forwards;
                  display: block !important;
                }

                .text-line text {
                  font-family: "Momo Signature", cursive;
                  font-weight: normal;
                  font-style: normal;
                }

                @keyframes dash {
                  to {
                    stroke-dashoffset: 0;
                  }
                }

                @keyframes filling {
                  0%,
                  90% {
                    fill: #bac736;
                    fill-opacity: 0;
                  }
                  100% {
                    fill: #bac736;
                    fill-opacity: 1;
                  }
                }
              `}</style>
            </svg>
          )}
        </motion.div>
      )}

      <div className={!isLoaded ? "opacity-0 h-0" : ""}>{children}</div>
    </AnimatePresence>
  );
}
