import React from "react";
import StepCard from "@/components/ui/cards/StepCard";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-primary/5 text-text overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            How Our AI Art Generator Works
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-serif-accent">
            Create AI-generated artwork and mint it as an NFT in just a few
            simple steps:
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            stepNumber={1}
            title="Generate Your AI Art"
            imageSrc="/step1.jpg"
            imageAlt="AI art generation interface showing text-to-image creation process"
          />

          <StepCard
            stepNumber={2}
            title="Mint as NFT on Blockchain"
            imageSrc="/step2.jpg"
            imageAlt="NFT minting process for AI-generated artwork on blockchain"
          />

          <StepCard
            stepNumber={3}
            title="Receive Premium Canvas Print"
            imageSrc="/step3.jpg"
            imageAlt="High-quality canvas print of AI-generated artwork ready to hang"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
