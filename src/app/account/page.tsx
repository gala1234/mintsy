"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/elements/buttons/Button";
import ArtworkCard from "@/components/ui/cards/ArtworkCard";
import PulsingAvatar from "@/components/ui/elements/PulsingAvatar";
import { Badge } from "@/components/ui/elements/Badge";
import SubscriptionModal from "@/components/ui/modals/SubscriptionModal";

// Sample data for demonstration
const sampleArtworks = [
  {
    id: 1,
    title: "Dreamy Mountain Sunset",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
  },
  {
    id: 2,
    title: "Neon City Nights",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg", // Using the same placeholder for now
  },
  {
    id: 3,
    title: "Cosmic Whale",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg", // Using the same placeholder for now
  },
];

// Sample recent activity data
const recentActivity = [
  {
    id: 1,
    type: "Canvas Print",
    date: "Ordered 3 days ago",
    status: "Processing",
  },
  {
    id: 2,
    type: "NFT Minted",
    date: "Mar 12",
    status: "Completed",
  },
  {
    id: 3,
    type: "HD Download",
    date: "Feb 26",
    status: "Completed",
  },
];

// Sample orders data
const recentOrders = [
  {
    id: "MTSY-10425",
    artworkTitle: "Dreamy Mountain Sunset",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
    orderDate: "Mar 26",
    status: "In Production",
    format: "Canvas 50x70cm",
  },
  {
    id: "MTSY-10388",
    artworkTitle: "Neon City Nights",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
    orderDate: "Mar 18",
    status: "Shipped",
    format: "Canvas 30x40cm",
  },
  {
    id: "MTSY-10299",
    artworkTitle: "Cosmic Whale",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
    orderDate: "Feb 24",
    status: "Delivered",
    format: "Canvas 20x30cm",
  },
];

