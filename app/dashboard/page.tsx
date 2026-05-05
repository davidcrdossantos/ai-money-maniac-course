"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Play, Trophy, BookOpen, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { courseModules, getTotalLessons } from "@/lib/course-data";
import { ModuleCard } from "@/components/module-card";
import { ProgressBar } from "@/components/progress-bar";
import { Paywall } from "@/components/paywall";

interface Progress {
  moduleId: number;
  lessonId: number;
  completed: boolean;
}

export default function DashboardPage() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasPurchased, setHasPurchased] = useState<boolean | null>(null);

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

  if (!session?.user) {
    return null;
  }

  if (!hasPurchased) {
    return <Paywall />;
  }

  const totalLessons = getTotalLessons();
  const completedLessons = progress?.length ?? 0;
  const overallProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  // Find next lesson to continue
  const findNextLesson = () => {
    const safeProgress = progress ?? [];
    for (const module of courseModules ?? []) {
      for (const lesson of module?.lessons ?? []) {
        const isCompleted = safeProgress.some(
          (p) => p?.moduleId === module?.id && p?.lessonId === lesson?.id
        );
        if (!isCompleted) {
          return { moduleId: module?.id, lessonId: lesson?.id, moduleTitle: module?.title, lessonTitle: lesson?.title };
        }
      }
    }
    return null;
  };

  const nextLesson = findNextLesson();

  const getModuleProgress = (moduleId: number) => {
    const module = (courseModules ?? []).find((m) => m?.id === moduleId);
    const moduleLessons = module?.lessons?.length ?? 0;
    const completedModuleLessons = (progress ?? []).filter((p) => p?.moduleId === moduleId)?.length ?? 0;
    return {
      progress: moduleLessons > 0 ? (completedModuleLessons / moduleLessons) * 100 : 0,
      completed: completedModuleLessons,
      total: moduleLessons,
    };
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-green-400">{session?.user?.name || "Learner"}</span>!
          </h1>
          <p className="text-gray-400">
            Continue your journey to making money with AI.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-gray-400 text-sm">Overall Progress</span>
            </div>
            <p className="text-3xl font-bold text-white">{Math.round(overallProgress)}%</p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-gray-400 text-sm">Lessons Completed</span>
            </div>
            <p className="text-3xl font-bold text-white">{completedLessons} / {totalLessons}</p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-gray-400 text-sm">Modules</span>
            </div>
            <p className="text-3xl font-bold text-white">6</p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-gray-400 text-sm">Status</span>
            </div>
            <p className="text-xl font-bold text-white">
              {overallProgress === 100 ? "Completed!" : "In Progress"}
            </p>
          </div>
        </motion.div>

        {/* Certificate Banner — shown when course is complete */}
        {overallProgress === 100 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8"
          >
            <Link href="/certificate">
              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl p-6 border border-yellow-500/40 hover:border-yellow-400/60 transition-all group">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p className="text-yellow-400 text-sm font-semibold mb-0.5">Course Complete!</p>
                      <h2 className="text-white font-bold text-lg">View Your Certificate</h2>
                      <p className="text-gray-400 text-sm">Download or print your completion certificate</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 text-xl group-hover:translate-x-1 transition-transform">→</div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Continue Learning */}
        {nextLesson && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Link href={`/course/module/${nextLesson.moduleId}/lesson/${nextLesson.lessonId}`}>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-green-400 mb-1">Continue Learning</p>
                    <h2 className="text-xl font-bold text-white mb-1">
                      {nextLesson.lessonTitle}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Module {nextLesson.moduleId}: {nextLesson.moduleTitle}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all group-hover:translate-x-1">
                    <Play className="w-5 h-5" />
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Overall Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Course Progress</h3>
            <ProgressBar progress={overallProgress} size="lg" />
          </div>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Your Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(courseModules ?? []).map((module, index) => {
              const moduleProgress = getModuleProgress(module?.id ?? 0);
              return (
                <ModuleCard
                  key={module?.id ?? index}
                  module={module}
                  progress={moduleProgress.progress}
                  completedLessons={moduleProgress.completed}
                  index={index}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}