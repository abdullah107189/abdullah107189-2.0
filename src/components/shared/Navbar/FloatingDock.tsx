"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";
import LiquidGlassButton from "../liquid/LiquidGlassButton";
import LiquidGlassCard from "../liquid/LiquidGlassCard";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import GlassSurface from "../liquid/GlassSurface";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <LiquidGlassCard className="w-full md:flex justify-between  items-center mx-auto max-w-7xl rounded-3xl">
        <p className="text-4xl font-semibold text-primary ml-4">Abdullah</p>
        <FloatingDockDesktop items={items} className={desktopClassName} />

        <div className="mr-4">
          <ThemeToggle></ThemeToggle>
        </div>
      </LiquidGlassCard>
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// pc
const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div className="hidden md:block ">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto hidden h-16 items-end gap-4 pb-3 md:flex justify-center",
          className
        )}
      >
        {items.map((item) => (
          <LiquidGlassButton key={item.title} className="rounded-full">
            <IconContainer mouseX={mouseX} {...item} />
          </LiquidGlassButton>
        ))}
      </motion.div>
    </div>
  );
};

// mobile
const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed md:hidden bottom-0 right-0 z-[9999px]">
      <div
        className={cn(
          "absolute right-5 bottom-[100px] rounded-full z-10 md:hidden",
          className
        )}
      >
        <AnimatePresence>
          {open && (
            <motion.div layoutId="nav" className="mb-3 flex flex-col gap-2">
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <LiquidGlassButton className="rounded-full">
                    <a
                      href={item.href}
                      key={item.title}
                      className="flex h-10 w-10 items-center  justify-center rounded-full"
                    >
                      <div className="h-4 w-4">{item.icon}</div>
                    </a>
                  </LiquidGlassButton>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <LiquidGlassButton
          className="rounded-full"
          onClick={() => setOpen(!open)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full">
            <IconLayoutNavbarCollapse className="h-5 w-5" />
          </div>
        </LiquidGlassButton>
      </div>
    </div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} className="cursor-auto">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative cursor-pointer flex aspect-square items-center justify-center rounded-full"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-20%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -bottom-6 left-1/2 w-fit rounded-md border px-2 py-0.5 text-xs whitespace-pre"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center  justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
