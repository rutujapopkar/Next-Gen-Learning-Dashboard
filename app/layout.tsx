import React from 'react';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Student Terminal',
  description: 'Next-Gen Learning Dashboard Architecture',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark selection:bg-indigo-500/30 selection:text-indigo-200">
      <body className="bg-[#08080a] text-zinc-100 antialiased min-h-screen flex flex-col md:flex-row font-sans overflow-x-hidden">
        {/* Semantic Shell Structuring */}
        <Sidebar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:p-8 lg:p-12 pb-24 md:pb-8">
          {children}
        </main>
      </body>
    </html>
  );
}