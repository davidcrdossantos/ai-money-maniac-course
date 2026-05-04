"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ChevronRight } from "lucide-react";
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

export default function CoursePage() {
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/dashboard" className="hover:text-white transition-colors">
            Dashboard
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Course</span>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Money Maniac <span className="text-green-400">Course</span>
          </h1>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Master AI tools and build profitable online businesses. Complete all 6 modules to unlock your AI-powered income potential.
          </p>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400">Overall Progress</p>
                <p className="text-2xl font-bold text-white">
                  {completedLessons} / {totalLessons} lessons completed
                </p>
              </div>
              <span className="text-4xl font-bold text-green-400">
                {Math.round(overallProgress)}%
              </span>
            </div>
            <ProgressBar progress={overallProgress} showLabel={false} size="lg" />
          </div>
        </motion.div>

        {/* Modules Grid */}
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
      </div>
    </div>
  );
}