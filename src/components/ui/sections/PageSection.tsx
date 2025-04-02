"use client";

import React from "react";
import { cn } from "@/lib/utils";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

export interface PageSectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  includeGradient?: boolean;
  className?: string;
  containerClassName?: string;
}

const PageSection: React.FC<PageSectionProps> = ({
  children,
  backgroundColor = "bg-background",
  padding = "py-16 md:py-24",
  includeGradient = false,
  className = "",
  containerClassName = "container mx-auto px-6 md:px-10",
}) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        backgroundColor,
        padding,
        className
      )}
    >
      <div className={containerClassName}>{children}</div>
      {includeGradient && <BackgroundGradient />}
    </section>
  );
};

export default PageSection;
