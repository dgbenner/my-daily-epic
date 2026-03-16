"use client";

import { Genre } from "@/lib/data";

interface GenreModalProps {
  genre: Genre;
  onUse: () => void;
  onClose: () => void;
}

export const GenreModal = ({ genre, onUse, onClose }: GenreModalProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center px-6"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/40" />
    <div
      className="relative w-full max-w-sm bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <span className="text-6xl mb-4">{genre.icon}</span>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{genre.name}</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{genre.description}</p>
      <div className="w-full bg-gray-50 rounded-xl px-4 py-3 mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Writers in this tradition</p>
        <p className="text-sm text-gray-700">{genre.writers}</p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={onUse}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-sm font-semibold hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transition-all shadow-md"
        >
          Use {genre.name}
        </button>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);
