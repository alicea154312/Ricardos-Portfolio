"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Wraps a section so it fades + slides in on scroll down, and fades back
// out when it scrolls out of view (up past the top, or down past the
// bottom) — since `once` is false, the animation reverses both ways.
export default function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}