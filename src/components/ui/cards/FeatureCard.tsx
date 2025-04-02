"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "bg-background p-8 rounded-xl shadow-sm flex flex-col items-center text-center",
        className
      )}
    >
      <div className="w-16 h-16 flex items-center justify-center mb-4">
        <Image src={iconSrc} alt={iconAlt} width={80} height={80} />
      </div>
      <h3 className="text-2xl font-bold mb-3 font-serif-accent">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default FeatureCard;
