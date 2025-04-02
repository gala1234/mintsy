"use client";

import React from "react";
import { trackEvent, Events, Categories } from "@/utils/analytics";
import { Button } from "@/components/ui/elements/buttons/Button";

const GA4Example: React.FC = () => {
  // Example function to track a button click
  const handleGenerateArtClick = () => {
    trackEvent(Events.GENERATE_ART, {
      event_category: Categories.ARTWORK,
      event_label: "homepage_button",
      style: "abstract", // Custom parameter
      prompt_length: 35, // Custom parameter
    });

    // Your actual button logic here
    console.log("Generating art...");
  };

  // Example function to track a purchase
  const handlePurchaseClick = () => {
    trackEvent(Events.PURCHASE, {
      event_category: Categories.PURCHASE,
      event_label: "canvas_print",
      value: 49.99, // Value in currency
      currency: "EUR",
      item_name: "Canvas Print 50x70cm",
      transaction_id: "TX-" + Math.floor(Math.random() * 1000000),
    });

    // Your actual purchase logic here
    console.log("Processing purchase...");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-xl font-medium text-[#43405D] mb-4">
        GA4 Tracking Examples
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500 mb-2">Track art generation:</p>
          <Button
            onClick={handleGenerateArtClick}
            variant="primary"
            className="bg-[#9D7ECF] hover:bg-[#8347d1]"
          >
            Generate Artwork
          </Button>
        </div>

        <div>
          <p className="text-gray-500 mb-2">Track a purchase:</p>
          <Button onClick={handlePurchaseClick} variant="mint">
            Purchase Canvas Print (€49.99)
          </Button>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
        <p className="font-medium mb-2">💡 How to use GA4 tracking:</p>
        <pre className="whitespace-pre-wrap text-xs">
          {`// Import the utilities
import { trackEvent, Events, Categories } from '@/utils/analytics';

// Track an event
trackEvent(Events.CLICK_CTA, {
  event_category: Categories.UI_INTERACTION,
  event_label: 'pricing_button'
});`}
        </pre>
      </div>
    </div>
  );
};

export default GA4Example;
