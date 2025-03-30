import React from "react";
import { cn } from "@/lib/utils";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="mb-6">
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
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
