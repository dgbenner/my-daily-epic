import { Card } from "@/components/ui";
import { stories } from "@/lib/data";

export const MyEpicTab = () => {
  const totalWords = stories.reduce((sum, s) => sum + s.words, 0);
  const canonCount = stories.filter((s) => s.canon).length;
  const sideQuestCount = stories.filter((s) => !s.canon).length;

  return (
    <div className="px-4 space-y-4">
      <Card className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-amber-500 text-lg">📜</span>
          <h3 className="font-bold text-gray-900">Your Epic Journey</h3>
        </div>
        <p className="text-4xl font-bold text-amber-500">{totalWords}</p>
        <p className="text-sm text-gray-500 mt-1">words in your lore</p>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600">Progress to Chapter</span>
            <span className="font-semibold">120%</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"
              style={{ width: "100%" }}
            />
          </div>
          <p className="text-xs text-emerald-600 mt-1">
            Ready to weave your stories into a chapter!
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:from-amber-500 hover:to-amber-600 transition-all">
            ⚜ Weave Stories Into Chapter
          </button>
          <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 font-medium hover:bg-gray-50">
            🖼️ Chapter Cover
          </button>
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-gray-900 mb-3">Canon Management</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Canon Stories</span>
            <span className="font-semibold">{canonCount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Side Quests</span>
            <span className="font-semibold">{sideQuestCount}</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Your canon represents your main heroic journey. Side quests add depth but don&apos;t need
          to be part of your epic.
        </p>
      </Card>
    </div>
  );
};
