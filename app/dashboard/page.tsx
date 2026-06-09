import { getCourses } from '@/lib/supabase';
import BentoGridContainer from '@/components/BentoGridContainer';
import BentoCard from '@/components/BentoCard';
import CourseCard from '@/components/CourseCard';
import { Flame, Activity } from 'lucide-react';
import { Course } from '@/types/dashboard';

// Enforce dynamic server-side rendering to fetch fresh database states
export const revalidate = 0;

export default async function DashboardPage() {
  let courses: Course[] = [];
  let errorState = false;

  try {
    // Fetches live data from Supabase PostgreSQL using Next.js Server Components (RSC)
    courses = await getCourses();
  } catch (err) {
    errorState = true;
  }

  // Graceful error handling if the database connection fails
  if (errorState) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
        <h3 className="text-xl font-bold text-red-400">Database Connection Failure</h3>
        <p className="text-zinc-400 text-sm mt-2 max-w-md">
          Failed to resolve server-side database targets. Please verify your environment configurations inside your .env.local file.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      {/* Title & Header Section */}
      <header className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent md:text-4xl">
          Student Terminal
        </h1>
        <p className="text-sm text-zinc-400">Live data pipelines operational.</p>
      </header>

      {/* The Bento Grid Container Layout */}
      <BentoGridContainer>
        
        {/* Bento Tile 1: Hero Node Greeting & Streak Indicator */}
        <BentoCard className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-gradient-to-br from-[#121215] to-[#16161a]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">Welcome back, Explorer</h2>
            <p className="text-sm text-zinc-400">Your custom learning paths are synchronized and up to date.</p>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800/80 p-4 rounded-xl self-start sm:self-auto">
            <div className="h-10 w-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Streak</p>
              <p className="text-lg font-bold text-zinc-200">14 Days Active</p>
            </div>
          </div>
        </BentoCard>

        {/* Bento Tile 2: Dynamic Course Grid Blocks mapped from Supabase rows */}
        {courses.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        {/* Bento Tile 3: Activity Visual Contribution Tracker Map */}
        <BentoCard className="md:col-span-2 lg:col-span-3 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-4 w-4 text-emerald-400" />
            <h3 className="text-sm font-semibold text-zinc-300">Neural Activity Tracker</h3>
          </div>
          
          {/* Mock Contribution Grid Graph */}
          <div className="grid grid-flow-col gap-1 overflow-x-auto justify-start py-2 mask-image">
            {Array.from({ length: 32 }).map((_, index) => (
              <div key={index} className="grid grid-rows-4 gap-1">
                {Array.from({ length: 4 }).map((_, innerKey) => {
                  // Generates random green/indigo activity blocks safely
                  const variance = Math.random();
                  const colorClass = variance > 0.75 
                    ? 'bg-indigo-500' 
                    : variance > 0.4 
                    ? 'bg-indigo-900/60' 
                    : 'bg-zinc-900 border-zinc-800/40';
                  return (
                    <div 
                      key={innerKey} 
                      className={`h-3 w-3 rounded-[2px] ${colorClass} border transition-transform duration-200 hover:scale-125`} 
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </BentoCard>
        
      </BentoGridContainer>
    </div>
  );
}