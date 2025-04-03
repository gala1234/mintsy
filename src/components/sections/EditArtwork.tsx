"use client";

import React from "react";
import Link from "next/link";
import ImageWithWatermark from "@/components/ui/ImageWithWatermark";
import { TextArea } from "@/components/ui/elements/TextArea";
import { Select } from "@/components/ui/elements/Select";
import { Toggle } from "@/components/ui/toggles/Toggle";
import { Button } from "@/components/ui/elements/buttons/Button";
import Backdrop from "@/components/ui/loading/Backdrop";

interface EditArtworkProps {
  imageSrc: string;
  originalPrompt: string;
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onRegenerate: () => void;
  isLoading: boolean;
  remainingGenerations: number;
  artStyle: string;
  onArtStyleChange: (style: string) => void;
  keepOriginalSeed: boolean;
  onKeepOriginalSeedChange: (keep: boolean) => void;
}

const EditArtwork: React.FC<EditArtworkProps> = ({
  imageSrc,
  originalPrompt,
  prompt,
  onPromptChange,
  onRegenerate,
  isLoading,
  remainingGenerations = 2,
  artStyle,
  onArtStyleChange,
  keepOriginalSeed,
  onKeepOriginalSeedChange,
}) => {
  // Art style options
  const artStyles = [
    "Digital painting",
    "Line art",
    "Watercolor",
    "Oil painting",
    "Pixel art",
    "3D render",
    "Photorealistic",
    "Anime",
    "Comic book",
    "Variato",
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-6 bg-[#FDFBF7] rounded-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-serif-accent">
        Edit Your Artwork
      </h2>

      {/* Two-column layout for desktop, single column for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image Preview */}
        <div>
          <ImageWithWatermark
            src={imageSrc}
            alt="Original Artwork"
            width={500}
            height={500}
            className="w-full h-auto object-cover sticky top-4"
            priority
          />
        </div>

        {/* Right Column - Controls */}
        <div>
          {/* Prompt Input */}
          <TextArea
            label="Your prompt"
            value={prompt || originalPrompt}
            onChange={(e) => onPromptChange(e.target.value)}
            placeholder="Type your prompt here"
            rows={3}
          />
          {/* Art Style Dropdown */}
          <Select
            label="Art Style"
            value={artStyle}
            onChange={(e) => onArtStyleChange(e.target.value)}
            options={artStyles}
          />

          {/* Keep Original Seed Toggle */}
          <Toggle
            label="Keep Original Seed"
            checked={keepOriginalSeed}
            onChange={() => onKeepOriginalSeedChange(!keepOriginalSeed)}
          />

          {/* Action Section */}
          <div className="mt-10 space-y-6">
            {/* Primary Action */}
            <div className="space-y-4">
              <Button
                onClick={onRegenerate}
                disabled={isLoading}
                className="w-full text-lg"
                isLoading={isLoading}
              >
                Regenerate
              </Button>

              {/* Remaining Generations */}
              <div className="text-center py-2">
                <p className="text-text-muted mb-2">
                  You have {remainingGenerations} free generations left.
                </p>
                <Link
                  href="/pricing"
                  className="text-primary hover:text-primary-hover font-medium transition-colors"
                >
                  Upgrade to Pro for unlimited creations
                </Link>
              </div>
            </div>

            {/* Secondary Actions */}
            <div className="pt-2 border-t border-mint/30 space-y-3">
              <Button
                onClick={onRegenerate}
                disabled={isLoading}
                className="w-full"
                isLoading={isLoading}
                variant="secondary"
              >
                Save to Gallery (Login)
              </Button>
              <Button
                onClick={onRegenerate}
                disabled={isLoading}
                className="w-full"
                isLoading={isLoading}
                variant="secondary"
              >
                Mint as NFT (Login)
              </Button>
              <Button
                onClick={onRegenerate}
                disabled={isLoading}
                className="w-full"
                isLoading={isLoading}
                variant="secondary"
              >
                Receive Printed Artwork
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Loading Spinner */}
      <Backdrop isOpen={isLoading} isLoading={isLoading} />
    </section>
  );
};

export default EditArtwork;
