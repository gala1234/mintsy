"use client";

import React from "react";
import ModalLayout from "./ModalLayout";
import SubscriptionCard from "@/components/ui/cards/SubscriptionCard";
import FeatureItem from "@/components/ui/elements/FeatureItem";
import DividerWithText from "@/components/ui/elements/DividerWithText";
import ArtworkPreview from "@/components/ui/elements/ArtworkPreview";
import MicrotransactionButton from "@/components/ui/elements/buttons/MicrotransactionButton";
import MintIcon from "../../../../public/icons/success/success.svg";
import DownloadIcon from "../../../../public/icons/success/hd-download.svg";
import PrintIcon from "../../../../public/icons/success/canvas-print-done.svg";

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
  const subscriptionOptions = [
    {
      title: "Monthly",
      price: "€9.99",
      features: [
        "Unlimited AI generations",
        "10 NFT mints/month",
        "HD downloads without watermark",
      ],
      buttonText: "Subscribe Monthly",
      buttonVariant: "mint",
      isBestValue: false,
    },
    {
      title: "Annual",
      price: "€79",
      features: [
        "Unlimited AI generations",
        "10 NFT mints/month",
        "HD downloads without watermark",
      ],
      buttonText: "Subscribe Yearly",
      buttonVariant: "mint",
      isBestValue: true,
    },
  ];

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
          {subscriptionOptions.map((option, index) => (
            <SubscriptionCard
              key={index}
              planType={option.title.toLowerCase() as "monthly" | "annual"}
              price={option.price}
              billingPeriod={option.title}
              ctaText={option.buttonText}
              badgeText={option.isBestValue ? "BEST VALUE" : undefined}
              footerText={option.features.join(", ")}
              footerTextColor={
                option.isBestValue ? "text-mint-dark" : undefined
              }
              onClick={() => console.log(`Subscribe ${option.title}`)}
            />
          ))}
        </div>
      </div>

      {/* Pro features */}
      <div className="w-full bg-cream p-6 rounded-xl mb-8">
        <h3 className="font-medium mb-4 text-center">Pro Features Include:</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FeatureItem feature={feature} />
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <DividerWithText text="Or unlock this artwork without subscribing" />

      {/* Artwork preview */}
      <ArtworkPreview title={artworkTitle} imageUrl={artworkImage} />

      {/* Microtransaction options */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
        <MicrotransactionButton
          label="Mint as NFT"
          price="€5"
          icon={<MintIcon className="w-4 h-4 text-mint-dark" />}
          bgClass="bg-mint-light/40"
          className="flex-1"
        />

        <MicrotransactionButton
          label="HD Download"
          price="€10"
          icon={<DownloadIcon className="w-4 h-4 text-indigo-600" />}
          bgClass="bg-white"
          className="flex-1"
        />

        <MicrotransactionButton
          label="Canvas Print"
          price="from €30"
          icon={<PrintIcon className="w-4 h-4 text-pink-600" />}
          bgClass="bg-pink-light/40"
          className="flex-1"
        />
      </div>
    </ModalLayout>
  );
};

export default PaywallModal;
