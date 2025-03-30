import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Mintsy.ai",
  description: "Read Mintsy.ai's terms of service for AI art generation, NFT minting, and canvas printing. Learn about our platform rules and user agreements.",
  keywords: "Mintsy terms, AI art terms of service, NFT minting rules, canvas print terms, digital art platform terms",
};

// Read the terms content from the old page and implement it here
export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        {/* Terms content goes here */}
        <p>
          Welcome to Mintsy.ai. These Terms of Service govern your use of our website, services, 
          and products. By using Mintsy.ai, you agree to these terms in full.
        </p>
        
        {/* Add all terms content from the previous page */}
      </div>
    </div>
  );
} 