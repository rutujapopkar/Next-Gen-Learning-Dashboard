'use client';
import React from 'react';
import { FolderInput, ExternalLink } from 'lucide-react';

export default function RegistrationPortalTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 text-zinc-400">
        <FolderInput className="h-4 w-4 text-violet-400" />
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Course Matrix</h4>
      </div>
      <button className="w-full mt-auto flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-white/5 hover:border-violet-500/30 hover:bg-zinc-900 transition-all text-xs font-medium font-mono text-zinc-300 group text-left">
        <span>Add / Drop Portal</span>
        <ExternalLink className="h-3.5 w-3.5 text-zinc-600 group-hover:text-violet-400 transition-colors" />
      </button>
    </div>
  );
}