'use client';
import React from 'react';
import { CheckSquare } from 'lucide-react';
import { DeadlineItem } from '@/types/dashboard';

const mockDeadlines: DeadlineItem[] = [
  { id: '1', task: 'Database Seeding Integration', badge: 'Urgent', urgency: 'high' },
  { id: '2', task: 'Framer Motion Spring Tuning', badge: '2 Days', urgency: 'medium' },
  { id: '3', task: 'Production Deployment Package', badge: 'Pending', urgency: 'low' }
];

export default function TodoListTile() {
  const getUrgencyStyles = (urgency: string) => {
    if (urgency === 'high') return 'bg-red-500/10 text-red-400 border-red-500/20';
    if (urgency === 'medium') return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    return 'bg-zinc-800 text-zinc-400 border-white/5';
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 text-zinc-400 mb-3">
        <CheckSquare className="h-4 w-4 text-violet-400" />
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Deadlines & Tasks</h4>
      </div>
      <div className="space-y-2 h-full overflow-y-auto pr-1 scrollbar-none flex-1">
        {mockDeadlines.map((item) => (
          <div key={item.id} className="flex flex-col gap-1.5 p-2.5 rounded-xl bg-zinc-950/60 border border-white/5 hover:border-zinc-800 transition-all">
            <span className="text-xs text-zinc-300 font-medium leading-tight line-clamp-2">{item.task}</span>
            <span className={`self-start rounded-md px-1.5 py-0.5 text-[8px] font-mono font-semibold border ${getUrgencyStyles(item.urgency)}`}>
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}