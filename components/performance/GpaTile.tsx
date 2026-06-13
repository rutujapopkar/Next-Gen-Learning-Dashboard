'use client';
import React from 'react';

export default function GpaTile() {
  return (
    <div className="h-full flex flex-row items-center justify-between gap-2">
      <div className="space-y-1">
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400">GPA Standard</h4>
        <div className="flex gap-1">
          <span className="text-[8px] font-mono bg-violet-500/10 text-violet-400 px-1.5 py-0.5 rounded border border-violet-500/20">Scale 4.0</span>
          <span className="text-[8px] font-mono bg-zinc-900 text-zinc-500 px-1.5 py-0.5 rounded border border-white/5">A+ Rank</span>
        </div>
      </div>
      <div className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_12px_rgba(139,92,246,0.35)] font-mono">
        3.92
      </div>
    </div>
  );
}