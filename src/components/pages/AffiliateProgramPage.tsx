"use client";

import React from "react";
import AffiliateHero from "@/components/sections/AffiliateHero";
import AffiliateWhyJoin from "@/components/sections/AffiliateWhyJoin";
import AffiliateHowItWorks from "@/components/sections/AffiliateHowItWorks";
import AffiliatePerfectFor from "@/components/sections/AffiliatePerfectFor";
import AffiliateEarnings from "@/components/sections/AffiliateEarnings";
import AffiliateSignUpForm from "@/components/sections/AffiliateSignUpForm";

export default function AffiliateProgramContent() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <AffiliateHero />
        <AffiliateWhyJoin />
        <AffiliateHowItWorks />
        <AffiliatePerfectFor />
        <AffiliateEarnings />
        <AffiliateSignUpForm />

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-xl">
            <div className="flex flex-col md:flex-row justify-center gap-6 text-text-secondary">
              <a
                href="/affiliate-program/how-it-works"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                How does it work?
              </a>
              <a
                href="/affiliate-program/terms"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Terms for Affiliates
              </a>
              <a
                href="mailto:affiliates@mintsy.ai"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                affiliates@mintsy.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
