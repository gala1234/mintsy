import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkButtonVariants = cva(
  "inline-block font-medium rounded-lg transition-colors duration-300 ",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkButtonVariants> {
  asChild?: boolean;
}

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ className, variant, size, ...props }) => {
    return (
      <Link
        className={cn(linkButtonVariants({ variant, size, className }))}
        href="#get-started"
        {...props}
      />
    );
  }
);

LinkButton.displayName = "Button";

export { LinkButton, linkButtonVariants };
