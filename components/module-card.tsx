"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Layers, Briefcase, Zap, TrendingUp, Settings, ChevronRight, CheckCircle } from "lucide-react";
import { ProgressBar } from "./progress-bar";
import type { Module } from "@/lib/course-data";

const iconMap: { [key: string]: any } = {
  Brain,
  Layers,
  Briefcase,
  Zap,
  TrendingUp,
  Settings,
};

interface ModuleCardProps {
  module: Module;
  progress: number;
  completedLessons: number;
  index: number;
}

export function ModuleCard({ module, progress, completedLessons, index }: ModuleCardProps) {
  const Icon = iconMap[module?.icon ?? "Brain"] || Brain;
  const totalLessons = module?.lessons?.length ?? 0;
  const isCompleted = completedLessons === totalLessons && totalLessons > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/course/module/${module?.id ?? 1}`}>
        <div className="group bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 border border-gray-700/50 hover:border-green-500/30">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isCompleted 
                ? "bg-green-500/20 text-green-400" 
                : "bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400"
            }`}>
              {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
            </div>
            <span className="text-sm text-gray-500 font-medium">Module {module?.id ?? 0}</span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {module?.title ?? "Untitled Module"}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {module?.description ?? ""}
          </p>

          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500">
              {completedLessons} / {totalLessons} lessons
            </span>
          </div>

          <ProgressBar progress={progress} showLabel={false} size="sm" />

          <div className="mt-4 flex items-center text-green-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
            {isCompleted ? "Review Module" : "Continue Learning"}
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}