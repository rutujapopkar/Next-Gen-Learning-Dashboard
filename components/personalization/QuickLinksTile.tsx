'use client';

import React from 'react';
import { ExternalLink, Award, Library, Megaphone } from 'lucide-react';

export default function QuickLinksTile() {
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono">
      
      {/* Notice Board Module Section */}
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 text-zinc-400">
          <Megaphone className="h-4 w-4 text-violet-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider">Campus Notice Board</h4>
        </div>
        <p className="text-xs text-zinc-400 font-sans mt-1">
          🛡️ Term-end practical exams are scheduled to go live next week. Check your dynamic compliance logs.
        </p>
      </div>

      {/* Interactive Hub System Launchers Panel */}
      <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
        {[
          { name: "Canvas LMS", icon: Library },
          { name: "IEEE Lib", icon: Award }
        ].map((lnk, i) => {
          const LinkIcon = lnk.icon;
          return (
            <button key={i} className="flex-1 md:flex-none flex items-center gap-3 rounded-xl bg-zinc-950 border border-white/5 hover:bg-zinc-900 hover:border-violet-500/20 transition-all px-4 py-2.5 group cursor-pointer text-left">
              <LinkIcon className="h-4 w-4 text-zinc-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-xs text-zinc-400 group-hover:text-zinc-200">{lnk.name}</span>
              <ExternalLink className="h-3 w-3 text-zinc-700 group-hover:text-zinc-500 ml-1" />
            </button>
          );
        })}
      </div>

    </div>
  );
}