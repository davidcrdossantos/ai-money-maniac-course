import { courseConfig } from "@/lib/course-config";
export default function Refund() {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <h1>Refund Policy</h1>
        <p className="text-gray-500">Last updated: September 2026</p>
        <div className="not-prose bg-green-900/20 border border-green-800/40 rounded-xl p-5 mb-8">
          <p className="text-green-300 font-semibold text-lg mb-1">🛡️ {courseConfig.refundDays}-Day Money-Back Guarantee</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Not satisfied for any reason? Email us within {courseConfig.refundDays} days of purchase for a full refund.
            No forms, no conditions, no questions asked.
          </p>
        </div>
        <h2>How to request a refund</h2>
        <p>Email <a href={`mailto:${courseConfig.contactEmail}`}>{courseConfig.contactEmail}</a> from
          the address associated with your account. Include your order reference if you have it.
          We process requests within two business days; refunds appear within 5–10 business days.</p>
        <h2>After a refund</h2>
        <p>Your course access will be removed upon processing.</p>
        <h2>Contact</h2>
        <p><a href={`mailto:${courseConfig.contactEmail}`}>{courseConfig.contactEmail}</a></p>
      </div>
    </div>
  );
}
