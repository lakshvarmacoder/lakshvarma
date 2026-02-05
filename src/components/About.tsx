"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);

  return (
    <section ref={ref} className="min-h-screen bg-white text-black py-20 md:py-32 px-6 md:px-8 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Image Side */}
        <motion.div 
          style={{ y, opacity }} 
          className="w-full flex justify-center select-none order-2 md:order-1"
        >
          <div className="relative w-full aspect-square max-w-md md:max-w-full">
            <div className="absolute inset-0 bg-gray-100 rounded-3xl" />
            <Image 
              src="/profile.jpeg" 
              alt="Laksh Varma"
              fill
              className="object-cover rounded-3xl" 
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          className="w-full flex flex-col justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
            Building systems that are both <span className="text-gray-500">efficient</span> and <span className="text-gray-500">beautiful</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            <p>
              I'm a Computer Engineering student passionate about understanding software at every level—from memory management in C++ to modern web frameworks like React.
            </p>
            <p>
              I believe great software comes from deep fundamentals. Every line of code should be intentional, performant, and part of a beautiful user experience.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col gap-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Current Focus</span>
            <span className="text-black font-semibold text-lg">Diploma in Computer Engineering</span>
            <span className="text-gray-500 text-sm">Specializing in Systems & Web Architecture</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
