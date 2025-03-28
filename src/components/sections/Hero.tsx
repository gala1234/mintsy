import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text">
              Generate AI
              <br />
              Art, Mint as
              <br />
              NFTs
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg font-serif-accent text-primary">
              Effortlessly create stunning AI-generated artwork and mint it as
              unique NFTs on the blockchain.
            </p>
            <div>
              <Link
                href="#get-started"
                className="inline-block bg-[#8975FF] hover:bg-[#7865EF] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0e6ff] to-[#e4f5f0] opacity-30 rounded-lg transform rotate-3"></div>
              <div className="relative shadow-xl rounded-lg overflow-hidden transform rotate-1 border border-gray-100">
                <Image
                  src="/mintsy.png"
                  alt="AI Generated Artwork"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                  style={{ aspectRatio: "4/5" }}
                />
                <div className="absolute inset-0 shadow-inner pointer-events-none border border-white/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#8975FF]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-32 -right-32 w-96 h-96 bg-[#8975FF]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
