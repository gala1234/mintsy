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
    <div className="bg-background p-8 rounded-lg text-center flex flex-col items-center">
      <div className="w-24 h-24 relative">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
      <div className="text-3xl font-bold mt-6 flex items-center">
        <span className="bg-text w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white text-lg">
          {stepNumber}
        </span>
        {title}
      </div>
    </div>
  );
};

export default StepCard;