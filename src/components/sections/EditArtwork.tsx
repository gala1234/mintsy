"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="mb-6">
        <label
          htmlFor="prompt"
          className="block text-sm font-medium text-text mb-2"
        >
          Edit your prompt
        </label>
        <div className="relative">
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            placeholder="Describe what you want to see..."
            className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors min-h-[120px]"
          />
        </div>
      </div>

      {/* Art Style Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="artStyle"
          className="block text-sm font-medium text-text mb-2"
        >
          Art style
        </label>
        <div className="relative">
          <select
            id="artStyle"
            value={artStyle}
            onChange={(e) => onArtStyleChange(e.target.value)}
            className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors appearance-none bg-white"
          >
            {artStyles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Keep Original Seed Toggle */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <label
            htmlFor="keepOriginal"
            className="text-sm font-medium text-text"
          >
            Keep original
          </label>
          <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer">
            <input
              id="keepOriginal"
              type="checkbox"
              className="absolute w-6 h-6 opacity-0 cursor-pointer z-10"
              checked={keepOriginalSeed}
              onChange={(e) => onKeepOriginalSeedChange(e.target.checked)}
            />
            <div
              className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                keepOriginalSeed ? "bg-mint" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                keepOriginalSeed ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Regenerate Button */}
      <div className="mb-4">
        <button
          onClick={onRegenerate}
          disabled={isLoading || !prompt.trim()}
          className="w-full bg-dark hover:bg-primary text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300 shadow-sm"
        >
          {isLoading ? "Regenerating..." : "Regenerate Artwork"}
        </button>
      </div>

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
