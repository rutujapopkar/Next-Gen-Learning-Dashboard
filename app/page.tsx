import { getCourses } from '@/lib/supabase';
import BentoGridContainer from '@/components/BentoGridContainer';
import BentoCard from '@/components/BentoCard';
import CourseCard from '@/components/CourseCard';
import { Flame, Activity, Zap } from 'lucide-react';
import { Course } from '@/types/dashboard';

export const revalidate = 0; // Force runtime server computation

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
      <div className="flex h-[50vh] flex-col items-center justify-center rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-8 text-center max-w-xl mx-auto">
        <h3 className="text-lg font-bold text-red-400">Secure Node Sync Interrupted</h3>
        <p className="text-zinc-500 text-xs mt-2 font-mono">Verify credential signatures within .env.local boundaries.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Dashboard Top Header Node */}
      <header className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 tracking-widest uppercase">
          <Zap className="h-3 w-3 fill-indigo-400/20" /> Core Datastream Online
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent md:text-4xl">
          Student Terminal
        </h1>
      </header>

      <BentoGridContainer>
        {/* Hero Welcome Node Tile */}
        <BentoCard className="md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-gradient-to-br from-[#111116] via-[#13131a] to-[#0d0d12]">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">Welcome back, Explorer</h2>
            <p className="text-xs text-zinc-400 max-w-md">Your localized custom learning path matrices are actively synchronized with the main database pipeline.</p>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/40 border border-white/[0.03] p-4 rounded-xl self-start sm:self-auto">
            <div className="h-10 w-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.05)]">
              <Flame className="h-5 w-5 fill-orange-500/10" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">System Streak</p>
              <p className="text-base font-bold text-zinc-200">14 Days Active</p>
            </div>
          </div>
        </BentoCard>

        {/* Dynamic Database Course Cards */}
        {courses.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        {/* Neural Activity Metrics Chart Tile */}
        <BentoCard className="md:col-span-2 lg:col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="h-4 w-4 text-emerald-400" />
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-400">Neural Activity Heatmap</h3>
          </div>
          
          <div className="grid grid-flow-col gap-1.5 overflow-x-auto justify-start py-2 scrollbar-none">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="grid grid-rows-4 gap-1.5">
                {Array.from({ length: 4 }).map((_, j) => {
                  const variance = Math.random();
                  const color = variance > 0.85 ? 'bg-indigo-500' : variance > 0.5 ? 'bg-indigo-950/60 border-indigo-900/30' : 'bg-zinc-900/80 border-zinc-800/40';
                  return <div key={j} className={`h-3 w-3 rounded-[3px] ${color} border transition-all duration-300 hover:scale-125`} />;
                })}
              </div>
            ))}
          </div>
        </BentoCard>
      </BentoGridContainer>
    </div>
  );
}