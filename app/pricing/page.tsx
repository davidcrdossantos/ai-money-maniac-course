'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Zap, BookOpen, Users, Clock, Award, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'Full access to all 6 modules (43+ lessons)',
  'Foundations of AI for Income',
  'The AI Money Stack - Tools That Make Money',
  'AI Service Businesses - Fastest Way to Earn',
  'AI Automation & Agents - Build Leverage',
  'AI Monetisation Models - Scale Your Income',
  'Essential Tools for OpenClaw Setup',
  'Lifetime access to all course content',
  'Future updates included',
  'Progress tracking dashboard',
];

const benefits = [
  {
    icon: BookOpen,
    title: '43+ Comprehensive Lessons',
    description: 'In-depth tutorials covering everything from AI basics to advanced monetization',
  },
  {
    icon: Zap,
    title: 'Practical, Actionable Content',
    description: 'Real-world examples and step-by-step guides you can implement immediately',
  },
  {
    icon: Clock,
    title: 'Lifetime Access',
    description: 'Learn at your own pace with unlimited access to all course materials',
  },
  {
    icon: Award,
    title: 'Progress Tracking',
    description: 'Track your learning journey with our built-in progress dashboard',
  },
];

export default function PricingPage() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePurchase = async () => {
    if (!session) {
      router.push('/login?callbackUrl=/pricing');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-background to-emerald-900/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Your AI Money-Making Potential
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get instant access to the complete AI Money Maniac course and start building your income with AI tools today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border-2 border-green-500/50 rounded-2xl p-8 shadow-xl shadow-green-500/10"
          >
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                LIFETIME ACCESS
              </span>
              <h2 className="text-3xl font-bold mb-2">AI Money Maniac Course</h2>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-green-400">$9.99</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <p className="text-muted-foreground">No recurring fees. Pay once, access forever.</p>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <Button
              onClick={handlePurchase}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Get Instant Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Secure payment powered by Stripe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Income Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who are already building their income with AI tools.
          </p>
          <Button
            onClick={handlePurchase}
            disabled={loading}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Get the Course for $9.99
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>
      </section>
    </div>
  );
}
