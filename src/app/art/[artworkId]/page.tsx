import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/elements/buttons/Button";
import { LinkButton } from "@/components/ui/elements/buttons/LinkButton";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { getArtwork } from "./mookdata";

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ artworkId: string }>;
}): Promise<Metadata> {
  const { artworkId } = await params;
  const artwork = await getArtwork(artworkId);

  if (!artwork) {
    return {
      title: "Artwork Not Found | Mintsy",
      description: "The artwork you&apos;re looking for could not be found.",
    };
  }

  return {
    title: `${artwork.title} | AI-Generated Artwork by Mintsy`,
    description: `Explore "${artwork.title}" - ${artwork.prompt}. Created by ${artwork.author} using Mintsy&apos;s AI art generator.`,
    keywords: `AI art, ${artwork.family}, ${artwork.prompt}, digital artwork, Mintsy, AI-generated art`,
    openGraph: {
      images: [artwork.imageUrl],
    },
  };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ artworkId: string }>;
}) {
  const { artworkId } = await params;
  const artwork = await getArtwork(artworkId);

  if (!artwork || !artwork.isPublic) {
    notFound();
  }

  // Format date for display
  const publishDate = new Date(artwork.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <SchemaMarkup pageName="artwork" />
      <PageContainer className="py-8 md:py-16">
        {/* Hero Section - Main Artwork Display */}
        <div className="mb-8 md:mb-12">
          <div className="relative w-full aspect-square md:aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title || artwork.prompt}
              fill
              className="object-contain bg-black"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />
            <div className="absolute bottom-4 right-4 text-white/70 text-lg font-medium">
              mintsy
            </div>
          </div>
        </div>

        {/* Artwork Details Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-subtle mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              {artwork.title && (
                <h1 className="text-3xl md:text-4xl font-bold text-[#43405D] mb-2 font-serif-accent">
                  {artwork.title}
                </h1>
              )}

              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9D7ECF]/20 text-[#9D7ECF]">
                  {artwork.family}
                </span>
                <span className="text-sm text-[#43405D]/60">
                  Published {publishDate}
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-sm font-medium text-[#43405D]/70 mb-1">
                  Prompt
                </h2>
                <p className="text-[#43405D] italic">
                  &quot;{artwork.prompt}&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#B7D7C2]/30 flex items-center justify-center text-[#43405D] font-medium">
                {artwork.author.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3">
                <span className="text-sm text-[#43405D]/70">Created by</span>
                <h3 className="font-medium text-[#43405D]">{artwork.author}</h3>
              </div>
            </div>
          </div>

          {/* Social Interaction */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-1.5 py-2 px-4 bg-[#F36F5A]/10 text-[#F36F5A] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="font-medium">
                {artwork.likes} people loved this
              </span>
            </div>

            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Love this Art
            </Button>

            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              Share
            </Button>
          </div>
        </div>

        {/* Action Call-to-Create */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-subtle mb-8">
          <h2 className="text-2xl font-bold text-[#43405D] mb-2">
            Feeling inspired?
          </h2>
          <p className="text-[#43405D]/80 mb-6">
            Use this prompt or create your own.
          </p>

          <div className="flex flex-wrap gap-4">
            <LinkButton
              href={`/create-ai-art?prompt=${encodeURIComponent(
                artwork.prompt
              )}`}
              variant="primary"
            >
              Try This Prompt
            </LinkButton>

            <LinkButton href="/create-ai-art" variant="secondary">
              Generate Something New
            </LinkButton>
          </div>
        </div>

        {/* Purchase Options */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-subtle mb-8">
          <h2 className="text-2xl font-bold text-[#43405D] mb-6">
            Make it yours
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <LinkButton
              href={`/checkout?type=nft&id=${artwork.id}`}
              variant="secondary"
              className="bg-[#8A7FFF] hover:bg-[#7A6FF0] text-white border-none"
            >
              Mint as NFT – €5
            </LinkButton>

            <LinkButton
              href={`/checkout?type=download&id=${artwork.id}`}
              variant="secondary"
              className="bg-[#F36F5A] hover:bg-[#E55E49] text-white border-none"
            >
              Download in HD – €9.99
            </LinkButton>

            <LinkButton
              href={`/checkout?type=canvas&id=${artwork.id}`}
              variant="secondary"
              className="bg-gray-200 hover:bg-gray-300 text-[#43405D] border-none"
            >
              Print This Artwork – from €45
            </LinkButton>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[#43405D]/60">
            <Link
              href="/about"
              className="hover:text-[#F36F5A] transition-colors"
            >
              About Mintsy
            </Link>
            <Link
              href="/gallery"
              className="hover:text-[#F36F5A] transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/help-support"
              className="hover:text-[#F36F5A] transition-colors"
            >
              Contact Support
            </Link>
          </div>

          <p className="text-center text-sm text-[#43405D]/60 mt-4">
            Created with 💫 by Mintsy.ai
          </p>
        </div>
      </PageContainer>
    </>
  );
}
