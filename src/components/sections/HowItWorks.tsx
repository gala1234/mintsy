import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-text-lavander text-text overflow-hidden"
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
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg text-center flex flex-col items-center">
              <div className="w-24 h-24 relative">
                <Image
                  src="/screen.png"
                  alt="Generate Your Art"
                  width={96}
                  height={96}
                  className="object-contain"
                />
            </div>
            <div className="text-3xl font-bold mb-2 flex items-center">
              <span className="bg-[#7a6ff0] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-lg">
                1
              </span>
              Generate Your Art
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg text-center flex flex-col items-center">
              <div className="w-24 h-24 relative">
                <Image
                  src="/nft.png"
                  alt="Mint as NFT"
                  width={96}
                  height={96}
                  className="object-contain"
                />
            </div>
            <div className="text-3xl font-bold mb-2 flex items-center">
              <span className="bg-[#7a6ff0] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-lg">
                2
              </span>
              Mint as NFT
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-lg text-center flex flex-col items-center">
              <div className="w-24 h-24 relative">
                <Image
                  src="/received_canvas.png"
                  alt="Receive Your Canvas"
                  width={96}
                  height={96}
                  className="object-contain"
                />
            </div>
            <div className="text-3xl font-bold mb-2 flex items-center">
              <span className="bg-[#7a6ff0] w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-lg">
                3
              </span>
              Receive Your Canvas
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#7a6ff0]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-32 -right-32 w-96 h-96 bg-[#7a6ff0]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorks;
