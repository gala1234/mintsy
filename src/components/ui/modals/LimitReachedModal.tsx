"use client";

import React from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui/elements/LinkButton";

interface LimitReachedModalProps {
  isOpen: boolean;
  onClose: () => void;
  upgradeUrl: string;
  buyOneUrl: string;
  limitType: "generation" | "mint" | "download";
  price?: string;
}

const LimitReachedModal: React.FC<LimitReachedModalProps> = ({
  isOpen,
  onClose,
  upgradeUrl,
  buyOneUrl,
  limitType,
  price = "€5",
}) => {
  if (!isOpen) return null;

  const getModalContent = () => {
    switch (limitType) {
      case "generation":
        return {
          title: "You've Reached Your Limit",
          message: "You've used all 3 free generations for today.",
          icon: "/icons/limit-warning.svg",
          altText: "Daily limit reached",
        };
      case "mint":
        return {
          title: "Oops! You're Out of Free Mints",
          message:
            "To mint more NFTs, upgrade your plan or purchase individually.",
          icon: "/icons/nft-limit.svg",
          altText: "NFT minting limit reached",
        };
      case "download":
        return {
          title: "This Action Requires a Pro Account",
          message:
            "To download in HD resolution, upgrade your plan or purchase individually.",
          icon: "/icons/download-limit.svg",
          altText: "Download limit reached",
        };
      default:
        return {
          title: "You've Reached Your Limit",
          message: "You've used all 3 free generations for today.",
          icon: "/icons/limit-warning.svg",
          altText: "Daily limit reached",
        };
    }
  };

  const content = getModalContent();

  // Fallback warning icon for when the image doesn't load
  const WarningIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative bg-[#FDFBF7] rounded-2xl shadow-lg max-w-md w-full mx-auto overflow-hidden animate-fadeIn">
        <div className="flex flex-col items-center px-8 pt-10 pb-8">
          {/* Icon */}
          <div className="mb-6 w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full">
            <Image
              src={content.icon}
              alt={content.altText}
              width={40}
              height={40}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = WarningIcon().toString();
                }
              }}
            />
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-4 font-serif-accent">
            {content.title}
          </h2>

          {/* Message */}
          <p className="text-xl text-center mb-8">{content.message}</p>

          {/* Buttons */}
          <div className="flex flex-col w-full gap-4 mb-6">
            <LinkButton
              href={upgradeUrl}
              size="default"
              className="w-full py-3 text-base"
            >
              Upgrade to Pro
            </LinkButton>

            <LinkButton
              href={buyOneUrl}
              variant="secondary"
              size="default"
              className="w-full py-3 text-base bg-[#FF8C7A] hover:bg-[#FF7A66] text-white border-none"
            >
              Buy this one for {price}
            </LinkButton>
          </div>

          {/* Tertiary option */}
          <button
            onClick={onClose}
            className="text-dark/70 hover:text-dark transition-colors text-lg"
          >
            Try again tomorrow
          </button>
        </div>

        {/* Social sharing */}
        <div className="w-full bg-[#F3F0E9] py-4 px-8">
          <p className="text-center text-dark/80">
            Share your creation on Instagram, X, or Discord
          </p>
        </div>
      </div>
    </div>
  );
};

export default LimitReachedModal;
