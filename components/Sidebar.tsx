'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const navigationItems = [
  { id: 'dash', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'book', label: 'Courses', icon: 'BookOpen' },
  { id: 'user', label: 'Profile', icon: 'User' },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dash');

  return (
    <>
      {/* Desktop & Tablet Sidebar Layout */}
      <nav className="sticky top-0 left-0 z-40 hidden h-screen w-20 flex-col items-center border-r border-zinc-800/80 bg-[#0c0c0e] py-6 md:flex lg:w-64 transition-all duration-300">
        <ul className="w-full space-y-2 px-3 mt-8">
          {navigationItems.map((item) => {
            // @ts-ignore
            const Icon = Icons[item.icon] || Icons.HelpCircle;
            const isSelected = activeTab === item.id;

            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex w-full items-center justify-center lg:justify-start gap-4 rounded-xl py-3.5 px-4 text-sm font-medium transition-colors z-10 ${
                    isSelected ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="hidden lg:block">{item.label}</span>

                  {isSelected && (
                    <motion.div
                      layoutId="sidebar-active-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-l-2 border-indigo-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Navigation Bar Layer */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-zinc-800 bg-[#0c0c0e]/90 backdrop-blur-md md:hidden px-4">
        {navigationItems.map((item) => {
          // @ts-ignore
          const Icon = Icons[item.icon] || Icons.HelpCircle;
          const isSelected = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-colors ${
                isSelected ? 'text-indigo-400' : 'text-zinc-500'
              }`}
            >
              <Icon className="h-5 w-5" />
            </button>
          );
        })}
      </nav>
    </>
  );
}