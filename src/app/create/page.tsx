import { Metadata } from "next";
import CreatePageContent from "@/components/pages/CreatePageContent";
import SchemaMarkup from '@/components/ui/SchemaMarkup';

export const metadata: Metadata = {
  title: "Create AI Art from Text | Free AI Art Generator | Mintsy.ai",
  description: "Transform your ideas into stunning AI-generated artwork with simple text prompts. Customize styles, colors, and composition before minting as NFT or printing on canvas.",
  keywords: "AI art generator, text-to-image AI, create digital art, AI artwork customization, NFT creation, canvas printing",
};

export default function CreatePage() {
  return (
    <>
      <SchemaMarkup pageName="create" />
      <CreatePageContent />
    </>
  );
}
