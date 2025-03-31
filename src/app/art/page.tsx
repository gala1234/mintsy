import { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { LinkButton } from "@/components/ui/elements/LinkButton";

export const metadata: Metadata = {
  title: "AI-Generated Artwork Gallery | Mintsy",
  description:
    "Browse and explore AI-generated artwork created with Mintsy. Find inspiration, share your favorites, or create your own.",
  keywords:
    "AI art gallery, digital artwork, AI-generated art, NFT, canvas prints, Mintsy",
};

export default function ArtIndexPage() {
  return (
    <PageContainer className="py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-4 font-serif-accent">
          AI-Generated Artwork
        </h1>
        <p className="text-lg text-text/70 mb-8">
          Explore unique digital creations made with Mintsy&apos;s AI art
          generator. Each piece represents someone&apos;s imagination brought to
          life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href="/gallery" variant="secondary">
            Browse Gallery
          </LinkButton>
          <LinkButton href="/create-ai-art" variant="primary">
            Create Your Own
          </LinkButton>
        </div>
      </div>

      <div className="text-center py-16 bg-white/50 rounded-xl">
        <div className="max-w-md mx-auto">
          <svg
            className="mx-auto h-24 w-24 text-mint"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-text">
            Looking for specific artwork?
          </h3>
          <p className="mt-2 text-text/70">
            Use the gallery to browse all public artwork or visit your dashboard
            to see your creations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <LinkButton href="/gallery" variant="secondary">
              Gallery
            </LinkButton>
            <LinkButton href="/dashboard" variant="secondary">
              My Dashboard
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-text/10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text/60">
        <Link
          href="/create-ai-art"
          className="hover:text-[#F36F5A] transition-colors"
        >
          Create Art
        </Link>
        <Link
          href="/ai-art-faqs"
          className="hover:text-[#F36F5A] transition-colors"
        >
          Gallery FAQ
        </Link>
        <Link
          href="/terms-of-service"
          className="hover:text-[#F36F5A] transition-colors"
        >
          Terms
        </Link>
        <Link
          href="/help-support"
          className="hover:text-[#F36F5A] transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </PageContainer>
  );
}
