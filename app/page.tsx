'use client'

import Link from 'next/link'
import { useState } from 'react'
import { courseConfig, getActivePriceFormatted, getRegularPriceFormatted, getPricingNote, isOfferActive } from '@/lib/course-config'
import { modules, getTotalLessonCount } from '@/lib/course-data'

// ─── Inline SVG icons ────────────────────────────────────────────────────────
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    </svg>
  )
}

function ExternalLink({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6.31l-6.22 6.22a.75.75 0 0 1-1.06-1.06L14.69 5.25H11a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  )
}

// ─── Types ───────────────────────────────────────────────────────────────────
interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'I have no technical background. Can I do this?',
    a: 'Yes. The course assumes basic computer skills and no programming background. Technical concepts are explained in plain English before their technical names are introduced. Optional advanced extensions let more experienced students go deeper without blocking everyone else.',
  },
  {
    q: 'How is this different from the free YouTube videos?',
    a: 'The YouTube channel covers individual tools and tactics. This course puts them into a structured system with three clear income paths, step-by-step build demonstrations, exercises, templates and project briefs. You finish with a portfolio, a defined offer and a practical system for selling and delivering it – not just a list of tools you have watched.',
  },
  {
    q: 'Which tools do I need to pay for?',
    a: 'All core demonstrations have a free-tier option so you can follow along at zero cost. Each module lists a starter budget, a working service budget and an advanced production budget using current prices. You choose the level that fits your situation.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Module 1 ends with a seven-day validation experiment for your first offer. The course is designed for 12 to 16 weeks at 5 to 8 hours per week, with an explicit slower route. Completing lessons does not guarantee sales or a particular income – that depends on your skills, effort, market, offer and execution.',
  },
  {
    q: 'What if it is not for me?',
    a: `You are covered by a ${courseConfig.refundDays}-day money-back guarantee. If you work through the first two modules and decide it is not the right fit, email ${courseConfig.contactEmail} and we will refund in full, no questions asked.`,
  },
  {
    q: 'Do I need to pay before I see anything?',
    a: 'No. The curriculum preview below shows every module and lesson title. Each module also has a free preview lesson accessible without an account. You can watch those and read the full brief before deciding.',
  },
]

