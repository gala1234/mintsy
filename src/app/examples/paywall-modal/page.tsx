"use client";

import { useState } from "react";
import PaywallModal from "@/components/ui/modals/PaywallModal";
import { Button } from "@/components/ui/elements/Button";
import Image from "next/image";

export default function PaywallModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState({
    title: "Cosmic Dreams",
    image: "/examples/artwork-1.jpg",
  });

  const openModal = (title: string, image: string) => {
    setSelectedArtwork({ title, image });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const artworks = [
    { id: 1, title: "Cosmic Dreams", image: "/examples/artwork-1.jpg" },
    { id: 2, title: "Ocean Serenity", image: "/examples/artwork-1.jpg" },
    { id: 3, title: "Mountain Whispers", image: "/examples/artwork-1.jpg" },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-serif-accent">
        Paywall Modal Example
      </h1>

      <p className="text-lg mb-8">
        Click on any artwork to see the paywall modal with subscription and
        microtransaction options.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="relative h-60 w-full">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">{artwork.title}</h3>
              <Button
                onClick={() => openModal(artwork.title, artwork.image)}
                className="w-full"
              >
                Unlock Artwork
              </Button>
            </div>
          </div>
        ))}
      </div>

      <PaywallModal
        isOpen={isModalOpen}
        onClose={closeModal}
        artworkTitle={selectedArtwork.title}
        artworkImage={selectedArtwork.image}
      />
    </div>
  );
}
