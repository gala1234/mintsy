"use client";

import React from "react";
import { cn } from "@/lib/utils";
import ColorHead from "@/components/ui/ColorHead";

export interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  useColorHead?: boolean;
  colorHeadProps?: {
    colors?: string[];
    duration?: number;
  };
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = "",
  centered = true,
  useColorHead = false,
  colorHeadProps,
}) => {
  const headingClasses = cn(
    "text-3xl md:text-4xl font-bold mb-8 font-serif-accent",
    centered && "text-center",
    className
  );

  if (useColorHead && typeof children === "string") {
    return (
      <h2 className={headingClasses}>
        <ColorHead text={children} {...colorHeadProps} />
      </h2>
    );
  }

  return <h2 className={headingClasses}>{children}</h2>;
};

export default SectionHeading;
