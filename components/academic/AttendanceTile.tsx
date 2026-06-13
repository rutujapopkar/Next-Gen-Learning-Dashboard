'use client';
import React from 'react';

export default function AttendanceTile() {
  const attendanceRate = 72; // Set below 75% intentionally to verify warning state
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (attendanceRate / 100) * circumference;

  return (
    <div className="h-full flex flex-row items-center justify-between gap-3">
      <div className="space-y-1">
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400">Attendance</h4>
        <p className="text-[10px] text-zinc-500 font-mono">Min 75% Target Required</p>
        {attendanceRate < 75 && (
          <span className="inline-block text-[8px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded animate-pulse">
            Critical Level
          </span>
        )}
      </div>
      <div className="relative h-16 w-16 shrink-0 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="32" cy="32" r={radius} className="stroke-current text-zinc-900" strokeWidth="5" fill="transparent" />
          <circle 
            cx="32" cy="32" r={radius} 
            className={`stroke-current transition-all duration-1000 ease-out ${attendanceRate < 75 ? 'text-amber-500/80 animate-pulse' : 'text-violet-500'}`}
            strokeWidth="5" fill="transparent" 
            strokeDasharray={circumference} 
            strokeDashoffset={strokeDashoffset} 
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-[11px] font-black font-mono text-zinc-200">{attendanceRate}%</span>
      </div>
    </div>
  );
}