import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-medium rounded-lg transition-all duration-300 relative",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-hover text-white",
        secondary:
          "bg-mint-light/15 hover:bg-white border-2 border-dark hover:border-mint-dark text-dark hover:text-mint-dark",
        dark: "bg-dark hover:bg-primary text-white",
        gradient:
          "bg-gradient-to-r from-primary via-[#e4d7f5] to-[#9471EC] hover:from-[#9471EC] hover:via-primary hover:to-[#e4d7f5] text-white shadow-md hover:shadow-[0_0_15px_rgba(122,111,240,0.5)] relative overflow-hidden animate-shimmer",
        signup:
          "bg-gradient-to-r from-[#B7D7C2] via-[#9D7ECF] to-[#F36F5A] text-white hover:brightness-105 shadow-md hover:shadow-[0_0_15px_rgba(157,126,207,0.5)] relative overflow-hidden",
      },
      size: {
        default: "py-3 px-8",
        sm: "py-2 px-4",
        lg: "py-4 px-8",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth, isLoading, children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="relative w-5 h-5 mr-2">
              <div className="absolute top-0 left-0 w-full h-full border-2 border-white/25 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            {children}
          </div>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
