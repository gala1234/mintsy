import React from "react";
import Image from "next/image";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
      <div className="relative h-48 md:h-56 lg:h-64">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
          {stepNumber}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        {description && <p className="text-text-secondary">{description}</p>}
      </div>
    </div>
  );
};

export default StepCard;
