"use client";

import { useState } from "react";
import { Button } from "@/components/ui/elements/buttons/Button";
import CheckoutPage from "@/components/pages/CheckoutPage";
import Image from "next/image";

export default function CheckoutExample() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>({
    type: "nft",
    id: "001",
    title: "Cosmic Dreams",
    image: "/examples/artwork-1.jpg",
    price: 4.99,
    currency: "EUR",
  });

  const products: ProductType[] = [
    {
      type: "nft",
      id: "001",
      title: "Cosmic Dreams",
      image: "/examples/artwork-1.jpg",
      price: 4.99,
      currency: "EUR",
    },
    {
      type: "download",
      id: "002",
      title: "Ocean Serenity",
      image: "/examples/artwork-1.jpg",
      price: 9.99,
      currency: "EUR",
    },
    {
      type: "canvas",
      id: "003",
      title: "Mountain Whispers",
      image: "/examples/artwork-1.jpg",
      price: 29.99,
      currency: "EUR",
    },
  ];

  const handleProductSelect = (product: ProductType) => {
    setSelectedProduct(product);
    setShowCheckout(true);
  };

  const handleBackToProducts = () => {
    setShowCheckout(false);
  };

  return (
    <>
      {!showCheckout ? (
        <section className="relative py-24 overflow-hidden bg-[#FDFBF7]">
          <div className="container mx-auto px-6 md:px-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif-accent">
              Checkout Example
            </h1>

            <p className="text-lg mb-8">
              Select a product below to see the checkout process:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="relative h-60 w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-3">
                      {product.type === "nft"
                        ? "NFT"
                        : product.type === "download"
                        ? "HD Download"
                        : "Canvas Print"}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-lg font-semibold mb-4">
                      {product.currency === "EUR" ? "€" : "$"}
                      {product.price.toFixed(2)}
                    </p>
                    <Button
                      onClick={() => handleProductSelect(product)}
                      className="w-full"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div>
          <section className="relative py-6 bg-[#FDFBF7]">
            <div className="container mx-auto px-6 md:px-10">
              <button
                onClick={handleBackToProducts}
                className="mb-4 flex items-center text-blue-600 hover:underline"
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
                <span className="ml-2">Back to products</span>
              </button>
            </div>
          </section>

          <CheckoutPage
            productType={selectedProduct.type}
            artworkId={selectedProduct.id}
            artworkTitle={selectedProduct.title}
            artworkImage={selectedProduct.image}
            price={selectedProduct.price}
            currency={selectedProduct.currency}
          />
        </div>
      )}
    </>
  );
}

type ProductType = {
  type: "nft" | "download" | "canvas";
  id: string;
  title: string;
  image: string;
  price: number;
  currency: string;
};
