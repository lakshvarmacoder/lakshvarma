"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const SOCIALS = [
    { name: "GitHub", href: "https://github.com/lakshvarmacoder" },
    { name: "LinkedIn", href: "https://in.linkedin.com/in/laksh-varma-8b1642391" }
  ];

  return (
    <footer className="bg-[#050505] text-white py-24 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-12">
        
        {/* 1. The Main Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
              Let's Connect.
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto">
              Have a project in mind? Let's discuss how we can engineer a solution.
            </p>
        </motion.div>

        {/* 2. The Big Email Link (The Hero Interaction) */}
        <motion.a 
          href="mailto:your.email@example.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-medium border-b border-gray-600 pb-2 hover:text-gray-300 hover:border-gray-300 transition-all cursor-pointer"
        >
          lakshvarma490@gmail.com
        </motion.a>

        {/* 3. Minimal Social Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
          {SOCIALS.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 group text-sm uppercase tracking-widest"
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
            </motion.a>
          ))}
        </div>

      </div>

      {/* 4. The Clean Copyright (Bottom Center) */}
      <div className="mt-24 text-center">
        <p className="text-xs text-neutral-800 uppercase tracking-widest">
          © 2026 Laksh Varma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
