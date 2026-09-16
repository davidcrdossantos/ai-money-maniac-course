import Link from "next/link";
import { courseConfig, getActivePriceFormatted, isOfferActive } from "@/lib/course-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-white font-bold text-lg hover:text-green-400 transition-colors">
              AI Money <span className="text-green-400">Maniac</span>
            </Link>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{courseConfig.tagline}</p>
            <p className="text-gray-600 text-xs mt-2">Last reviewed: {courseConfig.lastCurriculumReview}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Legal</p>
            <ul className="space-y-2">
              {[
                { label: "Terms and Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Earnings Disclaimer", href: "/earnings-disclaimer" },
                { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Site</p>
            <ul className="space-y-2">
              {[
                { label: "About David", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
              <li>
                <a href={courseConfig.youtubeChannelUrl} target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  YouTube Channel ↗
                </a>
              </li>
              <li className="pt-2">
                <Link href="/signup"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-green-500 text-black text-sm font-semibold rounded-lg hover:bg-green-400 transition-colors">
                  Start the course — {getActivePriceFormatted()}
                </Link>
                {isOfferActive() && (
                  <p className="text-gray-600 text-xs mt-1">{courseConfig.offerName} price · {courseConfig.offerDeadlineLabel}</p>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-6">
          <p className="text-gray-600 text-xs leading-relaxed">
            <strong className="text-gray-500">Earnings disclaimer:</strong>{" "}
            {courseConfig.earningsDisclaimer}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 border-t border-gray-900">
          <p className="text-gray-700 text-xs">© {year} {courseConfig.siteName}. All rights reserved.</p>
          <p className="text-gray-700 text-xs">
            <a href={`mailto:${courseConfig.contactEmail}`} className="hover:text-gray-500 transition-colors">{courseConfig.contactEmail}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
