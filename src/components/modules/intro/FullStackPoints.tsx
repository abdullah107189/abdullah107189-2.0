import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { IconChevronsRight } from "@tabler/icons-react";

const fullStackPoints = [
  { text: "High-Performance Web Apps" },
  { text: "Scalable Secure APIs" },
  { text: "Clean Reusable Components" },
  { text: "E2E Feature Delivery" },
];

const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0,
    },
  },
  hidden: {},
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 40,
    },
  },
};

export default function FullStackListAnimation(): JSX.Element {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      {fullStackPoints.map((point, index) => (
        <motion.div
          className="md:text-2xl font-mono space-x-12 flex items-center gap-2"
          key={index}
          variants={itemVariants}
          style={{}}
        >
          <IconChevronsRight color="green" stroke={2} />
          {point.text}
        </motion.div>
      ))}
    </motion.div>
  );
}
