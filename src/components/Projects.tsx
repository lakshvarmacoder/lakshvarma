"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Projects() {
  
  const [visibleCount, setVisibleCount] = useState(3);

  const PROJECTS = [
    
    
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-32 px-6 md:px-20 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 border-b border-white/10 pb-8 flex justify-between items-end">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Projects
          </h2>
          <span className="text-neutral-500 font-mono text-sm tracking-widest mb-2">
            {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length} Total
          </span>
        </div>

        {PROJECTS.length === 0 ? (
          
          /* --- COOKING MODE --- */
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] border border-dashed border-white/10 rounded-3xl bg-neutral-900/10 flex flex-col items-center justify-center gap-8 overflow-hidden relative"
          >
             <div className="relative w-32 h-32 flex items-end justify-center">
               <motion.div className="absolute bottom-16 w-3 h-3 border border-white rounded-full bg-white/10" initial={{ y: 0, opacity: 0, scale: 0.5 }} animate={{ y: -60, opacity: [0, 1, 0], scale: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
               <motion.div className="absolute bottom-16 left-8 w-2 h-2 border border-white rounded-full bg-white/10" initial={{ y: 0, opacity: 0, scale: 0.5 }} animate={{ y: -40, opacity: [0, 1, 0], scale: 1.2 }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
               <motion.div className="absolute bottom-16 right-8 w-4 h-4 border border-white rounded-full bg-white/10" initial={{ y: 0, opacity: 0, scale: 0.5 }} animate={{ y: -50, opacity: [0, 1, 0], scale: 0.8 }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
               <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full relative z-10">
                  <path d="M10 20 Q 10 70 50 70 Q 90 70 90 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 20 L 95 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 25 Q -5 35 10 50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M90 25 Q 105 35 90 50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
               </svg>
            </div>
            <div className="text-center space-y-2 z-10">
                <h3 className="text-2xl font-bold tracking-tight text-white">Cooking...</h3>
                <p className="text-neutral-500 font-mono text-xs uppercase tracking-[0.2em]">New things on the menu soon</p>
            </div>
          </motion.div>

        ) : (

          /* --- LIST MODE --- */
          <div className="flex flex-col">
             <div className="flex flex-col">
                {PROJECTS.slice(0, visibleCount).map((project, i) => (
                    <motion.a 
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    // Mobile: 'active:scale-[0.99]' gives a tactile press feel
                    className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:bg-white/[0.02] active:bg-white/[0.05] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                    >
                        {/* ID & Title */}
                        <div className="flex items-start md:items-center gap-6 md:gap-12 mb-6 md:mb-0">
                            <span className="font-mono text-sm text-neutral-600 pt-1 md:pt-0">{project.id}</span>
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-neutral-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                        </div>

                        {/* Right Side (Info + Arrow) */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 pl-10 md:pl-0">
                            
                            <div className="flex flex-col md:text-right gap-1">
                                <span className="text-lg font-medium text-white">{project.category}</span>
                                <span className="font-mono text-xs text-neutral-500 uppercase tracking-wide">{project.stack}</span>
                            </div>

                            {/* Arrow: Visible on ALL screens now, but styled differently */}
                            <div className="flex w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 items-center justify-center bg-white/5 md:bg-transparent group-hover:bg-white group-hover:border-white transition-all duration-300 mt-2 md:mt-0">
                                <ArrowUpRight className="w-5 h-5 text-white md:text-neutral-400 group-hover:text-black transition-colors" />
                            </div>

                        </div>
                    </motion.a>
                ))}
             </div>

             {/* Show More Button */}
             {visibleCount < PROJECTS.length && (
                <div className="mt-16 flex justify-center">
                    <button 
                        onClick={handleShowMore}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase">
                            View All Projects ({PROJECTS.length - visibleCount} More)
                        </span>
                        <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
                    </button>
                </div>
             )}

          </div>

        )}

      </div>
    </section>
  );
}
