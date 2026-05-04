"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle, Circle, ChevronLeft, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Module } from "@/lib/course-data";

interface LessonSidebarProps {
  module: Module;
  completedLessons: number[];
}

export function LessonSidebar({ module, completedLessons }: LessonSidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const safeCompletedLessons = completedLessons ?? [];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b border-gray-700">
        <Link
          href="/course"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Course
        </Link>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-white mb-1">Module {module?.id ?? 0}</h2>
        <p className="text-sm text-gray-400 mb-4">{module?.title ?? ""}</p>

        <div className="space-y-1">
          {(module?.lessons ?? []).map((lesson, index) => {
            const isCompleted = safeCompletedLessons.includes(lesson?.id ?? 0);
            const isActive = pathname === `/course/module/${module?.id}/lesson/${lesson?.id}`;

            return (
              <Link
                key={lesson?.id ?? index}
                href={`/course/module/${module?.id}/lesson/${lesson?.id}`}
                className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-green-500/20 text-white"
                    : "hover:bg-gray-700/50 text-gray-400 hover:text-white"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isActive ? "text-green-400" : ""}`} />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${isActive ? "text-white" : ""}`}>
                    {index + 1}. {lesson?.title ?? "Untitled"}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{lesson?.duration ?? ""}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 left-4 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/25"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 bg-gray-800/50 border-r border-gray-700 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="lg:hidden fixed left-0 top-16 bottom-0 w-80 bg-gray-900 border-r border-gray-700 z-50 overflow-y-auto"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}