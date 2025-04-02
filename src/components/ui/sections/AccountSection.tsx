"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AccountSectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  rightElement?: React.ReactNode;
}

const AccountSection = ({
  children,
  title,
  className,
  rightElement,
}: AccountSectionProps) => {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm p-6 mb-8 account-section", className)}>
      {(title || rightElement) && (
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h2 className="text-xl font-medium text-[#43405D]">
              {title}
            </h2>
          )}
          {rightElement && rightElement}
        </div>
      )}
      {children}
    </div>
  );
};

export default AccountSection; 