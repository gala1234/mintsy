import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { LinkButton } from "@/components/ui/elements/buttons/LinkButton";

export default function ArtworkNotFound() {
  return (
    <PageContainer className="py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
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
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-serif-accent">
          Artwork Not Found
        </h1>

        <p className="text-lg text-text-secondary mb-8">
          The artwork you&apos;re looking for doesn&apos;t exist or is no longer
          available.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton href="/gallery" variant="secondary">
            Browse Gallery
          </LinkButton>

          <LinkButton href="/create-ai-art" variant="primary">
            Create Your Own Art
          </LinkButton>
        </div>

        <div className="mt-12 text-sm text-text-muted">
          <Link
            href="/help-support"
            className="hover:text-primary transition-colors"
          >
            Need help? Contact Support
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
