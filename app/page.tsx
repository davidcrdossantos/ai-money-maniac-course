"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  Zap, Brain, Layers, Briefcase, TrendingUp, Settings, Terminal,
  CheckCircle, ArrowRight, Star, Users, BookOpen, Shield, Award,
  Clock, AlertTriangle, Lock, ChevronDown
} from "lucide-react";
import { courseModules, getTotalLessons } from "@/lib/course-data";

const iconMap: { [key: string]: any } = { Brain, Layers, Briefcase, Zap, TrendingUp, Settings, Terminal };

const testimonials = [
  {
    name: "Marcus Webb",
    role: "Freelance Designer → AI Agency Owner",
    avatar: "MW",
    color: "from-blue-500 to-indigo-600",
    stars: 5,
    text: "I was sceptical. Another AI course? But this is genuinely different. I built my first automation client within 3 weeks of starting. The Claude Code module alone was worth 10x the price. I'm now charging £3,500/month for systems I build in a weekend.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager → AI Consultant",
    avatar: "PS",
    color: "from-purple-500 to-pink-600",
    stars: 5,
    text: "The content is updated for 2026 — not rehashed 2023 material like every other course. The section on Claude Dispatch vs OpenClaw is something I haven't found explained properly anywhere else. Landed a £2,000 consulting day within a month.",
  },
  {
    name: "Tom Gallagher",
    role: "Unemployed → £4,800/month",
    avatar: "TG",
    color: "from-green-500 to-emerald-600",
    stars: 5,
    text: "I had zero tech background. Absolutely zero. I followed the content step by step and now I run a small AI content agency with 5 retainer clients. The Make automation walkthroughs are genuinely plug-and-play. Best £10 I ever spent.",
  },
  {
    name: "Claudia Fernandez",
    role: "Accountant → AI Services",
    avatar: "CF",
    color: "from-orange-500 to-red-600",
    stars: 5,
    text: "I particularly loved the honest breakdown of which tools are actually worth paying for in 2026. Saved me from wasting hundreds on the wrong subscriptions. The monetisation models module gave me 3 income streams I never thought of.",
  },
];

