import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "inline-block font-medium rounded-lg transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-hover text-white",
        secondary:
          "bg-mint-light/15 hover:bg-white border-2 border-dark hover:border-mint-dark text-dark hover:text-mint-dark",
        mint: "bg-mint-light hover:bg-white border-2 border-dark hover:border-mint-dark text-dark hover:text-mint-dark",
        pink: "bg-pink-light hover:bg-white border-2 border-dark hover:border-pink-dark text-dark hover:text-pink-dark",
        gray: "bg-gray-light hover:bg-white border-2 border-dark hover:border-gray-dark text-dark hover:text-gray-dark",
        red: "bg-red-light hover:bg-white border-2 border-dark hover:border-red-dark text-dark hover:text-red-dark",
      },
      size: {
        default: "py-3 px-8",
        sm: "py-2 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, // Changed from ButtonHTMLAttributes
    VariantProps<typeof linkButtonVariants> {
  href: string; // Made href required
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>( // Changed ref type
  ({ className, variant, size, href, ...props }, ref) => {
    return (
      <Link
        className={cn(linkButtonVariants({ variant, size, className }))}
        href={href}
        ref={ref}
        {...props}
      />
    );
  }
);

LinkButton.displayName = "LinkButton"; // Fixed display name

export { LinkButton, linkButtonVariants };
