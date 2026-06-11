import React from 'react';

export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse-slow">
      <div className="space-y-2">
        <div className="h-3 w-32 bg-zinc-900 rounded" />
        <div className="h-8 w-56 bg-zinc-900 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="md:col-span-2 lg:col-span-3 h-40 bg-zinc-900/60 rounded-2xl border border-white/[0.02]" />
        <div className="h-48 bg-zinc-900/60 rounded-2xl border border-white/[0.02]" />
        <div className="h-48 bg-zinc-900/60 rounded-2xl border border-white/[0.02]" />
        <div className="h-48 bg-zinc-900/60 rounded-2xl border border-white/[0.02]" />
        <div className="md:col-span-2 lg:col-span-3 h-36 bg-zinc-900/60 rounded-2xl border border-white/[0.02]" />
      </div>
    </div>
  );
}