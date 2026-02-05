export const ChapterBanner = () => (
  <div className="mx-4 mt-4 p-4 bg-gradient-to-r from-violet-50 to-amber-50 rounded-xl border border-violet-100">
    <div className="flex items-start gap-3">
      <span className="text-lg">✏️</span>
      <div>
        <p className="font-semibold text-gray-900 text-sm">Chapter Ready!</p>
        <p className="text-gray-600 text-xs mt-0.5">
          You have enough stories to weave into your first chapter.
        </p>
        <button className="text-violet-600 text-sm font-medium mt-1 hover:underline">
          Create Chapter →
        </button>
      </div>
    </div>
  </div>
);
