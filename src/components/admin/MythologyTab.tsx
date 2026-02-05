"use client";

import { useState } from "react";
import { Card, Toggle, Badge } from "@/components/ui";
import { archetypes, journeyStages, culturalTraditions, metaphorBank } from "@/lib/data";

export const MythologyTab = () => {
  const [archetypeStates, setArchetypeStates] = useState<Record<string, boolean>>({
    innocent: true,
    explorer: true,
    sage: false,
    hero: true,
    outlaw: false,
    magician: true,
  });

  const [traditions, setTraditions] = useState<Record<string, boolean>>(
    Object.fromEntries(culturalTraditions.map((t) => [t.key, t.enabled]))
  );

  const toggleArchetype = (key: string) => {
    setArchetypeStates((a) => ({ ...a, [key]: !a[key] }));
  };

  const toggleTradition = (key: string) => {
    setTraditions((t) => ({ ...t, [key]: !t[key] }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-blue-400">🛡</span>
            <h3 className="font-bold text-gray-900">Active Heroic Archetypes</h3>
          </div>
          <div className="space-y-3">
            {archetypes.map((a) => (
              <div key={a.key} className="flex items-center justify-between py-1">
                <div>
                  <p className="font-medium text-sm text-gray-900">{a.name}</p>
                  <p className="text-xs text-gray-400">{a.description}</p>
                </div>
                <Toggle
                  enabled={archetypeStates[a.key] ?? false}
                  onToggle={() => toggleArchetype(a.key)}
                />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-2 mb-5">
            <span className="text-emerald-500">🧭</span>
            <h3 className="font-bold text-gray-900">Hero&apos;s Journey Stages</h3>
          </div>
          <div className="space-y-2">
            {journeyStages.map((s) => (
              <div
                key={s.name}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  s.status === "Emphasized"
                    ? "bg-amber-50 border border-amber-200"
                    : "bg-emerald-50/50"
                }`}
              >
                <span className="text-sm text-gray-800">{s.name}</span>
                <Badge variant={s.status === "Emphasized" ? "emphasized" : "active"}>
                  {s.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <div className="flex items-center gap-2 mb-5">
          <span className="text-violet-500">🌍</span>
          <h3 className="font-bold text-gray-900">Cultural Mythology Traditions</h3>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Enable multiple cultural frameworks to enrich story generation with diverse mythological
          traditions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {culturalTraditions.map((t) => (
            <div key={t.key} className="flex items-center justify-between py-2 px-1">
              <div>
                <p className="font-medium text-sm text-gray-900">{t.name}</p>
              </div>
              <Toggle enabled={traditions[t.key] ?? false} onToggle={() => toggleTradition(t.key)} />
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="font-bold text-gray-900 mb-3">Mythological Metaphor Bank</h3>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-violet-300"
          rows={8}
          defaultValue={metaphorBank}
        />
      </Card>
    </div>
  );
};
