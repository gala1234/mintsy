import { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";
import SchemaMarkup from '@/components/ui/SchemaMarkup';

export const metadata: Metadata = {
  title: "Frequently Asked Questions about AI Art & NFTs | Mintsy.ai",
  description: "Get answers about AI art generation, NFT minting, canvas printing, subscriptions, and how Mintsy.ai transforms your text prompts into unique artwork.",
  keywords: "AI art FAQ, NFT minting questions, canvas prints information, text-to-image generation, digital art marketplace help",
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup pageName="faq" />
      <FAQ />
    </>
  );
}
