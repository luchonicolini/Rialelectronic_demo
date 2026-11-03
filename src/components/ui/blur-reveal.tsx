"use client";

import { motion, useReducedMotion } from "motion/react";
import React from "react";

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number;
  once?: boolean;
}

export function BlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  blur = 12,
  once = true,
}: BlurRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transitionEnd: {
          filter: "none",
        },
      }}
      viewport={{
        once,
        margin: "-40px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cubic-bezier suave
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
