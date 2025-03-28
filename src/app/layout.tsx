import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-accent",
});

export const metadata: Metadata = {
  title: "Mintsy - Modern Digital Art Platform",
  description:
    "A creative platform for art enthusiasts, NFT collectors, and digital creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="font-sans">
        <DesktopHeader />
        <MobileHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
