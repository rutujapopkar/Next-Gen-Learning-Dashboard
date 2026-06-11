import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Student Terminal',
  description: 'Next-Gen Learning Dashboard Architecture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0c0c0e] text-zinc-100 antialiased">
      <body>{children}</body>
    </html>
  );
}