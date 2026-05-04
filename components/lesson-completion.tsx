"use client";

import { useState } from "react";
import { CheckCircle, Circle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface LessonCompletionProps {
  moduleId: number;
  lessonId: number;
  isCompleted: boolean;
  onToggle: (completed: boolean) => void;
}

export function LessonCompletion({ moduleId, lessonId, isCompleted, onToggle }: LessonCompletionProps) {
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduleId, lessonId, completed: !isCompleted }),
      });
      if (res.ok) {
        onToggle?.(!isCompleted);
      }
    } catch (error) {
      console.error("Failed to update progress:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      disabled={loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-3 w-full p-4 rounded-xl transition-all ${
        isCompleted
          ? "bg-green-600/30 border-2 border-green-500 text-green-300"
          : "bg-gray-600 border-2 border-gray-500 text-white hover:border-green-400 hover:bg-gray-500"
      }`}
    >
      {loading ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : isCompleted ? (
        <CheckCircle className="w-6 h-6" />
      ) : (
        <Circle className="w-6 h-6" />
      )}
      <span className="font-medium">
        {isCompleted ? "Completed! Click to unmark" : "Mark as Complete"}
      </span>
    </motion.button>
  );
}