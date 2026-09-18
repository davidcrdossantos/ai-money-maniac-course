"use client";

import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ChevronRight, ChevronLeft, Clock, Download } from "lucide-react";
import Link from "next/link";
import { courseModules } from "@/lib/course-data";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { LessonCompletion } from "@/components/lesson-completion";
import { Paywall } from "@/components/paywall";

interface Progress {
  moduleId: number;
  lessonId: number;
  completed: boolean;
}

export default function LessonPage() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const params = useParams();

  // String IDs for course-data lookups
  // Module IDs are '1'–'9'; lesson IDs are '1-1', '1-2', …, '9-8'
  const moduleIdStr = (params?.moduleId as string) ?? "1";
  const lessonIdStr = (params?.lessonId as string) ?? "1-1";

  // Numeric module ID for DB / Progress comparisons
  const moduleIdNum = parseInt(moduleIdStr, 10);

  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasPurchased, setHasPurchased] = useState<boolean | null>(null);

  const module = (courseModules ?? []).find((m) => m?.id === moduleIdStr);
  const lessons = module?.lessons ?? [];
  const lesson = lessons.find((l) => l?.id === lessonIdStr);
  const currentIndex = lessons.findIndex((l) => l?.id === lessonIdStr);

  // Lesson position within module (1-indexed) — this is what gets stored in the DB
  const lessonIdNum = currentIndex >= 0 ? currentIndex + 1 : 1;

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;
  const nextModule = (courseModules ?? []).find(
    (m) => m?.id === String(moduleIdNum + 1)
  );

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchPurchaseStatus();
      fetchProgress();
    }
  }, [status]);

  const fetchPurchaseStatus = async () => {
    try {
      const res = await fetch("/api/user/purchase-status");
      if (res.ok) {
        const data = await res.json();
        setHasPurchased(data.hasPurchased);
      }
    } catch (error) {
      console.error("Failed to fetch purchase status:", error);
    }
  };

  const fetchProgress = async () => {
    try {
      const res = await fetch("/api/progress");
      if (res.ok) {
        const data = await res.json();
        setProgress(data ?? []);
      }
    } catch (error) {
      console.error("Failed to fetch progress:", error);
    } finally {
      setLoading(false);
    }
  };

  const isCompleted = (progress ?? []).some(
    (p) => p?.moduleId === moduleIdNum && p?.lessonId === lessonIdNum
  );

  // completedLessons is an array of 1-indexed lesson positions for this module
  const completedLessonIds = (progress ?? [])
    .filter((p) => p?.moduleId === moduleIdNum)
    .map((p) => p?.lessonId);

  const handleToggleComplete = (completed: boolean) => {
    if (completed) {
      setProgress([
        ...progress,
        { moduleId: moduleIdNum, lessonId: lessonIdNum, completed: true },
      ]);
    } else {
      setProgress(
        progress.filter(
          (p) =>
            !(p?.moduleId === moduleIdNum && p?.lessonId === lessonIdNum)
        )
      );
    }
  };

  if (status === "loading" || loading || hasPurchased === null) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-green-400" />
      </div>
    );
  }

  if (!session?.user || !module || !lesson) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <p className="text-gray-400 mb-4">Lesson not found</p>
        <Link href="/course" className="text-green-400 hover:underline">
          Back to Course
        </Link>
      </div>
    );
  }

  if (!hasPurchased) {
    return <Paywall />;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900 flex">
      <LessonSidebar module={module} completedLessons={completedLessonIds} />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/course" className="hover:text-white transition-colors">
              Course
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/course/module/${moduleIdStr}`}
              className="hover:text-white transition-colors"
            >
              Module {moduleIdNum}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Lesson {lessonIdNum}</span>
          </nav>

          {/* Lesson Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
              <span>Module {moduleIdNum}</span>
              <span>•</span>
              <span>
                Lesson {currentIndex + 1} of {lessons.length}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {lesson?.title ?? ""}
            </h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {lesson?.duration ?? ""}
              </div>
              {lesson?.practiceTime && (
                <>
                  <span>·</span>
                  <span>{lesson.practiceTime} practice</span>
                </>
              )}
            </div>
          </motion.div>

          {/* Lesson Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lesson-content mb-8"
          >
            <p className="text-gray-300 leading-relaxed text-base">
              {lesson?.description ?? ""}
            </p>
          </motion.div>

          {/* Resources */}
          {lesson?.resourcesIncluded && lesson.resourcesIncluded.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
              <div className="space-y-2">
                {lesson.resourcesIncluded.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  >
                    <Download className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="flex-1 text-white">{resource}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Mark as Complete */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <LessonCompletion
              moduleId={moduleIdNum}
              lessonId={lessonIdNum}
              isCompleted={isCompleted}
              onToggle={handleToggleComplete}
            />
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between gap-4 pt-8 border-t border-gray-700"
          >
            {prevLesson ? (
              <Link
                href={`/course/module/${moduleIdStr}/lesson/${prevLesson?.id}`}
                className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                href={`/course/module/${moduleIdStr}/lesson/${nextLesson?.id}`}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
              >
                <span>Next Lesson</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : nextModule ? (
              <Link
                href={`/course/module/${nextModule?.id}`}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
              >
                <span>Start Module {moduleIdNum + 1}</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all"
              >
                <span>Complete Course!</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
