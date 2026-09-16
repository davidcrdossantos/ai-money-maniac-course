export const courseConfig = {
  productName: "AI Money Maniac: AI Income Launchpad",
  shortName: "AI Income Launchpad",
  tagline: "Build and monetise a real AI-powered offer. Content, Services or Products — choose your path.",

  // Pricing — USD
  currentPrice: 47,
  regularPrice: 97,
  currency: "USD",
  currencySymbol: "$",
  offerName: "Founding Member",
  offerDeadline: new Date("2026-10-31T23:59:59Z"),
  offerDeadlineLabel: "Regular price from 1 November",
  refundDays: 30,

  // Curriculum — update these when lessons change
  moduleCount: 8,
  lastCurriculumReview: "September 2026",

  // Channel — update when stats change
  youtubeSubscribers: "17.6K",
  youtubeVideos: 214,
  youtubeChannelUrl: "https://www.youtube.com/@aimoneymaniac",

  // Contact
  contactEmail: "hello@aimoneymaniac.com",
  founderName: "David dos Santos",
  siteName: "AI Money Maniac",
  siteUrl: "https://www.aimoneymaniac.com",

  earningsDisclaimer:
    "AI Money Maniac provides education, examples and practical resources. " +
    "Purchasing or completing the course does not guarantee income, clients, employment or business results. " +
    "Outcomes depend on the student's skills, effort, market, offer and execution.",
} as const;

export function isOfferActive(): boolean {
  return new Date() < new Date(courseConfig.offerDeadline);
}

export function getActivePrice(): number {
  return isOfferActive() ? courseConfig.currentPrice : courseConfig.regularPrice;
}

export function getActivePriceFormatted(): string {
  return `$${getActivePrice()}`;
}

export function getRegularPriceFormatted(): string {
  return `$${courseConfig.regularPrice}`;
}

export function getPricingNote(): string {
  if (isOfferActive()) {
    return `${courseConfig.offerName} price · ${courseConfig.offerDeadlineLabel}: ${getRegularPriceFormatted()}`;
  }
  return "One-time payment · Lifetime access";
}
