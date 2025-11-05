import React, { ReactNode } from "react";
import "./LiquidGlassCard.css";
interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
}
const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className = "",
}) => {
  if (!children) {
    return <></>;
  }
  return (
    <div className={`liquid-glass-card relative bg-background ${className}`}>
      <div className={`card-content  ${className}`}>{children}</div>
    </div>
  );
};

export default LiquidGlassCard;
