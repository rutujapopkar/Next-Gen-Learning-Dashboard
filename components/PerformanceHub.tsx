'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, PieChart, Star, 
  Award, Target, Sparkles, AlertTriangle, 
  CheckCircle2, ArrowUpRight, HelpCircle 
} from 'lucide-react';

export default function PerformanceHub() {
  const [activeMetric, setActiveMetric] = useState<'gpa' | 'skills' | 'insights'>('gpa');

  return (
    <div className="space-y-6 antialiased font-sans text-sm text-zinc-200">
      
      {/* Analytics Subsection Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/5 font-mono">
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold text-white tracking-tight">📊 Performance & Progress Analytics</h2>
          <p className="text-xs text-zinc-500">Data engine processing term grades, credit thresholds, and skill matrices.</p>
        </div>
      </div>

      {/* =========================================================
          ROW 1: GRADIENT TREND LINE & GRAPHICS GRID
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* SEMESTER-WISE CGPA TRACKER GRAPH CARD */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-violet-400" />
                <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Semester GPA Telemetry</h3>
              </div>
              <span className="text-[11px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/10 font-bold">Aggregate: 8.7</span>
            </div>
            <p className="text-[11px] font-mono text-zinc-500 mt-1">Multi-semester cumulative tracking curve representation.</p>
          </div>

          {/* Inline Graphic SVG Analytics Graph Wrapper */}
          <div className="h-48 w-full bg-zinc-950/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden mt-2">
            {/* Visual Vector Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
              <div className="border-b border-zinc-700 w-full" />
              <div className="border-b border-zinc-700 w-full" />
              <div className="border-b border-zinc-700 w-full" />
            </div>
            
            {/* SVG Line Coordinates for Sem 1 (8.2), Sem 2 (8.8), Sem 3 (9.1) */}
            <div className="absolute inset-x-12 bottom-12 top-6">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {/* Area paths */}
                <path d="M 0 80 L 150 40 L 300 20 L 300 100 L 0 100 Z" fill="url(#chartGrad)" />
                {/* Line path */}
                <path d="M 0 80 L 150 40 L 300 20" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Nodes points */}
                <circle cx="0" cy="80" r="4" fill="#fff" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="150" cy="40" r="4" fill="#fff" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="300" cy="20" r="4" fill="#fff" stroke="#8b5cf6" strokeWidth="2" />
              </svg>
            </div>

            {/* X-Axis labels layout indicators */}
            <div className="w-full flex justify-between items-center px-8 font-mono text-[10px] text-zinc-500 z-10 mt-auto pt-4 border-t border-white/5">
              <div className="text-center">
                <p className="text-zinc-400 font-bold">Sem 1</p>
                <p className="text-violet-400 font-black mt-0.5">8.2 GPA</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-400 font-bold">Sem 2</p>
                <p className="text-violet-400 font-black mt-0.5">8.8 GPA</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-400 font-bold">Sem 3</p>
                <p className="text-violet-400 font-black mt-0.5">9.1 GPA</p>
              </div>
            </div>
          </div>
        </div>

        {/* GOAL TRACKER MATRIX METRIC & PROGRESS PANELS */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <Target className="h-4 w-4 text-fuchsia-400" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Target Matrix Objective</h3>
            </div>
            
            <div className="mt-4 space-y-4 flex-1">
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                  <span className="text-zinc-400">Target Cumulative CGPA Limit</span>
                  <span className="text-fuchsia-400 font-black">9.00</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-zinc-500">Current Standing Index</span>
                  <span className="text-zinc-300 font-bold">8.70</span>
                </div>
                {/* Horizontal Progress bar logic mapping */}
                <div className="w-full bg-zinc-950 h-3 rounded-full overflow-hidden border border-white/5 p-0.5">
                  <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full transition-all" style={{ width: '87%' }} />
                </div>
              </div>

              {/* TASK PROGRESS LOG AGGREGATION BLOCK */}
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-2 font-mono text-[11px]">
                <p className="text-zinc-500 font-bold uppercase tracking-wider text-[9px]">Assignment Pipeline Progress</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-1.5 rounded bg-zinc-900/60 border border-white/5">
                    <p className="text-emerald-400 font-black">15</p>
                    <p className="text-[9px] text-zinc-500 uppercase mt-0.5">Done</p>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-900/60 border border-white/5">
                    <p className="text-violet-400 font-black">4</p>
                    <p className="text-[9px] text-zinc-500 uppercase mt-0.5">Pending</p>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-900/60 border border-white/5">
                    <p className="text-red-400 font-black">1</p>
                    <p className="text-[9px] text-zinc-500 uppercase mt-0.5">Late</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-[10px] font-mono text-zinc-600 mt-4 leading-tight">Delta threshold calibration active. 0.30 variance points left to cap.</p>
        </div>
      </div>

      {/* =========================================================
          ROW 2: SUBJECT EVALUATIONS & SKILL MATRICES
         ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* SUBJECT DETAILED BREAKDOWN BAR CHART */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <BarChart3 className="h-4 w-4 text-emerald-400" />
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Subject Mark Components</h3>
          </div>

          <div className="space-y-3 font-mono text-[11px] text-zinc-400">
            {[
              { component: "Internal Assessments Logs", earned: 24, total: 30, color: "bg-violet-500" },
              { component: "External Written Examinations", earned: 54, total: 70, color: "bg-fuchsia-500" },
              { component: "Practical Board Labs Evaluation", earned: 48, total: 50, color: "bg-emerald-500" }
            ].map((bar, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-300 font-sans font-medium">{bar.component}</span>
                  <span className="text-zinc-500 font-bold">{bar.earned} / {bar.total}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-white/5">
                  <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${(bar.earned / bar.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SKILL TRACKER LOGIC COMPONENT (Programming Star Weights) */}
        <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-500" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">Programming Skill Matrices</h3>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 font-bold uppercase">Badges: 4</span>
          </div>

          <div className="space-y-3 font-mono text-[11px]">
            {[
              { lang: "Python Core Engine Layouts", stars: 5 },
              { lang: "Java Enterprise Systems Modules", stars: 4 },
              { lang: "SQL Relational Mapping Indexes", stars: 5 }
            ].map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 rounded-xl bg-black/20 border border-white/5">
                <span className="text-zinc-300 font-sans font-medium truncate pr-2">{skill.lang}</span>
                <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < skill.stars ? 'fill-amber-500 text-amber-500' : 'text-zinc-700'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI INSIGHTS EXPERIMENTAL DIAGNOSTICS PANELS */}
        <div className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900/40 via-zinc-900/20 to-purple-950/10 backdrop-blur-md space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">AI Insights Diagnostic Engine</h3>
            </div>

            <div className="space-y-2 mt-3 font-mono text-[11px]">
              {[
                { type: "warning", alert: "Attendance dropping limits inside DBMS tracks.", icon: AlertTriangle, color: "text-amber-500 border-amber-500/10 bg-amber-500/5" },
                { type: "success", alert: "Velocity improvements detected inside programming metrics.", icon: CheckCircle2, color: "text-emerald-400 border-emerald-400/10 bg-emerald-500/5" },
                { type: "system", alert: "Execute 2 pending assignments to maintain target timeline schedule.", icon: Sparkles, color: "text-violet-400 border-violet-500/10 bg-violet-500/5" }
              ].map((ins, idx) => {
                const InsightIcon = ins.icon;
                return (
                  <div key={idx} className={`p-2.5 rounded-xl border flex items-start gap-2.5 ${ins.color}`}>
                    <InsightIcon className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                    <p className="font-sans text-zinc-300 leading-tight">{ins.alert}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[9px] font-mono text-zinc-600 mt-4 tracking-tight uppercase">Active Telemetry Stream • Models Synchronized</p>
        </div>
      </div>

    </div>
  );
}