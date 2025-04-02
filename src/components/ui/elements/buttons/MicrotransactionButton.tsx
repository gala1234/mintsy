"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MicrotransactionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  price: string;
  icon?: React.ReactNode;
  bgClass?: string; // e.g. "bg-mint-light", "bg-pink-light"
  isLoading?: boolean;
  variant?: "mint" | "pink" | "lavander" | "default";
}

const MicrotransactionButton: React.FC<MicrotransactionButtonProps> = ({
  label,
  price,
  icon,
  bgClass,
  className,
  isLoading = false,
  variant = "default",
  ...props
}) => {
  // Determine background color based on variant if bgClass is not provided
  const getBgClass = () => {
    if (bgClass) return bgClass;

    switch (variant) {
      case "mint":
        return "bg-mint-light hover:bg-mint-light/80";
      case "pink":
        return "bg-pink-light hover:bg-pink-light/80";
      case "lavander":
        return "bg-lavander-light hover:bg-lavander-light/80";
      default:
        return "bg-white hover:bg-gray-50";
    }
  };

  return (
    <button
      className={cn(
        "group w-full flex items-center justify-between md:flex-col gap-3 border border-dark/20 rounded-lg shadow-sm transition-all duration-300",
        "px-4 py-3 sm:px-3 sm:py-2.5", // Smaller padding on desktop
        "hover:shadow-md focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-dark/40",
        "active:scale-[0.98] hover:border-dark/40",
        getBgClass(),
        className
      )}
      disabled={isLoading || props.disabled}
      aria-busy={isLoading}
      {...props}
    >
      <div className="flex items-center gap-2 text-dark">
        {isLoading ? (
          <div className="relative w-4 h-4 mr-1">
            <div className="absolute top-0 left-0 w-full h-full border-2 border-dark/10 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-2 border-t-dark/70 border-r-dark/70 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
        ) : icon ? (
          <span className="w-4 h-4 transition-transform group-hover:scale-110">
            {icon}
          </span>
        ) : null}
        <span className="font-medium text-sm sm:text-sm">{label}</span>
      </div>
      <span
        className={cn(
          "font-semibold text-xs sm:text-sm text-dark px-2 py-0.5 rounded-full transition-all duration-200",
          "group-hover:bg-dark/10 group-hover:shadow-sm"
        )}
      >
        {price}
      </span>
    </button>
  );
};

export default MicrotransactionButton;
