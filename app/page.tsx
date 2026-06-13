import React from 'react';
import { getCourses } from '@/lib/supabase';
import DashboardShell from '@/components/DashboardShell';
import { Course } from '@/types/dashboard';

// Enforce Next.js to pull fresh records on every request
export const revalidate = 0;

export default async function DashboardPage() {
  let initialCourses: Course[] = [];
  
  try {
    // Fetches securely before sending HTML layout to the browser window
    initialCourses = await getCourses();
  } catch (err) {
    console.error("Critical: Supabase connection failed during server fetch:", err);
  }

  return <DashboardShell initialCourses={initialCourses || []} />;
}