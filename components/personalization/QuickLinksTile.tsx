'use client';
import React from 'react';
import { ExternalLink, Award, Library } from 'lucide-react';

export default function QuickLinksTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400 mb-2">Knowledge Engines</h4>
      <div className="grid grid-cols-2 gap-2 h-full pb-1">
        {[
          { name: "Canvas", icon: Library },
          { name: "IEEE Lib", icon: Award }
        ].map((lnk, i) => {
          const LinkIcon = lnk.icon;
          return (
            <button key={i} className="flex flex-col items-center justify-center gap-1 rounded-xl bg-zinc-950 border border-white/5 hover:bg-zinc-900 hover:border-violet-500/20 transition-all p-2 group">
              <LinkIcon className="h-4 w-4 text-zinc-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300">{lnk.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}