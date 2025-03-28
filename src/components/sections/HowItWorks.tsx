import React from "react";
import StepCard from "@/components/ui/StepCard";

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
            How It Works
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-serif-accent">
            Create AI-generated artwork and mint it as an NFT in just a steps:
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard 
            stepNumber={1}
            title="Generate Your Art"
            imageSrc="/screen.png"
            imageAlt="Generate Your Art"
          />
          
          <StepCard 
            stepNumber={2}
            title="Mint as NFT"
            imageSrc="/nft.png"
            imageAlt="Mint as NFT"
          />
          
          <StepCard 
            stepNumber={3}
            title="Receive Your Canvas"
            imageSrc="/received_canvas.png"
            imageAlt="Receive Your Canvas"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
