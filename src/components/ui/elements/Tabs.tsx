"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  value,
  onChange,
  className = "",
  tabClassName = "",
  activeTabClassName = "text-primary border-b-2 border-primary",
  inactiveTabClassName = "text-text-muted border-b-2 border-border hover:text-text-hover",
}) => {
  return (
    <div className={cn("flex w-full", className)}>
      {items.map((item) => (
        <button
          key={item.id}
          className={cn(
            "flex-1 py-3 font-medium text-center transition-all duration-300",
            tabClassName,
            value === item.id ? activeTabClassName : inactiveTabClassName
          )}
          onClick={() => onChange(item.id)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
