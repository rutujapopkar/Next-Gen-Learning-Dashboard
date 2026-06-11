'use client';

import { Course } from '@/types/dashboard';
import BentoCard from './BentoCard';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ course }: { course: Course }) {
  // Safe dynamic fallback layout mapping
  // @ts-ignore
  const IconNode = Icons[course.icon_name] || Icons.BookOpen;

  return (
    <BentoCard className="min-h-[190px]">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 p-3 text-indigo-400 border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors duration-300">
          <IconNode className="h-5 w-5" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded-md border border-zinc-800/40">Live Sync</span>
      </div>

      <div className="mt-4 space-y-3">
        <h3 className="text-base font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors duration-200">{course.title}</h3>
        
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] font-mono">
            <span className="text-zinc-500">Core Progress</span>
            <span className="text-indigo-400 font-bold">{course.progress}%</span>
          </div>
          
          <div className="h-1 w-full rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/30">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}