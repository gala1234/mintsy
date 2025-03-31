import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export default function AffiliateTerms() {
  return (
    <LegalPage
      title="Affiliate Terms"
      subtitle="Guidelines and conditions for promoting Mintsy as an affiliate"
      lastUpdated="March 30, 2025"
    >
      <LegalSection title="Affiliate Program Overview">
        <p className="mb-4">
          The Mintsy Affiliate Program allows you to earn commissions by
          referring new users to our platform. By joining the program, you agree
          to the terms and conditions outlined below.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility and Enrollment">
        <p className="mb-4">
          To participate in the affiliate program, you must:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be at least 18 years old</li>
          <li>Have an active Mintsy account</li>
          <li>Provide accurate and complete information during registration</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
      </LegalSection>

      <LegalSection title="Commission and Payouts">
        <p className="mb-4">
          Affiliates earn a commission for each qualifying referral. Details
          include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Commission rates are defined on your affiliate dashboard</li>
          <li>Payouts are made monthly once a minimum threshold is reached</li>
          <li>Referrals must complete a purchase to be considered valid</li>
          <li>
            Mintsy reserves the right to withhold payments in case of fraud
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Prohibited Conduct">
        <p className="mb-4">
          Affiliates must not engage in any of the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use of misleading or deceptive promotional methods</li>
          <li>Bidding on Mintsy-branded keywords in paid ads</li>
          <li>Spamming or unsolicited messaging</li>
          <li>Misrepresenting your relationship with Mintsy</li>
        </ul>
        <p className="mt-4">
          Violation of these terms may result in removal from the program and
          forfeiture of any unpaid commissions.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p className="mb-4">
          We reserve the right to terminate your participation in the affiliate
          program at any time, with or without cause. You may also terminate
          your participation at any time by notifying us in writing.
        </p>
      </LegalSection>

      <LegalSection title="Changes to Terms">
        <p className="mb-4">
          Mintsy may update these Affiliate Terms at any time. We will notify
          you of significant changes, but it is your responsibility to review
          the terms regularly.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p className="mb-4">
          If you have any questions about the Affiliate Terms, please contact us
          at affiliates@mintsy.ai.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
