import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import ModalContainer from "@/components/ui/modals/ModalContainer";

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
  title: "Mintsy.ai | AI Art Generator, NFT Minting & Canvas Prints",
  description:
    "Create stunning AI-generated artwork from text prompts, mint as unique NFTs, or order high-quality canvas prints. Try our free AI art generator today!",
  keywords: "AI art generator, NFT minting, canvas prints, text-to-image AI, digital art platform",
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
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ModalContainer />
        </ModalProvider>
      </body>
    </html>
  );
}
