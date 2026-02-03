"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  
  const ref = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // 1. STRONGER Parallax: Moves the image UP by 150px as you scroll down
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  // 2. Text Parallax: Moves the text DOWN slightly (Creating separation)
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  // 3. Opacity Fade: Fades out slightly at the very top (Optional polish)
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen bg-[#050505] text-white py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 overflow-hidden">
      
      {/* Image Side (Moves UP) */}
      <motion.div 
        style={{ y, opacity }} 
        className="w-full md:w-1/2 flex justify-center md:justify-start select-none"
      >
        <div className="relative w-full aspect-square md:aspect-[4/5] md:h-[600px] grayscale contrast-125">
           <Image 
             src="/profile.jpeg" 
             alt="Laksh Varma"
             fill
             className="object-contain md:object-cover pointer-events-none select-none" 
             draggable={false}
             priority
           />
        </div>
      </motion.div>

      {/* Text Side (Moves DOWN slightly) */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
          Defined by <br/>
          <span className="text-neutral-500">code.</span>
        </h2>

        <div className="space-y-6 text-lg text-neutral-400 leading-relaxed max-w-md">
          <p>
            I am Laksh Varma, a Computer Engineering student focused on building systems that work.
          </p>
          <p>
            I believe great software is born from a deep understanding of the fundamentals. I am constantly pushing past the surface level—exploring how memory works in C++ or how rendering works in React—to build applications that are as efficient as they are beautiful.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-2">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Education</span>
            <span className="text-white font-medium tracking-wide">Diploma in Computer Engineering</span>
            <span className="text-neutral-500 text-sm">In Progress</span>
        </div>

      </motion.div>

    </section>
  );
}