import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support for AI Art Creation | Mintsy.ai",
  description: "Get help with AI art generation, NFT minting issues, canvas printing options, and account management on Mintsy.ai.",
  keywords: "AI art help, NFT minting support, canvas printing assistance, AI art generation guidance, Mintsy customer service",
};

export default function HelpSupportPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Help & Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-mint-light/30 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions about Mintsy.ai? We&apos;re here to help you with AI art generation, 
            NFT minting, canvas printing, and more.
          </p>
          <p className="mb-4">
            Email: <a href="mailto:support@mintsy.ai" className="text-pink-dark underline">
              support@mintsy.ai
            </a>
          </p>
          <p>
            Response time: Within 24 hours
          </p>
        </div>
        
        <div className="bg-lavander-light/30 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>How do I create my first AI artwork?</li>
            <li>What payment methods do you accept?</li>
            <li>How long does canvas printing and shipping take?</li>
            <li>Can I request a refund for my subscription?</li>
            <li>How do I mint my artwork as an NFT?</li>
          </ul>
          <p className="mt-4">
            <a href="/ai-art-faqs" className="text-pink-dark underline">
              Visit our FAQ page for answers
            </a>
          </p>
        </div>
      </div>
      
      <div className="bg-background p-8 rounded-xl shadow-sm mb-12">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p className="mb-4">
          New to AI art creation? Follow these simple steps:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Enter a detailed text prompt describing your desired artwork</li>
          <li>Review and customize your AI-generated image</li>
          <li>Choose to mint as NFT or order as canvas print</li>
          <li>Complete your order and enjoy your custom artwork</li>
        </ol>
        <p className="mt-4">
          <a href="/how-it-works" className="text-pink-dark underline">
            See our detailed tutorial
          </a>
        </p>
      </div>
    </div>
  );
} 