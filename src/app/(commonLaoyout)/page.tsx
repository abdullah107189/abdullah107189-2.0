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
        {/* navbar  and background */}
        <div className="fixed w-full md:top-7 top-2 z-50 px-4">
          <FloatingDockDemo></FloatingDockDemo>
        </div>
        <ThemeToggleBackground></ThemeToggleBackground>

        {/* home content here  */}
        <div className="max-w-7xl mx-auto">
          <Hero></Hero>
          <About></About>
          <Skills></Skills>u
        </div>
      </WelcomeSplash>
    </div>
  );
}
