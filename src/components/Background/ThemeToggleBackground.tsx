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
import Particles from "./ParticlesPro";
import GradientBlinds from "./GradientBlinds";
import { LightRays } from "./light-rays";
import ParticlesPro from "./ParticlesPro";

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
            <ParticlesPro
              className="w-full h-full"
              stars={500}
              particles={260}
              speed={1}
              parallaxStrength={1.0}
              sphereWarp={2.8}
              rotation={0.18}
              hoverOnlyInside={false} // keep parallax even under overlay content
              spread={9}
              baseSize={120}
              sizeJitter={0.85}
              colors={["#ffffff", "#b9d4ff", "#9ec2ff"]}
              starColor="#6ea8ff"
              alphaParticles
              cameraDistance={22}
              maxDPR={1.5}
              pauseWhenHidden
            />
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
