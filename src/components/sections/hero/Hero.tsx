"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Tabler Icons
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandTypescript,
} from "@tabler/icons-react";
import LiquidGlassButton from "@/components/shared/liquid/LiquidGlassButton";
import TextHighlighter from "@/components/ui/text-highlighter";

const tech = [
  { Icon: IconBrandReact, label: "React", color: "#61DAFB" },
  { Icon: IconBrandNextjs, label: "Next.js", color: "#ffffff" },
  { Icon: IconBrandNodejs, label: "Node.js", color: "#68A063" },
  { Icon: IconBrandMongodb, label: "MongoDB", color: "#4DB33D" },
  { Icon: IconBrandTypescript, label: "TypeScript", color: "#3178C6" },
];

export default function Hero() {
  return (
    <section
      className="
      relative w-full min-h-[95vh] flex flex-col md:flex-row
      items-center justify-between
      px-6 md:px-20 pt-24 md:pt-28
      "
    >
      {/* =======================
          LEFT TEXT CONTENT
      ======================= */}
      <div className="flex items-center justify-start gap-5 md:w-[52%]">
        {/* social part  */}
        <div className="hidden md:flex space-y-4 flex-col items-start justify-center">
          <a
            data-aos="fade-left"
            data-aos-delay="600"
            href="https://github.com/abdullah107189"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-200 black"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.533 1.031 1.533 1.031.892 1.53 2.341 1.089 2.91.832.091-.647.35-1.089.635-1.34-2.22-.252-4.555-1.113-4.555-4.95 0-1.093.39-1.987 1.03-2.686-.103-.253-.447-1.27.098-2.646 0 0 .841-.269 2.75 1.026a9.564 9.564 0 0 1 2.5-.336 9.56 9.56 0 0 1 2.5.336c1.91-1.295 2.75-1.026 2.75-1.026.545 1.376.202 2.393.1 2.646.64.699 1.03 1.593 1.03 2.686 0 3.847-2.339 4.695-4.566 4.94.359.309.678.921.678 1.855 0 1.339-.013 2.421-.013 2.749 0 .268.181.579.688.481C19.138 20.162 22 16.413 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            data-aos="fade-left"
            data-aos-delay="700"
            href="https://www.linkedin.com/in/abdullah107189"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-200 black"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.267c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.267h-3v-4.844c0-1.144-.023-2.617-1.594-2.617-1.594 0-1.837 1.248-1.837 2.538v4.923h-3v-10h2.888v1.367h.042c.402-.761 1.385-1.563 2.85-1.563 3.05 0 3.614 2.008 3.614 4.623v5.573z" />
            </svg>
          </a>
          <a
            data-aos="fade-left"
            data-aos-delay="700"
            href="https://www.facebook.com/abdullah.shamem.5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition duration-200 black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.918c-1.505 0-1.797.715-1.797 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.116c.729 0 1.322-.593 1.322-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>

        {/* content part  */}
        <div className="w-full space-y-6 md:space-y-8 z-20 text-center md:text-left">
          {/* Title - CLAMP() FONT SIZE APPLIED HERE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            // Clamp: Minimum (3rem) < Preferred (8vw) < Maximum (5rem)
            // 8vw মানে স্ক্রিনের প্রস্থের 8%
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            className="
            font-bold leading-[1.15] text-4xl md:text-4xl lg:text-5xl xl:text-6xl
          "
          >
            Hi, I’m <br />
            <span
              className="
              bg-linear-to-r from-primary to-accent
              bg-clip-text text-transparent
            "
            >
              Md. Abdullah All Shamem
            </span>
            <br />
            <TextHighlighter type="wavy" highlightColor="#7462e4">
              Fullstack Developer
            </TextHighlighter>
          </motion.h1>

          {/* Subtitle - CLAMP() FONT SIZE APPLIED HERE */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            // Clamp: Minimum (1rem) < Preferred (2.5vw) < Maximum (1.5rem)
            style={{ fontSize: "clamp(1rem, 1.5vw, 1rem)" }}
            className="
            text-muted-foreground
            max-w-lg mx-auto md:mx-0
          "
          >
            I build modern, animated, fast, and UX-optimized full-stack web
            applications using the MERN stack, Next.js, and TypeScript.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="
            flex gap-4 mt-3 md:mt-6 justify-center md:justify-start
          "
          >
            <LiquidGlassButton
              className="
              md:px-6 px-4 md:py-2 py-1 rounded-2xl font-medium
             bg-primary! text-secondary-foreground shadow-lg cursor-pointer
            "
            >
              Work with me
            </LiquidGlassButton>
            <LiquidGlassButton
              className="
              md:px-6 px-4 md:py-3 py-1 rounded-2xl font-medium
             bg-transparent border-primary border hover:bg-primary
             transform duration-200 hover:text-secondary-foreground shadow-lg cursor-pointer
            "
            >
              View Resume
            </LiquidGlassButton>
          </motion.div>

          {/* Floating Tech Pills */}
          <div
            className="
          flex flex-wrap gap-3 md:gap-4 
          justify-center md:justify-start pt-4
          "
          >
            {tech.map(({ Icon, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.6 }}
                className="
                px-4 py-2 rounded-full flex items-center gap-2
                bg-card shadow-sm border border-border
              "
              >
                <Icon size={20} stroke={1.5} color={color} />
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =======================
          RIGHT IMAGE
      ======================= */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative w-full md:w-[48%] mt-12 md:mt-0 flex justify-center
        "
      >
        {/* Shape Background */}
        <div
          className="
            absolute w-[75%] h-[75%] md:h-[80%] md:w-[80%]
            bg-linear-to-br from-primary/20 to-accent/20
            rounded-[40px] blur-[60px]
          "
        ></div>

        {/* Masked Photo */}
        <Image
          src="/professionalMeWithNoneBg.png"
          alt="Abdullah"
          width={500}
          height={600}
          className="
            relative z-20 select-none
            [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]
          "
        />
      </motion.div>
    </section>
  );
}
