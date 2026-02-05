"use client";

import { useState } from "react";
import { Card, Slider, Toggle } from "@/components/ui";
import { defaultFocusAreas } from "@/lib/data";

export const GlobalSettingsTab = () => {
  const [complexity, setComplexity] = useState(72);
  const [intensity, setIntensity] = useState(65);
  const [mythDepth, setMythDepth] = useState(78);
  const [collectiveEnabled, setCollectiveEnabled] = useState(true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <div className="flex items-center gap-2 mb-5">
          <span className="text-blue-500">🌐</span>
          <h3 className="font-bold text-gray-900">Universal Story Parameters</h3>
        </div>
        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Current Global Theme
            </label>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-violet-300">
              <option>Resilience & Perseverance</option>
              <option>Growth & Discovery</option>
              <option>Community & Connection</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Story Complexity</label>
            <Slider
              value={complexity}
              onChange={setComplexity}
              leftLabel="Simple & Direct"
              rightLabel="Rich & Layered"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Therapeutic Intensity
            </label>
            <Slider
              value={intensity}
              onChange={setIntensity}
              leftLabel="Light Touch"
              rightLabel="Deep Insight"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Mythological Depth
            </label>
            <Slider
              value={mythDepth}
              onChange={setMythDepth}
              leftLabel="Modern Metaphors"
              rightLabel="Ancient Archetypes"
            />
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-gray-700">Enable Collective Narrative</span>
            <Toggle enabled={collectiveEnabled} onToggle={() => setCollectiveEnabled(!collectiveEnabled)} />
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-5">
          <span className="text-emerald-500">★</span>
          <h3 className="font-bold text-gray-900">Current Focus Areas</h3>
        </div>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-violet-300"
          rows={7}
          defaultValue={defaultFocusAreas}
        />
        <div className="flex gap-3 mt-4">
          <button className="flex-1 bg-gray-800 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
            💾 Save Focus
          </button>
          <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 font-medium hover:bg-gray-50 flex items-center gap-2">
            ▶ Apply Now
          </button>
        </div>
      </Card>
    </div>
  );
};
