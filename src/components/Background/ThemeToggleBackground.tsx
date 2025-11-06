"use client";
import { useTheme } from "next-themes";
import { DotPattern } from "../ui/dot-pattern";
import FireworksBackgroundDemo from "../animate-ui/components/backgrounds/demo-components-backgrounds-fireworks";
import { useEffect, useState } from "react";
import GridBackgroundDemo from "./GridBackgroundDemo";
import SplashCursor from "./SplashCursor";
import DarkVeil from "./DarkVeil";

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
          </>
        ) : (
          currentTheme === "liquid" && (
            <>
              {/* <FireworksBackgroundDemo population={2}></FireworksBackgroundDemo> */}
              <DotPattern className="mask-[radial-gradient(400px_circle_at_center,white,transparent)]"></DotPattern>
              {/* <SplashCursor></SplashCursor> */}
            </>
          )
        )}
      </div>
    </>
  );
}
