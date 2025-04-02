import React from "react";
import { Metadata } from "next";
import ColorHead from "@/components/ui/ColorHead";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import {
  PageSection,
  SectionHeading,
  CTASection,
} from "@/components/ui/sections";
import { FeatureCard, ContentCard, ProfileCard } from "@/components/ui/cards";

export const metadata: Metadata = {
  title: "About Mintsy.ai | AI Art Platform for NFTs & Canvas Prints",
  description:
    "Discover how Mintsy.ai bridges cutting-edge AI technology with emotional, tangible art. Our mission is making AI art creation accessible to everyone.",
  keywords:
    "AI art platform, NFT minting, canvas prints, text-to-image AI, digital art marketplace, generative AI",
};

export default function About() {
  return (
    <>
      <SchemaMarkup pageName="about" />
      {/* 1. Hero Section */}
      <PageSection
        backgroundColor="bg-background"
        padding="pt-24 pb-16 md:pt-32 md:pb-24"
        includeGradient={true}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold font-serif-accent">
            <ColorHead text="Hi, we're Mintsy." />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Where AI meets emotion — and imagination becomes something you can
            hold.
          </p>
        </div>
      </PageSection>

      {/* 2. Our Story */}
      <PageSection backgroundColor="bg-background">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Why we created Mintsy</SectionHeading>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Mintsy was born from a simple yet powerful idea: to bring
              emotional AI art into people&apos;s hands. Our founder, Gala,
              created Mintsy while juggling a full-time job and motherhood,
              driven by a vision to make technology feel more human and
              personal.
            </p>
            <p className="mb-4">
              We believe that in a digital world, there&apos;s something special
              about holding a physical piece of art that represents your ideas,
              memories, and creativity. That&apos;s why we&apos;ve built a
              platform that bridges the gap between cutting-edge AI technology
              and tangible, emotional keepsakes.
            </p>
            <p>
              Our mission is to empower everyone—regardless of artistic skill—to
              create beautiful, meaningful art that can be enjoyed both
              digitally and physically. We&apos;re passionate about making the
              process simple, accessible, and deeply personal.
            </p>
          </div>
        </div>
      </PageSection>

      {/* 3. What We Believe */}
      <PageSection backgroundColor="bg-mint-light/30">
        <SectionHeading>What We Believe</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            iconSrc="/icons/star.png"
            iconAlt="AI serves creativity"
            title="Creative Freedom"
            description="AI should serve creativity, not replace it."
          />
          <FeatureCard
            iconSrc="/icons/draw.png"
            iconAlt="Personal Art"
            title="Personal Connection"
            description="Art is more powerful when it's personal."
          />
          <FeatureCard
            iconSrc="/icons/sheld.png"
            iconAlt="Physical Memories"
            title="Tangible Memories"
            description="Physical memories are worth preserving."
          />
        </div>
      </PageSection>

      {/* 4. What You Can Do with Mintsy */}
      <PageSection backgroundColor="bg-background">
        <SectionHeading>What You Can Do with Mintsy</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContentCard
            backgroundColor="bg-lavander-light/30"
            title="Turn your ideas into AI art"
            description="Use our intuitive platform to transform your concepts, descriptions, and inspirations into stunning AI-generated artwork—no artistic skills required."
          />
          <ContentCard
            backgroundColor="bg-mint-light/30"
            title="Print your dreams on canvas"
            description="Bring your digital creations into the physical world with high-quality canvas prints that you can display, gift, and treasure for years to come."
          />
          <ContentCard
            backgroundColor="bg-mint-light/30"
            title="Create photo albums from memories"
            description="Compile your favorite AI-generated artwork into beautiful photo albums that tell your unique story and preserve your creative journey."
          />
          <ContentCard
            backgroundColor="bg-lavander-light/30"
            title="Mint your art as an NFT"
            description="Secure digital ownership of your creations by minting them as NFTs on the blockchain, establishing provenance and authenticity for your unique artwork."
          />
        </div>
      </PageSection>

      {/* 5. Meet the Creator */}
      <PageSection backgroundColor="bg-mint-light/30">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Meet the Creator</SectionHeading>
          <ProfileCard
            avatarSrc="/testimonials/avatar1.jpeg"
            avatarAlt="Gala Calero"
            name="Founder: Gala Calero"
            title=""
            description="Developer, mom, and artist-at-heart, Gala is on a mission to make AI feel personal. With a background in technology and a passion for creativity, she built Mintsy to bridge the gap between digital innovation and emotional connection."
            avatarSize={128}
          />
        </div>
      </PageSection>

      {/* 6. Call to Action */}
      <CTASection
        heading="Ready to create something meaningful?"
        buttonText="Try Your Free Preview"
        buttonHref="/create"
        includeGradient={true}
      />

      {/* 7. Footer is handled by the layout component */}
    </>
  );
}
