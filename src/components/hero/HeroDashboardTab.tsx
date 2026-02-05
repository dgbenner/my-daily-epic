import { Card } from "@/components/ui";
import { achievements, genreStats, stories } from "@/lib/data";

export const HeroDashboardTab = () => {
  const canonCount = stories.filter((s) => s.canon).length;

  return (
    <div className="px-4 space-y-4">
      <Card className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span>🏛️</span>
          <h3 className="font-bold text-gray-900">Hero Dashboard</h3>
        </div>
        <div className="flex justify-center gap-8">
          <div>
            <p className="text-2xl font-bold text-amber-500">{achievements.length}</p>
            <p className="text-xs text-gray-500">Achievements</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-600">{canonCount}</p>
            <p className="text-xs text-gray-500">Canon Stories</p>
          </div>
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-gray-900 mb-4">Achievement Map</h3>
        <div className="grid grid-cols-2 gap-2">
          {achievements.map((a) => (
            <div key={a} className="flex items-center gap-2 text-sm py-1.5">
              <span className="text-amber-400 text-xs">★</span>
              <span className="text-gray-700">{a}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-gray-900 mb-4">Genre Mastery</h3>
        <div className="space-y-2">
          {genreStats.map((g) => (
            <div key={g.genre} className="flex items-center justify-between text-sm">
              <span className="text-gray-700">{g.genre}</span>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 rounded-full ${g.color}`}
                  style={{ width: `${g.count * 12}px` }}
                />
                <span className="text-gray-500 w-4">{g.count}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-gray-900 mb-3">Growth Patterns</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Most Common Theme:</span>{" "}
            <span className="text-gray-600">Resilience (appears in 3 stories)</span>
          </p>
          <p>
            <span className="font-semibold">Preferred Genre:</span>{" "}
            <span className="text-gray-600">Adventure (3 stories)</span>
          </p>
          <p>
            <span className="font-semibold">Growth Trajectory:</span>{" "}
            <span className="text-gray-600">Increasing complexity over time</span>
          </p>
          <p>
            <span className="font-semibold">Hero Archetype:</span>{" "}
            <span className="text-gray-600">The Explorer — seeks freedom and authenticity</span>
          </p>
        </div>
      </Card>
    </div>
  );
};
