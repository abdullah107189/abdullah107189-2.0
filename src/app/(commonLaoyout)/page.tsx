import WelcomeSplash from "@/components/modules/intro/WelcomeSplash";
import FloatingDockDemo from "@/components/shared/Navbar/FloatingDockDemo";
import { LiquidBackground } from "@/components/LiquidBackground";
export default function Home() {
  return (
    // <div>
    <WelcomeSplash duration={3}>
      {/* navbar  */}
      <FloatingDockDemo></FloatingDockDemo>
      <LiquidBackground></LiquidBackground>
      <div className="flex  items-center justify-center my-[120px]">
        <p className="text-5xl text-primary font-bold">hello</p>
      </div>
    </WelcomeSplash>
    // </div>
  );
}
