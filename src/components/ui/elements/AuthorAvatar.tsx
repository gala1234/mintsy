import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const authorAvatarVariants = cva(
  "rounded-full flex items-center justify-center font-medium",
  {
    variants: {
      size: {
        sm: "w-6 h-6 text-xs",
        md: "w-8 h-8 text-sm",
        lg: "w-10 h-10 text-base",
      },
      variant: {
        mint: "bg-mint/30 text-mint-dark",
        lavander: "bg-lavander/30 text-lavander-dark",
        pink: "bg-pink/30 text-pink-dark",
        primary: "bg-primary/30 text-primary-dark",
        secondary: "bg-dark/20 text-dark",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "mint",
    },
  }
);

export interface AuthorAvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof authorAvatarVariants> {
  name: string;
}

const AuthorAvatar = React.forwardRef<HTMLDivElement, AuthorAvatarProps>(
  ({ className, size, variant, name, ...props }, ref) => {
    const initial = name.charAt(0).toUpperCase();

    return (
      <div
        className={cn(authorAvatarVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      >
        {initial}
      </div>
    );
  }
);

AuthorAvatar.displayName = "AuthorAvatar";

export { AuthorAvatar, authorAvatarVariants };
