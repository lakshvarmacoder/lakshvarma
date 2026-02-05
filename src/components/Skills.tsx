"use client";

import { motion } from "framer-motion";

const SKILLS_LANGUAGES = ["C++", "Python", "Java", "JavaScript", "TypeScript", "C"];
const SKILLS_FRAMEWORKS = ["React", "Next.js", "FastAPI", "Git", "Vercel", "Tailwind"];

export default function Skills() {
  return (
    <section className="py-20 md:py-32 bg-white border-y border-gray-200 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS_LANGUAGES.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS_FRAMEWORKS.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
