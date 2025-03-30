import { Metadata } from "next";
import LimitModalExample from "@/components/examples/LimitModalExample";

export const metadata: Metadata = {
  title: "Limit Reached Modal Example | Mintsy.ai",
  description: "Example of friendly limit reached modals for AI art generation, NFT minting, and downloads.",
};

export default function LimitModalPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Limit Reached Modal Examples</h1>
      <p className="text-lg mb-8">
        These modals are designed to be friendly and helpful when users reach their free limits.
        Each modal has different content based on the action type.
      </p>
      
      <LimitModalExample />
    </div>
  );
} 