import { courseConfig } from "@/lib/course-config";
export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <h1>Privacy Policy</h1>
        <p className="text-gray-500">Last updated: September 2026</p>
        <p>This policy explains how {courseConfig.siteName} collects, uses and protects your personal data when you use {courseConfig.siteUrl}.</p>
        <h2>Data we collect</h2>
        <ul>
          <li><strong>Account data:</strong> name and email address when you register.</li>
          <li><strong>Payment data:</strong> processed by Stripe — we never store card details.</li>
          <li><strong>Usage data:</strong> pages visited, lessons completed — via Google Analytics 4 with your consent.</li>
        </ul>
        <h2>How we use it</h2>
        <ul>
          <li>To deliver and improve the course.</li>
          <li>To send transactional emails (access confirmation, receipts).</li>
          <li>To measure how visitors use the site (analytics, consent required).</li>
        </ul>
        <h2>Third parties</h2>
        <p>Payment: Stripe. Analytics: Google Analytics 4. Hosting: Netlify. Database: Neon. We do not sell your data.</p>
        <h2>Your rights</h2>
        <p>You have the right to access, correct or delete your personal data. Email{" "}
          <a href={`mailto:${courseConfig.contactEmail}`}>{courseConfig.contactEmail}</a>.</p>
      </div>
    </div>
  );
}
