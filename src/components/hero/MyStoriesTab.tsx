import { Card, Badge } from "@/components/ui";
import { stories } from "@/lib/data";

export const MyStoriesTab = () => {
  const canonCount = stories.filter((s) => s.canon).length;

  return (
    <div className="px-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-900">Your Stories</h3>
        <div className="flex gap-3 text-xs text-gray-500">
          <span>{stories.length} tales</span>
          <span>{canonCount} canon</span>
        </div>
      </div>
      {stories.map((story) => (
        <Card key={story.id} className="!p-4">
          <div className="flex gap-3">
            <div className={`w-12 h-12 rounded-xl ${story.color} flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm text-gray-900">{story.title}</h4>
                {story.canon && <Badge variant="canon">Canon</Badge>}
                <span className="ml-auto text-xs text-gray-500">{story.genre}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{story.preview}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                <span>📝 {story.words} words</span>
                <span>📅 {story.date}</span>
                <span className="ml-auto text-gray-600 font-medium">{story.theme}</span>
              </div>
              <div className="flex gap-2 mt-2">
                {story.tags.map((tag) => (
                  <span key={tag} className="text-xs text-violet-600 flex items-center gap-1">
                    ★ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
