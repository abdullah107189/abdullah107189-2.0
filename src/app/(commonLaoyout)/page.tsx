import WelcomeSplash from "@/components/modules/intro/WelcomeSplash";
import FloatingDockDemo from "@/components/shared/Navbar/FloatingDockDemo";
import { ThemeToggleBackground } from "@/components/Background/ThemeToggleBackground";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";
export default function Home() {
  return (
    <div>
      <WelcomeSplash duration={3}>
        {/* navbar  */}
        <FloatingDockDemo></FloatingDockDemo>
        <ThemeToggleBackground></ThemeToggleBackground>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
      </WelcomeSplash>
    </div>
  );
}
