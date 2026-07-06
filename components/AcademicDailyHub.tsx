'use client';

import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, Clock, User, MapPin, Upload, 
  Download, FileText, AlertTriangle, CheckCircle2, ChevronRight, 
  Folder, Video, FileSpreadsheet, Layers, Bell, ExternalLink 
} from 'lucide-react';

export default function AcademicDailyHub() {
  const [activeTab, setActiveTab] = useState<'all' | 'timetable' | 'assignments' | 'exams' | 'resources'>('all');

  return (
    <div className="space-y-6 antialiased font-sans text-sm text-zinc-200">
      
      {/* Dynamic Action Sub-Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5 font-mono">
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold text-white tracking-tight">📅 Academic & Daily Matrix</h2>
          <p className="text-xs text-zinc-500">Operation telemetry for current student lifecycle events.</p>
        </div>
        <div className="flex gap-1.5 bg-zinc-950 p-1 rounded-xl border border-white/5 text-[11px]">
          {(['all', 'timetable', 'assignments', 'exams', 'resources'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-all cursor-pointer ${
                activeTab === tab ? 'bg-violet-600 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab === 'all' ? 'Full View' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================
          GRID VIEWPORTS ENGINE RENDERER
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT TWO COLUMNS: CORE WORKSPACE SECTIONS */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* SECTION 1: TIMETABLE COMPONENT MODULE */}
          {(activeTab === 'all' || activeTab === 'timetable') && (
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-violet-400" />
                  <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Weekly Routine Matrix</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-white/5 font-bold">MON: ACTIVE</span>
              </div>

              {/* Day Track Container rows */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-zinc-400 font-mono">Monday Schedule:</p>
                
                {[
                  { time: "09:00 - 10:00", subject: "Artificial Intelligence", room: "Classroom 402", faculty: "Dr. A. R. Sharma", active: true, attended: true },
                  { time: "10:00 - 11:00", subject: "Java Enterprise Architecture", room: "Classroom 104", faculty: "Prof. S. Malhotra", active: false, attended: false },
                  { time: "12:00 - 02:00", subject: "Advanced Core Systems Laboratory", room: "Lab Beta-6", faculty: "Prof. K. Verma", active: false, attended: false }
                ].map((slot, i) => (
                  <div key={i} className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    slot.active ? 'bg-violet-500/10 border-violet-500/30 shadow-lg' : 'bg-black/30 border-white/5'
                  }`}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-mono">
                        <span className={`flex items-center gap-1 font-bold ${slot.active ? 'text-violet-400' : 'text-zinc-500'}`}>
                          <Clock className="h-3 w-3" /> {slot.time}
                        </span>
                        {slot.active && <span className="px-1.5 py-0.2 bg-violet-500/20 text-violet-400 font-black rounded text-[8px] tracking-wide animate-pulse uppercase">CURRENT LESSON</span>}
                      </div>
                      <h4 className="text-sm font-bold text-zinc-200 mt-1">{slot.subject}</h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-zinc-500 font-mono mt-0.5">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-zinc-600" /> {slot.room}</span>
                        <span className="flex items-center gap-1"><User className="h-3 w-3 text-zinc-600" /> {slot.faculty}</span>
                      </div>
                    </div>
                    
                    {/* Action Button Interaction Zone */}
                    <button disabled={!slot.active} className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all shrink-0 ${
                      slot.active 
                        ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-md cursor-pointer border-0' 
                        : 'bg-zinc-950 text-zinc-600 border border-white/5 cursor-not-allowed'
                    }`}>
                      {slot.active ? '👉 Mark Present' : 'Locked'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 2: ASSIGNMENTS TRACKER BOARD MODULE */}
          {(activeTab === 'all' || activeTab === 'assignments') && (
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-fuchsia-400" />
                  <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Task Submission Tracking Boards</h3>
                </div>
              </div>

              {/* Assignment Document Card */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/10 font-bold rounded uppercase">AI Assignment</span>
                    <span className="text-amber-500 font-bold">⚠️ Due Tomorrow</span>
                  </div>
                  <h4 className="text-sm font-black text-zinc-200">Neural Network Backpropagation Matrix Modeling</h4>
                  <p className="text-xs text-zinc-500 font-mono">Telemetry Status: <span className="text-emerald-400 font-bold">Submitted</span> • Countdown: 14h 22m remaining</p>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] shrink-0">
                  <button className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-zinc-400 hover:text-white rounded-lg flex items-center gap-1.5 transition-all cursor-pointer">
                    <Download className="h-3.5 w-3.5" /> PDF
                  </button>
                  <button className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-lg flex items-center gap-1.5 border-0 shadow-md transition-all cursor-pointer">
                    <Upload className="h-3.5 w-3.5" /> Upload File
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: EXAMINATIONS SCHEDULING CALENDAR MATRIX */}
          {(activeTab === 'all' || activeTab === 'exams') && (
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Layers className="h-4 w-4 text-emerald-400" />
                <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Examination Schedules Engine</h3>
              </div>

              <div className="overflow-x-auto scrollbar-none">
                <table className="w-full text-left border-collapse font-mono text-[11px] text-zinc-400">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-500 uppercase tracking-wider text-[9px]">
                      <th className="pb-2 font-bold">Evaluation Type</th>
                      <th className="pb-2 font-bold">Date & Time</th>
                      <th className="pb-2 font-bold">Venue</th>
                      <th className="pb-2 font-bold text-right">Seat Token</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { type: "Internal Test I", date: "July 14 • 10:00 AM", venue: "Block Lambda", seat: "S-4021" },
                      { type: "Mid Semester Tier 2", date: "Aug 02 • 02:00 PM", venue: "Auditorium West", seat: "S-4094" },
                      { type: "Practical Evaluation", date: "Aug 22 • 09:00 AM", venue: "Advanced Lab 3", seat: "L-311" },
                      { type: "Viva-Voce Terminal", date: "Aug 26 • 11:30 AM", venue: "Faculty Cell 4", seat: "V-02" },
                      { type: "End Semester Terminal", date: "Sept 10 • 10:00 AM", venue: "Main Hall A", seat: "S-552" }
                    ].map((exam, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group">
                        <td className="py-3 font-sans font-bold text-zinc-300 group-hover:text-violet-400 transition-colors">{exam.type}</td>
                        <td className="py-3 text-zinc-400">{exam.date}</td>
                        <td className="py-3 text-zinc-500"><span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-zinc-700" /> {exam.venue}</span></td>
                        <td className="py-3 text-zinc-400 text-right font-bold">{exam.seat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: ATTENDANCE TRACKER & KNOWLEDGE RESOURCE MANAGEMENT */}
        <div className="space-y-6">
          
          {/* SECTION 4: SUBJECT-WISE ATTENDANCE LOG COMPLIANCE PANELS */}
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Attendance Logs</h3>
            </div>

            {[
              { subject: "AI Modules", present: 42, absent: 5, rate: 89 },
              { subject: "Java Enterprise Architecture", present: 31, absent: 11, rate: 73 } // Triggers the below-75 warning limit rule
            ].map((att, idx) => {
              const isWarning = att.rate < 75;
              return (
                <div key={idx} className="space-y-1.5 p-3 rounded-xl bg-black/20 border border-white/5">
                  <div className="flex justify-between items-center text-xs">
                    <p className="font-bold text-zinc-300 truncate">{att.subject}</p>
                    <span className={`font-mono font-black ${isWarning ? 'text-red-400' : 'text-emerald-400'}`}>{att.rate}%</span>
                  </div>
                  
                  {/* Progress Indicator Slider Tracking */}
                  <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-white/5">
                    <div className={`h-full rounded-full transition-all ${isWarning ? 'bg-gradient-to-r from-red-500 to-amber-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`} style={{ width: `${att.rate}%` }} />
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-0.5">
                    <span>Present: <strong className="text-zinc-400">{att.present}</strong> • Absent: <strong className="text-zinc-400">{att.absent}</strong></span>
                    {isWarning && (
                      <span className="flex items-center gap-1 text-[9px] font-bold text-red-400 bg-red-500/10 border border-red-500/10 px-1.5 rounded uppercase animate-pulse">
                        <AlertTriangle className="h-2.5 w-2.5" /> Below 75%
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SECTION 5: MONTHLY SYSTEM EVENTS CALENDAR SUMMARY */}
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <CalendarIcon className="h-4 w-4 text-amber-500" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">System Calendar Tracker</h3>
            </div>

            <div className="space-y-2 flex-1 max-h-56 overflow-y-auto scrollbar-none font-mono text-[11px]">
              {[
                { tag: "Exam", text: "Internal Test I Modules kickoff event", color: "bg-violet-500/10 text-violet-400 border-violet-500/10" },
                { tag: "Holiday", text: "Institutional Mid-Term break downtime", color: "bg-zinc-800 text-zinc-500 border-white/5" },
                { tag: "Task", text: "AI Backpropagation model file locks due", color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/10" },
                { tag: "Event", text: "Hackathon Node deployment registration open", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/10" },
                { tag: "Seminar", text: "Guest Lecture: Deep Learning Verification models", color: "bg-amber-500/10 text-amber-400 border-amber-500/10" }
              ].map((ev, i) => (
                <div key={i} className="p-2 rounded-xl bg-black/40 border border-white/5 flex items-start gap-2.5">
                  <span className={`px-1.5 py-0.2 rounded text-[8px] font-bold uppercase tracking-wider border shrink-0 ${ev.color}`}>{ev.tag}</span>
                  <p className="text-zinc-400 font-sans leading-tight">{ev.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 6: FILE DIRECTORY RESOURCE STORAGE MANAGER MODULE */}
          {(activeTab === 'all' || activeTab === 'resources') && (
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Folder className="h-4 w-4 text-violet-400" />
                <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Knowledge Node Repositories</h3>
              </div>

              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                {[
                  { name: "PowerPoints (PPT)", sub: "14 Lecture files", icon: Layers },
                  { name: "Digital Books (PDF)", sub: "6 Core volumes", icon: FileText },
                  { name: "Video Materials", sub: "22 Stream items", icon: Video },
                  { name: "Lab Manual Guides", sub: "Verified docs", icon: FileSpreadsheet },
                  { name: "Previous Papers", sub: "5-Year archive logs", icon: Folder }
                ].map((fold, idx) => {
                  const FoldIcon = fold.icon;
                  return (
                    <button key={idx} className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 hover:border-violet-500/30 text-left flex flex-col justify-between group transition-all cursor-pointer h-20">
                      <FoldIcon className="h-4 w-4 text-zinc-600 group-hover:text-violet-400 transition-colors shrink-0" />
                      <div>
                        <p className="text-[11px] font-bold text-zinc-300 group-hover:text-white truncate font-sans">{fold.name}</p>
                        <p className="text-[9px] text-zinc-500 mt-0.5 truncate">{fold.sub}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}