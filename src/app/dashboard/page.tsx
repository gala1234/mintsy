import React from "react";
import ArtworkCard from "@/components/ui/cards/ArtworkCard";

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
  {
    id: 4,
    title: "Ethereal Forest",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg", // Using the same placeholder for now
  },
  {
    id: 5,
    title: "Abstract Dream",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg", // Using the same placeholder for now
  },
  {
    id: 6,
    title: "Digital Landscape",
    imageUrl: "/images/sample-artworks/dreamy-mountain.svg", // Using the same placeholder for now
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] px-4 sm:px-6 md:px-8 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-2">
          Your Artworks
        </h1>
        <p className="text-gray-500 mb-10">Create, customize, and share your AI masterpieces</p>
        
        {/* Empty state (uncomment to use)
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-32 h-32 mb-6 rounded-full bg-lavander-light flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-lavander-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium mb-2">No artworks yet</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            Start creating your first AI artwork and it will appear here
          </p>
          <button className="py-3 px-6 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors">
            Create New Artwork
          </button>
        </div>
        */}
        
        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sampleArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              imageUrl={artwork.imageUrl}
              title={artwork.title}
              showWatermark={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 