"use client";

import { useState } from "react";
import { Card, Toggle } from "@/components/ui";
import { therapeuticPrinciples, solutionFocusedQuestions, reframingPrompts } from "@/lib/data";

export const PsychologyTab = () => {
  const [principles, setPrinciples] = useState<Record<string, boolean>>({
    sfbt: true,
    cbt: true,
    narrative: true,
    positive: false,
    act: true,
    mindfulness: false,
  });

  const togglePrinciple = (key: string) => {
    setPrinciples((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center gap-2 mb-5">
          <span className="text-amber-400">💡</span>
          <h3 className="font-bold text-gray-900">Active Therapeutic Principles</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {therapeuticPrinciples.map((item) => (
            <div key={item.key} className="flex items-center justify-between py-2 px-1">
              <div>
                <p className="font-medium text-sm text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400">Key: {item.key}</p>
              </div>
              <Toggle
                enabled={principles[item.key] ?? false}
                onToggle={() => togglePrinciple(item.key)}
              />
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-gray-900 mb-4">Therapeutic Prompts & Interventions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-sm text-gray-900 mb-2">Solution-Focused Questions</p>
            <textarea
              className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-violet-300"
              rows={3}
              defaultValue={solutionFocusedQuestions}
            />
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900 mb-2">Reframing Prompts</p>
            <textarea
              className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-violet-300"
              rows={3}
              defaultValue={reframingPrompts}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
