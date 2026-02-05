import { Card, ProgressBar } from "@/components/ui";
import { heroStats, themeDistribution } from "@/lib/data";

export const AnalyticsTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center !py-8">
          <p className="text-emerald-500 text-sm mb-1">📈</p>
          <p className="text-3xl font-bold text-gray-900">
            {heroStats.activeHeroes.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">Active Heroes</p>
        </Card>
        <Card className="text-center !py-8">
          <p className="text-blue-500 text-sm mb-1">💬</p>
          <p className="text-3xl font-bold text-gray-900">
            {heroStats.storiesCreated.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">Stories Created</p>
        </Card>
        <Card className="text-center !py-8">
          <p className="text-rose-400 text-sm mb-1">♥</p>
          <p className="text-3xl font-bold text-gray-900">{heroStats.avgResilienceGrowth}</p>
          <p className="text-sm text-gray-500">Avg. Resilience Growth</p>
        </Card>
      </div>
      <Card>
        <h3 className="font-bold text-gray-900 mb-5">Story Theme Distribution</h3>
        <div className="space-y-4">
          {themeDistribution.map((t) => (
            <div key={t.name} className="flex items-center justify-between">
              <span className="text-sm text-gray-700 w-48">{t.name}</span>
              <div className="flex items-center gap-3 flex-1 justify-end">
                <ProgressBar percent={t.percent} color={t.color} />
                <span className="text-sm font-medium text-gray-600 w-10 text-right">
                  {t.percent}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
