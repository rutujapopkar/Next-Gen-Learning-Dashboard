'use client';

import React, { useState } from 'react';
import { 
  MessageSquare, Inbox, Megaphone, Users, Video, 
  Search, Send, Hash, Mail, Clock, ExternalLink, 
  ChevronRight, Circle, UserCheck 
} from 'lucide-react';


export default function CommunicationHub() {
  const [activeChannel, setActiveChannel] = useState('general');
  const [messageText, setMessageText] = useState('');

  return (
    <div className="space-y-6 antialiased font-sans text-sm text-zinc-200">
      
      {/* Structural Subsection Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5 font-mono">
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold text-white tracking-tight">💬 Communication & Social Layer</h2>
          <p className="text-xs text-zinc-500">Node hub handling decentralized chats, professor directories, and announcement streams.</p>
        </div>
      </div>

      {/* =========================================================
          PRIMARY WORKSPACE VIEWPORTS MATRIX
         ========================================================= */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* COLUMN 1: DISCORD-STYLE STUDY CHANNELS & DIRECT INBOX LISTS */}
        <div className="space-y-6 xl:col-span-1">
          
          {/* FORUM CHANNELS NAVIGATION */}
          <div className="p-4 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-3">
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider px-2">Discussion Forums</p>
            <div className="space-y-1 font-mono text-xs">
              {[
                { id: 'general', label: 'general-hub' },
                { id: 'ai', label: 'ai-research' },
                { id: 'projects', label: 'capstone-projects' },
                { id: 'placements', label: 'placement-feed' }
              ].map((chan) => (
                <button
                  key={chan.id}
                  onClick={() => setActiveChannel(chan.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-left border-0 transition-colors cursor-pointer ${
                    activeChannel === chan.id 
                      ? 'bg-violet-500/10 text-violet-400 font-bold border border-violet-500/10' 
                      : 'text-zinc-400 hover:text-zinc-200 bg-transparent'
                  }`}
                >
                  <Hash className="h-3.5 w-3.5 shrink-0" /> {chan.label}
                </button>
              ))}
            </div>
          </div>

          {/* ASYNCHRONOUS TARGETED INBOX SYSTEM */}
          <div className="p-4 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-3">
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider px-2">System Inbox Channels</p>
            <div className="space-y-2">
              {[
                { role: "HOD Desk", msg: "Approve matrix thesis proposal routing...", read: false },
                { role: "Faculty Admin", msg: "Term end practical criteria uploaded.", read: true },
                { role: "Class Rep", msg: "Share lab notes download keys directly.", read: false }
              ].map((mail, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-start gap-2.5 cursor-pointer hover:border-zinc-700/50 transition-all">
                  <Inbox className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${mail.read ? 'text-zinc-600' : 'text-fuchsia-400'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <p className="font-bold text-zinc-300">{mail.role}</p>
                      {!mail.read && <Circle className="h-1.5 w-1.5 fill-fuchsia-400 text-fuchsia-400" />}
                    </div>
                    <p className="text-[10px] text-zinc-500 truncate font-mono mt-0.5">{mail.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* COLUMN 2 & 3: CENTER FEED CHAT WORKSPACE CONSOLE */}
        <div className="xl:col-span-2 p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between min-h-[480px]">
          
          {/* Active Chat Matrix Header */}
          <div className="border-b border-white/5 pb-3 flex items-center justify-between font-mono">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-violet-400" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">#{activeChannel.toUpperCase()}-STREAM</h3>
            </div>
            <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">6 Users Online</span>
          </div>

          {/* Thread Message Feeds Container */}
          <div className="flex-1 space-y-4 my-4 overflow-y-auto pr-2 scrollbar-none font-sans text-xs">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shrink-0 font-mono flex items-center justify-center font-bold text-[10px]">AN</div>
              <div className="space-y-1">
                <p className="font-bold text-zinc-300 font-mono text-[11px]">Alpha_Node <span className="text-[9px] text-zinc-600 font-normal ml-1">10:24 AM</span></p>
                <p className="text-zinc-400 leading-relaxed bg-black/20 p-2.5 rounded-xl border border-white/5">Has anyone compiled down the AI practical assignment backpropagation layers file yet? The deadline locks tomorrow night.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-600 shrink-0 font-mono flex items-center justify-center font-bold text-[10px]">BN</div>
              <div className="space-y-1">
                <p className="font-bold text-zinc-300 font-mono text-[11px]">Beta_Node <span className="text-[9px] text-zinc-600 font-normal ml-1">10:31 AM</span></p>
                <p className="text-zinc-400 leading-relaxed bg-black/20 p-2.5 rounded-xl border border-white/5">Yes, I just uploaded my modeling matrix receipt. Check out the resource repository sub-directory inside your panel.</p>
              </div>
            </div>
          </div>

          {/* Interactive Input Message Form Box */}
          <div className="flex items-center gap-2 bg-zinc-950 p-2 rounded-xl border border-white/10 mt-auto">
            <input 
              type="text" 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder={`Post entry to #${activeChannel}...`} 
              className="flex-1 bg-transparent border-0 outline-none text-xs text-white px-2 placeholder-zinc-600 font-mono"
            />
            <button className="p-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors cursor-pointer border-0">
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* COLUMN 4: PROFESSOR DIRECTORIES & VIDEO LINK CODES */}
        <div className="space-y-6 xl:col-span-1">
          
          {/* FACULTY TELEMETRY DIRECTORY LOGS */}
          <div className="p-4 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-3">
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider px-2">Faculty Directory</p>
            <div className="space-y-2">
              {[
                { name: "Dr. Anand Sharma", role: "AI Department Lead", hours: "14:00 - 16:00", mail: "a.sharma@node.edu" },
                { name: "Prof. Kiran Verma", role: "Database Admin Mentor", hours: "11:00 - 12:30", mail: "k.verma@node.edu" }
              ].map((prof, i) => (
                <div key={i} className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-2 group hover:border-violet-500/20 transition-all">
                  <div>
                    <h4 className="text-xs font-black text-zinc-200 group-hover:text-violet-400 transition-colors flex items-center gap-1.5">
                      <UserCheck className="h-3.5 w-3.5 text-zinc-500" /> {prof.name}
                    </h4>
                    <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{prof.role}</p>
                  </div>
                  <div className="text-[9px] font-mono text-zinc-600 space-y-0.5 border-t border-white/5 pt-1.5">
                    <p className="flex items-center gap-1"><Clock className="h-2.5 w-2.5" /> Office Hours: {prof.hours}</p>
                    <p className="flex items-center gap-1"><Mail className="h-2.5 w-2.5" /> {prof.mail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VIDEO MEETINGS LINK CONSOLE WIDGETS */}
          <div className="p-4 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-3">
            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider px-2">Video Meetings Pipeline</p>
            <div className="space-y-2 font-mono text-[11px]">
              {[
                { platform: "Google Meet", event: "Project Evaluation Seminar", time: "02:00 PM" },
                { platform: "Zoom Room", event: "Placement Drive Briefing", time: "Tomorrow" }
              ].map((meet, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                      <Video className="h-3.5 w-3.5 text-fuchsia-400" /> {meet.platform}
                    </p>
                    <p className="text-[9px] text-zinc-500 mt-0.5 truncate font-sans">{meet.event}</p>
                    <p className="text-[9px] text-zinc-600 mt-0.5">{meet.time}</p>
                  </div>
                  <button className="px-2.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg flex items-center gap-1 border border-white/5 text-[10px] font-bold cursor-pointer transition-all">
                    Join <ExternalLink className="h-2.5 w-2.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}