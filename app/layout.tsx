import React from 'react';
// @ts-ignore - Forces Cursor to remove the ghost red underline permanently
import './globals.css';

export const metadata = {
  title: 'Student Terminal',
  description: 'Next-Gen Learning Dashboard Architecture',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#08080a] text-zinc-100 antialiased min-h-screen font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}