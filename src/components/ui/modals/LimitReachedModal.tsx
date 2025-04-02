"use client";

import React from "react";
import { LinkButton } from "@/components/ui/elements/buttons/LinkButton";
import { Button } from "../elements/buttons/Button";
import ModalLayout from "./ModalLayout";
import SocialSharing from "../elements/SocialSharing";
import { cn } from "@/lib/utils";
import WarningIcon from "../../../../public/icons/success/warning.svg"; // SVGR-based import

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
        };
      case "mint":
        return {
          title: "Oops! You're Out of Free Mints",
          message:
            "To mint more NFTs, upgrade your plan or purchase individually.",
        };
      case "download":
        return {
          title: "This Action Requires a Pro Account",
          message:
            "To download in HD resolution, upgrade your plan or purchase individually.",
        };
      default:
        return {
          title: "You've Reached Your Limit",
          message: "You've used all 3 free generations for today.",
        };
    }
  };

  const content = getModalContent();

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
          <div className="flex flex-col items-center pt-10 pb-4">
            {/* Icon */}
            <div className="mb-6 w-20 h-20 flex items-center justify-center bg-yellow-light/30 rounded-full">
              <WarningIcon className="w-10 h-10 text-yellow-dark" />
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
