'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BentoGridContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
      }}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 lg:p-8 auto-rows-[180px]"
    >
      {children}
    </motion.section>
  );
}