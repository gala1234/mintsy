"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/elements/buttons/Button";
import { Badge } from "@/components/ui/elements/Badge";
import Image from "next/image";

// Sample orders data for demonstration
const sampleOrders = [
  {
    id: "MTSY-10425",
    artworkTitle: "Dreamy Mountain Sunset",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
    orderDate: "Mar 26, 2025",
    status: "In Production",
    format: "Canvas 50×70cm",
  },
  {
    id: "MTSY-10388",
    artworkTitle: "Neon City Nights",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg", 
    orderDate: "Mar 18, 2025",
    status: "Shipped",
    format: "Canvas 30×40cm",
    trackingId: "TNT-43289751",
  },
  {
    id: "MTSY-10299",
    artworkTitle: "Cosmic Whale",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
    orderDate: "Feb 24, 2025",
    status: "Delivered",
    format: "Canvas 20×30cm",
    deliveryDate: "Mar 05, 2025",
  },
  {
    id: "MTSY-10145",
    artworkTitle: "Abstract Dreams",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
    orderDate: "Jan 12, 2025",
    status: "Cancelled",
    format: "Canvas 50×70cm",
    cancellationReason: "Customer requested cancellation",
  },
];

export default function OrdersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [sortOrder, setSortOrder] = useState("newest");

  // Filter and sort orders
  const filteredOrders = sampleOrders
    .filter(order => {
      // Apply search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          order.id.toLowerCase().includes(searchLower) ||
          order.orderDate.toLowerCase().includes(searchLower) ||
          order.artworkTitle.toLowerCase().includes(searchLower)
        );
      }
      
      // Apply status filter
      if (statusFilter !== "All Statuses") {
        return order.status === statusFilter;
      }
      
      return true;
    })
    .sort((a, b) => {
      // Extract dates and convert to timestamp for sorting
      const dateA = new Date(a.orderDate).getTime();
      const dateB = new Date(b.orderDate).getTime();
      
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <PageContainer>
      <div className="max-w-5xl mx-auto">
        {/* 1. Page Header */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-medium text-[#43405D] mb-2 flex items-center justify-center md:justify-start">
            <span className="mr-2">🧾</span>Your Orders
          </h1>
          <p className="text-gray-500">All your canvas print orders in one place</p>
        </div>

        {/* 2. Filters and Sort */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search input */}
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search by order ID or date"
                className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]/50 focus:border-[#9D7ECF]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Status filter */}
            <div className="w-full md:w-48">
              <select
                className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]/50 focus:border-[#9D7ECF] appearance-none bg-no-repeat bg-right pr-8"
                style={{ 
                  backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 7.5L10 12.5L15 7.5\" stroke=\"%239D7ECF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>')",
                  backgroundPosition: "right 10px center"
                }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Statuses</option>
                <option>In Production</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            
            {/* Sort toggle */}
            <div className="w-full md:w-48">
              <button
                className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none hover:bg-gray-50 transition-colors flex items-center justify-between"
                onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
              >
                <span>{sortOrder === "newest" ? "Newest First" : "Oldest First"}</span>
                <span>{sortOrder === "newest" ? "⬇️" : "⬆️"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Order List */}
        {filteredOrders.length > 0 ? (
          <div className="space-y-4 mb-8">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex">
                    <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0 border border-gray-100 relative">
                      <Image
                        src={order.imageUrl}
                        alt={order.artworkTitle}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[#43405D]">
                        Order #{order.id}
                      </p>
                      <p className="text-sm text-gray-500 mb-1">
                        Ordered {order.orderDate}
                      </p>
                      <p className="text-sm text-gray-500">{order.format}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-3 sm:mt-0">
                    <Badge 
                      variant={
                        order.status === "Delivered" || order.status === "Shipped"
                          ? "mint"
                          : order.status === "In Production"
                          ? "lavander"
                          : "pink"
                      }
                      className="mr-4"
                    >
                      {order.status}
                    </Badge>
                    <Link href={`/orders/${order.id}`}>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="text-lavander-dark border-lavander-dark hover:bg-lavander-light/20"
                      >
                        View Details →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 4. Empty State */
          <div className="bg-white rounded-xl shadow-sm p-8 text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-lavander-light/50 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#43405D] mb-2">
              You haven&apos;t printed any artworks yet
            </h3>
            <p className="text-gray-500 mb-6">
              Turn your AI-generated masterpieces into beautiful canvas prints
            </p>
            <Button 
              variant="primary" 
              className="bg-[#9D7ECF] hover:bg-[#8347d1]"
              onClick={() => router.push('/create-ai-art')}
            >
              Create and Order Your First Print
            </Button>
          </div>
        )}

        {/* 5. Footer */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-gray-200 pt-6 pb-10 text-sm text-[#9D7ECF]">
          <Link href="/account" className="hover:underline">
            My Account
          </Link>
          <Link href="/help-center" className="hover:underline">
            Help Center
          </Link>
          <Link href="/refund-policy" className="hover:underline">
            Refund Policy
          </Link>
          <Link href="/create-ai-art" className="hover:underline">
            Create Art
          </Link>
        </div>
      </div>
    </PageContainer>
  );
} 