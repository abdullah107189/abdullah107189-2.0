"use client";

import * as React from "react";
import { Sun, Moon, Droplets } from "lucide-react"; // Droplets for liquid
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    { id: "liquid", icon: Droplets, label: "Liquid" }, // ✅ Liquid theme
  ] as const;

  return (
    <div className="flex items-center gap-1 p-1 bg-muted/80 backdrop-blur-sm rounded-xl border border-white/20">
      {themes.map(({ id, icon: Icon, label }) => (
        <Button
          key={id}
          variant={theme === id ? "default" : "ghost"}
          size="icon"
          className={cn(
            "h-9 w-9 rounded-lg transition-all duration-300",
            theme === id &&
              "shadow-lg scale-110 bg-gradient-to-br from-blue-500 to-purple-500 text-white"
          )}
          onClick={() => setTheme(id)}
          title={label}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}
