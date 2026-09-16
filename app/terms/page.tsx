import { courseConfig } from "@/lib/course-config";
export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
        <h1>Terms and Conditions</h1>
        <p className="text-gray-500">Last updated: September 2026</p>
        <p>By creating an account or purchasing {courseConfig.productName} you agree to these terms.</p>
        <h2>Payment</h2>
        <p>Payment is processed securely by Stripe. Prices are in US dollars. The price at checkout applies.</p>
        <h2>Access</h2>
        <p>Upon successful payment you receive lifetime personal access to the course. You may not share, resell or redistribute course content.</p>
        <h2>Refunds</h2>
        <p>We offer a {courseConfig.refundDays}-day money-back guarantee. Email{" "}
          <a href={`mailto:${courseConfig.contactEmail}`}>{courseConfig.contactEmail}</a>{" "}
          within {courseConfig.refundDays} days of purchase for a full refund.</p>
        <h2>Intellectual property</h2>
        <p>All course content is the intellectual property of {courseConfig.siteName}. You may use the knowledge and templates for your own business but may not reproduce or resell course materials.</p>
        <h2>No income guarantee</h2>
        <p>{courseConfig.earningsDisclaimer}</p>
        <h2>Contact</h2>
        <p><a href={`mailto:${courseConfig.contactEmail}`}>{courseConfig.contactEmail}</a></p>
      </div>
    </div>
  );
}
