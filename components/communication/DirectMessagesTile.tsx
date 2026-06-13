'use client';
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { PeerMessage } from '@/types/dashboard';

const mockPeers: PeerMessage[] = [
  { id: '1', name: 'Alpha_Node', msg: 'Code compiled down cleanly...', active: true, avatarColor: 'from-blue-500 to-indigo-600' },
  { id: '2', name: 'Beta_Node', msg: 'Supabase table relations synchronized', active: false, avatarColor: 'from-purple-500 to-pink-600' }
];

export default function DirectMessagesTile() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 text-zinc-400 mb-2">
        <MessageSquare className="h-4 w-4 text-violet-400" />
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Peer Channels</h4>
      </div>
      <div className="space-y-2 flex-1 overflow-y-auto scrollbar-none">
        {mockPeers.map((peer) => (
          <div key={peer.id} className="flex items-center gap-2.5 p-2 rounded-xl bg-zinc-950/40 border border-white/5 cursor-pointer hover:border-violet-500/20 transition-all group">
            <div className="relative">
              <div className={`h-7 w-7 rounded-full bg-gradient-to-tr ${peer.avatarColor}`} />
              <div className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-black ${peer.active ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-700'}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-zinc-300 group-hover:text-white truncate">{peer.name}</p>
              <p className="text-[9px] text-zinc-500 font-mono truncate">{peer.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}