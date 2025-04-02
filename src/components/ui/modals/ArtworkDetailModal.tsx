"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/elements/Button";
import { Badge } from "@/components/ui/elements/Badge";
import { ActionButton } from "@/components/ui/elements/ActionButton";
import { AuthorAvatar } from "@/components/ui/elements/AuthorAvatar";
import ModalLayout from "./ModalLayout";
// Use SVGs as components
import LoveIcon from "../../../../public/icons/love.svg";
import ShareIcon from "../../../../public/icons/share.svg";

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
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-2xl"
      backdropClassName="px-2 sm:px-4"
    >
      <div className="max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
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
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="default">{artwork.family}</Badge>
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
              <AuthorAvatar name={artwork.author} variant="mint" size="md" />
              <span className="ml-2 font-medium">{artwork.author}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <ActionButton
              onClick={onLike}
              variant="pink"
              icon={<LoveIcon className="w-4 h-4" />}
            >
              Love ({artwork.likes})
            </ActionButton>

            <ActionButton
              variant="lavander"
              icon={<ShareIcon className="w-4 h-4" />}
            >
              Share
            </ActionButton>
          </div>

          <div className="mt-auto pt-4 border-t border-dark/10">
            <Button onClick={onCreateOwn} variant="primary" fullWidth={true}>
              Create Your Own
            </Button>

            <div className="mt-4 text-center">
              <Button onClick={onClose} variant="tertiary">
                Report Artwork
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ArtworkDetailModal;
