import { Metadata } from 'next';
import HowItWorksContent from '@/components/pages/HowItWorksContent';
import SchemaMarkup from '@/components/ui/SchemaMarkup';

export const metadata: Metadata = {
  title: "How to Create AI Art & Mint NFTs | Mintsy.ai Tutorial",
  description: "Learn how to transform text prompts into AI artwork, customize your creations, and mint them as NFTs or order canvas prints in 4 simple steps.",
  keywords: "AI art tutorial, NFT minting guide, text-to-image generation, AI art creation steps, canvas printing process",
};

export default function HowItWorksPage() {
  return (
    <>
      <SchemaMarkup pageName="howItWorks" />
      <HowItWorksContent />
    </>
  );
}
