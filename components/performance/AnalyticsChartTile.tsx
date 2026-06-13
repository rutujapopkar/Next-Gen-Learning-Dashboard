'use client';
import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function AnalyticsChartTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="h-4 w-4 text-violet-400" />
          <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400">Semester Analytics</h4>
        </div>
        <span className="text-[9px] font-mono text-zinc-500">GPA Trend Curve</span>
      </div>
      <div className="relative h-24 w-full flex items-end gap-2 pt-4 px-1">
        {/* Custom Hardware Accelerated SVG Path Vector for Performance Graphics */}
        <svg className="absolute inset-0 h-full w-full opacity-30 pointer-events-none" viewBox="0 0 100 30" preserveAspectRatio="none">
          <path d="M0,25 Q25,8 50,15 T100,3" fill="none" stroke="rgb(139, 92, 246)" strokeWidth="2.5" />
          <path d="M0,25 Q25,8 50,15 T100,3 L100,30 L0,30 Z" fill="url(#chartGradArea)" />
          <defs>
            <linearGradient id="chartGradArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="1"/>
              <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        {["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map((sem, i) => (
          <div key={i} className="flex-1 text-center text-[9px] font-mono text-zinc-600 border-t border-white/5 pt-1">{sem}</div>
        ))}
      </div>
    </div>
  );
}