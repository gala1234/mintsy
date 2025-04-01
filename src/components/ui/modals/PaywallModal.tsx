"use client";

import React from "react";
import { Button } from "@/components/ui/elements/Button";
import { LinkButton } from "@/components/ui/elements/LinkButton";
import Image from "next/image";

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
  if (!isOpen) return null;

  const features = [
    "Unlimited AI generations",
    "10 NFT mints/month",
    "HD downloads without watermark",
    "Commercial rights",
    "Exclusive print discounts",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-dark/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative bg-white rounded-2xl shadow-lg max-w-2xl w-full mx-auto overflow-hidden animate-fadeIn max-h-[90vh] my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dark/50 hover:text-dark p-1 z-10"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-2rem)] modal-content">
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
                      className="text-green-700"
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
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">
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
            <LinkButton
              href="/checkout?type=nft"
              variant="secondary"
              className="bg-[#8A7FFF] hover:bg-[#7A6FF0] text-white border-none"
            >
              Mint as NFT – €5
            </LinkButton>

            <LinkButton
              href="/checkout?type=download"
              variant="secondary"
              className="bg-[#FF8C7A] hover:bg-[#FF7A66] text-white border-none"
            >
              HD Download – €10
            </LinkButton>

            <LinkButton
              href="/checkout?type=canvas"
              variant="secondary"
              className="bg-gray-200 hover:bg-gray-300 text-dark border-none"
            >
              Canvas Print – from €30
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;
