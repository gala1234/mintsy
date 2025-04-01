import React from "react";
import { cn } from "@/lib/utils";

export type IconType =
  | "close"
  | "order"
  | "download"
  | "mint"
  | "delete"
  | "edit";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: IconType;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "outline";
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, iconType, size = "md", variant = "default", ...props },
    ref
  ) => {
    // Size mappings
    const sizeClasses = {
      sm: "p-1.5 w-8 h-8",
      md: "p-2 w-10 h-10",
      lg: "p-2.5 w-12 h-12",
    };

    // Variant mappings
    const variantClasses = {
      default: "bg-white hover:bg-mint-light/30 text-text hover:text-dark",
      ghost: "bg-transparent hover:bg-mint-light/30 text-text hover:text-dark",
      outline:
        "bg-transparent border-2 border-mint hover:bg-mint-light/30 text-text hover:text-dark",
    };

    // Render the appropriate icon based on the iconType
    const renderIcon = () => {
      switch (iconType) {
        case "close":
          return (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          );
        case "order":
          return (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="M6 8h.01"></path>
              <path d="M10 8h8"></path>
              <path d="M6 12h.01"></path>
              <path d="M10 12h8"></path>
              <path d="M6 16h.01"></path>
              <path d="M10 16h8"></path>
            </svg>
          );
        case "download":
          return (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          );
        case "mint":
          return (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          );
        case "delete":
          return (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          );
        case "edit":
          return (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <button
        className={cn(
          "rounded-full transition-colors",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {renderIcon()}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
