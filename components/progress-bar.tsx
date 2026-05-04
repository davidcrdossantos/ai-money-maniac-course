"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({ progress, className = "", showLabel = true, size = "md" }: ProgressBarProps) {
  const safeProgress = Math.min(100, Math.max(0, progress ?? 0));
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1.5 text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-green-400 font-medium">{Math.round(safeProgress)}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-700/50 rounded-full ${heights[size]} overflow-hidden`}>
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${safeProgress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}