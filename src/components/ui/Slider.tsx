interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
}

export const Slider = ({ value, onChange, leftLabel, rightLabel }: SliderProps) => (
  <div className="w-full">
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gray-800"
    />
    <div className="flex justify-between mt-1">
      <span className="text-xs text-gray-400">{leftLabel}</span>
      <span className="text-xs text-gray-400">{rightLabel}</span>
    </div>
  </div>
);
