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
      },
      size: {
        default: "py-3 px-8",
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
