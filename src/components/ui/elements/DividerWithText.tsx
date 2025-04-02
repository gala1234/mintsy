"use client";

import React from "react";

interface DividerWithTextProps {
  text: string;
  className?: string;
  textClassName?: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({
  text,
  className = "",
  textClassName = "bg-white px-4 text-sm text-text-muted",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border"></div>
      </div>
      <div className="relative flex justify-center">
        <span className={textClassName}>{text}</span>
      </div>
    </div>
  );
};

export default DividerWithText;
