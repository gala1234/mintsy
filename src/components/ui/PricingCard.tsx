import React from "react";
import { LinkButton } from "./LinkButton";

interface PricingCardProps {
  label: string;
  description: string;
  price: string;
  priceYearly?: string;
  savings?: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isFeatured?: boolean;
  badge?: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  label,
  description,
  price,
  priceYearly,
  savings,
  features,
  buttonText,
  buttonLink,
  isFeatured = false,
  badge,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
        isFeatured ? "border-2 border-primary" : "border border-mint/20"
      } ${className}`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 rounded-bl-lg text-sm font-medium">
          {badge}
        </div>
      )}

      {/* Card Header */}
      <div
        className={`p-6 ${
          isFeatured ? "bg-lavander-light" : "bg-mint-light/30"
        }`}
      >
        <h3 className="text-2xl font-bold mb-2 font-serif-accent">{label}</h3>
        <p className="text-text-muted mb-4">{description}</p>

        <div className="flex items-end">
          <span className="text-4xl font-bold">
            {priceYearly ? priceYearly : price}
          </span>
          {priceYearly && (
            <span className="text-sm text-text-muted ml-2 mb-1">/year</span>
          )}
          {!priceYearly && price !== "€0" && (
            <span className="text-sm text-text-muted ml-2 mb-1">/month</span>
          )}
        </div>

        {savings && (
          <p className="text-mint-dark font-medium mt-1">{savings}</p>
        )}
      </div>

      {/* Features List */}
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-mint-dark mr-2 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <LinkButton
          href={buttonLink}
          variant={isFeatured ? "primary" : "secondary"}
          className="w-full text-center"
        >
          {buttonText}
        </LinkButton>
      </div>
    </div>
  );
};

export default PricingCard;
