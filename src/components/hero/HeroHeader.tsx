import { Badge } from "@/components/ui";

export const HeroHeader = () => (
  <div className="bg-gradient-to-r from-violet-600 via-purple-500 to-amber-400 px-5 py-4 text-white">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">
        🎬
      </div>
      <span className="font-bold text-lg tracking-tight">MyDailyEpic</span>
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-white/80 text-sm">⚙️ Admin</span>
        <Badge variant="stories">6 Stories</Badge>
        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">★ Hero</span>
      </div>
    </div>
    <p className="text-white/80 text-sm mt-1">Transform your story and yourself into legend</p>
  </div>
);
