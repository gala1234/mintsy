import React from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui/elements/LinkButton";

const AffiliateHero: React.FC = () => {
  return (
    <div className="py-12 md:py-20 text-center">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 opacity-20 hidden md:block">
        <Image src="/icons/star.png" alt="Star" width={60} height={60} />
      </div>
      <div className="absolute top-60 left-10 opacity-20 hidden md:block">
        <Image src="/icons/star.png" alt="Star" width={40} height={40} />
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif-accent text-dark">
          Join the Mintsy Magic ✨
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-text-secondary max-w-3xl mx-auto">
          Earn money while helping people create emotional, meaningful art —
          powered by AI.
        </p>
        <div className="flex justify-center">
          <LinkButton
            href="#signup-form"
            variant="primary"
            size="default"
            className="text-lg px-10 py-4"
          >
            Become an Affiliate
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default AffiliateHero;
