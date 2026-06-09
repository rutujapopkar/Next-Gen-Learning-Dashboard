export default function LoadingDashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-pulse">
      <div className="space-y-2">
        <div className="h-8 w-48 bg-zinc-800 rounded-lg" />
        <div className="h-4 w-32 bg-zinc-800/60 rounded-lg" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-40 bg-zinc-900 rounded-2xl md:col-span-2 lg:col-span-3 border border-zinc-800" />
        <div className="h-52 bg-zinc-900 rounded-2xl border border-zinc-800" />
        <div className="h-52 bg-zinc-900 rounded-2xl border border-zinc-800" />
        <div className="h-52 bg-zinc-900 rounded-2xl border border-zinc-800" />
      </div>
    </div>
  );
}