"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/elements/Button";

//TODO: close button inside the modal

interface ArtworkDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  artwork: {
    id: string;
    title: string;
    prompt: string;
    imageUrl: string;
    author: string;
    family: string;
    likes: number;
  } | null;
  onLike?: () => void;
  onCreateOwn?: () => void;
}

const ArtworkDetailModal: React.FC<ArtworkDetailModalProps> = ({
  isOpen,
  onClose,
  artwork,
  onLike,
  onCreateOwn,
}) => {
  if (!isOpen || !artwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="md:w-3/5 relative bg-black">
          <div className="relative w-full aspect-square">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute bottom-4 right-4 text-white/70 text-lg font-medium">
              mintsy
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/5 p-6 flex flex-col h-full overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-dark/50 hover:text-dark transition-colors"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9D7ECF]/20 text-[#9D7ECF]">
              {artwork.family}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-dark mb-2">{artwork.title}</h2>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-dark/70 mb-1">Prompt</h3>
            <p className="text-text-secondary italic">
              &quot;{artwork.prompt}&quot;
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-dark/70 mb-1">
              Created by
            </h3>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-mint/30 flex items-center justify-center text-mint-dark font-medium">
                {artwork.author.charAt(0).toUpperCase()}
              </div>
              <span className="ml-2 font-medium">{artwork.author}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={onLike}
              className="flex items-center gap-1.5 py-1.5 px-3 bg-pink-light text-pink-dark rounded-full text-sm font-medium hover:bg-pink-dark hover:text-white transition-colors duration-200"
            >
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
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>Love ({artwork.likes})</span>
            </button>

            <button className="flex items-center gap-1.5 py-1.5 px-3 bg-lavander-light text-lavander-dark rounded-full text-sm font-medium hover:bg-lavander-dark hover:text-white transition-colors duration-200">
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
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              <span>Share</span>
            </button>
          </div>

          <div className="mt-auto pt-4 border-t border-dark/10">
            <Button onClick={onCreateOwn} variant="primary" fullWidth={true}>
              Create Your Own
            </Button>

            <div className="mt-4 text-center">
              <button
                onClick={onClose}
                className="text-sm text-text-muted hover:text-dark transition-colors"
              >
                Report Artwork
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetailModal;
