"use client";
import { useTheme } from "next-themes";
import { DotPattern } from "./ui/dot-pattern";
import FireworksBackgroundDemo from "./animate-ui/components/backgrounds/demo-components-backgrounds-fireworks";
import { useEffect, useState } from "react";

export function LiquidBackground() {
  const { theme, resolvedTheme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  // ✅ Server এবং Client এ same structure
  const currentTheme = isClient ? resolvedTheme || theme : "light";

  return (
    <>
      <div className={`fixed inset-0 -z-30 transition-all duration-1000 `}>
        {currentTheme === "light" ? (
          <FireworksBackgroundDemo population={2}></FireworksBackgroundDemo>
        ) : currentTheme === "dark" ? (
          <DotPattern className="mask-[radial-gradient(400px_circle_at_center,white,transparent)]"></DotPattern>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
