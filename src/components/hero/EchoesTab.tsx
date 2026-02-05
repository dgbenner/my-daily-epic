"use client";

import { useState } from "react";
import { Card, Badge } from "@/components/ui";
import { echoStories } from "@/lib/data";

type FilterType = "all" | "genre" | "theme" | "tradition" | "region";

export const EchoesTab = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [resonated, setResonated] = useState<Set<string>>(new Set());

  const toggleResonance = (id: string) => {
    setResonated((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All Echoes" },
    { key: "genre", label: "By Genre" },
    { key: "theme", label: "By Theme" },
    { key: "tradition", label: "By Tradition" },
    { key: "region", label: "By Region" },
  ];

  return (
    <div className="px-4 space-y-4">
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-violet-500">🌊</span>
          <h3 className="font-bold text-gray-900">Echoes</h3>
          <span className="text-xs text-gray-400 ml-auto">
            Stories that resonate across journeys
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filter === f.key
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Card>

      {echoStories.map((story) => (
        <Card key={story.id} className="!p-4">
          <div className="flex gap-3">
            <div className={`w-12 h-12 rounded-xl ${story.color} flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm text-gray-900">{story.title}</h4>
                <Badge variant="purple">{story.tradition}</Badge>
              </div>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{story.preview}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                <span>{story.genre}</span>
                <span>•</span>
                <span>{story.theme}</span>
                <span>•</span>
                <span>{story.region}</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() => toggleResonance(story.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    resonated.has(story.id)
                      ? "bg-violet-100 text-violet-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{resonated.has(story.id) ? "✨" : "🌟"}</span>
                  {resonated.has(story.id) ? "Resonated" : "This resonates"}
                </button>
                <span className="text-xs text-gray-400">
                  {story.resonanceCount + (resonated.has(story.id) ? 1 : 0)} echoes
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}

      <p className="text-xs text-gray-400 text-center py-2">
        Echoes are anonymous. No comments, no DMs — just resonance.
      </p>
    </div>
  );
};
