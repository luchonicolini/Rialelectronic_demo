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

function subscribeToStorage() {
  return () => {};
}

function getSessionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return Boolean(sessionStorage.getItem("rial_entered"));
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export function BlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.18,
  yOffset = 6,
  once = true,
}: BlurRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const alreadyEntered = useSyncExternalStore(
    subscribeToStorage,
    getSessionSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    try {
      sessionStorage.setItem("rial_entered", "1");
    } catch {
      // Ignorar si el almacenamiento está restringido
    }
  }, []);

  // Si el usuario prefiere movimiento reducido o ya ingresó en esta sesión, se renderiza de inmediato sin animación
  if (shouldReduceMotion || alreadyEntered) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
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
