"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  CheckCircle, ArrowRight, BookOpen, Award, Clock,
  Users, Shield, Lock, Youtube, Brain, Layers,
  Briefcase, Zap, TrendingUp, Terminal, Settings
} from "lucide-react";
import { courseModules, getTotalLessons } from "@/lib/course-data";
import {
  courseConfig,
  getActivePriceFormatted,
  getRegularPriceFormatted,
  getPricingNote,
  isOfferActive,
} from "@/lib/course-config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Layers, Briefcase, Zap, TrendingUp, Terminal, Settings
};

function PrimaryButton({ href, label, size = "lg" }: {
  href: string;
  label: string;
  size?: "sm" | "lg";
}) {
  const base = "inline-flex items-center justify-center gap-2 font-bold bg-green-500 hover:bg-green-400 text-black rounded-xl transition-all";
  const sizing = size === "lg" ? "px-8 py-4 text-lg" : "px-5 py-3 text-sm";
  return (
    <Link href={href} className={`${base} ${sizing}`}>
      {label}
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
}

export default function HomePage() {
  const { data: session } = useSession() || {};
  const totalLessons = getTotalLessons();
  const offerActive = isOfferActive();

  return (
    <div className="bg-gray-950">

      {/* Update banner */}
      <div className="bg-gray-900 border-b border-gray-800 text-center py-2.5 px-4 text-sm text-gray-400">
        <span className="text-green-400 font-semibold">Updated for Q4 2026</span>
        {" · "}Last reviewed: {courseConfig.lastCurriculumReview}
        {" · "}
        <a href={courseConfig.youtubeChannelUrl} target="_blank" rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300 transition-colors">
          {courseConfig.youtubeSubscribers} YouTube subscribers
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
              The AI Income System Behind the{" "}
              <span className="text-green-400">AI Money Maniac</span> Channel.
              <br />Now Step by Step.
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
              Choose one of three practical paths — AI Content, AI Services or AI Products —
              and follow a 30-day plan to build, launch and monetise a real AI-powered offer.
              No coding background required.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 mb-8 text-sm text-gray-400">
              {[
                { icon: Youtube, label: `${courseConfig.youtubeSubscribers} YouTube subscribers` },
                { icon: BookOpen, label: `${totalLessons} lessons` },
                { icon: Award, label: "Certificate of completion" },
                { icon: Clock, label: "Lifetime access" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-green-400" />
                  {label}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-5xl font-black text-white">{getActivePriceFormatted()}</span>
                <span className="text-gray-500 text-lg">one-time payment</span>
              </div>
              <p className="text-gray-500 text-sm">{getPricingNote()}</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {session?.user ? (
                <PrimaryButton href="/dashboard" label="Go to your dashboard" />
              ) : (
                <>
                  <PrimaryButton href="/signup" label={`Start the course — ${getActivePriceFormatted()}`} />
                  <Link href="/free" className="inline-flex items-center gap-2 px-6 py-4 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 rounded-xl transition-all">
                    <BookOpen className="w-5 h-5" />
                    Watch a free lesson
                  </Link>
                </>
              )}
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-5 text-gray-600 text-sm">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-green-700" />Secure checkout via Stripe</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-700" />{courseConfig.refundDays}-day money-back guarantee</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-700" />Instant access</span>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── THREE PATHS ── */}
      <section className="py-20 px-4 border-t border-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">Choose Your Income Path</h2>
            <p className="text-gray-400 max-w-xl mx-auto">All three paths share the same foundation. Pick the one that matches your situation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { emoji: "🎬", title: "AI Content", tag: "Best for creators", desc: "Build an AI-assisted content and video operation. Start here if you want faceless channels, AI video or affiliate income." },
              { emoji: "💼", title: "AI Services", tag: "Best for freelancers", desc: "Build and sell an AI-powered service to businesses. Start here if you want your first paying client in 30 days." },
              { emoji: "🛠️", title: "AI Products", tag: "Best for builders", desc: "Build and launch an AI app, digital product or micro-SaaS. Start here if you want a product that sells without active delivery." },
            ].map((path, i) => (
              <motion.div key={path.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-700/40 transition-all">
                <div className="text-3xl mb-3">{path.emoji}</div>
                <p className="text-green-400 text-xs font-semibold uppercase tracking-wide mb-1">{path.tag}</p>
                <h3 className="text-white font-bold text-lg mb-2">{path.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{path.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="py-20 px-4 bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">
              {courseConfig.moduleCount} Modules · {totalLessons} Lessons
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every module has a practical assignment, downloadable resources, and a real deliverable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {courseModules.map((mod, i) => {
              const Icon = iconMap[mod.icon] ?? Brain;
              return (
                <motion.div key={mod.id}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-gray-900 border border-gray-800 hover:border-green-700/40 rounded-xl p-5 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-green-400 text-xs font-semibold uppercase tracking-wide">Module {mod.id}</p>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{mod.title}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{mod.description}</p>
                  <p className="text-gray-700 text-xs">{mod.lessons.length} lessons</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center">
            <PrimaryButton href="/signup" label={`Start the course — ${getActivePriceFormatted()}`} />
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">What's Included</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              `${courseConfig.moduleCount} modules across all three income tracks`,
              "Practical assignment with every module",
              "Downloadable templates, scripts and resources",
              "Certificate of completion",
              "Lifetime access and all future curriculum updates",
              `Last reviewed: ${courseConfig.lastCurriculumReview}`,
              `${courseConfig.refundDays}-day money-back guarantee`,
              "Secure checkout via Stripe",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ── */}
      <section className="py-20 px-4 bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-8">Meet Your Instructor</h2>
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 rounded-2xl bg-gray-800 border border-gray-700 flex-shrink-0 overflow-hidden">
              {/* Replace src with real photo path when available */}
              <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">Photo</div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">{courseConfig.founderName}</h3>
              <p className="text-green-400 text-sm mb-4">Founder, AI Money Maniac</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Growth marketer with over ten years in B2B sales, business development and marketing
                across Africa, Asia and Europe. Former COO of a venture holding company, now running
                an AI automation and lead-generation agency.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Through AI Money Maniac he has published{" "}
                <span className="text-white font-medium">{courseConfig.youtubeVideos} practical AI videos</span>{" "}
                for <span className="text-white font-medium">{courseConfig.youtubeSubscribers} subscribers</span>.
                This course brings the most useful lessons together into one structured programme built around execution.
              </p>
              <a href={courseConfig.youtubeChannelUrl} target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 text-sm mt-4 inline-flex items-center gap-1 transition-colors">
                <Youtube className="w-4 h-4" />
                Visit the AI Money Maniac channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE + FINAL CTA ── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>

            <div className="bg-gray-900 border-2 border-green-800/40 rounded-3xl p-10 mb-8">
              <div className="text-5xl mb-4">🛡️</div>
              <h2 className="text-2xl font-bold text-white mb-3">{courseConfig.refundDays}-Day Money-Back Guarantee</h2>
              <p className="text-gray-400 leading-relaxed">
                Go through the course. If you don't feel it was worth it, email{" "}
                <a href={`mailto:${courseConfig.contactEmail}`} className="text-green-400">{courseConfig.contactEmail}</a>{" "}
                within {courseConfig.refundDays} days for a full refund — no questions asked.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline justify-center gap-3 mb-1">
                <span className="text-5xl font-black text-white">{getActivePriceFormatted()}</span>
                <span className="text-gray-500">one-time</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">{getPricingNote()}</p>
              <PrimaryButton href="/signup" label={`Start the course — ${getActivePriceFormatted()}`} />
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-6 text-gray-600 text-xs">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" />Stripe secure</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" />{courseConfig.refundDays}-day guarantee</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" />Instant access</span>
            </div>

            <p className="text-gray-700 text-xs mt-8 leading-relaxed">
              {courseConfig.earningsDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
