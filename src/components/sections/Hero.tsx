import React from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui/LinkButton";
import ColorHead from "@/components/ui/ColorHead";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold  font-serif-accent">
              <ColorHead text="Create AI Art," className="block" />
              <ColorHead text="mint as NFT" className="block" />
              <ColorHead text="or receive it printed" className="block" />
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-lg">
              Effortlessly create stunning AI-generated artwork.
            </p>
            <p className="text-xl md:text-2xl mb-8 max-w-lg">
              Then mint it as unique NFTs on the blockchain and/or receive your
              artwork at home.
            </p>
            <div>
              <LinkButton href="/create">Mint Now</LinkButton>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="relative mx-auto max-w-md">
              <Image
                src="/canvas.png"
                alt="AI Generated Artwork"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                priority
                style={{ aspectRatio: "4/5" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background Elements */}
      <BackgroundGradient />
    </section>
  );
};

export default Hero;
