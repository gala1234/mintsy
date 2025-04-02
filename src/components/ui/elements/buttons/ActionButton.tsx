import React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const actionButtonVariants = cva(
  "flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        pink: "bg-pink-light text-pink-dark hover:bg-pink-dark hover:text-white",
        lavander:
          "bg-lavander-light text-lavander-dark hover:bg-lavander-dark hover:text-white",
        mint: "bg-mint-light text-mint-dark hover:bg-mint-dark hover:text-white",
        primary: "bg-primary/10 text-primary hover:bg-primary hover:text-white",
        secondary: "bg-dark/10 text-dark hover:bg-dark hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionButtonVariants> {
  icon?: React.ReactNode | string;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(actionButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {icon && typeof icon === "string" ? (
          <div className="w-4 h-4 relative">
            <Image
              src={icon}
              fill
              alt=""
              className="object-contain [mask-image:var(--icon-mask)] [mask-size:contain]"
            />
          </div>
        ) : (
          icon
        )}
        {children}
      </button>
    );
  }
);

ActionButton.displayName = "ActionButton";

export { ActionButton, actionButtonVariants };
