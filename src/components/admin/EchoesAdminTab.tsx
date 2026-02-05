"use client";

import { useState } from "react";
import { Card, Badge, Toggle } from "@/components/ui";
import { echoStories } from "@/lib/data";

export const EchoesAdminTab = () => {
  const [autoModeration, setAutoModeration] = useState(true);
  const [featuredEnabled, setFeaturedEnabled] = useState(true);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-violet-500">🌊</span>
            <h3 className="font-bold text-gray-900">Echoes Moderation</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-sm text-gray-900">Auto-Moderation</p>
                <p className="text-xs text-gray-400">
                  Automatically filter inappropriate content
                </p>
              </div>
              <Toggle enabled={autoModeration} onToggle={() => setAutoModeration(!autoModeration)} />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium text-sm text-gray-900">Featured Stories</p>
                <p className="text-xs text-gray-400">Allow manual curation of featured echoes</p>
              </div>
              <Toggle enabled={featuredEnabled} onToggle={() => setFeaturedEnabled(!featuredEnabled)} />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-900 mb-2">Moderation Queue</p>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="font-semibold text-amber-500">12</span>
                <span className="text-gray-500 ml-1">pending</span>
              </div>
              <div>
                <span className="font-semibold text-emerald-500">847</span>
                <span className="text-gray-500 ml-1">approved today</span>
              </div>
              <div>
                <span className="font-semibold text-red-500">3</span>
                <span className="text-gray-500 ml-1">flagged</span>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-amber-500">⭐</span>
            <h3 className="font-bold text-gray-900">Featured Curation</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Select stories to feature in the Echoes discovery feed.
          </p>
          <div className="space-y-3">
            {echoStories.slice(0, 3).map((story) => (
              <div
                key={story.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${story.color}`} />
                  <div>
                    <p className="font-medium text-sm text-gray-900">{story.title}</p>
                    <p className="text-xs text-gray-400">
                      {story.resonanceCount} resonances
                    </p>
                  </div>
                </div>
                <Badge variant="green">Featured</Badge>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            + Add Featured Story
          </button>
        </Card>
      </div>
      <Card>
        <h3 className="font-bold text-gray-900 mb-4">Echoes Analytics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">4,521</p>
            <p className="text-xs text-gray-500">Total Echoes</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">23,847</p>
            <p className="text-xs text-gray-500">Total Resonances</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">67%</p>
            <p className="text-xs text-gray-500">Engagement Rate</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">Adventure</p>
            <p className="text-xs text-gray-500">Top Genre</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
