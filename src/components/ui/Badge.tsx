import { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "active"
  | "planning"
  | "canon"
  | "emphasized"
  | "green"
  | "blue"
  | "purple"
  | "orange"
  | "stories";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const styles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  active: "bg-gray-100 text-gray-800 border border-gray-300",
  planning: "bg-gray-50 text-gray-500 border border-gray-200",
  canon: "bg-gray-800 text-white",
  emphasized: "bg-amber-50 text-amber-800 border border-amber-200",
  green: "bg-emerald-50 text-emerald-700",
  blue: "bg-blue-50 text-blue-700",
  purple: "bg-violet-50 text-violet-700",
  orange: "bg-orange-50 text-orange-700",
  stories: "bg-amber-400 text-gray-900",
};

export const Badge = ({ children, variant = "default" }: BadgeProps) => (
  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}>
    {children}
  </span>
);
