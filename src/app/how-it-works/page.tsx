import LegalPage, { LegalSection } from "@/components/ui/LegalPage";

// TODO: Use a better component for this

export default function HowItWorks() {
  return (
    <LegalPage
      title="How Does It Work?"
      subtitle="Step-by-step guide to using Mintsy to create, mint, or print your art"
      lastUpdated="March 30, 2025"
    >
      <LegalSection title="1. Get Inspired or Use AI Prompts">
        <p className="mb-4">
          Start by choosing how you want to create your art. You can:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Write your own custom prompt to generate art using AI</li>
          <li>
            Use our guided questions to spark creativity and refine your idea
          </li>
          <li>Explore community-generated prompts for inspiration</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Generate Your Artwork">
        <p className="mb-4">
          Once you’ve entered your prompt or selected guided options, our AI
          will generate a unique visual artwork for you. You can:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Preview multiple variations and refine your results</li>
          <li>Regenerate until you’re satisfied with your creation</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Choose What to Do With Your Art">
        <p className="mb-4">
          After generating your artwork, you have several options:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Mint as NFT:</strong> Add it to the blockchain and own it as
            a digital collectible
          </li>
          <li>
            <strong>Order a Print:</strong> Turn your art into a high-quality
            canvas and have it shipped to you
          </li>
          <li>
            <strong>Download:</strong> Save your art digitally to use as you
            like
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Connect Your Wallet (If Minting)">
        <p className="mb-4">
          If you choose to mint your artwork as an NFT, you’ll be prompted to
          connect your crypto wallet. We support popular EVM-compatible wallets
          like MetaMask.
        </p>
        <p className="mt-4">
          You’ll also be able to view your NFTs on supported marketplaces and
          manage ownership directly from your wallet.
        </p>
      </LegalSection>

      <LegalSection title="5. Share and Celebrate">
        <p className="mb-4">Once your artwork is complete, you can:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Share it on social media directly from your dashboard</li>
          <li>Feature it in your Mintsy gallery</li>
          <li>Send it as a gift or use it in digital projects</li>
        </ul>
      </LegalSection>

      <LegalSection title="Need Help?">
        <p className="mb-4">
          We’re here to support you! If you have questions or need help at any
          step, reach out to our team at support@mintsy.ai.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