export default function AccountPage() {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  
  // For demo purposes, we'll set the user as a free user
  const isPro = true;
  const username = "Sarah";
  const remainingGenerations = 2;
  const remainingNFTMints = isPro ? 7 : 0;
  const renewalDate = "April 15, 2025";
  const userEmail = "sarah@example.com";

  return (
    <PageContainer>
      <div className="max-w-5xl mx-auto">
        {/* 1. Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <PulsingAvatar 
              name={username} 
              variant="lavander" 
              size="lg"
              className="mr-4"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-medium text-[#43405D]">
                Hi {username}, welcome back ✨
              </h1>
              <Badge variant={isPro ? "mint" : "lavander"}>
                {isPro ? "Pro Member" : "Free User"}
              </Badge>
            </div>
          </div>

          {!isPro && (
            <Button
              variant="primary"
              size="sm"
              className="account-upgrade-button"
            >
              Upgrade to Pro
            </Button>
          )}
        </div>

        {/* 2. Plan Overview Box */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 account-section">
          {isPro ? (
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-mint-light flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-mint-dark"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-[#43405D]">
                    Pro Plan – Active
                  </h2>
                  <p className="text-gray-500">
                    Unlimited generations + premium features
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-[#43405D]">
                    <span className="font-medium">10 NFT mints/month</span> –{" "}
                    {remainingNFTMints} remaining
                  </p>
                  <p className="text-[#43405D]">Next renewal: {renewalDate}</p>
                </div>

                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => setIsSubscriptionModalOpen(true)}
                >
                  Manage Subscription
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-lavander-light flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-lavander-dark"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-[#43405D]">
                    Free Plan
                  </h2>
                  <p className="text-gray-500">
                    Limited access to Mintsy features
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-[#43405D] mb-1">
                    You have{" "}
                    <span className="font-medium">
                      {remainingGenerations} free generations
                    </span>{" "}
                    left this month
                  </p>
                  <p className="text-[#43405D]">
                    Upgrade for unlimited generations + 10 NFT mints/month
                  </p>
                </div>

                <Button
                  variant="gradient"
                  size="sm"
                  className="account-upgrade-button"
                >
                  Upgrade to Pro – €9.99/month
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* 3. Saved Artworks Preview */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-[#43405D]">
              Your Saved Artworks
            </h2>
            <Button variant="secondary" size="sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                imageUrl={artwork.imageUrl}
                title={artwork.title}
                showWatermark={!isPro}
              />
            ))}
          </div>
        </div>

        {/* 4. Orders Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 account-section">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-[#43405D]">
              🧾 Orders
            </h2>
            <Link 
              href="/orders" 
              className="inline-flex items-center px-4 py-2 rounded-full text-white bg-[#9D7ECF] hover:bg-[#8347d1] text-sm font-medium transition-colors"
            >
              View All Orders
            </Link>
          </div>

          {recentOrders.length > 0 ? (
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="order-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-100 last:border-0 hover:bg-lavander-light/10 rounded-lg transition-all duration-250 relative"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0 border border-gray-100">
                      <img
                        src={order.imageUrl}
                        alt={order.artworkTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[#43405D]">
                        Order #{order.id}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <p className="text-sm text-gray-500">Ordered {order.orderDate}</p>
                        <span className="text-sm text-gray-400">•</span>
                        <p className="text-sm text-gray-500">{order.format}</p>
                      </div>
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
                    <Link
                      href={`/orders/${order.id}`}
                      className="inline-flex items-center text-sm font-medium text-[#9D7ECF] hover:text-[#8347d1] transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-lavander-light rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lavander-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-gray-500">No orders to display yet.</p>
              <Link href="/create-ai-art" className="mt-4 inline-block text-sm text-[#9D7ECF] hover:text-[#8347d1]">
                Create your first artwork →
              </Link>
            </div>
          )}
        </div>

        {/* 5. Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 account-section">
          <h2 className="text-xl font-medium text-[#43405D] mb-4">
            Recent Activity
          </h2>

          {recentActivity.length > 0 ? (
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="activity-item flex items-center justify-between py-2 border-b border-gray-100 last:border-0 hover:bg-lavander-light/10 rounded-lg transition-all duration-250 relative"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-transform duration-300 ${
                        activity.type.includes("NFT")
                          ? "bg-mint-light text-mint-dark"
                          : activity.type.includes("Canvas")
                          ? "bg-pink-light text-pink-dark"
                          : "bg-lavander-light text-lavander-dark"
                      }`}
                    >
                      {activity.type.includes("NFT") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      )}
                      {activity.type.includes("Canvas") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {activity.type.includes("HD") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-[#43405D]">
                        {activity.type}
                      </p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                  <Badge
                    variant={activity.status === "Completed" ? "mint" : "lavander"}
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recent activity to display.</p>
          )}
        </div>

        {/* 6. Account Details */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 account-section">
          <h2 className="text-xl font-medium text-[#43405D] mb-4">
            Account Details
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="text-[#43405D]">{userEmail}</p>
            </div>

            <div className="pt-2">
              <Button variant="secondary" size="sm" className="mr-4">
                Change Password
              </Button>

              <Button
                variant="secondary"
                size="sm"
                className="text-pink-dark border-pink-dark hover:bg-pink-light/20"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>

        {/* 7. Footer */}
        <div className="text-center text-gray-500 text-sm">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="/ai-art-faqs" className="text-pink-dark hover:underline">
              FAQ
            </a>
            <a href="/refund-policy" className="text-pink-dark hover:underline">
              Refund Policy
            </a>
            <a href="/help-support" className="text-pink-dark hover:underline">
              Contact
            </a>
          </div>
          <p>Last updated: March 2025</p>
        </div>

        {/* Subscription Modal */}
        <SubscriptionModal
          isOpen={isSubscriptionModalOpen}
          onClose={() => setIsSubscriptionModalOpen(false)}
          plan={{
            name: "Pro Plan",
            status: "active",
            price: "€9.99",
            cycle: "monthly",
            renewal: renewalDate,
            nftMints: {
              total: 10,
              remaining: remainingNFTMints,
            },
          }}
        />
      </div>
    </PageContainer>
  );
}
