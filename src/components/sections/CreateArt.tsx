"use client";

import React from "react";
import Image from "next/image";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import Backdrop from "@/components/ui/Backdrop";

interface CreateArtProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const CreateArt: React.FC<CreateArtProps> = ({
  prompt,
  onPromptChange,
  onGenerate,
  isLoading,
}) => {
  return (
    <div className="w-full max-w-md mx-auto py-8 px-4 flex flex-col items-center min-h-[80vh]">
      <h1 className="text-center  text-4xl md:text-5xl lg:text-6xl mb-6 font-bold font-serif-accent">
        Create AI Art <br />
        with One Prompt
      </h1>
      {/* Subtitle */}
      <p className="text-center text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
        Type your idea and get your first artwork instantly – no sign-up needed.
      </p>
      {/* Input Field */}
      <div className="w-full mb-8">
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            placeholder='e.g. "A cyberpunk cat riding a bike through Tokyo"'
            className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Image
              src="/icons/star.png"
              alt="Inspiration"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mb-4">
        <button
          onClick={onGenerate}
          disabled={isLoading || !prompt.trim()}
          className="bg-dark hover:bg-primary text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 w-full md:w-auto"
        >
          {isLoading ? "Generating..." : "Generate Free Preview"}
        </button>

        {/* Loading Backdrop */}
        <Backdrop isOpen={isLoading} />
      </div>

      {/* Helper Text */}
      <p className="text-text-muted text-sm">
        First image is free. No sign-up required.
      </p>
      {/* Background Elements */}
      <BackgroundGradient />
    </div>
  );
};

export default CreateArt;
