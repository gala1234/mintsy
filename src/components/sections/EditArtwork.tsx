"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TextArea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";
import { Toggle } from "@/components/ui/Toggle";
import { Button } from "@/components/ui/Button";
import Backdrop from "@/components/ui/Backdrop";

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
  remainingGenerations,
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
    <div className="w-full max-w-2xl mx-auto py-8 px-4 bg-[#FDFBF7]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif-accent">
        Edit Your Artwork
      </h2>

      {/* Original Image Thumbnail */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-40 h-40 rounded-lg overflow-hidden shadow-md mb-3">
          <Image
            src={imageSrc}
            alt="Original AI Generated Artwork"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-center text-sm text-text-muted">{originalPrompt}</p>
      </div>

      {/* Prompt Input */}
      <TextArea
        label="Your prompt"
        value={prompt}
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
        onChange={(e) => onKeepOriginalSeedChange(e.target.checked)}
      />

      {/* Regenerate Button */}
      <div className="mt-8">
        <Button
          onClick={onRegenerate}
          disabled={isLoading}
          className="w-full"
          isLoading={isLoading}
        >
          Regenerate
        </Button>
      </div>
      {/* Loading Spinner */}
      <Backdrop isOpen={isLoading} />

      {/* Remaining Generations */}
      <div className="text-center">
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
  );
};

export default EditArtwork;
