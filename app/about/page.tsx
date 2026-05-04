"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Target, Lightbulb, Users, ArrowRight, Youtube } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-green-400">AI Money Maniac</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Teaching people how to turn AI skills into real income through practical, actionable courses.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
                <p className="text-gray-400">
                  We believe everyone should have access to the knowledge needed to leverage AI for financial freedom. 
                  Our mission is to cut through the noise and provide clear, practical guidance on using AI tools to generate income.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Practical Focus</h3>
              <p className="text-gray-400 text-sm">
                No fluff, no theory-heavy lectures. Every lesson is designed to give you actionable skills you can use immediately.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <Zap className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Real Results</h3>
              <p className="text-gray-400 text-sm">
                We teach methods that actually work in the real world, backed by examples and case studies from successful AI entrepreneurs.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">
                Join a growing community of AI money makers who share strategies, wins, and support each other's journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* YouTube Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-red-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">Follow Us on YouTube</h2>
                <p className="text-gray-400 mb-4">
                  Get free AI money-making tips, tutorials, and insights on our YouTube channel.
                </p>
                <a
                  href="https://www.youtube.com/@AI-MoneyManiac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-6">
            Join the AI Money Maniac course and start building your AI-powered income today.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}