'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 23 }}
      whileHover={{ scale: 1.015, y: -2 }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#111115]/80 backdrop-blur-md p-6 transition-colors duration-300 hover:border-indigo-500/20 hover:bg-[#14141a]/90 group ${className}`}
    >
      {/* Abstract Noise Grain Overlay Mesh */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPg==')] bg-repeat" />
      {/* Subtle Glow Radials */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </motion.article>
  );
}