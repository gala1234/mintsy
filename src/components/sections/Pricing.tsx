"use client";

import React, { useState } from "react";
import Link from "next/link";
import PricingCard from "@/components/ui/cards/PricingCard";
import MicrotransactionCard from "@/components/ui/cards/MicrotransactionCard";
import BundleOfferCard from "@/components/ui/cards/BundleOfferCard";
import PricingToggle from "@/components/ui/toggles/PricingToggle";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import { pricingPlans, microtransactions, bundleOffers } from "@/data/pricing";

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif-accent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choose the plan that works best for your creative journey
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="mb-12">
          <PricingToggle
            isYearly={isYearly}
            onToggle={setIsYearly}
            className="mx-auto"
          />
        </div>

        {/* Main Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              label={plan.label}
              description={plan.description}
              price={plan.price}
              priceYearly={isYearly ? plan.priceYearly : undefined}
              savings={isYearly ? plan.savings : undefined}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonLink={plan.buttonLink}
              isFeatured={plan.isFeatured}
              badge={plan.badge}
            />
          ))}
        </div>

        {/* Pay-as-you-go Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-6 text-center font-serif-accent">
            Pay-as-you-go Features
          </h3>
          <p className="text-lg text-center mb-10 max-w-2xl mx-auto">
            Only pay for what you need, when you need it
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {microtransactions.map((option) => (
              <MicrotransactionCard
                key={option.id}
                name={option.name}
                price={option.price}
                description={option.description}
              />
            ))}
          </div>
        </div>

        {/* Bundle Offers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-6 text-center font-serif-accent">
            Bundle Offers
          </h3>
          <p className="text-lg text-center mb-10 max-w-2xl mx-auto">
            Save more with our special bundles
          </p>
          <div className="max-w-md mx-auto">
            {bundleOffers.map((bundle) => (
              <BundleOfferCard
                key={bundle.id}
                name={bundle.name}
                originalPrice={bundle.originalPrice}
                discountedPrice={bundle.discountedPrice}
                savings={bundle.savings}
                description={bundle.description}
              />
            ))}
          </div>
        </div>

        {/* FAQ and Policies */}
        <div className="text-center pt-6 border-t border-mint/20">
          <div className="flex flex-col md:flex-row justify-center gap-6 text-primary">
            <Link
              href="/faq"
              className="hover:text-primary-hover transition-colors"
            >
              Frequently Asked Questions
            </Link>
            <a
              href="/refund-policy"
              className="hover:text-primary-hover transition-colors"
            >
              Refund Policy
            </a>
            <a
              href="/affiliate"
              className="hover:text-primary-hover transition-colors"
            >
              Become an Affiliate
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundGradient />
    </section>
  );
};

export default Pricing;
