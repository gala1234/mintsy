import React from "react";
import { cn } from "@/lib/utils";

interface BackdropProps {
  isOpen: boolean;
  message?: string;
  subMessage?: string;
  spinnerSize?: "sm" | "md" | "lg";
  className?: string;
  spinnerClassName?: string;
  children?: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({
  isOpen,
  message = "Creating Magic",
  subMessage = "This may take a few seconds",
  spinnerSize = "md",
  className = "",
  spinnerClassName = "",
  children,
}) => {
  if (!isOpen) return null;

  // Size mappings for the spinner
  const spinnerSizes = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28",
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center p-8 max-w-md mx-auto text-center">
        {/* Custom spinner with mint color */}
        <div
          className={cn(
            "relative mb-6",
            spinnerSizes[spinnerSize],
            spinnerClassName
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full border-4 border-mint-light rounded-full opacity-25"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-mint border-r-mint border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading message */}
        {message && <p className="text-lg">{message}</p>}
        {subMessage && (
          <p className="text-sm text-text-muted mt-2">{subMessage}</p>
        )}

        {/* Optional children for additional content */}
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
