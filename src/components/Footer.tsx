"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const SOCIALS = [
    { name: "GitHub", href: "https://github.com/lakshvarmacoder" },
    { name: "LinkedIn", href: "https://in.linkedin.com/in/laksh-varma-8b1642391" }
  ];

  return (
    <footer className="bg-white text-black py-20 md:py-32 px-6 md:px-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's build something great
          </h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto leading-relaxed">
            Have a project or opportunity? I'd love to hear about it.
          </p>
        </motion.div>

        {/* Email Link */}
        <motion.a 
          href="mailto:lakshvarma490@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
        >
          lakshvarma490@gmail.com
        </motion.a>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4">
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
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-2 group text-sm font-medium"
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>
          ))}
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-20 pt-8 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          © 2026 Laksh Varma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