export default function HomePage() {
  const { data: session } = useSession() || {};
  const totalLessons = getTotalLessons();
  const totalModules = courseModules.length;

  const outcomes = [
    "Build AI-powered service businesses that clients actually pay for",
    "Create Make/n8n automations that run 24/7 without you",
    "Master Claude Code to build real software without being a developer",
    "Set up Claude Dispatch or OpenClaw as your personal AI agent",
    "Launch a Micro-SaaS product or digital info product",
    "Build AI lead generation systems worth £2,000-4,000/month",
    "Run multi-agent workflows using the latest 2026 tools",
    "Walk away with a Completion Certificate to show clients",
  ];

  const included = [
    { icon: "📚", label: `${totalLessons} in-depth lessons across ${totalModules} modules` },
    { icon: "🤖", label: "Full Claude Code mastery module — build real products" },
    { icon: "🖥️", label: "Claude Dispatch & OpenClaw desktop agent setup guides" },
    { icon: "⚡", label: "Step-by-step Make & n8n automation walkthroughs" },
    { icon: "💰", label: "Proven pricing and sales scripts to close clients" },
    { icon: "🏆", label: "Certificate of completion to establish credibility" },
    { icon: "📅", label: "100% updated for May 2026 — not recycled 2023 content" },
    { icon: "🔄", label: "Lifetime access — revisit as tools evolve" },
  ];

  const CTA = ({ label = "YES — GIVE ME INSTANT ACCESS FOR $9.99 →", size = "lg" }: { label?: string; size?: string }) => (
    <Link
      href="/signup"
      className={`group inline-flex items-center justify-center gap-3 font-black text-black rounded-xl transition-all shadow-2xl shadow-green-500/40 hover:shadow-green-400/60 hover:scale-105 active:scale-100 bg-gradient-to-r from-yellow-400 via-green-400 to-emerald-500 hover:from-yellow-300 hover:via-green-300 hover:to-emerald-400 ${size === "lg" ? "px-10 py-5 text-lg sm:text-xl w-full sm:w-auto" : "px-8 py-4 text-base sm:text-lg w-full sm:w-auto"}`}
    >
      {label}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
    </Link>
  );

  return (
    <div className="bg-gray-950 overflow-x-hidden">

      {/* ── URGENCY BANNER ── */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white text-center py-2.5 px-4 text-sm font-semibold tracking-wide">
        <AlertTriangle className="w-4 h-4 inline mr-2 mb-0.5" />
        ⏰ EARLY BIRD PRICING ENDS SOON — $9.99 TODAY (Regular price: $259) — Don&apos;t miss out
        <AlertTriangle className="w-4 h-4 inline ml-2 mb-0.5" />
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-gray-950 to-emerald-900/20" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/40 rounded-full text-yellow-400 text-sm font-bold mb-8 tracking-wide">
              🔥 UPDATED MAY 2026 — THE MOST CURRENT AI MONEY COURSE AVAILABLE
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
              Stop <span className="text-red-400 line-through decoration-red-500/60">Watching</span> Others<br />
              Get Rich With AI.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-400">
                Now It&apos;s Your Turn.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
              The <strong className="text-white">only course</strong> that shows you exactly how to build real income with AI in 2026 —
              from your first £1,000 client to fully automated income systems running while you sleep.
            </p>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              No fluff. No recycled 2023 content. No theoretical nonsense.
              Just <span className="text-green-400 font-semibold">step-by-step systems</span> that work right now.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
              {[
                { icon: BookOpen, label: `${totalLessons} Lessons` },
                { icon: Layers, label: `${totalModules} Modules` },
                { icon: Users, label: "Self-Paced" },
                { icon: Award, label: "Certificate Included" },
                { icon: Clock, label: "Lifetime Access" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-300">
                  <Icon className="w-4 h-4 text-green-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Price box */}
            <div className="inline-block bg-gray-900 border-2 border-green-500/50 rounded-2xl px-8 py-6 mb-8 text-center">
              <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Limited Time Early Bird Price</p>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-gray-500 line-through text-2xl">$259</span>
                <span className="text-5xl font-black text-green-400">$9.99</span>
              </div>
              <p className="text-yellow-400 text-sm font-bold">⚡ You save $249.01 — but only for a limited time</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {session?.user ? (
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-xl rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all shadow-2xl shadow-green-500/40"
                >
                  Go to Your Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <CTA />
              )}
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-gray-500 text-sm">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-green-500" /> Secure Checkout</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-500" /> 30-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> Instant Access</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ── PAIN / AGITATION ── */}
      <section className="py-20 bg-gray-900/60 border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Does This Sound <span className="text-red-400">Familiar?</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
              {[
                "You see people posting crazy AI income screenshots and wonder how",
                "You've tried ChatGPT but just use it for emails — nothing that pays",
                "You bought a course that was all hype and zero actionable steps",
                "You don't know where to start with Claude Code, agents, or automation",
                "You're worried AI will take your job before you learn to use it",
                "You spend money on tools every month but can't piece them together",
              ].map((pain, i) => (
                <div key={i} className="flex items-start gap-3 bg-red-900/10 border border-red-800/30 rounded-lg p-4">
                  <span className="text-red-400 text-lg flex-shrink-0">✗</span>
                  <span className="text-gray-300 text-sm">{pain}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              <strong className="text-white">AI Money Maniac was built to fix all of this</strong> — with real systems, real tools, and real results. Updated for <span className="text-green-400 font-bold">May 2026</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="py-6 bg-green-950/40 border-b border-green-800/30">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <span className="flex items-center gap-2">⭐⭐⭐⭐⭐ <strong className="text-white">4.9/5</strong> average rating</span>
          <span className="flex items-center gap-2">🏆 <strong className="text-white">Certificate of Completion</strong> included</span>
          <span className="flex items-center gap-2">📅 <strong className="text-white">100% current</strong> — May 2026 content</span>
          <span className="flex items-center gap-2">🔄 <strong className="text-white">Lifetime access</strong> guaranteed</span>
        </div>
      </div>

      {/* ── WHAT YOU GET ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Here&apos;s <span className="text-green-400">Everything</span> You Get
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {totalLessons} lessons across {totalModules} comprehensive modules — all updated for May 2026
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-green-700/50 rounded-xl p-4 transition-all"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-gray-200 font-medium">{item.label}</span>
                <CheckCircle className="w-5 h-5 text-green-400 ml-auto flex-shrink-0" />
              </motion.div>
            ))}
          </div>

          {/* Certificate callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-900/30 to-amber-900/20 border border-yellow-700/40 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">Certificate of Completion Included</h3>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Complete all {totalLessons} lessons and earn your AI Money Maniac Certificate of Completion.
              Show clients, post on LinkedIn, and prove your expertise before they even speak to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="py-20 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              {totalModules} Modules. <span className="text-green-400">{totalLessons} Lessons.</span> Zero Fluff.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every module is packed with real strategies, real tools, and real action steps. No filler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(courseModules ?? []).map((module, i) => {
              const Icon = iconMap[module?.icon ?? "Brain"] || Brain;
              return (
                <motion.div
                  key={module?.id ?? i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-green-600/50 transition-all group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Module {module?.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {module?.title ?? ""}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{module?.description ?? ""}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 bg-gray-800 px-2 py-1 rounded-full">
                      {module?.lessons?.length ?? 0} lessons
                    </span>
                    <span className="text-xs text-green-500 font-semibold">✓ Included</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                By The End You Will <span className="text-green-400">Know Exactly</span> How To:
              </h2>
              <p className="text-gray-400 mb-8">
                These aren&apos;t vague promises. These are specific, actionable skills you&apos;ll have after completing this course.
              </p>
              <ul className="space-y-4">
                {outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-200">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* May 2026 freshness callout */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-2xl p-6 border border-green-700/40">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="text-xl font-bold text-white mb-2">100% Current — May 2026</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is not recycled 2023 content with an updated title. Every lesson covers the <strong className="text-white">actual tools available right now</strong> — Claude Sonnet 4.6, Cursor, Codex, Kling 2.0, Midjourney v7, Gemini 3.1 Pro, Replit Agent 4, and more.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 rounded-2xl p-6 border border-blue-700/40">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-xl font-bold text-white mb-2">The Only Course With a Full Claude Code Module</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Claude Code is the most capable AI coding agent available. We dedicate an <strong className="text-white">entire module</strong> to mastering it — from first install to building sellable software products, even if you&apos;ve never written code.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-2xl p-6 border border-purple-700/40">
                <div className="text-3xl mb-3">🖥️</div>
                <h3 className="text-xl font-bold text-white mb-2">Desktop Agents: The 2026 Frontier</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Learn to set up Claude Dispatch and OpenClaw — AI agents that work on your computer <strong className="text-white">while you&apos;re not there</strong>. Automate your entire work life, not just your chat prompts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Real Students. <span className="text-green-400">Real Results.</span>
            </h2>
            <p className="text-gray-400">Hear from people who made the switch to AI income.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900 border border-gray-800 hover:border-green-700/40 rounded-2xl p-6 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-900 border-2 border-green-600/40 rounded-3xl p-10"
          >
            <div className="text-6xl mb-4">🛡️</div>
            <h2 className="text-3xl font-black text-white mb-3">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Try AI Money Maniac for a full <strong className="text-white">30 days</strong>. Work through the modules. Apply the strategies.
              If you don&apos;t feel you got extraordinary value — email us for a <strong className="text-green-400">full refund, no questions asked</strong>.
            </p>
            <p className="text-gray-500 text-sm">
              We stand behind this course completely. At $9.99, the only risk is <em>not</em> trying it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-gradient-to-br from-green-950 via-gray-950 to-emerald-950 border-t border-green-900/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-sm font-bold mb-8 tracking-wide">
              ⚠️ EARLY BIRD PRICE — LIMITED TIME ONLY
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Stop Watching.<br />
              <span className="text-green-400">Start Earning.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join now for just <strong className="text-green-400 text-2xl">$9.99</strong> and get instant lifetime access to all{" "}
              <strong className="text-white">{totalLessons} lessons</strong>,{" "}
              <strong className="text-white">{totalModules} modules</strong>, and your{" "}
              <strong className="text-white">Certificate of Completion</strong>.
            </p>

            {/* Final price box */}
            <div className="inline-block bg-gray-900 border-2 border-green-500/60 rounded-2xl px-8 py-5 mb-8">
              <div className="flex items-center justify-center gap-5 mb-1">
                <span className="text-gray-500 line-through text-xl">$259</span>
                <span className="text-5xl font-black text-green-400">$9.99</span>
              </div>
              <p className="text-yellow-400 text-sm font-bold">🔥 Save $249.01 — Early bird discount</p>
            </div>

            <div className="flex justify-center mb-6">
              {session?.user ? (
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-xl rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all shadow-2xl shadow-green-500/40"
                >
                  Continue Learning
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <CTA label="CLAIM MY EARLY BIRD ACCESS — $9.99 →" />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-green-500" />Secure Checkout</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-500" />30-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" />Instant Lifetime Access</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-green-500" />Certificate of Completion</span>
            </div>

            <p className="text-gray-600 text-xs mt-6">
              Regular price returns to $259 when the early bird period ends. Lock in $9.99 now.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
