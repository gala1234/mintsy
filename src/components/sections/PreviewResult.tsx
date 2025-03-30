import React from "react";
import Image from "next/image";

interface PreviewResultProps {
  imageSrc: string;
  remainingGenerations: number;
  onGenerateAnother: () => void;
}

const PreviewResult: React.FC<PreviewResultProps> = ({
  imageSrc,
  remainingGenerations = 2,
  onGenerateAnother,
}) => {
  return (
    <div className="w-full max-w-md mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif-accent">
        Preview Result
      </h1>

      {/* Image with watermark */}
      <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
        <Image
          src={imageSrc}
          alt="AI Generated Artwork"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
        />
        <div className="absolute bottom-4 right-4 text-white/70 text-lg font-medium">
          mintsy
        </div>
      </div>

      {/* Remaining generations */}
      <p className="text-center text-lg mb-6">
        You have {remainingGenerations} free generations left.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col gap-4">
        {/* Generate Another - Mint Green */}
        <button
          className="w-full py-4 px-6 bg-mint-light hover:bg-mint text-dark font-medium rounded-full transition-colors duration-300 shadow-sm"
          onClick={onGenerateAnother}
        >
          Generate Another
        </button>

        {/* Save to Gallery - Coral */}
        <button className="w-full py-4 px-6 bg-pink-light hover:bg-pink text-dark font-medium rounded-full transition-colors duration-300 shadow-sm">
          Save to Gallery (Login)
        </button>

        {/* Mint as NFT - Purple */}
        <button className="w-full py-4 px-6 bg-lavander-light hover:bg-lavander text-dark font-medium rounded-full transition-colors duration-300 shadow-sm">
          Mint as NFT (Login)
        </button>

        {/* Order Print - Gray */}
        <button className="w-full py-4 px-6 bg-background-secondary hover:bg-background-secondary/80 text-dark font-medium rounded-full transition-colors duration-300 shadow-sm border border-dark/10">
          Order Print (Login)
        </button>
      </div>
    </div>
  );
};

export default PreviewResult;
