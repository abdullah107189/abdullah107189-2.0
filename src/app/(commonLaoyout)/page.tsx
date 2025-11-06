import WelcomeSplash from "@/components/modules/intro/WelcomeSplash";
import FloatingDockDemo from "@/components/shared/Navbar/FloatingDockDemo";
import { ThemeToggleBackground } from "@/components/Background/ThemeToggleBackground";
export default function Home() {
  return (
    <div className="h-svh">
      <WelcomeSplash duration={3}>
        {/* navbar  */}
        <FloatingDockDemo></FloatingDockDemo>
        <ThemeToggleBackground></ThemeToggleBackground>
        <div className="flex bg-accent items-center justify-center my-[120px]">
          <p className="text-5xl text-foreground font-bold border border-border">
            hello
          </p>
        </div>
      </WelcomeSplash>
    </div>
  );
}
