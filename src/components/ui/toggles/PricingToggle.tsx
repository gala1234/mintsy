import React from "react";

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
  className?: string;
}

const PricingToggle: React.FC<PricingToggleProps> = ({
  isYearly,
  onToggle,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <span
        className={`text-sm font-medium ${
          !isYearly ? "text-primary" : "text-text-muted"
        }`}
      >
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isYearly)}
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-mint-light/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        role="switch"
        aria-checked={isYearly}
      >
        <span
          className={`${
            isYearly ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
        />
      </button>
      <div className="flex flex-col items-start">
        <span
          className={`text-sm font-medium ${
            isYearly ? "text-primary" : "text-text-muted"
          }`}
        >
          Yearly
        </span>
        {isYearly ? (
          <span className="text-xs text-mint-dark font-medium">Save 34%</span>
        ) : (
          <span className="text-xs text-text-muted font-medium">Save 34%</span>
        )}
      </div>
    </div>
  );
};

export default PricingToggle;
