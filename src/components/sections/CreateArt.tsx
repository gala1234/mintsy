"use client";

import React from "react";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import Backdrop from "@/components/ui/loading/Backdrop";

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
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl mb-6 font-bold font-serif-accent">
        AI Art Generator <br />
        Text to Image
      </h1>
      {/* Subtitle */}
      <p className="text-center text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
        Transform your text prompts into stunning AI-generated artwork – your
        first creation is free.
      </p>
      {/* Input Field */}
      <TextArea
        id="prompt"
        label="Enter Your Text-to-Image Prompt"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Describe the artwork you want to create..."
        aria-label="AI art prompt text area"
      />

      {/* Generate Button */}
        <Button
          onClick={onGenerate}
          disabled={isLoading || !prompt.trim()}
          variant="dark"
          aria-label="Generate AI artwork from text prompt"
          fullWidth
          className="mb-4"
        >
          {isLoading ? "Generating AI Art..." : "Create Your AI Artwork"}
        </Button>

        {/* Loading Backdrop */}
        <Backdrop isOpen={isLoading} isLoading={isLoading} />


      {/* Helper Text */}
      <p className="text-text-muted text-sm">
        First AI-generated image is free. Mint as NFT or order canvas prints
        after creation.
      </p>

      {/* SEO Enhancement - Hidden content with keywords */}
      <div className="sr-only">
        <h2>Create Custom AI Art with Text Prompts</h2>
        <p>
          Our advanced text-to-image AI technology transforms your descriptions
          into stunning digital artwork. Generate unique AI art for personal
          projects, NFT collections, or premium canvas prints.
        </p>
        <ul>
          <li>Text-to-image AI generation</li>
          <li>Custom digital artwork creation</li>
          <li>NFT minting platform</li>
          <li>High-quality canvas printing</li>
          <li>No artistic skills required</li>
        </ul>
      </div>

      {/* Background Elements */}
      <BackgroundGradient />
    </div>
  );
};

export default CreateArt;
