"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-center gap-12 sm:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="section-eyebrow mb-4">
            {profile.role} {"\u00B7"} {profile.focus}
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            {profile.fullName || profile.name}
          </h1>
          <p className="mt-5 max-w-lg text-base sm:text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-border-hover transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10">
            <p className="font-mono-label text-xs text-muted mb-2">
              {"// currently targeting"}
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.targets.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <NetworkGraphic />
      </div>
    </section>
  );
}

type Edge = { x1: number; y1: number; x2: number; y2: number; accent: boolean };
type Node = { cx: number; cy: number; r: number; color: string; big?: boolean };

const edges: Edge[] = [
  { x1: 60, y1: 60, x2: 160, y2: 120, accent: false },
  { x1: 160, y1: 120, x2: 260, y2: 70, accent: true },
  { x1: 160, y1: 120, x2: 100, y2: 200, accent: true },
  { x1: 160, y1: 120, x2: 230, y2: 200, accent: false },
  { x1: 100, y1: 200, x2: 230, y2: 200, accent: false },
  { x1: 260, y1: 70, x2: 230, y2: 200, accent: false },
];

const nodes: Node[] = [
  { cx: 160, cy: 120, r: 7, color: "#2dd4bf", big: true },
  { cx: 60, cy: 60, r: 5, color: "#60a5fa" },
  { cx: 260, cy: 70, r: 5, color: "#60a5fa" },
  { cx: 100, cy: 200, r: 5, color: "#2dd4bf" },
  { cx: 230, cy: 200, r: 5, color: "#60a5fa" },
];

function NetworkGraphic() {
  return (
    <svg
      viewBox="0 0 320 280"
      className="hidden sm:block w-full h-auto"
      aria-hidden="true"
    >
      <g stroke="#1f2732" strokeWidth="1">
        {edges.map((e, i) => (
          <line key={`base-${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
        ))}
      </g>

      {edges
        .filter((e) => e.accent)
        .map((e, i) => (
          <motion.line
            key={`accent-${i}`}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="#2dd4bf"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.2, ease: "easeInOut" }}
          />
        ))}

      {nodes.map((n, i) => (
        <motion.circle
          key={`glow-${i}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r + 6}
          fill={n.color}
          style={{ filter: "blur(4px)" }}
          initial={{ opacity: 0.08 }}
          animate={{ opacity: [0.08, 0.22, 0.08] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      {edges.map((e, i) => (
        <motion.circle
          key={`packet-${i}`}
          r={e.accent ? 2.4 : 1.8}
          fill={e.accent ? "#2dd4bf" : "#8b98a5"}
          opacity={e.accent ? 0.9 : 0.5}
          animate={{ cx: [e.x1, e.x2, e.x1], cy: [e.y1, e.y2, e.y1] }}
          transition={{
            duration: e.accent ? 3 : 4.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.4,
          }}
        />
      ))}

      {nodes.map((n, i) => (
        <circle
          key={`node-${i}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="#090c10"
          stroke={n.color}
          strokeWidth={n.big ? 2 : 1.6}
        />
      ))}
    </svg>
  );
}