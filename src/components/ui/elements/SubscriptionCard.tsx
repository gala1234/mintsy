"use client";

import React from "react";
import { Button } from "./Button";

interface SubscriptionCardProps {
  planType: "monthly" | "annual";
  price: string;
  billingPeriod: string;
  ctaText: string;
  badgeText?: string;
  footerText: string;
  footerTextColor?: string;
  onClick?: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  planType,
  price,
  billingPeriod,
  ctaText,
  badgeText,
  footerText,
  footerTextColor = "text-text-secondary",
  onClick,
}) => {
  return (
    <div className="bg-cream border border-gray-100 p-6 rounded-xl relative overflow-hidden">
      {badgeText && (
        <div className="absolute -top-1 -right-1 bg-mint-dark text-xs text-white font-medium py-1 px-3 rounded-bl-lg shadow-sm">
          {badgeText}
        </div>
      )}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-1">
          {planType === "monthly" ? "Monthly" : "Annual"}
        </h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-text-secondary ml-1">{billingPeriod}</span>
        </div>
        <Button className="w-full mb-2" onClick={onClick}>
          {ctaText}
        </Button>
        <p className={`text-xs text-center ${footerTextColor}`}>{footerText}</p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
