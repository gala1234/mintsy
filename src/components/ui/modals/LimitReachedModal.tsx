"use client";

import React from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui/elements/LinkButton";
import { Button } from "../elements/Button";
import ModalLayout from "./ModalLayout";
import SocialSharing from "../elements/SocialSharing";
import { cn } from "@/lib/utils";

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
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-2xl"
      backdropClassName="px-2 sm:px-4"
    >
      <div
        className={cn(
          "w-full mx-auto animate-fadeIn relative max-h-[90vh] overflow-hidden"
        )}
      >
        <div className="overflow-y-auto max-h-[90vh] scrollbar-thin">
          <div className="flex flex-col items-center  pt-10 pb-4">
            {/* Icon */}
            <div className="mb-6 w-20 h-20 flex items-center justify-center bg-mint-light/30 rounded-full avatarContainer">
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 font-serif-accent">
              {content.title}
            </h2>

            {/* Message */}
            <p className="text-text-muted mb-8 text-center">
              {content.message}
            </p>

            {/* Buttons */}
            <div className="space-y-4 w-full mb-6">
              <LinkButton
                href={upgradeUrl}
                variant="primary"
                className="w-full"
              >
                Upgrade to Pro
              </LinkButton>

              <LinkButton
                href={buyOneUrl}
                variant="secondary"
                className="w-full"
              >
                Buy this one for {price}
              </LinkButton>
            </div>

            {/* Tertiary option */}
            <Button variant="tertiary" onClick={onClose}>
              Try again tomorrow
            </Button>
          </div>

          {/* Social sharing */}
          <SocialSharing className="pb-10" />
        </div>
      </div>
    </ModalLayout>
  );
};

export default LimitReachedModal;
