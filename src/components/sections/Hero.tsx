import React from "react";
import { Button } from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 bg-minty-fresh">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-graphite-ink leading-tight">
            Create. Own. Print.
            <br />
            <span className="text-deep-mint">AI Art Made Personal.</span>
          </h1>

          <p className="text-lg md:text-xl text-graphite-ink/80 mb-10 max-w-2xl">
            Transform your imagination into stunning AI-generated art. Mint it
            as an NFT or adorn your space with a canvas print.
          </p>

          <Button variant="accent" size="lg">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
