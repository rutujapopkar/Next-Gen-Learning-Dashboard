'use client';

import React from 'react';

export default function BentoCard({ course, children }: any) {
  return (
    <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-md hover:border-violet-500/30 transition-all h-full flex flex-col justify-between">
      {/* If data payload model arguments are sent, compile fallback Course Cards metrics layout */}
      {course ? (
        <div className="flex flex-col h-full justify-between">
          <h3 className="text-lg font-bold text-white mb-2">
            {course?.title || 'Untitled Node Course'}
          </h3>
          <p className="text-sm text-zinc-400 font-mono">
            {course?.description || 'No system parameter telemetry data stream provided.'}
          </p>
        </div>
      ) : (
        /* Otherwise, cleanly inject sub-folder custom tiles modules */
        children
      )}
    </div>
  );
}