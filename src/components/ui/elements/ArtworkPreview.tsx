"use client";

import React from "react";
import Image from "next/image";

interface ArtworkPreviewProps {
  title: string;
  imageUrl: string;
  description?: string;
  className?: string;
}

const ArtworkPreview: React.FC<ArtworkPreviewProps> = ({
  title,
  imageUrl,
  description = "Choose how you want to enjoy this artwork",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-6 w-full ${className}`}
    >
      <div className="relative w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ArtworkPreview;
