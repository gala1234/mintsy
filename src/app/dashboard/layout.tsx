import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Artworks | Mintsy",
  description: "View, manage, and mint your AI-generated artworks on Mintsy",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
} 