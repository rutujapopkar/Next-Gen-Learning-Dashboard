'use client';
import React from 'react';
import { FileDown } from 'lucide-react';

export default function DocumentCenterTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 text-zinc-400">
        <FileDown className="h-4 w-4 text-fuchsia-400" />
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Document Desk</h4>
      </div>
      <button className="w-full mt-auto flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-white/5 hover:bg-zinc-900 hover:border-fuchsia-500/30 transition-all text-xs font-medium text-zinc-400 group text-left">
        <span className="truncate">Official Transcript.pdf</span>
        <FileDown className="h-4 w-4 text-zinc-600 group-hover:text-fuchsia-400 shrink-0 transition-colors" />
      </button>
    </div>
  );
}