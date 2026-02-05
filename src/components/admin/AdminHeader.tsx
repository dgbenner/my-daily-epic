import { heroStats } from "@/lib/data";

export const AdminHeader = () => (
  <div className="bg-gradient-to-r from-violet-600 via-purple-500 to-violet-700 px-8 py-5 text-white rounded-2xl mx-4 mt-4">
    <div className="flex items-center gap-4">
      <button className="text-white/60 hover:text-white">←</button>
      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">🎲</div>
      <div>
        <h1 className="font-bold text-xl tracking-tight">MyDailyEpic - Dungeon Master</h1>
        <p className="text-white/70 text-sm">Orchestrate the collective heroic journey</p>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <span className="border border-emerald-300 text-emerald-200 text-xs px-3 py-1 rounded-full">
          {heroStats.activeHeroes.toLocaleString()} Active Heroes
        </span>
        <span className="text-white/60">📊</span>
      </div>
    </div>
  </div>
);
