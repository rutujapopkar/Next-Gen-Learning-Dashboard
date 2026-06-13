'use client';
import React from 'react';
import { CreditCard } from 'lucide-react';

export default function FeeStatusTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 text-zinc-400">
        <CreditCard className="h-4 w-4 text-emerald-400" />
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Tuition & Accounts</h4>
      </div>
      <div className="p-3 rounded-xl bg-zinc-950 border border-white/5 mt-auto flex justify-between items-center">
        <div>
          <p className="text-[9px] text-zinc-500 uppercase font-mono tracking-wider">Outstanding Balance</p>
          <p className="text-base font-black font-mono text-zinc-200">$1,240.00</p>
        </div>
        <span className="rounded-md px-2 py-0.5 text-[8px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm animate-pulse">
          Due Soon
        </span>
      </div>
    </div>
  );
}