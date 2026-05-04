'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Access all 6 modules (43+ lessons)',
  'Lifetime access to course content',
  'Progress tracking dashboard',
  'Future updates included',
];

export function Paywall() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-yellow-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Unlock Full Course Access
          </h1>
          <p className="text-gray-400">
            Purchase the AI Money Maniac Course to access all lessons and start your journey to making money with AI.
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 mb-8">
          <div className="text-center mb-6">
            <span className="text-4xl font-bold text-green-400">$9.99</span>
            <span className="text-gray-400 ml-2">one-time payment</span>
          </div>
          
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button asChild className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg">
            <Link href="/pricing">
              Get Full Access
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Secure payment powered by Stripe. 100% satisfaction guaranteed.
        </p>
      </motion.div>
    </div>
  );
}
