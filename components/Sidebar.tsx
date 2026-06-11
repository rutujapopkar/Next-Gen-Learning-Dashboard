'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const menuItems = [
  { id: 'dash', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'book', label: 'Courses', icon: 'BookOpen' },
  { id: 'user', label: 'Profile', icon: 'User' },
];

export default function Sidebar() {
  const [active, setActive] = useState('dash');

  return (
    <header>
      {/* Responsive Shell Node: Desktop & Tablet Navigation */}
      <nav className="sticky top-0 left-0 z-40 hidden h-screen w-20 flex-col items-center border-r border-white/[0.02] bg-[#09090c] py-8 md:flex lg:w-64 transition-all duration-300">
        <div className="mb-10 hidden lg:block px-6 w-full">
          <span className="text-sm font-black tracking-widest bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase font-mono">Terminal_v1.0</span>
        </div>
        <ul className="w-full space-y-1.5 px-3">
          {menuItems.map((item) => {
            // @ts-ignore
            const IconComponent = Icons[item.icon] || Icons.HelpCircle;
            const isSelected = active === item.id;

            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => setActive(item.id)}
                  className={`relative flex w-full items-center justify-center lg:justify-start gap-4 rounded-xl py-3.5 px-4 text-sm font-medium transition-colors z-10 ${
                    isSelected ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <IconComponent className="h-5 w-5 flex-shrink-0" />
                  <span className="hidden lg:block font-medium tracking-tight">{item.label}</span>

                  {isSelected && (
                    <motion.div
                      layoutId="sidebar-active-indicator"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/5 border-l-2 border-indigo-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Control Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-white/[0.03] bg-[#09090c]/80 backdrop-blur-lg md:hidden px-6">
        {menuItems.map((item) => {
          // @ts-ignore
          const IconComponent = Icons[item.icon];
          const isSelected = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-colors ${
                isSelected ? 'text-indigo-400' : 'text-zinc-500'
              }`}
            >
              <IconComponent className="h-5 w-5" />
              {isSelected && (
                <motion.div layoutId="mobile-dot" className="absolute bottom-1 h-1 w-1 rounded-full bg-indigo-400" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}