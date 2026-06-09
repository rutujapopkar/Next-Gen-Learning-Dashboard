import { getCourses } from '@/lib/supabase';
import BentoGridContainer from '@/components/BentoGridContainer';
import BentoCard from '@/components/BentoCard';
import CourseCard from '@/components/CourseCard';
import { Flame, Activity } from 'lucide-react';
import { Course } from '@/types/dashboard'; // Make sure this import matches

export const revalidate = 0;

export default async function DashboardPage() {
  let courses: Course[] = [];
  let errorState = false;

  try {
    courses = await getCourses();
  } catch (err) {
    errorState = true;
  }

  if (errorState) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
        <h3 className="text-xl font-bold text-red-400">Database Synchronizer Failure</h3>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Student Terminal
        </h1>
      </header>

      <BentoGridContainer>
        <BentoCard className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-gradient-to-br from-[#121215] to-[#16161a]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Welcome back, Explorer</h2>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl">
            <Flame className="h-5 w-5 text-orange-400" />
            <div><p className="text-lg font-bold text-zinc-200">14 Days Active</p></div>
          </div>
        </BentoCard>

        {/* Strictly typing item to Course clears mapping type mismatches */}
        {courses.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        <BentoCard className="md:col-span-2 lg:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-4 w-4 text-emerald-400" />
            <h3 className="text-sm font-semibold text-zinc-300">Neural Activity Tracker</h3>
          </div>
          <div className="grid grid-flow-col gap-1 overflow-x-auto justify-start py-2">
            {Array.from({ length: 32 }).map((_, index) => (
              <div key={index} className="grid grid-rows-4 gap-1">
                {Array.from({ length: 4 }).map((_, innerKey) => (
                  <div key={innerKey} className="h-3 w-3 rounded-[2px] bg-zinc-900 border border-zinc-800/20" />
                ))}
              </div>
            ))}
          </div>
        </BentoCard>
      </BentoGridContainer>
    </div>
  );
}