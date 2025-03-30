import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export default function AffiliateHowItWorks() {
  return (
    <LegalPage
      title="How Does It Work?"
      subtitle="How to earn with Mintsy as an affiliate"
      lastUpdated="March 30, 2025"
    >
      <LegalSection title="1. Join the Affiliate Program">
        <p className="mb-4">
          Sign up for the Mintsy Affiliate Program by filling out the
          registration form. Once approved, you&apos;ll gain access to your
          unique referral link and dashboard.
        </p>
      </LegalSection>

      <LegalSection title="2. Share Your Link">
        <p className="mb-4">
          Promote Mintsy using your personalized referral link. You can share
          it:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>On your blog or website</li>
          <li>Through social media platforms</li>
          <li>In email newsletters (if compliant with anti-spam laws)</li>
          <li>Anywhere your audience engages with you</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Earn Commission">
        <p className="mb-4">
          When someone clicks your link and makes a qualifying purchase on
          Mintsy, you earn a commission. Key details:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Commission rates and terms are visible in your dashboard</li>
          <li>
            We use cookies to track referrals for a set period (e.g., 30 days)
          </li>
          <li>You’ll be notified of new sales and commission earnings</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Get Paid">
        <p className="mb-4">
          Commissions are paid monthly via your chosen payout method (e.g.,
          PayPal, bank transfer), once you’ve met the minimum payout threshold.
        </p>
        <p className="mt-4">
          You can track your earnings and payout history at any time from your
          affiliate dashboard.
        </p>
      </LegalSection>

      <LegalSection title="5. Boost Your Earnings">
        <p className="mb-4">To maximize your affiliate revenue:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Focus on audiences who love AI, art, NFTs, or creativity tools
          </li>
          <li>
            Share your own Mintsy creations to inspire and convert viewers
          </li>
          <li>
            Use content like tutorials, reviews, or giveaways to drive traffic
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Support and Resources">
        <p className="mb-4">
          Need help? We’ve got you covered. Reach out to us at
          <strong> affiliates@mintsy.ai</strong> or check the FAQ in your
          dashboard.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
