"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/elements/buttons/Button";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";

// Define the print options
const PRINT_OPTIONS = [
  { id: "canvas", name: "Canvas 30×30cm", price: 30, currency: "EUR" },
  { id: "poster", name: "Poster 40×60cm", price: 35, currency: "EUR" },
  { id: "framed", name: "Framed Print 50×70cm", price: 60, currency: "EUR" },
];

// Define props for the component
interface OrderPrintPageProps {
  artworkId: string;
  artworkTitle: string;
  artworkImage: string;
  onBack?: () => void;
}

const OrderPrintPage: React.FC<OrderPrintPageProps> = ({
  artworkId,
  artworkTitle,
  artworkImage,
  onBack,
}) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(PRINT_OPTIONS[0]);
  const [quantity, setQuantity] = useState(1);

  // Calculate the total price
  const total = selectedOption.price * quantity;

  // Handle quantity change
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 5) {
      setQuantity(newQuantity);
    }
  };

  // Handle the add to cart action
  const handleAddToCart = () => {
    // In a real app this would add the item to a cart
    // For now we'll just navigate to checkout
    router.push(
      `/checkout?type=canvas&id=${artworkId}&option=${selectedOption.id}&quantity=${quantity}`
    );
  };

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 flex items-center text-blue-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="ml-2">Back to artwork</span>
          </button>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif-accent text-center">
          Order a Print
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Artwork display */}
          <div className="bg-white rounded-3xl p-4 shadow-sm mb-8 lg:mb-0 lg:sticky lg:top-24">
            <div className="relative aspect-square">
              <Image
                src={artworkImage}
                alt={artworkTitle}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>

            {/* Art title on desktop only */}
            <h2 className="hidden lg:block text-xl font-bold mt-4 text-center">
              {artworkTitle}
            </h2>

            {/* Additional info for desktop */}
            <div className="hidden lg:block mt-8 text-center text-dark/60 space-y-2">
              <p>Free shipping on orders over €50</p>
              <p>Estimated delivery: 5-7 business days</p>
            </div>
          </div>

          {/* Right Column - Print options and checkout */}
          <div>
            {/* Print options */}
            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-xl mb-4">Choose Your Format</h3>
              {PRINT_OPTIONS.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option)}
                  className={`bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center cursor-pointer transition-all ${
                    selectedOption.id === option.id
                      ? "border-2 border-mint"
                      : "border border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-lg">{option.name}</h3>
                    <p className="text-dark/70 text-sm">
                      Premium quality, ready to hang
                    </p>
                  </div>
                  <div className="text-xl font-bold">€{option.price}</div>
                </div>
              ))}
            </div>

            {/* Quantity selector */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              <h3 className="font-bold text-lg mb-4">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>

                <span className="mx-6 text-xl font-bold">{quantity}</span>

                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 5}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Price summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-dark/70">Product</span>
                <span>{selectedOption.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-dark/70">Price</span>
                <span>
                  €{selectedOption.price} × {quantity}
                </span>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-xl">€{total}</span>
              </div>
            </div>

            {/* Add to cart button */}
            <Button
              onClick={handleAddToCart}
              className="w-full p-6 text-lg bg-[#FF8C7A] hover:bg-[#FF7A66] text-white"
            >
              Add to Cart
            </Button>

            {/* Alternate option */}
            <p className="text-center text-dark/60 mt-4">
              Or{" "}
              <a href="/pricing" className="text-blue-600 hover:underline">
                unlock this artwork
              </a>{" "}
              without suscibing
            </p>

            {/* Additional info for mobile */}
            <div className="lg:hidden mt-12 text-center text-dark/60 space-y-2">
              <p>Free shipping on orders over €50</p>
              <p>Estimated delivery: 5-7 business days</p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default OrderPrintPage;
