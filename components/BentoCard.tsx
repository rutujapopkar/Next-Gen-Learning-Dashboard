'use client';

import React from 'react';

export default function BentoCard({ course, children }: any) {
  return (
    <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-md hover:border-violet-500/30 transition-all h-full">
      {/* If simple data payload object parameters exist, render standard bento courses templates */}
      {course ? (
        <>
          <h3 className="text-lg font-bold text-white mb-2">
            {course?.title || 'Untitled Node Course'}
          </h3>
          <p className="text-sm text-zinc-400 font-mono">
            {course?.description || 'No system parameter telemetry data stream provided.'}
          </p>
        </>
      ) : (
        /* Otherwise, render custom loaded files dynamically */
        children
      )}
    </div>
  );
}