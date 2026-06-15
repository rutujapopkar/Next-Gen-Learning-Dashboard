'use client';

import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react'; 
import Sidebar from './Sidebar'; 
import BentoGridContainer from './BentoGridContainer';
import UserProfileDropdown from './UserProfileDropdown';
import BentoCard from './BentoCard';

// Academic Tiles
import AttendanceTile from './academic/AttendanceTile';
import ScheduleTile from './academic/ScheduleTile';
import TodoListTile from './academic/TodoListTile';

// Admin Tiles
import DocumentCenterTile from './admin/DocumentCenterTile';
import FeeStatusTile from './admin/FeeStatusTile';
import RegistrationPortalTile from './admin/RegistrationPortalTile';

// Communication Tiles
import DirectMessagesTile from './communication/DirectMessagesTile';
import HelpDeskTile from './communication/HelpDeskTile';

// Performance Tiles
import AnalyticsChartTile from './performance/AnalyticsChartTile';
import DegreeProgressTile from './performance/DegreeProgressTile';
import GpaTile from './performance/GpaTile';

// Personalization Tiles
import QuickLinksTile from './personalization/QuickLinksTile';

export default function DashboardShell(props: any) {
  const { initialCourses, studentName } = props;
  
  const [currentView, setCurrentView] = useState('dash');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    // FIX 1: Enforces standard 14px text on mobile and clean 16px font sizes globally on desktop viewport targets
    <div className={`min-h-screen w-full flex text-sm md:text-base antialiased ${isDarkMode ? 'bg-[#040405] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      
      {/* Sidebar Controller */}
      <Sidebar 
        currentView={currentView}
        onChangeView={(id: string) => setCurrentView(id)} 
      />

      {/* Main Content Workspace Frame */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Navigation Control Bar Header */}
        <header className={`w-full h-20 border-b px-8 flex items-center justify-between shrink-0 sticky top-0 z-30 backdrop-blur-md ${
          isDarkMode ? 'border-white/5 bg-zinc-950/20' : 'border-zinc-200 bg-white/20'
        }`}>
          <div className="space-y-1">
            {/* Clean Title scale formatting layout */}
            <h1 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">Academic Node Workspace</h1>
            <p className="text-xs font-mono text-zinc-500">
              System state: <span className="text-violet-500 font-bold tracking-wide">{currentView.toUpperCase()}</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Interactive Theme Switcher Button */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-lg transition-colors border-0 bg-transparent cursor-pointer ${
                isDarkMode ? 'text-zinc-400 hover:text-white hover:bg-white/5' : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/5'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Profile Dropdown Hub */}
            <UserProfileDropdown initialName={studentName} />
          </div>
        </header>

        {/* MAIN HUB VISUALIZATION CANVAS */}
        {/* FIX 2: Bumps tile text up cleanly so nested parameters render beautifully without squeezing out component grids */}
        <div className="p-8 flex-1 text-sm md:text-base font-medium">
          
          {/* Main Hub View */}
          {currentView === 'dash' && (
            <BentoGridContainer courses={initialCourses || []} />
          )}

          {/* Academic & Daily View */}
          {currentView === 'academic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BentoCard><AttendanceTile /></BentoCard>
              <BentoCard><ScheduleTile /></BentoCard>
              <BentoCard><TodoListTile /></BentoCard>
            </div>
          )}

          {/* Performance & Progress View */}
          {currentView === 'performance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BentoCard><AnalyticsChartTile /></BentoCard>
              <BentoCard><DegreeProgressTile /></BentoCard>
              <BentoCard><GpaTile /></BentoCard>
            </div>
          )}

          {/* Communication View */}
          {currentView === 'comm' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BentoCard><DirectMessagesTile /></BentoCard>
              <BentoCard><HelpDeskTile /></BentoCard>
            </div>
          )}

          {/* Administrative View */}
          {currentView === 'admin' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BentoCard><DocumentCenterTile /></BentoCard>
              <BentoCard><FeeStatusTile /></BentoCard>
              <BentoCard><RegistrationPortalTile /></BentoCard>
            </div>
          )}

          {/* Knowledge Engines Block */}
          <div className="mt-6">
            <BentoCard>
              <QuickLinksTile />
            </BentoCard>
          </div>

        </div>
      </main>
    </div>
  );
}