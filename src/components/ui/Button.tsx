import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-medium rounded-lg transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary-hover text-white",
        secondary:
          "bg-pink-light hover:bg-white border-2 border-dark hover:border-mint-dark text-dark hover:text-mint-dark",
        dark: "bg-dark hover:bg-primary text-white",
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
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
