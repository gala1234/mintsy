import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Manage Your AI-Generated Artworks | Mintsy",
  description:
    "Save, organize, and manage your AI-generated artworks. Group into families, filter by visibility, and take actions like minting, printing, or downloading.",
  keywords:
    "AI art dashboard, artwork management, NFT minting, canvas printing, digital art organization, artwork families",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
