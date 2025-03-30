import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      subtitle="Our guidelines for refunds and cancellations"
      lastUpdated="March 15, 2024"
    >
      <LegalSection title="Subscription Refunds">
        <p className="mb-4">
          We offer a 7-day money-back guarantee for new Pro subscriptions. If
          you&apos;re not satisfied with our service within the first 7 days of
          your subscription, you can request a full refund by contacting our
          support team.
        </p>
        <p>
          After the initial 7-day period, subscription payments are
          non-refundable for the current billing period. You can cancel your
          subscription at any time, and you&apos;ll continue to have access to
          Pro features until the end of your current billing cycle.
        </p>
      </LegalSection>

      <LegalSection title="Canvas Print Refunds">
        <p className="mb-4">
          For physical canvas prints, we offer refunds or replacements in the
          following cases:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The print arrives damaged or defective</li>
          <li>
            The print significantly differs from what was displayed on our
            website
          </li>
          <li>The order was incorrect or incomplete</li>
        </ul>
        <p className="mt-4">
          To request a refund or replacement for a canvas print, please contact
          our support team within 14 days of receiving your order. You may be
          required to provide photos of the damaged or defective product.
        </p>
      </LegalSection>

      <LegalSection title="Digital Product Refunds">
        <p className="mb-4">
          Due to the nature of digital products (HD downloads, NFT minting),
          these purchases are generally non-refundable once the digital content
          has been delivered or the NFT has been minted.
        </p>
        <p>
          However, if you experience technical issues that prevent you from
          accessing your digital purchase, please contact our support team, and
          we&apos;ll work to resolve the issue or provide a refund at our
          discretion.
        </p>
      </LegalSection>

      <LegalSection title="How to Request a Refund">
        <p className="mb-4">
          To request a refund, please contact our support team at
          support@mintsy.ai with the following information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your full name and email address associated with your account</li>
          <li>Order number or transaction ID (if applicable)</li>
          <li>Reason for requesting a refund</li>
          <li>
            Any relevant supporting documentation (e.g., photos of damaged
            prints)
          </li>
        </ul>
        <p className="mt-4">
          Our support team will review your request and respond within 2
          business days.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
