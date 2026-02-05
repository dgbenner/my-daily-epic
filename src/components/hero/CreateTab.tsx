"use client";

import { useState } from "react";
import { Card, Slider } from "@/components/ui";
import { genres } from "@/lib/data";

export const CreateTab = () => {
  const [genre, setGenre] = useState("Adventure");
  const [depth, setDepth] = useState(35);

  return (
    <div className="px-4 space-y-4">
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-amber-500">✨</span>
          <h3 className="font-bold text-gray-900">What happened to you?</h3>
        </div>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-violet-300"
          rows={4}
          placeholder="Share something that happened to you - big or small. Maybe you missed your bus, had an awkward conversation, faced a deadline, or dealt with a difficult person. What challenged you today?"
        />
        <div className="mt-4">
          <p className="font-semibold text-sm text-gray-900 mb-3">Choose Your Genre</p>
          <div className="flex gap-2">
            {genres.map((g) => (
              <button
                key={g.name}
                onClick={() => setGenre(g.name)}
                className={`flex flex-col items-center px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  genre === g.name
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                <span className="text-base mb-1">{g.icon}</span>
                {g.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-sm text-gray-900 mb-2">Story Depth</p>
          <Slider
            value={depth}
            onChange={setDepth}
            leftLabel="Simple & Direct"
            rightLabel="Rich & Layered"
          />
        </div>
        <button className="w-full mt-5 bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:from-gray-800 hover:to-black transition-all">
          ⚡ Transform Into Story
        </button>
      </Card>
    </div>
  );
};
