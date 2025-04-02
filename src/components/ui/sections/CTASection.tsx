"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/elements/buttons/LinkButton";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

export interface CTASectionProps {
  heading: string;
  buttonText: string;
  buttonHref: string;
  backgroundColor?: string;
  includeGradient?: boolean;
  className?: string;
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
}

const CTASection: React.FC<CTASectionProps> = ({
  heading,
  buttonText,
  buttonHref,
  backgroundColor = "bg-background",
  includeGradient = true,
  className = "",
  buttonVariant = "primary",
}) => {
  return (
    <section
      className={cn("py-16 md:py-24 relative", backgroundColor, className)}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center p-10 bg-lavander-light/30 rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold mb-6 font-serif-accent">
            {heading}
          </h2>
          <LinkButton
            href={buttonHref}
            variant={
              buttonVariant as
                | "primary"
                | "secondary"
                | "mint"
                | "pink"
                | "gray"
                | "red"
            }
          >
            {buttonText}
          </LinkButton>
        </div>
      </div>
      {includeGradient && <BackgroundGradient />}
    </section>
  );
};

export default CTASection;
