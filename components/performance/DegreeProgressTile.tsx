'use client';
import React from 'react';

export default function DegreeProgressTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-0.5">
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400">Degree Progress</h4>
        <p className="text-[9px] text-zinc-500 font-mono">B.S. Computer Science Matrix</p>
      </div>
      <div className="space-y-1.5 mt-auto">
        <div className="flex justify-between text-[10px] font-mono">
          <span className="text-zinc-500">Completed Units</span>
          <span className="text-fuchsia-400 font-bold">84 / 120 Credits</span>
        </div>
        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
          <div className="h-full w-[70%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}