"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Shield, CheckCircle, Lock, BookOpen, Award, Clock } from "lucide-react";
import { courseConfig, getActivePriceFormatted, getPricingNote, isOfferActive } from "@/lib/course-config";

export default function SignupPage() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/user/purchase-status")
        .then(r => r.json())
        .then(data => router.replace(data.hasPurchased ? "/dashboard" : "/api/checkout"))
        .catch(() => router.replace("/dashboard"));
    }
  }, [status, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Something went wrong. Please try again."); setLoading(false); return; }
      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) { setError("Account created but sign-in failed. Please try logging in."); setLoading(false); return; }
      router.push("/api/checkout");
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  if (status === "loading") return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-green-400" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 3-step progress */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {[
            { n: 1, label: "Create account", active: true },
            { n: 2, label: "Secure payment", active: false },
            { n: 3, label: "Start learning", active: false },
          ].map((step, i) => (
            <div key={step.n} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${step.active ? "bg-green-500 border-green-500 text-black" : "bg-gray-900 border-gray-700 text-gray-500"}`}>
                  {step.n}
                </div>
                <span className={`text-xs mt-1 whitespace-nowrap ${step.active ? "text-green-400" : "text-gray-600"}`}>{step.label}</span>
              </div>
              {i < 2 && <div className="w-16 sm:w-24 h-px bg-gray-800 mb-4 mx-1" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h1 className="text-2xl font-bold text-white mb-2">Create your course account</h1>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              First create your account. You will then be taken to Stripe to complete
              the secure one-time{" "}
              <span className="text-white font-semibold">{getActivePriceFormatted()} payment</span>{" "}
              and unlock the course.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-900/30 border border-red-800/50 rounded-lg text-red-400 text-sm">{error}</div>
            )}

            {/* Google */}
            <button
              onClick={() => { setGoogleLoading(true); signIn("google", { callbackUrl: "/api/checkout" }); }}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors mb-4 disabled:opacity-60"
            >
              {googleLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              Continue with Google
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-800" />
              <span className="text-gray-600 text-xs">or</span>
              <div className="flex-1 h-px bg-gray-800" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Full name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Your name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} placeholder="At least 8 characters"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 transition-colors" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Creating account…</> : "Create Account and Continue to Payment"}
              </button>
            </form>

            <p className="text-gray-600 text-xs text-center mt-4 leading-relaxed">
              Creating an account does not charge you. Payment is completed securely on the next page through Stripe.
            </p>
            <p className="text-gray-600 text-xs text-center mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-green-400 hover:text-green-300">Log in</Link>
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-white font-bold mb-1">{courseConfig.productName}</h2>
              {isOfferActive() && (
                <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/30 px-2 py-0.5 rounded-full inline-block mb-3">
                  {courseConfig.offerName} price
                </span>
              )}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-black text-white">{getActivePriceFormatted()}</span>
                <span className="text-gray-500 text-sm">one-time</span>
              </div>
              <p className="text-gray-500 text-xs mb-4">{getPricingNote()}</p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { icon: BookOpen, text: `${courseConfig.moduleCount} modules, all tracks included` },
                  { icon: Clock, text: "Lifetime access and all future updates" },
                  { icon: Award, text: "Certificate of completion" },
                  { icon: CheckCircle, text: `${courseConfig.refundDays}-day money-back guarantee` },
                  { icon: Lock, text: "Secure checkout via Stripe" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-gray-300">
                    <Icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex gap-4">
              <div className="text-2xl flex-shrink-0">🛡️</div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">{courseConfig.refundDays}-Day Money-Back Guarantee</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Not for you? Email us within {courseConfig.refundDays} days for a full refund — no questions asked.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-xs leading-relaxed">{courseConfig.earningsDisclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
