"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  Zap, Brain, Layers, Briefcase, TrendingUp, Settings,
  CheckCircle, ArrowRight, Play, Star, Users, BookOpen
} from "lucide-react";
import { courseModules, getTotalLessons } from "@/lib/course-data";

const iconMap: { [key: string]: any } = { Brain, Layers, Briefcase, Zap, TrendingUp, Settings };

export default function HomePage() {
  const { data: session } = useSession() || {};

  const features = [
    { icon: Brain, title: "AI Foundations", desc: "Understand how AI works to use it intelligently" },
    { icon: Layers, title: "Tool Mastery", desc: "Master the tools that actually make money" },
    { icon: Briefcase, title: "Service Business", desc: "Launch AI services and get paying clients" },
    { icon: Zap, title: "Automation", desc: "Build systems that work while you sleep" },
  ];

  const outcomes = [
    "Build AI-powered services that businesses actually pay for",
    "Create automated systems that generate income 24/7",
    "Master the complete AI tool stack for monetization",
    "Launch your first AI product or service in weeks",
    "Scale from freelancer to agency owner",
    "Set up your personal AI agent with advanced tools",
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-8">
              <Zap className="w-4 h-4" />
              <span>Learn to Make Money with AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">AI Skills</span>
              <br />Into Real Income
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Master AI tools, build profitable services, and create automated income streams.
              From complete beginner to AI money maker in 6 comprehensive modules.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {session?.user ? (
                <Link
                  href="/dashboard"
                  className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
                >
                  <Play className="w-5 h-5" />
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/signup"
                    className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
                  >
                    Start Learning
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/login"
                    className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all border border-gray-700"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-400" />
                <span>{getTotalLessons()} Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-green-400" />
                <span>6 Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>Self-Paced</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="text-green-400">Succeed</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From understanding AI fundamentals to building profitable businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all border border-gray-700/50 hover:border-green-500/30"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              6 Comprehensive <span className="text-green-400">Modules</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A complete roadmap from AI beginner to profitable AI entrepreneur
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(courseModules ?? []).map((module, i) => {
              const Icon = iconMap[module?.icon ?? "Brain"] || Brain;
              return (
                <motion.div
                  key={module?.id ?? i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all border border-gray-700/50 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-medium">Module {module?.id ?? 0}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                        {module?.title ?? ""}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {module?.description ?? ""}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{module?.lessons?.length ?? 0} lessons</span>
                    <span className="text-green-400">{module?.outcome?.slice(0, 30) ?? ""}...</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What You'll <span className="text-green-400">Achieve</span>
              </h2>
              <p className="text-gray-400 mb-8">
                By the end of this course, you'll have the skills and systems to generate real income using AI.
              </p>
              <ul className="space-y-4">
                {outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6">
                "This course completely changed how I think about AI and making money online. 
                The practical approach and real examples made everything click."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="text-white font-semibold">Future Student</p>
                  <p className="text-gray-400 text-sm">AI Entrepreneur</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Making <span className="text-green-400">Money with AI</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join now and get instant access to all 6 modules. Start building your AI-powered income today.
            </p>
            {session?.user ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
              >
                Continue Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}