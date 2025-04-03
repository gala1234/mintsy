import React from "react";
import Image from "next/image";

interface StepCardProps {
  stepNumber: number;
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden h-64 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      {/* Content */}
      <div className="relative z-20 text-center text-white p-8">
        <div className="text-3xl font-bold flex items-center justify-center mb-4">
          <span className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-3 text-white text-lg">
            {stepNumber}
          </span>
          {title}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
