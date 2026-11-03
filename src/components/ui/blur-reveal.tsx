"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { useEffect, useState } from "react";

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number;
  once?: boolean;
}

// Bandera en memoria para evitar repeticiones durante la misma sesión de React
let hasEnteredSession = false;

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
  const [alreadyEntered, setAlreadyEntered] = useState(hasEnteredSession);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("rial_entered");
      if (stored) {
        hasEnteredSession = true;
        setAlreadyEntered(true);
      } else {
        sessionStorage.setItem("rial_entered", "1");
        hasEnteredSession = true;
      }
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
