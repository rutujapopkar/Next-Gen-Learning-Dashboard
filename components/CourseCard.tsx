'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Course } from '@/types/dashboard';
import BentoCard from './BentoCard';

export default function CourseCard({ course }: { course: Course }) {
  // @ts-ignore
  const IconNode = Icons[course.icon_name] || Icons.BookOpen;

  return (
    <BentoCard className="col-span-1 row-span-1">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-violet-500/10 p-2.5 text-violet-400 border border-violet-500/10 group-hover:border-violet-500/30 transition-colors">
          <IconNode className="h-5 w-5" />
        </div>
        <span className="text-[10px] font-mono text-zinc-600 bg-zinc-950 px-2 py-0.5 rounded border border-white/5">Active</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold tracking-tight text-zinc-200 truncate group-hover:text-white">{course.title}</h3>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-zinc-500">Progress</span>
            <span className="text-violet-400 font-bold">{course.progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ type: 'spring', stiffness: 60, damping: 15, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
            />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}