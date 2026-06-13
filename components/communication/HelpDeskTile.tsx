'use client';
import React from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';

export default function HelpDeskTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 text-zinc-400 mb-2">
        <ShieldAlert className="h-4 w-4 text-fuchsia-400" />
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Campus IT Help</h4>
      </div>
      <div className="space-y-2 mt-auto">
        <button className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-950 border border-white/5 hover:border-fuchsia-500/30 hover:bg-zinc-900 transition-all text-left group">
          <div>
            <p className="text-xs font-bold text-zinc-300 group-hover:text-white">Open Help Desk Ticket</p>
            <p className="text-[9px] font-mono text-zinc-500">Avg Response Metric: &lt;12m</p>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-zinc-600 group-hover:text-fuchsia-400 transition-colors" />
        </button>
      </div>
    </div>
  );
}