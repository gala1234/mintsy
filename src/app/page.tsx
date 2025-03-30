import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import SchemaMarkup from "@/components/ui/SchemaMarkup";

export const metadata: Metadata = {
  title: "Mintsy.ai | AI Art Generator, NFT Minting & Canvas Prints",
  description: "Create stunning AI-generated artwork from text prompts, mint as unique NFTs, or order high-quality canvas prints.",
  keywords: "AI art generator, text to image, NFT minting, canvas prints, AI artwork, digital art creation, text prompt art",
};

export default function Home() {
  return (
    <>
      <SchemaMarkup pageName="home" />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Testimonials />
    </>
  );
}
