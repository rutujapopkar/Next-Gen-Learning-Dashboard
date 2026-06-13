'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoCard({ children, className = "" }: { children: CardProps['children']; className?: string }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.015 }}
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition-colors duration-300 hover:border-violet-500/30 group flex flex-col justify-between ${className}`}
    >
      {/* Background Grain Utility Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none mix-blend-overlay" />
      <div className="relative z-10 h-full w-full flex flex-col justify-between">{children}</div>
    </motion.article>
  );
}