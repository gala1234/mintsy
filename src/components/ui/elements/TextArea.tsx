import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="mb-6 relative w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-text mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            id={id}
            className={cn(
              "w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors min-h-[120px]",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>

        <div className="absolute right-4 top-1/3 -translate-y-1/2">
          <Image
            src="/icons/star.png"
            alt="Inspiration"
            width={24}
            height={24}
          />
        </div>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
