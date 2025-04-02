import React from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui/elements/buttons/LinkButton";
import ColorHead from "@/components/ui/ColorHead";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold font-serif-accent">
              <ColorHead text="Create AI Art," className="block" />
              <ColorHead text="mint as NFT" className="block" />
              <ColorHead text="or receive it printed" className="block" />
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-lg">
              Transform your text prompts into stunning AI-generated digital
              artwork with our advanced AI art generator.
            </p>
            <p className="text-xl md:text-2xl mb-8 max-w-lg">
              Mint your creations as unique NFTs on the blockchain and order
              premium canvas prints delivered to your door.
            </p>
            <div>
              <LinkButton href="/create">Create Your AI Art Now</LinkButton>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="relative mx-auto max-w-md">
              <Image
                src="/canvas.png"
                alt="AI-generated digital painting created from text prompts on Mintsy.ai"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-md"
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
