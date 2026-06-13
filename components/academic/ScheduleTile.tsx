'use object';
import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { ScheduleItem } from '@/types/dashboard';

const mockSchedule: ScheduleItem[] = [
  { id: '1', day: 'Mon', code: 'CS-401: Advanced React', time: '09:00 AM', room: 'Lab 3' },
  { id: '2', day: 'Wed', code: 'MAT-302: Discrete Math', time: '11:30 AM', room: 'Hall R4' },
  { id: '3', day: 'Thu', code: 'IT-512: Database Systems', time: '02:00 PM', room: 'Annex B' }
];

export default function ScheduleTile() {
  return (
    <div className="h-full flex flex-col justify-between relative before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-fuchsia-500 before:to-transparent">
      <div className="flex items-center gap-2 text-zinc-400 mb-2 pl-2">
        <Calendar className="h-4 w-4 text-fuchsia-400" />
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Weekly Schedule</h4>
      </div>
      <div className="space-y-2 overflow-y-auto pr-1 scrollbar-none flex-1 pl-2">
        {mockSchedule.map((item) => (
          <div key={item.id} className="p-2 rounded-xl bg-zinc-950/50 border border-white/5 flex gap-3 items-center hover:bg-zinc-900/50 transition-colors">
            <span className="text-[10px] font-mono bg-zinc-900 text-zinc-400 px-2 py-1.5 rounded-md border border-white/5 w-11 text-center font-bold shrink-0">{item.day}</span>
            <div className="min-w-0 flex-1">
              <h5 className="text-xs font-bold text-zinc-200 truncate">{item.code}</h5>
              <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono mt-0.5">
                <span className="flex items-center gap-0.5"><Clock className="h-2.5 w-2.5" /> {item.time}</span>
                <span className="flex items-center gap-0.5"><MapPin className="h-2.5 w-2.5" /> {item.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}