"use client";

import React from "react";
import { TextArea } from "@/components/ui/TextArea";
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
      <TextArea
        id="prompt"
        label="Your Prompt"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Enter your prompt here"
      />

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
