import React, { ReactNode, MouseEvent } from "react";
import "./LiquidGlassButton.css";
interface GlassButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const LiquidGlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className={`liquid-btn bg-primary/7 ${variant} ${size} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default LiquidGlassButton;
