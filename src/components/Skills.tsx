"use client";

import { motion } from "framer-motion";

const SKILLS_TOP = ["C++", "PYTHON", "JAVA", "JAVASCRIPT", "C", "TYPESCRIPT"];
const SKILLS_BOTTOM = ["NEXT.JS", "REACT", "FASTAPI", "GIT", "VERCEL", "TAILWIND"];

export default function Skills() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-b border-white/5 relative z-10">
      <div className="flex flex-col gap-10">
        {/* Row 1: Moving Left */}
        <MarqueeItem items={SKILLS_TOP} direction="left" speed={20} />
        
        {/* Row 2: Moving Right */}
        <MarqueeItem items={SKILLS_BOTTOM} direction="right" speed={20} />
      </div>
    </section>
  );
}

function MarqueeItem({ items, direction, speed }: { items: string[], direction: "left" | "right", speed: number }) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap mask-linear-fade">
      <motion.div
        className="flex gap-16 md:gap-32 pr-16 md:pr-32"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render the list twice to ensure seamless looping */}
        {[...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-800 hover:text-neutral-100 transition-colors duration-500 cursor-default"
            // Adding a text stroke effect for that 'hollow' look
            style={{ 
                WebkitTextStroke: "1px rgba(255,255,255,0.1)",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}