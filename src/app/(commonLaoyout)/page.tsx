import WelcomeSplash from "@/components/modules/intro/WelcomeSplash";
import FloatingDockDemo from "@/components/shared/Navbar/FloatingDockDemo";
import { ThemeToggleBackground } from "@/components/Background/ThemeToggleBackground";
import Hero from "@/components/sections/hero/default";
import About from "@/components/sections/about/About";
export default function Home() {
  return (
    <div>
      <WelcomeSplash duration={3}>
        {/* navbar  */}
        <FloatingDockDemo></FloatingDockDemo>
        <ThemeToggleBackground></ThemeToggleBackground>
        <Hero></Hero>
        <About></About>
      </WelcomeSplash>
    </div>
  );
}
