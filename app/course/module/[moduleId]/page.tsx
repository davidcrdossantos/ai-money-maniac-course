"use client";

import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ChevronRight, CheckCircle, Circle, Clock, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { courseModules } from "@/lib/course-data";
import { ProgressBar } from "@/components/progress-bar";
import { Paywall } from "@/components/paywall";

interface Progress {
  moduleId: number;
  lessonId: number;
  completed: boolean;
}

export default function ModulePage() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const params = useParams();
  const moduleId = parseInt(params?.moduleId as string ?? "1");
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasPurchased, setHasPurchased] = useState<boolean | null>(null);

  const module = (courseModules ?? []).find((m) => m?.id === moduleId);

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

  if (status === "loading" || loading || hasPurchased === null) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-green-400" />
      </div>
    );
  }

  if (!session?.user || !module) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <p className="text-gray-400 mb-4">Module not found</p>
        <Link href="/course" className="text-green-400 hover:underline">
          Back to Course
        </Link>
      </div>
    );
  }

  if (!hasPurchased) {
    return <Paywall />;
  }

  const moduleLessons = module?.lessons ?? [];
  const completedLessons = (progress ?? []).filter((p) => p?.moduleId === moduleId);
  const moduleProgress = moduleLessons.length > 0 ? (completedLessons.length / moduleLessons.length) * 100 : 0;

  const isLessonCompleted = (lessonId: number) => {
    return (progress ?? []).some((p) => p?.moduleId === moduleId && p?.lessonId === lessonId);
  };

  // Find next incomplete lesson
  const nextLesson = moduleLessons.find((l) => !isLessonCompleted(l?.id ?? 0));

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/dashboard" className="hover:text-white transition-colors">
            Dashboard
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/course" className="hover:text-white transition-colors">
            Course
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Module {moduleId}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/course"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Modules
        </Link>

        {/* Module Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="text-green-400 text-sm font-medium">Module {moduleId}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {module?.title ?? ""}
          </h1>
          <p className="text-gray-400 mb-6">
            {module?.description ?? ""}
          </p>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">
                {completedLessons.length} / {moduleLessons.length} lessons completed
              </span>
              <span className="text-green-400 font-bold">{Math.round(moduleProgress)}%</span>
            </div>
            <ProgressBar progress={moduleProgress} showLabel={false} />
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <h3 className="text-green-400 font-semibold mb-2">Module Outcome</h3>
            <p className="text-gray-300">{module?.outcome ?? ""}</p>
          </div>
        </motion.div>

        {/* Continue Learning Button */}
        {nextLesson && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Link href={`/course/module/${moduleId}/lesson/${nextLesson?.id}`}>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 hover:from-green-600 hover:to-emerald-700 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm mb-1">Continue Learning</p>
                    <h3 className="text-xl font-bold text-white">{nextLesson?.title ?? ""}</h3>
                  </div>
                  <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Lessons List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Lessons</h2>
          <div className="space-y-3">
            {moduleLessons.map((lesson, index) => {
              const completed = isLessonCompleted(lesson?.id ?? 0);
              return (
                <motion.div
                  key={lesson?.id ?? index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/course/module/${moduleId}/lesson/${lesson?.id}`}>
                    <div className={`flex items-center gap-4 p-4 rounded-xl transition-all border ${
                      completed
                        ? "bg-green-500/10 border-green-500/30 hover:border-green-500/50"
                        : "bg-gray-800/50 border-gray-700/50 hover:border-gray-600"
                    }`}>
                      <div className="flex-shrink-0">
                        {completed ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold truncate ${
                          completed ? "text-green-400" : "text-white"
                        }`}>
                          {index + 1}. {lesson?.title ?? ""}
                        </h3>
                        <p className="text-gray-400 text-sm truncate">
                          {lesson?.description ?? ""}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm flex-shrink-0">
                        <Clock className="w-4 h-4" />
                        {lesson?.duration ?? ""}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}