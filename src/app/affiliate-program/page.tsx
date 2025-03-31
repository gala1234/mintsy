import { Metadata } from "next";
import AffiliateProgramContent from "@/components/pages/AffiliateProgramPage";

export const metadata: Metadata = {
  title: "Affiliate Program for AI Art Creation | Mintsy.ai",
  description:
    "Join the Mintsy.ai Affiliate Program and earn commissions by promoting our AI art generation, NFT minting, and canvas printing services.",
  keywords:
    "AI art affiliate, NFT minting referrals, canvas print commission, AI artwork partnership, digital art affiliate program",
};

export default function AffiliateProgramPage() {
  return <AffiliateProgramContent />;
}
