interface ProgressBarProps {
  percent: number;
  color?: string;
}

export const ProgressBar = ({ percent, color = "bg-blue-500" }: ProgressBarProps) => (
  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
    <div
      className={`h-full rounded-full ${color}`}
      style={{ width: `${Math.min(percent, 100)}%` }}
    />
  </div>
);
