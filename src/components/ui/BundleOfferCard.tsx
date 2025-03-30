import React from "react";
import { LinkButton } from "./LinkButton";

interface BundleOfferCardProps {
  name: string;
  originalPrice: string;
  discountedPrice: string;
  savings: string;
  description: string;
  className?: string;
}

const BundleOfferCard: React.FC<BundleOfferCardProps> = ({
  name,
  originalPrice,
  discountedPrice,
  savings,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-mint/20 ${className}`}
    >
      <div className="bg-lavander-light/50 p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-text-muted text-sm">{description}</p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-text-muted line-through mr-2">
              {originalPrice}
            </span>
            <span className="text-2xl font-bold text-primary">
              {discountedPrice}
            </span>
          </div>
          <span className="text-mint-dark font-medium">{savings}</span>
        </div>
        <LinkButton
          href="/login"
          variant="primary"
          className="w-full text-center"
        >
          Get Bundle
        </LinkButton>
      </div>
    </div>
  );
};

export default BundleOfferCard;
