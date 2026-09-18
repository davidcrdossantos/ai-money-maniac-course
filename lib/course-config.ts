// lib/course-config.ts
// Single source of truth for all public-facing product facts.
// Update values here; every page reads from this file automatically.

export const courseConfig = {
  productName: 'AI Money Maniac: AI Income Launchpad 2026',
  siteName: 'AI Money Maniac',
  tagline: 'Real AI income strategies — no fluff, no hype, just what works.',
  currentPrice: 47,
  regularPrice: 97,
  currency: 'USD',
  offerName: 'Founding Member',
  // ISO 8601 – when this passes, the site automatically switches to regularPrice
  offerDeadline: '2026-10-31T23:59:59Z',
  offerDeadlineLabel: 'ends 31 October 2026',
  refundDays: 30,
  // Course structure — keep in sync with course-data.ts
  moduleCount: 9,
  lessonCount: 72,
  // Update these when you publish new data
  youtubeVideos: 214,
  lastCurriculumReview: '2026-09',
  // Contact and social
  contactEmail: 'hello@aimoneymaniac.com',
  founderName: 'David dos Santos',
  youtubeUrl: 'https://www.youtube.com/@AI-MoneyManiac',
  youtubeChannelUrl: 'https://www.youtube.com/@AI-MoneyManiac',
  siteUrl: 'https://www.aimoneymaniac.com',
  earningsDisclaimer:
    'Results vary. We make no guarantee that you will earn any specific income. Any financial outcomes depend on your individual effort, experience, and market conditions.',
} as const

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns true if the founding-member offer deadline has not yet passed. */
export function isOfferActive(): boolean {
  return new Date() < new Date(courseConfig.offerDeadline)
}

/** The price currently shown on the site. */
export function getActivePrice(): number {
  return isOfferActive() ? courseConfig.currentPrice : courseConfig.regularPrice
}

/** Formatted e.g. "$47" */
export function getActivePriceFormatted(): string {
  return `$${getActivePrice()}`
}

/** Formatted e.g. "$97" */
export function getRegularPriceFormatted(): string {
  return `$${courseConfig.regularPrice}`
}

/**
 * A short pricing note for CTAs and microcopy.
 * Shows founding-member language while the offer is active.
 */
export function getPricingNote(): string {
  if (isOfferActive()) {
    const deadline = new Date(courseConfig.offerDeadline).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    return `One-time founding-member payment of $${courseConfig.currentPrice} until ${deadline}, then $${courseConfig.regularPrice}`
  }
  return `One-time payment of $${courseConfig.regularPrice} · Lifetime access`
}
