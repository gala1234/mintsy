import React from "react";

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, id, checked, onChange, ...props }, ref) => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {label && (
            <label htmlFor={id} className="text-sm font-medium text-text">
              {label}
            </label>
          )}
          <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer">
            <input
              id={id}
              type="checkbox"
              className="absolute w-6 h-6 opacity-0 cursor-pointer z-10"
              checked={checked}
              onChange={onChange}
              ref={ref}
              {...props}
            />
            <div
              className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                checked ? "bg-mint" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                checked ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
