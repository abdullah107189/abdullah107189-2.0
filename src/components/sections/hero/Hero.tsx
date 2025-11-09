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
      <div className="w-full md:w-[52%] space-y-6 md:space-y-8 z-20 text-center md:text-left">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl md:text-6xl font-bold leading-[1.15]
          "
        >
          Hi, I’m{" "}
          <span
            className="
            bg-linear-to-r from-blue-500 to-cyan-400
            bg-clip-text text-transparent
          "
          >
            Md. Abdullah All Shamem
          </span>
          , MERN Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="
            text-lg md:text-xl text-muted-foreground
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
          <button
            className="
              px-6 py-3 rounded-xl font-medium
              bg-linear-to-r from-blue-500 to-cyan-400
              text-white shadow-lg hover:scale-[1.04] transition
            "
          >
            Hire Me
          </button>

          <button
            className="
              px-6 py-3 rounded-xl font-medium
              border border-border hover:bg-muted/40 transition
            "
          >
            View Resume
          </button>
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
            bg-linear-to-br from-blue-400/20 to-cyan-300/20
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
