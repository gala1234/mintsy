import { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";
import SchemaMarkup from "@/components/ui/SchemaMarkup";

export const metadata: Metadata = {
  title: "The Mintsy Gallery | Explore AI-Generated Artwork",
  description:
    "Explore a collection of AI-generated artwork created by the Mintsy community. Browse by family, author, or popularity.",
  keywords:
    "AI art gallery, AI artwork, digital art gallery, Mintsy gallery, AI-generated art, community artwork",
};

export default function Gallery() {
  return (
    <>
      <SchemaMarkup pageName="gallery" />
      <GalleryPage />
    </>
  );
}
