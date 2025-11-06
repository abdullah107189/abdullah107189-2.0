"use client";
import { useTheme } from "next-themes";
import { DotPattern } from "../ui/dot-pattern";
import FireworksBackgroundDemo from "../animate-ui/components/backgrounds/demo-components-backgrounds-fireworks";
import { useEffect, useState } from "react";
import GridBackgroundDemo from "./GridBackgroundDemo";
import SplashCursor from "./SplashCursor";
import DarkVeil from "./DarkVeil";
import { Meteors } from "./Meteors";
import { AnimatedGridPattern } from "./AnimatedGridPattern";
import Particles from "./Particles";
import GradientBlinds from "./GradientBlinds";
import { LightRays } from "./light-rays";

export function ThemeToggleBackground() {
  const { theme, resolvedTheme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const currentTheme = isClient ? resolvedTheme || theme : "";
  // ✅ Server এবং Client এ same structure

  return (
    <>
      <div className={`fixed inset-0 -z-30 transition-all duration-1000 `}>
        {currentTheme === "light" ? (
          <>
            <GridBackgroundDemo></GridBackgroundDemo>
          </>
        ) : currentTheme === "dark" ? (
          <>
            {/* <DotPattern className="mask-[radial-gradient(400px_circle_at_center,white,transparent)]"></DotPattern> */}
            {/* <DarkVeil /> */}
            {/* <AnimatedGridPattern></AnimatedGridPattern> */}
            {/* <Meteors number={30} /> */}
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
          </>
        ) : (
          currentTheme === "liquid" && (
            <>
              {/* <FireworksBackgroundDemo population={2}></FireworksBackgroundDemo> */}
              {/* <DotPattern className="mask-[radial-gradient(400px_circle_at_center,white,transparent)]"></DotPattern> */}
              {/* <div
                style={{
                  width: "100%",
                  height: "600px",
                  position: "relative",
                }}
              > */}
              {/* <GradientBlinds
                  gradientColors={["#FF9FFC", "#5227FF"]}
                  angle={0}
                  noise={0.3}
                  blindCount={12}
                  blindMinWidth={50}
                  spotlightRadius={0.5}
                  spotlightSoftness={1}
                  spotlightOpacity={1}
                  mouseDampening={0.15}
                  distortAmount={0}
                  shineDirection="left"
                  mixBlendMode="lighten"
                /> */}
              {/* </div> */}
              <LightRays
                count={10}
                speed={15}
                color="hsl(210, 80%, 70%)" 
                blur={40}
              />
              {/* <SplashCursor></SplashCursor> */}
            </>
          )
        )}
      </div>
    </>
  );
}
