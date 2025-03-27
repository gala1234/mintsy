import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-lavender-mist hover:bg-digital-lavender text-graphite-ink shadow-subtle",
        secondary:
          "bg-sky-whisper hover:bg-[#B8DFEF] text-graphite-ink shadow-subtle",
        accent:
          "bg-soft-coral hover:bg-[#FFA69E] text-graphite-ink shadow-subtle",
        outline:
          "border border-lavender-mist bg-transparent hover:bg-lavender-mist/10 text-graphite-ink",
        ghost: "hover:bg-lavender-mist/10 text-graphite-ink",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 py-3 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        type={props.type || "button"}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
