import { Metadata } from "next";
import Privacy from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Mintsy.ai",
  description:
    "Learn how Mintsy.ai protects your personal data when using our AI art generation, NFT minting, and canvas printing services.",
  keywords:
    "Mintsy privacy, AI art data protection, NFT minting privacy, canvas print data handling, digital art platform privacy",
};

// Read the privacy content from the old page and implement it here
export default function PrivacyPolicyPage() {
  return <Privacy />;
}
