'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

export default function BentoGridContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,_auto)] pb-24 md:pb-0"
    >
      {children}
    </motion.section>
  );
}