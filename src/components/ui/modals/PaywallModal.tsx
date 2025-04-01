"use client";

import React from "react";
import { Button } from "@/components/ui/elements/Button";
import { LinkButton } from "@/components/ui/elements/LinkButton";
import Image from "next/image";
import ModalLayout from "./ModalLayout";

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkTitle?: string;
  artworkImage?: string;
}

const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  artworkTitle = "Your Artwork",
  artworkImage = "/examples/artwork-1.jpg",
}) => {
  const features = [
    "Unlimited AI generations",
    "10 NFT mints/month",
    "HD downloads without watermark",
    "Commercial rights",
    "Exclusive print discounts",
  ];

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-2xl"
      backdropClassName="px-2 sm:px-4"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-serif-accent">
          Unlock Unlimited Creativity
        </h2>

        <p className="text-text-secondary text-center mb-8 max-w-md">
          Upgrade to Pro for unlimited AI generations and premium features
        </p>

        {/* Subscription options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-cream border border-gray-100 p-6 rounded-xl">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-1">Monthly</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">€9.99</span>
                <span className="text-text-secondary ml-1">/month</span>
              </div>
              <Button className="w-full mb-4">Subscribe Monthly</Button>
              <p className="text-xs text-center text-text-secondary">
                Cancel anytime
              </p>
            </div>
          </div>

          <div className="bg-cream border border-gray-100 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute -top-1 -right-1 bg-mint-dark text-xs text-white font-medium py-1 px-3 rounded-bl-lg shadow-sm">
              BEST VALUE
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-1">Annual</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">€79</span>
                <span className="text-text-secondary ml-1">/year</span>
              </div>
              <Button className="w-full mb-2">Subscribe Yearly</Button>
              <p className="text-xs text-center text-mint-dark font-medium">
                Save 34% (€40.88)
              </p>
            </div>
          </div>
        </div>

        {/* Pro features */}
        <div className="w-full bg-cream p-6 rounded-xl mb-8">
          <h3 className="font-medium mb-4 text-center">
            Pro Features Include:
          </h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="bg-mint/20 rounded-full p-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-mint-dark"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="relative w-full mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-text-muted">
              Or unlock this artwork without subscribing
            </span>
          </div>
        </div>

        {/* Artwork preview */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 w-full">
          <div className="relative w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={artworkImage}
              alt={artworkTitle}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">{artworkTitle}</h3>
            <p className="text-text-secondary mb-4">
              Choose how you want to enjoy this artwork
            </p>
          </div>
        </div>

        {/* Microtransaction options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
          <LinkButton href="/checkout?type=nft" variant="mint">
            Mint as NFT – €5
          </LinkButton>

          <LinkButton href="/checkout?type=download" variant="gray">
            HD Download – €10
          </LinkButton>

          <LinkButton href="/checkout?type=canvas" variant="pink">
            Canvas Print – from €30
          </LinkButton>
        </div>
      </div>
    </ModalLayout>
  );
};

export default PaywallModal;
