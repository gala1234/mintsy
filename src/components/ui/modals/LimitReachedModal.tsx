"use client";

import React from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui/elements/LinkButton";
import { Button } from "../elements/Button";
import ModalLayout from "./ModalLayout";
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
    <ModalLayout isOpen={isOpen} onClose={onClose}>
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
          <div className="pt-4 pb-10 border-t border-mint/20 w-full">
            <p className="text-sm text-text-muted mb-4 text-center">
              Share your creation on
            </p>
            <div className="flex justify-center space-x-6 ">
              <a
                href="#"
                className="text-dark hover:text-primary transition-colors"
                aria-label="Share on Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary transition-colors"
                aria-label="Share on X"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-dark hover:text-primary transition-colors"
                aria-label="Share on Discord"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default LimitReachedModal;
