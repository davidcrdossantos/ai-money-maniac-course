"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Loader2, Award, Download, CheckCircle } from "lucide-react";
import Link from "next/link";
import { courseModules, getTotalLessons } from "@/lib/course-data";

interface Progress {
  moduleId: number;
  lessonId: number;
  completed: boolean;
}

export default function CertificatePage() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasPurchased, setHasPurchased] = useState<boolean | null>(null);

  const totalLessons = getTotalLessons();
  const completedCount = progress.filter((p) => p.completed).length;
  const isComplete = completedCount >= totalLessons;
  const completionDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
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
        setProgress(data);
      }
    } catch (error) {
      console.error("Failed to fetch progress:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-green-400" />
      </div>
    );
  }

  if (!hasPurchased) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Course Access Required</h1>
          <p className="text-gray-400 mb-6">You need to be enrolled in the course to view your certificate.</p>
          <Link href="/pricing" className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
            Enroll Now
          </Link>
        </div>
      </div>
    );
  }

  if (!isComplete) {
    const remaining = totalLessons - completedCount;
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg w-full">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-3">Almost There!</h1>
          <p className="text-gray-400 mb-2">
            You have completed <span className="text-green-400 font-semibold">{completedCount}</span> of{" "}
            <span className="text-white font-semibold">{totalLessons}</span> lessons.
          </p>
          <p className="text-gray-500 mb-8">
            Complete the remaining <span className="text-yellow-400 font-semibold">{remaining} lesson{remaining !== 1 ? "s" : ""}</span> to unlock your certificate.
          </p>

          <div className="w-full bg-gray-800 rounded-full h-3 mb-8">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / totalLessons) * 100}%` }}
            />
          </div>

          <div className="grid gap-2 mb-8 text-left">
            {courseModules.map((mod) => {
              const moduleLessons = mod.lessons.length;
              const moduleCompleted = progress.filter((p) => p.moduleId === mod.id && p.completed).length;
              const done = moduleCompleted >= moduleLessons;
              return (
                <div key={mod.id} className={`flex items-center justify-between px-4 py-2 rounded-lg ${done ? "bg-green-900/20 border border-green-800/40" : "bg-gray-900 border border-gray-800"}`}>
                  <span className={`text-sm ${done ? "text-green-300" : "text-gray-400"}`}>
                    {done && <CheckCircle className="w-3 h-3 inline mr-2 text-green-400" />}
                    Module {mod.id}: {mod.title}
                  </span>
                  <span className={`text-xs font-mono ${done ? "text-green-400" : "text-gray-500"}`}>
                    {moduleCompleted}/{moduleLessons}
                  </span>
                </div>
              );
            })}
          </div>

          <Link href="/course" className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors inline-block">
            Continue Learning →
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link href="/course" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Back to Course
          </Link>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            Download / Print
          </button>
        </div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} className="text-center mb-8 print:hidden">
          <div className="inline-flex items-center gap-2 bg-green-900/30 border border-green-700/50 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-2">
            <CheckCircle className="w-4 h-4" />
            Course Complete — Well done!
          </div>
          <p className="text-gray-500 text-sm">Your certificate is ready to save or print.</p>
        </motion.div>

        {/* CERTIFICATE */}
        <div className="relative bg-gray-950 border-2 border-green-600/60 rounded-2xl p-12 text-center shadow-2xl shadow-green-900/20">
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-green-500/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-green-500/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-green-500/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-green-500/40 rounded-br-lg" />

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-900/40 border border-green-600/50 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-green-400" />
            </div>
          </div>

          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Certificate of Completion
          </p>
          <div className="w-24 h-px bg-green-600/40 mx-auto mb-8" />

          <p className="text-gray-400 text-base mb-3">This certifies that</p>
          <h1 className="text-4xl font-bold text-white mb-2">
            {(session?.user as any)?.name || "Course Graduate"}
          </h1>
          <div className="w-48 h-px bg-gray-700 mx-auto mb-8" />

          <p className="text-gray-300 text-lg mb-2">has successfully completed</p>
          <h2 className="text-3xl font-bold text-green-400 mb-3">AI Money Maniac</h2>
          <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
            A comprehensive programme covering AI tools, automation, agent systems,
            service businesses, and monetisation strategies for 2026.
          </p>

          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{totalLessons}</p>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Lessons</p>
            </div>
            <div className="w-px h-10 bg-gray-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{courseModules.length}</p>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Modules</p>
            </div>
            <div className="w-px h-10 bg-gray-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Complete</p>
            </div>
          </div>

          <div className="w-full h-px bg-gray-800 mb-8" />

          <div className="flex items-end justify-between">
            <div className="text-left">
              <p className="text-white font-semibold text-sm">David Rodrigues dos Santos</p>
              <p className="text-gray-500 text-xs">Founder, AI Money Maniac</p>
              <div className="w-24 h-px bg-gray-600 mt-2" />
            </div>
            <div className="text-center">
              <p className="text-green-400 font-bold">aimoneymaniac.com</p>
              <p className="text-gray-500 text-xs">Issued {completionDate}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold text-sm">Verified</p>
              <p className="text-gray-500 text-xs font-mono">
                AMM-{new Date().getFullYear()}
              </p>
              <div className="w-24 h-px bg-gray-600 mt-2 ml-auto" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 grid sm:grid-cols-3 gap-4 print:hidden"
        >
          {[
            { icon: "🚀", title: "Share your achievement", desc: "Post your certificate on LinkedIn — tag #AIMoneyManiac" },
            { icon: "💬", title: "Join the community", desc: "Connect with other graduates and share what you are building" },
            { icon: "🔄", title: "Revisit anytime", desc: "All lessons stay available — tools move fast in 2026" },
          ].map((item) => (
            <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
          .bg-gray-950 { background: white !important; border: 2px solid #16a34a !important; }
          .text-white { color: #111 !important; }
          .text-gray-300, .text-gray-400 { color: #444 !important; }
          .text-gray-500 { color: #666 !important; }
          .text-green-400 { color: #16a34a !important; }
        }
      `}</style>
    </div>
  );
}
