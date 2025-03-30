import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
      lastUpdated="March 15, 2024"
    >
      <LegalSection title="Information We Collect">
        <p className="mb-4">
          When you use Mintsy, we collect certain information about you and your
          usage of our platform. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Account information (email, username, password)</li>
          <li>
            Payment information (processed securely through our payment
            providers)
          </li>
          <li>Usage data (how you interact with our platform)</li>
          <li>
            Device information (browser type, IP address, operating system)
          </li>
          <li>Content you create using our platform</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Providing and improving our services</li>
          <li>Processing your transactions and fulfilling orders</li>
          <li>Communicating with you about your account and our services</li>
          <li>Personalizing your experience on our platform</li>
          <li>Ensuring the security and integrity of our platform</li>
        </ul>
      </LegalSection>

      <LegalSection title="Information Sharing">
        <p className="mb-4">
          We do not sell your personal information to third parties. We may
          share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>With service providers who help us operate our platform</li>
          <li>To comply with legal obligations</li>
          <li>With your consent or at your direction</li>
          <li>In connection with a business transfer or merger</li>
        </ul>
      </LegalSection>

      <LegalSection title="Your Rights and Choices">
        <p className="mb-4">
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accessing and updating your information</li>
          <li>Deleting your account and associated data</li>
          <li>Opting out of marketing communications</li>
          <li>Restricting certain data processing activities</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, please contact us at support@mintsy.ai.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
