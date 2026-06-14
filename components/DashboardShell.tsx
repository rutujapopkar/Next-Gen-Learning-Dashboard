'use client';

import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // For your missing theme icon
import Sidebar from './Sidebar'; 
import BentoGridContainer from './BentoGridContainer';
import UserProfileDropdown from './UserProfileDropdown';

export default function DashboardShell(props: any) {
  const { initialCourses, studentName } = props;
  
  // 1. Restore the view state that controls your content tabs
  const [currentView, setCurrentView] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Use 'any' casting to bypass the "not a function" error in your image
  const SidebarModule = Sidebar as any;

  return (
    <div className={`min-h-screen w-full flex ${isDarkMode ? 'bg-[#040405] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      {/* 2. Fix the "onChangeView" error by passing the correct state props */}
      <SidebarModule 
        activeView={currentView} 
        onChangeView={(view: string) => setCurrentView(view)} 
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="w-full h-20 border-b border-white/5 px-8 flex items-center justify-between shrink-0 bg-zinc-950/20 backdrop-blur-md sticky top-0 z-30">
          <div className="space-y-0.5">
            <h1 className="text-xl font-bold tracking-tight">Academic Node Workspace</h1>
            <p className="text-xs font-mono text-zinc-500">System state: {currentView.toUpperCase()}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* 3. Restoring the missing Theme Icon */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors border-0 bg-transparent cursor-pointer text-zinc-400 hover:text-white"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <UserProfileDropdown initialName={studentName} />
          </div>
        </header>

        {/* 4. Display content based on the active tab */}
        <div className="p-8 flex-1">
          {currentView === 'dashboard' ? (
            <BentoGridContainer courses={initialCourses || []} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-zinc-500 font-mono">
              <p>TAB_DATA_LOAD: {currentView.toUpperCase()}</p>
              <p className="text-xs mt-2">Active telemetry stream established.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}