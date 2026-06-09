'use client';

import { Course } from '../types/dashboard';
import BentoCard from './BentoCard';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ course }: { course: Course }) {
  // Safe icon fallback: checks if the icon exists in Lucide, otherwise uses BookOpen
  // @ts-ignore
  const IconComponent = Icons[course.icon_name] || Icons.BookOpen;

  return (
    <BentoCard className="flex flex-col justify-between min-h-[200px]">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400 border border-indigo-500/20">
          <IconComponent className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-100">{course.title}</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium font-mono">
            <span className="text-zinc-400">Completion</span>
            <span className="text-indigo-400">{course.progress}%</span>
          </div>
          
          <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ type: 'spring', stiffness: 70, damping: 15, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
            />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}