import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The rules and guidelines for using Mintsy"
      lastUpdated="March 15, 2024"
    >
      <LegalSection title="Acceptance of Terms">
        <p className="mb-4">
          By accessing or using Mintsy, you agree to be bound by these Terms of
          Service and all applicable laws and regulations. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site.
        </p>
      </LegalSection>

      <LegalSection title="User Accounts">
        <p className="mb-4">
          When you create an account with us, you must provide accurate,
          complete, and current information. You are responsible for
          safeguarding the password and for all activities that occur under your
          account.
        </p>
        <p>
          We reserve the right to disable any user account if, in our opinion,
          you have violated any provision of these Terms of Service.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p className="mb-4">
          The Mintsy platform and its original content, features, and
          functionality are owned by Mintsy and are protected by international
          copyright, trademark, patent, trade secret, and other intellectual
          property laws.
        </p>
        <p className="mb-4">For artwork you create using our platform:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You retain ownership of the artwork you create using our AI tools.
          </li>
          <li>
            By purchasing an NFT, you receive a digital certificate of ownership
            for that specific digital artwork.
          </li>
          <li>
            When you purchase a canvas print, you own the physical print but not
            additional reproduction rights unless explicitly granted.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Prohibited Uses">
        <p className="mb-4">
          You may not use Mintsy for any purpose that is unlawful or prohibited
          by these Terms. You may not use the platform in any manner that could
          damage, disable, overburden, or impair the site.
        </p>
        <p>Specifically, you agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Generate content that is illegal, harmful, threatening, abusive,
            harassing, defamatory, or otherwise objectionable
          </li>
          <li>
            Attempt to bypass any measures we use to restrict access to the
            service
          </li>
          <li>
            Use any automated systems or software to extract data from the
            website
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            service
          </li>
        </ul>
      </LegalSection>
    </LegalPage>
  );
}
