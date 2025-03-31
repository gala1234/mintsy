import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Generated Artwork | Mintsy",
  description:
    "View and share AI-generated artwork created with Mintsy. Explore the prompt, download in HD, mint as NFT, or order canvas prints.",
  keywords:
    "AI art, digital artwork, AI-generated art, NFT, canvas prints, Mintsy",
};

export default function ArtLayout({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#FDFBF7]">{children}</main>;
}