// ─── Main page component ─────────────────────────────────────────────────────
export default function HomePage() {
  const [openModule, setOpenModule] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const activePrice = getActivePriceFormatted()
  const regularPrice = getRegularPriceFormatted()
  const pricingNote = getPricingNote()
  const offerActive = isOfferActive()
  const totalLessons = getTotalLessonCount()

  function toggleModule(id: string) {
    setOpenModule(prev => prev === id ? null : id)
  }

  function toggleFaq(i: number) {
    setOpenFaq(prev => prev === i ? null : i)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* ── Update banner ─────────────────────────────────────────────── */}
      <div className="bg-orange-600 text-white text-center text-sm py-2 px-4 font-medium tracking-wide">
        UPDATED FOR Q4 2026 · Last reviewed {courseConfig.lastCurriculumReview}
      </div>

      {/* ── Navigation ────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 bg-gray-950/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/" className="font-bold text-lg text-white">
            AI Money Maniac
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#paths" className="hover:text-white transition-colors">Income Paths</a>
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#about" className="hover:text-white transition-colors">About David</a>
            <Link href="/login" className="hover:text-white transition-colors">Log In</Link>
          </div>
          <Link
            href="/signup"
            className="bg-green-500 hover:bg-green-400 text-black font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Start the Course
          </Link>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-4">
            AI Income Launchpad 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            The AI Income System Behind the{' '}
            <span className="text-red-400">AI Money Maniac</span> Channel.
            {' '}Now Step by Step.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Choose one of three practical paths — AI Content, AI Services or AI Products — and follow a 30-day plan to build, launch and monetise a real AI-powered offer. No coding background required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/signup"
              className="bg-green-500 hover:bg-green-400 text-black font-bold text-lg px-8 py-4 rounded-xl transition-colors text-center"
            >
              Start the Course — {activePrice}
            </Link>
            <a
              href="https://www.youtube.com/@AI-MoneyManiac"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
            >
              Watch a free lesson
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-gray-400">
            {pricingNote} · Create your account, then pay securely through Stripe. Lifetime access and all future curriculum updates included.
          </p>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────────────────────── */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap gap-x-8 gap-y-2 items-center justify-center sm:justify-start text-sm text-gray-400">
            <span>{courseConfig.youtubeVideos}+ videos published on the channel</span>
            <span className="hidden sm:inline text-gray-700">·</span>
            <span>{totalLessons} lessons in this course</span>
            <span className="hidden sm:inline text-gray-700">·</span>
            <span>Last reviewed {courseConfig.lastCurriculumReview}</span>
            <span className="hidden sm:inline text-gray-700">·</span>
            <span className="text-green-400 font-medium">{courseConfig.refundDays}-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────── */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Go from using AI for answers to{' '}
          <span className="text-red-400">building things customers value</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl">
          Nine modules. Three learning routes. One capstone offer you actually launch. The course is designed for 12–16 weeks at 5–8 hours per week, with an explicit slower route for busy schedules.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Build your foundation',
              body: 'Modules 1–2 cover how AI works, how to research markets and how to choose a problem worth solving. Every student completes these.',
            },
            {
              step: '02',
              title: 'Choose your path',
              body: 'Pick the track that fits your situation — Creative Services, Business Systems or Software Products — and go deep on the relevant modules.',
            },
            {
              step: '03',
              title: 'Launch your offer',
              body: 'Module 9 is a 30-day launch sprint. You leave with a portfolio, a defined offer and a practical system for selling and delivering it.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="text-red-400 font-mono text-sm font-bold mb-3">{step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Three income paths ─────────────────────────────────────────── */}
      <section id="paths" className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-3xl font-bold text-white mb-3">Three paths through the same course</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            All nine modules are included. Explore them all, then concentrate on the track that matches how you want to earn.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                badge: 'AI Content',
                color: 'border-red-500/40 bg-red-500/5',
                badgeColor: 'bg-red-500/20 text-red-400',
                title: 'Build an AI-assisted content and video operation.',
                body: 'Start here if you came from the channel wanting faceless channels, AI video or affiliate income.',
                modules: 'Focus: Modules 2, 3 & 9',
                href: '#curriculum',
              },
              {
                badge: 'AI Services',
                color: 'border-green-500/40 bg-green-500/5',
                badgeColor: 'bg-green-500/20 text-green-400',
                title: 'Build and sell an AI-powered service to businesses.',
                body: 'Start here if you want your first paying client within 30 days.',
                modules: 'Focus: Modules 4, 5, 6 & 9',
                href: '#curriculum',
              },
              {
                badge: 'AI Products',
                color: 'border-blue-500/40 bg-blue-500/5',
                badgeColor: 'bg-blue-500/20 text-blue-400',
                title: 'Build and launch an AI app, digital product or micro-SaaS.',
                body: 'Start here if you want something that can sell while you are not working.',
                modules: 'Focus: Modules 7, 8 & 9',
                href: '#curriculum',
              },
            ].map(({ badge, color, badgeColor, title, body, modules, href }) => (
              <a key={badge} href={href} className={`block border rounded-xl p-6 ${color} hover:brightness-110 transition-all`}>
                <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full mb-4 ${badgeColor}`}>{badge}</span>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4">{body}</p>
                <p className="text-xs text-gray-500 font-mono">{modules}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you will build ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-3">What you will leave with</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Each module ends with a project you can show, test or sell. By Module 9 you have a portfolio of real work.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'An AI workspace with reusable task briefs and a sourced market snapshot',
            'A professional campaign pack: images, video and copy for a real niche',
            'A validated digital product with a sales page and launch experiment',
            'A deployed website or business tool with a full handover pack',
            'A lead-delivery system with a prospect dataset and CRM dashboard',
            'A working chat or voice assistant with booking integration',
            'A multi-step AI agent system with controlled external actions',
            'A beta micro-SaaS with test billing, usage limits and real user feedback',
            'A launched offer with a 30-day sprint, sales assets and results dashboard',
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Curriculum preview ────────────────────────────────────────── */}
      <section id="curriculum" className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-3xl font-bold text-white mb-3">
            {modules.length} modules · {totalLessons} lessons
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Expand each module to see the full lesson list. Every lesson includes a practice assignment, downloadable resources and a real build demonstration.
          </p>

          <div className="space-y-3">
            {modules.map((mod, idx) => {
              const isOpen = openModule === mod.id
              const previewLessons = mod.lessons.filter(l => l.isPreview)
              return (
                <div key={mod.id} className="border border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-start gap-4 p-5 text-left bg-gray-900 hover:bg-gray-800/80 transition-colors"
                  >
                    <span className="text-2xl shrink-0">{mod.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono text-gray-500">Module {idx + 1}</span>
                        {mod.track && mod.track !== 'all' && (
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            mod.track === 'creative' ? 'bg-red-500/20 text-red-400' :
                            mod.track === 'services' ? 'bg-green-500/20 text-green-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {mod.track === 'creative' ? 'AI Content' : mod.track === 'services' ? 'AI Services' : 'AI Products'}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-base mt-1">{mod.title}</h3>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{mod.outcome}</p>
                      <p className="text-xs text-gray-500 mt-2">{mod.lessons.length} lessons{previewLessons.length > 0 ? ` · ${previewLessons.length} free preview` : ''}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-700 bg-gray-950 divide-y divide-gray-800">
                      {mod.lessons.map((lesson, li) => (
                        <div key={lesson.id} className="px-5 py-3 flex items-start gap-3">
                          <span className="text-xs font-mono text-gray-600 mt-0.5 shrink-0 w-5 text-right">{li + 1}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-200">{lesson.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{lesson.description.slice(0, 120)}…</p>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="text-xs text-gray-600">{lesson.duration} video</span>
                              {lesson.practiceTime && <span className="text-xs text-gray-600">· {lesson.practiceTime} practice</span>}
                              {lesson.isPreview && (
                                <span className="text-xs text-green-400 font-medium">Free preview</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="px-5 py-3 bg-gray-900/60">
                        <p className="text-xs text-gray-500">
                          <span className="font-medium text-gray-400">Project: </span>
                          {mod.projectDeliverable}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Get Access — {activePrice}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Instructor ────────────────────────────────────────────────── */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-6">Meet your instructor</h2>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-3xl">
              👤
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">David dos Santos</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Growth marketer, founder of AI Money Maniac and the creator of this course. Ten years in B2B sales, business development and growth marketing across Africa, Asia and Europe. Previously COO of a venture holding company. Now runs an AI automation and lead-generation agency alongside the channel.
            </p>
            <a
              href={courseConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              Watch the AI Money Maniac channel
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────── */}
      <section id="pricing" className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Simple, one-time pricing</h2>
          <p className="text-gray-400 mb-10">Lifetime access. All future curriculum updates included.</p>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-extrabold text-white">{activePrice}</span>
              {offerActive && (
                <span className="text-xl text-gray-500 line-through">{regularPrice}</span>
              )}
            </div>
            {offerActive && (
              <p className="text-sm text-orange-400 font-medium mb-6">
                Founding member price · Increases to {regularPrice} on {new Date(courseConfig.offerDeadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            )}

            <ul className="text-left space-y-3 mb-8">
              {[
                `${modules.length} modules and ${totalLessons} lessons`,
                'Three complete income paths (Content, Services, Products)',
                'All project templates, worksheets and resources',
                'Lifetime access and all future curriculum updates',
                `${courseConfig.refundDays}-day money-back guarantee`,
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="block w-full bg-green-500 hover:bg-green-400 text-black font-bold text-lg py-4 rounded-xl transition-colors text-center"
            >
              Start the Course — {activePrice}
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              Create your account, then pay securely through Stripe. No subscription — one payment, permanent access.
            </p>
          </div>

          <div className="mt-6 p-4 border border-gray-800 rounded-xl text-sm text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Earnings disclaimer:</strong> AI Money Maniac provides education, examples and practical resources. Purchasing or completing the course does not guarantee income, clients, employment or business results. Outcomes depend on the student's skills, effort, market, offer and execution.
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-10">Common questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i
            return (
              <div key={i} className="border border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-gray-900 hover:bg-gray-800/80 transition-colors"
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 bg-gray-950">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to build something{' '}
          <span className="text-red-400">customers will pay for</span>?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Join the course, pick your path and follow the 30-day plan to your first real AI-powered offer.
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold text-xl px-10 py-5 rounded-xl transition-colors"
        >
          Start the Course — {activePrice}
          <ArrowRight className="w-6 h-6" />
        </Link>
        <p className="text-sm text-gray-500 mt-4">{pricingNote}</p>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div>
              <p className="font-bold text-white mb-2">AI Money Maniac</p>
              <p className="text-sm text-gray-500 max-w-xs">
                Practical AI education for people who want to build something real.
              </p>
              <a
                href={courseConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 mt-3 transition-colors"
              >
                YouTube channel
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
              <Link href="/earnings-disclaimer" className="hover:text-white transition-colors">Earnings Disclaimer</Link>
              <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link>
              <a href={`mailto:${courseConfig.contactEmail}`} className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} AI Money Maniac. All rights reserved.
            </p>
            <p className="text-xs text-gray-700 mt-2 leading-relaxed max-w-2xl">
              AI Money Maniac provides education, examples and practical resources. Purchasing or completing the course does not guarantee income, clients, employment or business results. Outcomes depend on the student's skills, effort, market, offer and execution.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
