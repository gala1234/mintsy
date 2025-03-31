import { Metadata } from "next";
import Support from "@/components/pages/HelpSupportPage";

export const metadata: Metadata = {
  title: "Help & Support for AI Art Creation | Mintsy.ai",
  description:
    "Get help with AI art generation, NFT minting issues, canvas printing options, and account management on Mintsy.ai.",
  keywords:
    "AI art help, NFT minting support, canvas printing assistance, AI art generation guidance, Mintsy customer service",
};

export default function HelpSupportPage() {
  return <Support />;
}
