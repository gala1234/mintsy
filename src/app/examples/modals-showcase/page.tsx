"use client";

import { useState } from "react";
import PaywallModal from "@/components/ui/modals/PaywallModal";
import LimitReachedModal from "@/components/ui/modals/LimitReachedModal";
import { Button } from "@/components/ui/elements/Button";
import Image from "next/image";

export default function ModalsShowcase() {
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isLimitReachedOpen, setIsLimitReachedOpen] = useState(false);
  const [limitType, setLimitType] = useState<
    "generation" | "download" | "mint"
  >("generation");
  const [artwork] = useState({
    title: "Cosmic Dreams",
    image: "/examples/artwork-1.jpg",
  });

  const openPaywallModal = () => {
    setIsPaywallOpen(true);
  };

  const closePaywallModal = () => {
    setIsPaywallOpen(false);
  };

  const openLimitReachedModal = (type: "generation" | "download" | "mint") => {
    setLimitType(type);
    setIsLimitReachedOpen(true);
  };

  const closeLimitReachedModal = () => {
    setIsLimitReachedOpen(false);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif-accent">
        Mintsy.ai Modals Showcase
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Paywall Modal Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
          <h2 className="text-2xl font-bold mb-4">Paywall Modal</h2>
          <p className="mb-6">
            This modal displays subscription options and microtransactions for
            premium features.
          </p>

          <div className="relative h-60 w-full mb-6">
            <Image
              src="/examples/artwork-1.jpg"
              alt="Sample artwork"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <Button onClick={openPaywallModal} className="w-full">
            Show Paywall Modal
          </Button>
        </div>

        {/* Limit Reached Modal Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
          <h2 className="text-2xl font-bold mb-4">Limit Reached Modal</h2>
          <p className="mb-6">
            This modal displays when a user has reached usage limits for
            different features.
          </p>

          <div className="space-y-4">
            <Button
              onClick={() => openLimitReachedModal("generation")}
              className="w-full"
              variant="primary"
            >
              Show Generation Limit Modal
            </Button>

            <Button
              onClick={() => openLimitReachedModal("mint")}
              className="w-full"
              variant="secondary"
            >
              Show NFT Minting Limit Modal
            </Button>

            <Button
              onClick={() => openLimitReachedModal("download")}
              className="w-full"
            >
              Show Download Limit Modal
            </Button>
          </div>
        </div>
      </div>

      {/* The Modals */}
      <PaywallModal
        isOpen={isPaywallOpen}
        onClose={closePaywallModal}
        artworkTitle={artwork.title}
        artworkImage={artwork.image}
      />

      <LimitReachedModal
        isOpen={isLimitReachedOpen}
        onClose={closeLimitReachedModal}
        limitType={limitType}
        upgradeUrl="/pricing"
        buyOneUrl="/checkout"
        price="€9.99"
      />
    </div>
  );
}
