import WelcomeSplash from "@/components/modules/intro/WelcomeSplash";
import FloatingDockDemo from "@/components/shared/Navbar/FloatingDockDemo";
import { ThemeToggleBackground } from "@/components/ThemeToggleBackground";
export default function Home() {
  return (
    // <div>
    <WelcomeSplash duration={3}>
      {/* navbar  */}
      <FloatingDockDemo></FloatingDockDemo>
      <ThemeToggleBackground></ThemeToggleBackground>
      <div className="flex  items-center justify-center my-[120px]">
        <p className="text-5xl text-primary font-bold">hello</p>
      </div>
    </WelcomeSplash>
    // </div>
  );
}
