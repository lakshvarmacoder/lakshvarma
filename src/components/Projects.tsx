"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  stack: string;
  link: string;
}

export default function Projects() {
  
  const [visibleCount, setVisibleCount] = useState(3);
  const PROJECTS: Project[] = [];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="py-20 md:py-32 bg-white text-black px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Coming soon. Currently working on exciting projects to showcase.
          </p>
        </motion.div>

        {PROJECTS.length === 0 ? (
          
          /* Empty state */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full py-20 md:py-32 border border-gray-200 rounded-2xl bg-gray-50 flex flex-col items-center justify-center gap-6"
          >
            <div className="text-center space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold text-black">Projects Coming Soon</h3>
              <p className="text-gray-600 max-w-md">
                I'm currently working on some amazing projects. Check back soon!
              </p>
            </div>
          </motion.div>

        ) : (

          /* Populated list */
          <div className="flex flex-col">
            <div className="flex flex-col divide-y divide-gray-200">
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
                  className="group py-8 md:py-12 hover:bg-gray-50 transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-3 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <span className="text-sm font-medium text-gray-600">{project.category}</span>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{project.stack}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Show More Button */}
            {visibleCount < PROJECTS.length && (
              <div className="mt-12 flex justify-center">
                <button 
                  onClick={handleShowMore}
                  className="group px-6 py-3 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 active:scale-95 flex items-center gap-2"
                >
                  <span className="text-sm font-medium tracking-wide">
                    View All Projects
                  </span>
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        )}

      </div>
    </section>
  );
}
