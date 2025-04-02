"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import OrderTracker from "@/components/ui/OrderTracker";
import InvoiceModal from "@/components/ui/modals/InvoiceModal";

// Mock order data for demonstration purposes
const mockOrder = {
  orderNumber: "MTSY-10425",
  placedDate: "March 18, 2025",
  status: "shipped" as const,
  artwork: {
    id: "art-123",
    title: "Title of artwork",
    prompt: "Prompt used",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
    tags: ["Public", "Family"],
  },
  printDetails: {
    size: "Canvas 50x70cm – Matte",
    giftWrapped: true,
    quantity: 1,
  },
  shipping: {
    name: "Gala Calero",
    address: "Calle de las Rosas 22",
    city: "Madrid",
    postalCode: "28029",
    country: "Spain",
    phone: "+34 654 321 123",
    carrier: "Correos Express",
    trackingNumber: "123456789",
  },
  payment: {
    subtotal: 45.0,
    giftWrap: 6.0,
    total: 51.0,
    method: "Visa ending in 1234",
  },
};

const OrderDetailsPage: React.FC = () => {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-semibold mb-1">
            Canvas Print Order Details
          </h1>
        </div>

        {/* Order Tracker */}
        <OrderTracker currentStatus={mockOrder.status} />

        {/* Artwork Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-48 h-48 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
              <Image
                src={mockOrder.artwork.imageUrl}
                alt={mockOrder.artwork.title}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-medium mb-2">
                {mockOrder.artwork.title}
              </h2>
              <p className="text-gray-500 mb-4">{mockOrder.artwork.prompt}</p>

              <div className="flex flex-wrap gap-2">
                {mockOrder.artwork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-lavander/20 text-lavander-dark text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Print and Shipping Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Print Details */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-medium mb-4">
              Canvas {mockOrder.printDetails.size}
            </h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Gift-wrapped:</span>
                <span>{mockOrder.printDetails.giftWrapped ? "Yes" : "No"}</span>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-medium mb-4">Payment Summary</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Canvas print</span>
                <span>€{mockOrder.payment.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Gift wrap</span>
                <span>€{mockOrder.payment.giftWrap.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between font-medium">
                <span>Total</span>
                <span>€{mockOrder.payment.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-500 mb-4">Payment method</p>
              <p>{mockOrder.payment.method}</p>
            </div>

            <button
              onClick={() => setIsInvoiceModalOpen(true)}
              className="mt-6 w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              View Invoice
            </button>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-xl font-medium mb-4">Shipping</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-1 font-medium">{mockOrder.shipping.name}</p>
              <p className="text-gray-600">{mockOrder.shipping.address}</p>
              <p className="text-gray-600">
                {mockOrder.shipping.city} {mockOrder.shipping.postalCode},{" "}
                {mockOrder.shipping.country}
              </p>
              <p className="text-gray-600">{mockOrder.shipping.phone}</p>
            </div>

            {mockOrder.status === "shipped" ||
            mockOrder.status === "delivered" ? (
              <div>
                <p className="mb-2 font-medium">Tracking Information</p>
                <p className="text-gray-600">
                  {mockOrder.shipping.carrier} — Tracking
                </p>
                <p className="text-gray-600">
                  #{mockOrder.shipping.trackingNumber}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Reorder Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-medium mb-2">Reorder another</h3>
            <p className="text-gray-600 mb-4">
              copy of this canvas or choose a different format.
            </p>
            <Link
              href={`/create?artwork=${mockOrder.artwork.id}`}
              className="w-full py-3 px-4 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors inline-block text-center"
            >
              Reorder This Artwork
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-lavander-dark"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <h3 className="text-xl font-medium">Love this artwork?</h3>
            </div>
            <p className="text-gray-600 mb-4">
              You can order another copy of this canvas or choose a different
              format.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-pink-dark"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <h3 className="text-xl font-medium">Need help with order?</h3>
          </div>
          <Link
            href="/help-support"
            className="py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center w-full sm:w-auto"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-gray-500">
            <Link
              href="/dashboard"
              className="hover:text-primary transition-colors"
            >
              Back to My Orders
            </Link>
            <span>•</span>
            <Link
              href="/refund-policy"
              className="hover:text-primary transition-colors"
            >
              Refund Policy
            </Link>
            <span>•</span>
            <Link
              href="/gallery"
              className="hover:text-primary transition-colors"
            >
              Public Gallery
            </Link>
            <span>•</span>
            <Link
              href="/create"
              className="hover:text-primary transition-colors"
            >
              Create More Art
            </Link>
          </div>
        </div>
      </div>

      {/* Invoice Modal */}
      <InvoiceModal
        isOpen={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
        orderNumber={mockOrder.orderNumber}
        orderDate={mockOrder.placedDate}
        items={[
          {
            name: mockOrder.printDetails.size,
            price: mockOrder.payment.subtotal,
            quantity: 1,
          },
          { name: "Gift Wrap", price: mockOrder.payment.giftWrap, quantity: 1 },
        ]}
        customer={{
          name: mockOrder.shipping.name,
          address: mockOrder.shipping.address,
          city: mockOrder.shipping.city,
          postalCode: mockOrder.shipping.postalCode,
          country: mockOrder.shipping.country,
        }}
        total={mockOrder.payment.total}
      />
    </section>
  );
};

export default OrderDetailsPage;
