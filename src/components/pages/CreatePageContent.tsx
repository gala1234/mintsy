"use client";

import { useState } from "react";
import CreateArt from "@/components/sections/CreateArt";
import EditArtwork from "@/components/sections/EditArtwork";

const CreatePageContent = () => {
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
    // Validate prompt
    if (!prompt.trim()) return;

    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // In a real app, this would call an API to generate the image
      // For demo purposes, we'll use a placeholder image
      setGeneratedImageSrc("/canvas.png");
      setIsLoading(false);
      setShowPreview(true);
      // Reset remaining generations for the demo
      setRemainingGenerations(remainingGenerations - 1);
    }, 1500);
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
        )}
      </div>
      
      {/* SEO Enhancement - Hidden section with keyword-rich content */}
      <div className="sr-only">
        <h2>AI Art Generator - Create Digital Art from Text</h2>
        <p>
          Use our advanced text-to-image AI to create stunning digital artwork. 
          No artistic skills required. Generate AI art from simple text prompts, 
          customize your creation, and mint as NFT or order premium canvas prints.
        </p>
        <ul>
          <li>AI-generated digital art</li>
          <li>Text-to-image transformation</li>
          <li>NFT minting platform</li>
          <li>Custom canvas printing</li>
          <li>Digital artwork creation</li>
        </ul>
      </div>
    </section>
  );
};

export default CreatePageContent; 