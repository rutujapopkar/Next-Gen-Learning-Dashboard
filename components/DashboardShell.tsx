'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import BentoGridContainer from '@/components/BentoGridContainer';
import BentoCard from '@/components/BentoCard';
import CourseCard from '@/components/CourseCard';

// Comprehensive Architectural Tile Imports
import ScheduleTile from '@/components/academic/ScheduleTile';
import TodoListTile from '@/components/academic/TodoListTile';
import AttendanceTile from '@/components/academic/AttendanceTile';
import GpaTile from '@/components/performance/GpaTile';
import DegreeProgressTile from '@/components/performance/DegreeProgressTile';
import AnalyticsChartTile from '@/components/performance/AnalyticsChartTile';
import DirectMessagesTile from '@/components/communication/DirectMessagesTile';
import HelpDeskTile from '@/components/communication/HelpDeskTile';
import FeeStatusTile from '@/components/admin/FeeStatusTile';
import RegistrationPortalTile from '@/components/admin/RegistrationPortalTile';
import DocumentCenterTile from '@/components/admin/DocumentCenterTile';
import QuickLinksTile from '@/components/personalization/QuickLinksTile';

import { Bell, Flame, Moon, Sparkles } from 'lucide-react';
import { Course } from '@/types/dashboard';

export default function DashboardShell({ initialCourses }: { initialCourses: Course[] }) {
  const [view, setView] = useState('dash');

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      <Sidebar currentView={view} onChangeView={setView} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:p-8 lg:p-12 pb-24 md:pb-8">
        <div className="space-y-6">
          
          {/* Dynamic Title Header */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400 tracking-widest uppercase">
                <Sparkles className="h-3 w-3 animate-pulse" /> Live Server Stream
              </div>
              <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                {view === 'dash' && "Student Terminal Core"}
                {view === 'academic' && "Academic & Daily Routine"}
                {view === 'performance' && "Performance Metrics"}
                {view === 'comm' && "Broadcast & Peer Relays"}
                {view === 'admin' && "Administrative Portals"}
              </h1>
            </div>
            
            <div className="flex items-center gap-3 bg-zinc-900/40 p-2 rounded-xl border border-white/5 self-start sm:self-auto">
              <button className="p-2 rounded-lg bg-zinc-950 text-violet-400 border border-white/5" title="Dark Mode Active">
                <Moon className="h-4 w-4" />
              </button>
              <div className="h-6 w-[1px] bg-white/5" />
              <div className="flex items-center gap-2.5 px-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 ring-2 ring-violet-500/20" />
                <span className="text-xs font-mono font-bold text-zinc-300">Explorer_Node</span>
              </div>
            </div>
          </header>

          {/* Core Grid Matrix Filter */}
          <BentoGridContainer key={view}>
            {/* VIEW 1: MAIN HUB */}
            {view === 'dash' && (
              <>
                <BentoCard className="md:col-span-2 row-span-1 bg-gradient-to-br from-zinc-900 to-black">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl" />
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-black text-white">Welcome back, Explorer</h2>
                      <p className="text-[10px] text-zinc-500 font-mono mt-0.5">Database synchronized securely.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-950/60 border border-white/5 p-2 rounded-xl max-w-xs mt-2">
                      <Flame className="h-4 w-4 text-orange-400 fill-orange-500/10" />
                      <span className="text-xs font-bold text-zinc-200 font-mono">14 Days Active Streak</span>
                    </div>
                  </div>
                </BentoCard>

                {/* Live Course Map Injections */}
                {initialCourses.slice(0, 2).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
                
                <BentoCard className="col-span-1 row-span-2"><ScheduleTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-2"><TodoListTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><AttendanceTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><GpaTile /></BentoCard>
                <BentoCard className="md:col-span-2 row-span-1"><AnalyticsChartTile /></BentoCard>
              </>
            )}

            {/* VIEW 2: ACADEMIC & DAILY */}
            {view === 'academic' && (
              <>
                <BentoCard className="md:col-span-2 row-span-2"><ScheduleTile /></BentoCard>
                <BentoCard className="md:col-span-2 row-span-2"><TodoListTile /></BentoCard>
                <BentoCard className="md:col-span-2 row-span-1"><AttendanceTile /></BentoCard>
                <BentoCard className="md:col-span-2 row-span-1"><QuickLinksTile /></BentoCard>
              </>
            )}

            {/* VIEW 3: PERFORMANCE & PROGRESS */}
            {view === 'performance' && (
              <>
                <BentoCard className="md:col-span-2 row-span-2"><AnalyticsChartTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><GpaTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><DegreeProgressTile /></BentoCard>
                {initialCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </>
            )}

            {/* VIEW 4: COMMUNICATION & SUPPORT */}
            {view === 'comm' && (
              <>
                <BentoCard className="md:col-span-2 row-span-1">
                  <div className="flex items-center gap-2 text-zinc-400 mb-2"><Bell className="h-4 w-4 text-violet-400" /> <h4 className="text-xs font-bold font-mono uppercase tracking-wider">Broadcast Network</h4></div>
                  <p className="text-xs text-zinc-400 p-2 border-b border-white/5 font-mono">SYS_MSG: End-Semester evaluation gates lock down Friday midnight.</p>
                </BentoCard>
                <BentoCard className="col-span-1 row-span-1"><DirectMessagesTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><HelpDeskTile /></BentoCard>
              </>
            )}

            {/* VIEW 5: ADMINISTRATIVE & FINANCIAL */}
            {view === 'admin' && (
              <>
                <BentoCard className="col-span-1 row-span-1"><FeeStatusTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><RegistrationPortalTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><DocumentCenterTile /></BentoCard>
                <BentoCard className="col-span-1 row-span-1"><QuickLinksTile /></BentoCard>
              </>
            )}
          </BentoGridContainer>
        </div>
      </main>
    </div>
  );
}