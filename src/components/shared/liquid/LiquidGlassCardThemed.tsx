"use client";
import React, { ReactNode, useState, useEffect } from "react";
import LiquidGlassCard from "./LiquidGlassCard";

interface LiquidGlassCardThemedProps {
  children: ReactNode;
  className?: string;
}

const LiquidGlassCardThemed: React.FC<LiquidGlassCardThemedProps> = ({
  children,
  className = "",
}) => {
  const [themeClass, setThemeClass] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      setThemeClass("theme-dark");
    } else {
      setThemeClass("theme-light");
    }
  }, []);

  if (!children || !mounted) {
    return <LiquidGlassCard className={className}>{children}</LiquidGlassCard>;
  }

  const finalClass = `${themeClass} ${className}`;

  return <LiquidGlassCard className={finalClass}>{children}</LiquidGlassCard>;
};

export default LiquidGlassCardThemed;
