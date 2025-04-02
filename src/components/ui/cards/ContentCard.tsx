"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ContentCardProps {
  backgroundColor?: string;
  title: string;
  description: string;
  titleColor?: string;
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  backgroundColor = "bg-mint-light/30",
  title,
  description,
  titleColor = "text-pink-dark",
  className = "",
}) => {
  return (
    <div className={cn("p-8 rounded-xl shadow-sm", backgroundColor, className)}>
      <h3
        className={cn("text-2xl font-bold mb-4 font-serif-accent", titleColor)}
      >
        {title}
      </h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ContentCard;
