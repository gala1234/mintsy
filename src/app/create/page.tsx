"use client";

import { useState } from "react";
import CreateArt from "@/components/sections/CreateArt";
import PreviewResult from "@/components/sections/PreviewResult";
import EditArtwork from "@/components/sections/EditArtwork";

export default function Create() {
  const [prompt, setPrompt] = useState("");
  const [artStyle, setArtStyle] = useState("");
  const [keepOriginalSeed, setKeepOriginalSeed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedImageSrc, setGeneratedImageSrc] = useState("");
  const [remainingGenerations, setRemainingGenerations] = useState(2);

  const handlePromptChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  const handleGeneratePreview = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // In a real app, this would call an API to generate the image
      // For demo purposes, we'll use a placeholder image
      setGeneratedImageSrc("/canvas.png");
      setIsLoading(false);
      setShowPreview(true);
    }, 1500);
  };

  const handleGenerateAnother = () => {
    if (remainingGenerations > 0) {
      setRemainingGenerations((prev) => prev - 1);
      setShowPreview(false);
      setPrompt("");
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        {!showPreview ? (
          <CreateArt
            prompt={prompt}
            onPromptChange={handlePromptChange}
            onGenerate={handleGeneratePreview}
            isLoading={isLoading}
          />
        ) : (
          <PreviewResult
            imageSrc={generatedImageSrc}
            remainingGenerations={remainingGenerations}
            onGenerateAnother={handleGenerateAnother}
          />
        )}
      </div>
      <EditArtwork
        imageSrc={generatedImageSrc}
        originalPrompt={prompt}
        onPromptChange={handlePromptChange}
        prompt={prompt}
        onRegenerate={handleGeneratePreview}
        isLoading={isLoading}
        remainingGenerations={remainingGenerations}
        artStyle={artStyle}
        onArtStyleChange={setArtStyle}
        keepOriginalSeed={keepOriginalSeed}
        onKeepOriginalSeedChange={setKeepOriginalSeed}
      />
    </section>
  );
}
