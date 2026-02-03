"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* THE NAME - PURE IMPACT */}
      <div className="text-center z-10 select-none">
        
        {/* LAKSH - White */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} 
          className="text-[15vw] md:text-[12rem] leading-[0.85] font-bold tracking-tighter text-white"
        >
          LAKSH
        </motion.h1>
        
        {/* VARMA - Dark Gray (Subtle) */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-[15vw] md:text-[12rem] leading-[0.85] font-bold tracking-tighter text-neutral-800"
        >
          VARMA
        </motion.h1>

      </div>

      {/* OPTIONAL: A barely visible gradient at the bottom to hint that there is more content */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>

    </section>
  );
}