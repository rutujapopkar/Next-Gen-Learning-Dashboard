'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

// Explicitly typing this as 'Variants' fixes the line 23 error!
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 260, damping: 25 } 
  }
};

export default function BentoCard({ children, className = '' }: BentoCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-[#111113] p-6 group transition-colors duration-300 hover:border-indigo-500/30 ${className}`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-950/20 via-transparent to-transparent opacity-70 pointer-events-none" />
      {children}
    </motion.article>
  );
}