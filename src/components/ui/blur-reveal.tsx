"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { useEffect, useSyncExternalStore } from "react";

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number;
  once?: boolean;
}

function subscribeSession() {
  return () => {};
}

function getSessionSnapshot() {
  if (typeof window === "undefined") return false;
  return Boolean(sessionStorage.getItem("rial_entered"));
}

function getServerSnapshot() {
  return false;
}

export function BlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.2,
  yOffset = 6,
  blur = 0,
  once = true,
}: BlurRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const alreadyEntered = useSyncExternalStore(
    subscribeSession,
    getSessionSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (typeof window !== "undefined" && !sessionStorage.getItem("rial_entered")) {
      sessionStorage.setItem("rial_entered", "1");
    }
  }, []);

  // Si el usuario prefiere movimiento reducido o ya navegó en la web, se renderiza inmediatamente sin animación
  if (shouldReduceMotion || alreadyEntered) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: blur > 0 ? "blur(0px)" : undefined,
      }}
      viewport={{
        once,
        margin: "0px",
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
