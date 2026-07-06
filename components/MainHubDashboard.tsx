'use client';

import React from 'react';
import { 
  Bell, Calendar, Clock, BookOpen, FileText, Award, 
  Download, Upload, FilePlus2, CreditCard, ExternalLink, 
  Library, GraduationCap, ArrowUpRight, Megaphone, CheckCircle2 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface MainHubDashboardProps {
  studentName?: string;
  initialCourses?: any[];
}

export default function MainHubDashboard({ studentName = 'Student', initialCourses = [] }: MainHubDashboardProps) {
  return (
    <div className="space-y-6 antialiased font-sans text-sm">
      
      {/* ==========================================
          TOP CARDS PANEL (WELCOME & METRICS SUMMARY)
         ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Welcome Card */}
        <div className="p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-md flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400">Current Session</span>
            <h2 className="text-xl font-black tracking-tight text-white mt-1">👋 Hello, {studentName}</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-4 font-mono">Semester: VI • Matrix Active</p>
        </div>

        {/* Attendance Percentage */}
        <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Attendance Aggregate</span>
              <p className="text-2xl font-black font-mono text-emerald-400 mt-1">84.5%</p>
            </div>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-4 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '84.5%' }} />
          </div>
        </div>

        {/* CGPA Snapshot */}
        <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-md flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Cumulative Standing</span>
              <p className="text-2xl font-black font-mono text-violet-400 mt-1">8.92</p>
            </div>
            <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/10">
              <Award className="h-4 w-4" />
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 font-mono mt-4">Target threshold tracking: 9.00</p>
        </div>

        {/* Dynamic Activity Counters */}
        <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-md grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col justify-center p-2 rounded-xl bg-black/40 border border-white/5">
            <span className="text-base font-black font-mono text-white">3</span>
            <span className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Classes Today</span>
          </div>
          <div className="flex flex-col justify-center p-2 rounded-xl bg-black/40 border border-white/5">
            <span className="text-base font-black font-mono text-fuchsia-400">2</span>
            <span className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Pending Tasks</span>
          </div>
          <div className="flex flex-col justify-center p-2 rounded-xl bg-black/40 border border-white/5">
            <span className="text-base font-black font-mono text-amber-500">1</span>
            <span className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Exams Near</span>
          </div>
        </div>
      </div>

      {/* ==========================================
          SYSTEM ALERTS BANNER STRIP
         ========================================== */}
      <div className="p-4 rounded-xl border border-amber-500/10 bg-amber-500/5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-amber-500 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <Bell className="h-4 w-4 animate-pulse shrink-0" />
          <span><strong>🚨 COMPLIANCE ALERTS BLOCK:</strong></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 lg:gap-6 text-[11px]">
          <span className="flex items-center gap-1.5">⏱️ Next Lecture in 15 mins</span>
          <span className="flex items-center gap-1.5">📂 Assignment Due Tonight</span>
          <span className="flex items-center gap-1.5">💳 Tuition Balance Outstanding</span>
          <span className="flex items-center gap-1.5">📚 Return Library Books Due</span>
        </div>
      </div>

      {/* ==========================================
          WIDGETS LAYOUT GRID SECTION
         ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLUMN 1: Today's Schedule Timeline */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <Calendar className="h-4 w-4 text-violet-400" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Today's Schedule Tracker</h4>
            </div>
            <p className="text-[11px] font-mono text-zinc-500">Live academic telemetry feed.</p>
          </div>
          
          <div className="space-y-3 flex-1">
            {[
              { time: "09:00 - 10:30", course: "Artificial Intelligence Lecture", room: "Room 302", active: false },
              { time: "11:00 - 01:00", course: "Data Mining Laboratory", room: "Lab Delta", active: true },
              { time: "02:00 - 03:30", course: "Capstone Project Review Evaluation", room: "Seminar Hall", active: false }
            ].map((sched, idx) => (
              <div key={idx} className={`p-3 rounded-xl border transition-all ${
                sched.active ? 'bg-violet-500/10 border-violet-500/30 text-white' : 'bg-black/30 border-white/5 text-zinc-400'
              }`}>
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {sched.time}</span>
                  {sched.active && <span className="px-1.5 py-0.5 bg-violet-500/20 text-violet-400 rounded text-[8px] uppercase font-bold animate-pulse">In Progress</span>}
                </div>
                <p className="text-xs font-bold mt-1.5 truncate text-zinc-200">{sched.course}</p>
                <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{sched.room}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Academic Metrics Snapshot Breakdown */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <BookOpen className="h-4 w-4 text-fuchsia-400" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Academic Profile Snapshot</h4>
            </div>
            <p className="text-[11px] font-mono text-zinc-500">Current term verification metrics.</p>
          </div>

          <div className="space-y-3.5 flex-1 justify-center flex flex-col">
            {[
              { label: "Attendance Status", value: "84.5%", sub: "Minimum requirement: 75%", color: "text-emerald-400" },
              { label: "Total Completed Credits", value: "114 / 140", sub: "Earned across semesters", color: "text-violet-400" },
              { label: "Current Term GPA Metric", value: "9.12", sub: "Calculated dynamically", color: "text-fuchsia-400" },
              { label: "Active Backlog Logs", value: "0 Subjects", sub: "Clear compliance standing", color: "text-zinc-400" }
            ].map((snap, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                <div>
                  <p className="text-xs font-semibold text-zinc-300">{snap.label}</p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{snap.sub}</p>
                </div>
                <span className={`text-sm font-black font-mono ${snap.color}`}>{snap.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 3: Institutional Notice Board */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <Megaphone className="h-4 w-4 text-amber-500" />
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Campus Notice Feeds</h4>
            </div>
            <p className="text-[11px] font-mono text-zinc-500">Real-time circular updates stream.</p>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto scrollbar-none">
            {[
              { scope: "College", txt: "End-Term submission portal locks on Friday evening.", date: "1h ago" },
              { scope: "Dept", txt: "AI Practical assignment template uploaded to core terminal module.", date: "3h ago" },
              { scope: "Placement", txt: "Microsoft campus driver open for Computer Science graduates.", date: "Yesterday" }
            ].map((notif, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-black/20 border border-white/5 font-mono text-[11px] text-zinc-400">
                <div className="flex justify-between items-center mb-1 text-[9px] font-bold">
                  <span className={`px-1.5 py-0.5 rounded uppercase ${
                    notif.scope === 'Placement' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800 text-zinc-400'
                  }`}>{notif.scope}</span>
                  <span className="text-zinc-600">{notif.date}</span>
                </div>
                <p className="text-zinc-300 leading-snug font-sans">{notif.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==========================================
          QUICK ACTIONS HUD PANEL
         ========================================== */}
      <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/10">
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
          ⚡ System Quick Actions
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { label: "Download Timetable", icon: Download },
            { label: "Submit Assignment", icon: Upload },
            { label: "Apply For Leave", icon: FilePlus2 },
            { label: "Pay Tuition Fees", icon: CreditCard },
            { label: "View Exam Result", icon: ArrowUpRight }
          ].map((act, i) => {
            const ActIcon = act.icon;
            return (
              <button key={i} className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-zinc-950 border border-white/5 hover:bg-zinc-900 hover:border-violet-500/30 transition-all text-center group cursor-pointer">
                <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-violet-400 transition-colors">
                  <ActIcon className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors font-mono tracking-tight">{act.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ==========================================
          UNIVERSAL KNOWLEDGE ENGINE LINKS
         ========================================== */}
      <div className="p-5 rounded-2xl border border-white/5 bg-zinc-900/10">
        <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
          📚 Core Knowledge Engines
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "LMS Portal", desc: "Digital Learning Base" },
            { label: "IEEE Xplore", desc: "Research Database" },
            { label: "Google Classroom", desc: "Module Feed Workspace" },
            { label: "Library Catalog", desc: "OPAC Book Systems" },
            { label: "College Main Site", desc: "Institutional Web" }
          ].map((link, idx) => (
            <button key={idx} className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 hover:border-violet-500/20 text-left flex justify-between items-start group cursor-pointer transition-all">
              <div>
                <p className="text-xs font-bold text-zinc-300 group-hover:text-violet-400 transition-colors">{link.label}</p>
                <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{link.desc}</p>
              </div>
              <ExternalLink className="h-3 w-3 text-zinc-700 group-hover:text-zinc-500 transition-colors shrink-0 mt-0.5" />
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}