'use client';

import React, { useState } from 'react';
import { Sun, Moon, Calendar, Award, ShieldAlert, MessageSquare, BookOpen, Bell } from 'lucide-react'; 
import Sidebar from './Sidebar'; 
import BentoGridContainer from './BentoGridContainer';
import UserProfileDropdown from './UserProfileDropdown';
import BentoCard from './BentoCard';
import MainHubDashboard from './MainHubDashboard';
import AcademicDailyHub from './AcademicDailyHub';
import PerformanceHub from './PerformanceHub';
import CommunicationHub from './CommunicationHub';
import AdministrativeHub from './admin/AdministrativeHub';

// Administrative Tiles
import DocumentCenterTile from './admin/DocumentCenterTile';
import FeeStatusTile from './admin/FeeStatusTile';
import RegistrationPortalTile from './admin/RegistrationPortalTile';

// Communication Tiles
import DirectMessagesTile from './communication/DirectMessagesTile';
import HelpDeskTile from './communication/HelpDeskTile';


// Personalization / Knowledge Tiles
import QuickLinksTile from './personalization/QuickLinksTile';

export default function DashboardShell(props: any) {
  const { initialCourses, studentName } = props;
  
  // Set default view state parameters matching Menu ID arrays
  const [currentView, setCurrentView] = useState('dash');
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen w-full flex text-sm md:text-base antialiased ${isDarkMode ? 'bg-[#040405] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      
      {/* Sidebar Interface Controller Navigation */}
      <Sidebar 
        currentView={currentView}
        onChangeView={(id: string) => setCurrentView(id)} 
      />

      {/* Main Content Workspace Frame Layout viewport */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Navigation Control Bar Global Header */}
        <header className={`w-full h-20 border-b px-8 flex items-center justify-between shrink-0 sticky top-0 z-30 backdrop-blur-md ${
          isDarkMode ? 'border-white/5 bg-zinc-950/20' : 'border-zinc-200 bg-white/20'
        }`}>
          <div className="space-y-1">
            <h1 className="text-xl font-bold tracking-tight md:text-2xl lg:text-3xl">Academic Node Workspace</h1>
            <p className="text-xs font-mono text-zinc-500">
              System Matrix: <span className="text-violet-500 font-bold tracking-wide">{currentView.toUpperCase()}</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Interactive Toggle Switcher */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-lg transition-colors border-0 bg-transparent cursor-pointer ${
                isDarkMode ? 'text-zinc-400 hover:text-white hover:bg-white/5' : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/5'
              }`}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Profile Matrix Controller Dropdown */}
            <UserProfileDropdown initialName={studentName} />
          </div>
        </header>

        {/* PRIMARY COMPONENT CANVAS RENDER ROUTER */}
        <div className="p-8 flex-1 text-sm md:text-base font-medium">
          
          {/* SECTION 1 & 2: Main Hub & At-a-Glance Dashboard Courses Feed */}
      
          {currentView === 'dash' && (
            <MainHubDashboard 
              studentName={studentName || "Rutuja Popkar"} 
              initialCourses={initialCourses} 
            />
          )}
        
          {/* SECTION 3: Academic & Daily Timeline Matrix Tracking */}
          {/* Academic & Daily View Tracking Matrix */}
          {currentView === 'academic' && (
            <AcademicDailyHub />
          )}

          {/* Performance & Progress Analytics Center Viewport */}
          {currentView === 'performance' && (
            <PerformanceHub />
          )}

         {/* Communication & Social Layer Channels Viewport */}
          {currentView === 'comm' && (
            <CommunicationHub />
          )}

          {/* SECTION 6: Logistical Administrative Paperwork Desk */}
          {/* Logistical Administrative Paperwork Desk Viewport */}
          {currentView === 'admin' && (
            <AdministrativeHub />
          )}

          {/* UNIVERSAL FOOTER: Knowledge Engines & Institutional Notice Board */}
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