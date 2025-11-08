"use client";

import * as React from "react";
import { Sun, Moon, Droplets } from "lucide-react"; // Droplets for liquid
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LiquidGlassButton from "../shared/liquid/LiquidGlassButton";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Droplets className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  const themes = [
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
    { id: "liquid", icon: Droplets, label: "Liquid" },
  ] as const;

  return (
    <div className="bg-popover  liquidBtnShadow my-1 flex items-center gap-2 md:p-2 p-2 rounded-full">
      {themes.map(({ id, icon: Icon }) => (
        <LiquidGlassButton
          key={id}
          className={cn(
            "h-9 w-9 transition-all flex items-center justify-center cursor-pointer duration-300 rounded-full",
            theme === id ? "cursor-default" : ""
          )}
          onClick={() => setTheme(id)}
          // title={label}
        >
          <Icon className="h-4 w-4" />
        </LiquidGlassButton>
      ))}
      <style jsx>{`
        .liquid .themeBackground {
        background
        }
      `}</style>
    </div>
  );
}
