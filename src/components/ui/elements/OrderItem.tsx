"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";

export interface OrderItemProps {
  id: string;
  imageUrl: string;
  artworkTitle: string;
  orderDate: string;
  status: "In Production" | "Processing" | "Shipped" | "Delivered";
  format: string;
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  imageUrl,
  artworkTitle,
  orderDate,
  status,
  format,
}) => {
  // Determine badge variant based on status
  const getBadgeVariant = () => {
    switch (status) {
      case "Delivered":
      case "Shipped":
        return "mint";
      case "In Production":
        return "lavander";
      default:
        return "pink";
    }
  };

  return (
    <div className="order-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-lavander-light/10 rounded-lg transition-all duration-250 relative">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0 border border-gray-100">
          <Image
            src={imageUrl}
            alt={artworkTitle}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-[#43405D]">
            Order #{id}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <p className="text-sm text-gray-500">Ordered {orderDate}</p>
            <span className="text-sm text-gray-400">•</span>
            <p className="text-sm text-gray-500">{format}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-3 sm:mt-0">
        <Badge variant={getBadgeVariant()} className="mr-4">
          {status}
        </Badge>
        <Link
          href={`/orders/${id}`}
          className="inline-flex items-center text-sm font-medium text-[#9D7ECF] hover:text-[#8347d1] transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default OrderItem; 