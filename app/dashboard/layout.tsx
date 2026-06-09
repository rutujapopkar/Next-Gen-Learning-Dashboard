import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden">
      {/* slim, collapsible layout navigation */}
      <Sidebar />
      
      {/* Main layout frame */}
      <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}