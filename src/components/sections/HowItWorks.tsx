import React from "react";
// import StepCard from "@/components/ui/cards/StepCard";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-lavander-light/20 text-text overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mint-light/20 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lavander-light/20 rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-serif-accent">
            How Our AI Art Generator Works
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Create AI-generated artwork and mint it as an NFT in just a few
            simple steps:
          </p>
        </div>

        {/* Steps - Horizontal layout for desktop, vertical for mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-10">
          {/* Step 1 */}
          <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src="/steps/step1.jpg"
                alt="AI art generation interface showing text-to-image creation process"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Generate Your AI Art</h3>
              <p className="text-text-secondary">
                Describe your vision with words, and our AI will transform it
                into stunning artwork in seconds.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src="/steps/step2.jpg"
                alt="NFT minting process for AI-generated artwork on blockchain"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Mint as NFT on Blockchain
              </h3>
              <p className="text-text-secondary">
                Secure your artwork&apos;s authenticity and ownership by minting
                it as an NFT with just one click.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src="/steps/step3.jpg"
                alt="High-quality canvas print of AI-generated artwork ready to hang"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Receive Premium Canvas Print
              </h3>
              <p className="text-text-secondary">
                Turn your digital creation into a physical masterpiece with our
                high-quality canvas printing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="/create"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-200"
          >
            Start Creating Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
