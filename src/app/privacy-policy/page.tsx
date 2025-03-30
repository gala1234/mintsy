import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mintsy.ai",
  description: "Learn how Mintsy.ai protects your personal data when using our AI art generation, NFT minting, and canvas printing services.",
  keywords: "Mintsy privacy, AI art data protection, NFT minting privacy, canvas print data handling, digital art platform privacy",
};

// Read the privacy content from the old page and implement it here
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        {/* Privacy content goes here */}
        <p>
          At Mintsy.ai, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, disclose, and safeguard your information when you visit our website and use our services.
        </p>
        
        {/* Add all privacy content from the previous page */}
      </div>
    </div>
  );
} 