import { Metadata } from "next";
import PricingSection from "@/components/pages/Pricing";
import SchemaMarkup from "@/components/ui/SchemaMarkup";

export const metadata: Metadata = {
  title: "AI Art Generation & NFT Minting Pricing | Mintsy.ai",
  description:
    "Affordable plans for AI art creation, NFT minting, and canvas printing. Pay-as-you-go options or subscribe for unlimited AI artwork generation.",
  keywords:
    "AI art pricing, NFT minting cost, canvas print prices, text-to-image subscription, digital art packages, affordable AI art",
};

export default function AiArtPricingPage() {
  return (
    <>
      <SchemaMarkup pageName="pricing" />
      <PricingSection />
    </>
  );
}
