import React from "react";

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Generating your artwork...",
}) => {
  return (
    <div className="w-full max-w-md mx-auto py-8 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif-accent">
        Creating Magic
      </h2>

      <div className="flex flex-col items-center justify-center mb-8">
        {/* Custom spinner with mint color */}
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-mint-light rounded-full opacity-25"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-mint border-r-mint border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading message */}
        <p className="text-lg">{message}</p>
        <p className="text-sm text-text-muted mt-2">
          This may take a few seconds
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
