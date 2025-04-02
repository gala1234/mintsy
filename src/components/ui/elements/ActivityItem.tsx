"use client";

import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export interface ActivityItemProps {
  type: string;
  date: string;
  status: string;
  icon: React.ReactNode;
  iconBackgroundClass?: string;
}

const ActivityItem = ({
  type,
  date,
  status,
  icon,
  iconBackgroundClass = "bg-lavander-light text-lavander-dark",
}: ActivityItemProps) => {
  // Determine badge variant based on status
  const getBadgeVariant = () => {
    if (status === "Completed") return "mint";
    return "lavander";
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 hover:bg-lavander-light/10 rounded-lg transition-all duration-250 relative">
      <div className="flex items-center">
        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-transform duration-300", iconBackgroundClass)}>
          {icon}
        </div>
        <div>
          <p className="font-medium text-[#43405D]">{type}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <Badge variant={getBadgeVariant()}>
        {status}
      </Badge>
    </div>
  );
};

export default ActivityItem; 