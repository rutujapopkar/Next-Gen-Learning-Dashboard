'use client';

import React from 'react';
import BentoCard from './BentoCard';

export default function BentoGridContainer({ courses }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(courses) && courses.map((course: any, index: number) => (
        <BentoCard key={course?.id || index} course={course} />
      ))}
    </div>
  );
}