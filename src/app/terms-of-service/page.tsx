import { Metadata } from "next";
import Terms from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service | Mintsy.ai",
  description:
    "Read Mintsy.ai's terms of service for AI art generation, NFT minting, and canvas printing. Learn about our platform rules and user agreements.",
  keywords:
    "Mintsy terms, AI art terms of service, NFT minting rules, canvas print terms, digital art platform terms",
};

// Read the terms content from the old page and implement it here
export default function TermsOfServicePage() {
  return <Terms />;
}
