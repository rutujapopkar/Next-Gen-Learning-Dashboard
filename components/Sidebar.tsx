'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, User, GraduationCap, Calendar, MessageSquare, ShieldAlert } from 'lucide-react';

const menuItems = [
  { id: 'dash', label: 'Main Hub', icon: LayoutDashboard },
  { id: 'academic', label: 'Academic & Daily', icon: Calendar },
  { id: 'performance', label: 'Performance & Progress', icon: BookOpen },
  { id: 'comm', label: 'Communication', icon: MessageSquare },
  { id: 'admin', label: 'Administrative', icon: ShieldAlert },
];

interface SidebarProps {
  currentView: string;
  onChangeView: (id: string) => void;
}

export default function Sidebar({ currentView, onChangeView }: SidebarProps) {
  return (
    <aside className="fixed bottom-0 left-0 right-0 z-50 h-16 w-full border-t border-white/5 bg-zinc-950/80 backdrop-blur-md md:sticky md:top-0 md:h-screen md:w-20 md:border-r md:border-t-0 lg:w-64 flex md:flex-col items-center py-0 md:py-8 transition-all duration-300">
      <div className="hidden lg:flex items-center gap-3 px-6 w-full mb-8 font-mono text-xs font-black tracking-widest text-violet-400">
        <GraduationCap className="h-5 w-5" /> Dashboard
      </div>

      <ul className="flex flex-row md:flex-col w-full justify-around md:justify-start md:space-y-2 px-4 md:px-2 lg:px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isSelected = currentView === item.id;

          return (
            <li key={item.id} className="relative w-full list-none">
              <button
                onClick={() => onChangeView(item.id)}
                className={`relative flex w-full items-center justify-center lg:justify-start gap-4 rounded-xl py-3 px-3 text-sm font-medium transition-colors z-10 cursor-pointer ${
                  isSelected ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="hidden lg:block font-medium tracking-tight text-xs">{item.label}</span>

                {isSelected && (
                  <motion.div
                    layoutId="sidebar-pill-marker"
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}