import React from "react";
import Image from "next/image";

interface ImageWithWatermarkProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  watermarkText?: string;
  className?: string;
  priority?: boolean;
}

const ImageWithWatermark: React.FC<ImageWithWatermarkProps> = ({
  src,
  alt,
  width = 600,
  height = 600,
  watermarkText = "mintsy",
  className = "w-full h-auto",
  priority = false,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
      {watermarkText && (
        <div className="absolute bottom-4 right-4 text-white/70 text-lg font-medium">
          {watermarkText}
        </div>
      )}
    </div>
  );
};

export default ImageWithWatermark;
