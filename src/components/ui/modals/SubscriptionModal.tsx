"use client";

import React from "react";
import { Button } from "@/components/ui/elements/buttons/Button";
import { Badge } from "@/components/ui/elements/Badge";
import ModalLayout from "./ModalLayout";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: {
    name: string;
    status: "active" | "expired" | "pending";
    price: string;
    cycle: "monthly" | "yearly";
    renewal: string;
    nftMints: {
      total: number;
      remaining: number;
    };
  };
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  plan = {
    name: "Pro Plan",
    status: "active",
    price: "€9.99",
    cycle: "monthly",
    renewal: "April 25, 2025",
    nftMints: {
      total: 10,
      remaining: 7,
    },
  },
}) => {
  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-lg"
      backdropClassName="px-2 sm:px-4"
    >
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <h1 className="text-3xl font-medium text-[#43405D] text-center">
          Manage Subscription
        </h1>
        
        {/* Current Plan */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-medium text-[#43405D]">
                You&apos;re on the {plan.name}
              </h2>
              <div className="mt-1">
                <Badge variant="mint" className="flex items-center space-x-1">
                  <span>✅</span>
                  <span>Active</span>
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <p className="text-[#43405D]">
              <span className="font-medium">{plan.nftMints.total} NFT mints per month</span> – {plan.nftMints.remaining} left
            </p>
            <p className="text-[#43405D]">
              Next payment on {plan.renewal}
            </p>
            <p className="text-[#43405D]">
              Billing: {plan.price}/{plan.cycle === "monthly" ? "month" : "year"}
            </p>
          </div>
        </div>
        
        {/* Switch to Yearly */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-[#43405D]">
                  Switch to Yearly
                </h3>
                <p className="text-gray-500">Save 34% with a yearly plan</p>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              className="bg-[#9D7ECF] hover:bg-[#8347d1]"
            >
              Switch to Yearly – €79/year
            </Button>
          </div>
        </div>
        
        {/* Cancel Subscription */}
        <Button 
          variant="secondary" 
          className="border-[#F36F5A] text-[#F36F5A] hover:bg-[#F36F5A]/10 hover:text-[#F36F5A] hover:border-[#F36F5A]"
        >
          Cancel Subscription
        </Button>
        
        {/* Credit Card Section */}
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-xl font-medium text-[#43405D] mb-4">
            Credit card
          </h3>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]/50 focus:border-[#9D7ECF]"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]/50 focus:border-[#9D7ECF]"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]/50 focus:border-[#9D7ECF]"
              />
            </div>
            
            <Button 
              variant="primary" 
              className="w-full bg-[#9D7ECF] hover:bg-[#8347d1]"
            >
              Update Card
            </Button>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
};

export default SubscriptionModal; 