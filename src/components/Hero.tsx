"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-0">
      
      {/* Background accent - subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8 md:mb-12"
        >
          Computer Engineering Student
        </motion.p>
        
        {/* Main name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-black mb-6 md:mb-8"
        >
          Laksh Varma
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Building efficient systems and beautiful software experiences
        </motion.p>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-gray-400" />
      </motion.div>

    </section>
  );
}
