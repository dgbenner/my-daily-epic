"use client";

import { useState, useEffect } from "react";
import { Card, Slider } from "@/components/ui";
import { genresRow1, genresRow2, Genre } from "@/lib/data";
import { GenreModal } from "./GenreModal";

const DRAFT_KEY = "mydailyepic_create_draft";

const genreColors: Record<string, { active: string; hover: string }> = {
  Adventure:       { active: "bg-orange-500 text-white border-orange-500",   hover: "hover:bg-orange-50 hover:border-orange-300" },
  Mystery:         { active: "bg-indigo-600 text-white border-indigo-600",   hover: "hover:bg-indigo-50 hover:border-indigo-300" },
  Epic:            { active: "bg-red-600 text-white border-red-600",         hover: "hover:bg-red-50 hover:border-red-300" },
  Fantasy:         { active: "bg-violet-500 text-white border-violet-500",   hover: "hover:bg-violet-50 hover:border-violet-300" },
  "Sci-Fi":        { active: "bg-cyan-600 text-white border-cyan-600",       hover: "hover:bg-cyan-50 hover:border-cyan-300" },
  Horror:          { active: "bg-gray-900 text-white border-gray-900",       hover: "hover:bg-gray-100 hover:border-gray-400" },
  Thriller:        { active: "bg-slate-700 text-white border-slate-700",     hover: "hover:bg-slate-50 hover:border-slate-300" },
  Noir:            { active: "bg-zinc-700 text-white border-zinc-700",       hover: "hover:bg-zinc-100 hover:border-zinc-400" },
  Western:         { active: "bg-amber-700 text-white border-amber-700",     hover: "hover:bg-amber-50 hover:border-amber-300" },
  Heist:           { active: "bg-emerald-600 text-white border-emerald-600", hover: "hover:bg-emerald-50 hover:border-emerald-300" },
  Survival:        { active: "bg-orange-700 text-white border-orange-700",   hover: "hover:bg-orange-50 hover:border-orange-300" },
  Cyberpunk:       { active: "bg-fuchsia-600 text-white border-fuchsia-600", hover: "hover:bg-fuchsia-50 hover:border-fuchsia-300" },
  Solarpunk:       { active: "bg-yellow-500 text-white border-yellow-500",   hover: "hover:bg-yellow-50 hover:border-yellow-300" },
  Hopepunk:        { active: "bg-pink-400 text-white border-pink-400",       hover: "hover:bg-pink-50 hover:border-pink-300" },
  Afrofuturism:    { active: "bg-purple-600 text-white border-purple-600",   hover: "hover:bg-purple-50 hover:border-purple-300" },
};

const defaultColor = { active: "bg-gray-700 text-white border-gray-700", hover: "hover:bg-gray-50 hover:border-gray-300" };

const depthLabel = (value: number) => {
  if (value < 25) return "Short and punchy — a single vivid scene";
  if (value < 50) return "A few paragraphs with some texture";
  if (value < 75) return "A full scene with character and tension";
  return "A rich, layered narrative with depth and detail";
};

const GenreRow = ({
  genres,
  selected,
  onSelect,
  onLongPress,
}: {
  genres: Genre[];
  selected: string;
  onSelect: (name: string) => void;
  onLongPress: (genre: Genre) => void;
}) => {
  const [pressTimer, setPressTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const startPress = (genre: Genre) => {
    const t = setTimeout(() => onLongPress(genre), 500);
    setPressTimer(t);
  };

  const cancelPress = () => {
    if (pressTimer) clearTimeout(pressTimer);
  };

  return (
    <div className="relative">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      {genres.map((g) => {
        const colors = genreColors[g.name] ?? defaultColor;
        const isActive = selected === g.name;
        return (
          <button
            key={g.name}
            onClick={() => onSelect(g.name)}
            onMouseDown={() => startPress(g)}
            onMouseUp={cancelPress}
            onMouseLeave={cancelPress}
            onTouchStart={() => startPress(g)}
            onTouchEnd={cancelPress}
            className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-16 rounded-xl text-xs font-medium border transition-all ${
              isActive ? colors.active : `bg-white text-gray-600 border-gray-200 ${colors.hover}`
            }`}
          >
            <span className="text-base mb-1">{g.icon}</span>
            <span className="text-center leading-tight">{g.name}</span>
          </button>
        );
      })}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export const CreateTab = () => {
  const [genre, setGenre] = useState("Adventure");
  const [depth, setDepth] = useState(35);
  const [entry, setEntry] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [modalGenre, setModalGenre] = useState<Genre | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) setEntry(saved);
  }, []);

  const handleEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEntry(e.target.value);
    localStorage.setItem(DRAFT_KEY, e.target.value);
  };

  const handleClear = () => {
    setEntry("");
    setGenre("Adventure");
    setDepth(35);
    setStatus("idle");
    localStorage.removeItem(DRAFT_KEY);
  };

  const handleSubmit = async () => {
    if (!entry.trim()) return;
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  const isEmpty = !entry.trim();

  return (
    <>
      {modalGenre && (
        <GenreModal
          genre={modalGenre}
          onClose={() => setModalGenre(null)}
          onUse={() => {
            setGenre(modalGenre.name);
            setModalGenre(null);
          }}
        />
      )}
      <div className="px-4 space-y-4">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-amber-500 text-lg">✨</span>
              <h3 className="font-bold text-gray-900">What happened to you?</h3>
            </div>
            {!isEmpty && (
              <button onClick={handleClear} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                Clear
              </button>
            )}
          </div>
          <textarea
            className="w-full border-2 border-gray-200 rounded-xl p-4 text-sm text-gray-700 resize-none focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition-all"
            rows={4}
            placeholder="Share something that happened to you - big or small. Maybe you missed your bus, had an awkward conversation, faced a deadline, or dealt with a difficult person. What challenged you today?"
            value={entry}
            onChange={handleEntryChange}
          />
          <div className="mt-4">
            <div className="flex items-baseline justify-between mb-2">
              <p className="font-semibold text-sm text-gray-900">Choose Your Genre</p>
              <span className="text-xs text-gray-400">Hold any tile to learn more</span>
            </div>
            <GenreRow genres={genresRow1} selected={genre} onSelect={setGenre} onLongPress={setModalGenre} />
            <div className="mt-2">
              <GenreRow genres={genresRow2} selected={genre} onSelect={setGenre} onLongPress={setModalGenre} />
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-baseline justify-between mb-2">
              <p className="font-semibold text-sm text-gray-900">Story Depth</p>
              <span className="text-xs text-gray-400 italic">{depthLabel(depth)}</span>
            </div>
            <Slider value={depth} onChange={setDepth} leftLabel="Simple & Direct" rightLabel="Rich & Layered" />
          </div>

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500 text-center">
              Couldn&apos;t generate your story — please try again.
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={isEmpty || status === "loading"}
            className={`w-full mt-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              isEmpty || status === "loading"
                ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white hover:from-amber-600 hover:via-orange-600 hover:to-red-600 shadow-md hover:shadow-lg"
            }`}
          >
            {status === "loading" ? (
              <><span className="animate-spin">⏳</span> Writing your story…</>
            ) : (
              <>⚡ Transform Into Story</>
            )}
          </button>
        </Card>
      </div>
    </>
  );
};
