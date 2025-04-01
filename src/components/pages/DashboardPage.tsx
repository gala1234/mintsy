"use client";

import React, { useState, useEffect } from "react";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/elements/Button";
import { LinkButton } from "@/components/ui/elements/LinkButton";
import ArtworkCard from "@/components/ui/cards/ArtworkCard";
import SearchBar from "@/components/ui/elements/SearchBar";
import Link from "next/link";

// Types for our dashboard data
interface Artwork {
  id: number | string;
  title: string;
  imageUrl: string;
  family?: string;
  isPublic?: boolean;
  createdAt?: string;
}

interface Family {
  id: number | string;
  name: string;
  icon: string;
  artworks: Artwork[];
}

// Sample data for demonstration
const sampleFamilies: Family[] = [
  {
    id: 1,
    name: "Landscapes",
    icon: "🏞️",
    artworks: [
      {
        id: 1,
        title: "Dreamy Mountain Sunset",
        imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
        isPublic: true,
        createdAt: "2023-09-15",
      },
      {
        id: 2,
        title: "Ethereal Forest",
        imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
        isPublic: false,
        createdAt: "2023-09-10",
      },
    ],
  },
  {
    id: 2,
    name: "Portraits",
    icon: "👤",
    artworks: [
      {
        id: 3,
        title: "Digital Avatar",
        imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
        isPublic: true,
        createdAt: "2023-09-05",
      },
    ],
  },
  {
    id: 3,
    name: "Abstract",
    icon: "🎨",
    artworks: [
      {
        id: 4,
        title: "Cosmic Patterns",
        imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
        isPublic: false,
        createdAt: "2023-08-28",
      },
      {
        id: 5,
        title: "Neon Dreams",
        imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
        isPublic: true,
        createdAt: "2023-08-20",
      },
      {
        id: 6,
        title: "Geometric Harmony",
        imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
        isPublic: true,
        createdAt: "2023-08-15",
      },
    ],
  },
];

// Get all artworks from families
const getAllArtworks = (families: Family[]): Artwork[] => {
  return families.flatMap((family) =>
    family.artworks.map((artwork) => ({
      ...artwork,
      family: family.name,
    }))
  );
};

const DashboardPage: React.FC = () => {
  // State for dashboard data and UI
  const [activeTab, setActiveTab] = useState<"families" | "all">("families");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState<
    "all" | "public" | "private"
  >("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [families, setFamilies] = useState<Family[]>(sampleFamilies);
  const [expandedFamilies, setExpandedFamilies] = useState<
    Record<string | number, boolean>
  >({});
  const [showNewFamilyModal, setShowNewFamilyModal] = useState(false);
  const [newFamilyName, setNewFamilyName] = useState("");
  const [newFamilyIcon, setNewFamilyIcon] = useState("🎨");

  // Initialize expanded families
  useEffect(() => {
    const initialExpandedState: Record<string | number, boolean> = {};
    families.forEach((family) => {
      initialExpandedState[family.id] = true;
    });
    setExpandedFamilies(initialExpandedState);
  }, [families]);

  // Filter and sort functions
  const filterArtworks = (artworks: Artwork[]) => {
    return artworks.filter((artwork) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        artwork.title.toLowerCase().includes(searchQuery.toLowerCase());

      // Visibility filter
      const matchesVisibility =
        visibilityFilter === "all" ||
        (visibilityFilter === "public" && artwork.isPublic) ||
        (visibilityFilter === "private" && !artwork.isPublic);

      return matchesSearch && matchesVisibility;
    });
  };

  const sortArtworks = (artworks: Artwork[]) => {
    return [...artworks].sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;

      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  };

  // Get filtered and sorted artworks
  const getProcessedArtworks = () => {
    const allArtworks = getAllArtworks(families);
    const filtered = filterArtworks(allArtworks);
    return sortArtworks(filtered);
  };

  // Toggle family expansion
  const toggleFamilyExpansion = (familyId: string | number) => {
    setExpandedFamilies((prev) => ({
      ...prev,
      [familyId]: !prev[familyId],
    }));
  };

  // Handle creating a new family
  const handleCreateFamily = () => {
    if (newFamilyName.trim() === "") return;

    const newFamily: Family = {
      id: Date.now(),
      name: newFamilyName,
      icon: newFamilyIcon,
      artworks: [],
    };

    setFamilies((prev) => [...prev, newFamily]);
    setExpandedFamilies((prev) => ({
      ...prev,
      [newFamily.id]: true,
    }));

    // Reset and close modal
    setNewFamilyName("");
    setNewFamilyIcon("🎨");
    setShowNewFamilyModal(false);
  };

  // Render empty state
  const renderEmptyState = () => {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-32 h-32 mb-6 rounded-full bg-lavender-light flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-lavender-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-medium mb-2 text-[#43405D]">
          No artworks yet
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          Start creating your first AI artwork and it will appear here
        </p>
        <LinkButton href="/create-ai-art" variant="primary">
          Generate Your First Artwork
        </LinkButton>
      </div>
    );
  };

  // Render empty family state
  const renderEmptyFamilyState = (family: Family) => {
    console.log("Rendering empty family state for:", family); // Debugging log
    return (
      <div className="py-8 text-center bg-gray-50 rounded-lg">
        <p className="text-gray-500 mb-4">
          This family is empty. Add new artwork to get started.
        </p>
        <LinkButton href="/create-ai-art" variant="secondary" size="sm">
          Create New Artwork
        </LinkButton>
      </div>
    );
  };

  // Render artwork card with actions
  const renderArtworkCard = (artwork: Artwork) => {
    return (
      <div key={artwork.id} className="relative group">
        <ArtworkCard
          imageUrl={artwork.imageUrl}
          title={artwork.title}
          showWatermark={true}
          family={artwork.family}
          isPublic={artwork.isPublic}
        />
      </div>
    );
  };

  // Render new family modal
  const renderNewFamilyModal = () => {
    if (!showNewFamilyModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md">
          <h3 className="text-xl font-medium mb-4 text-[#43405D]">
            Create New Family
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Family Name
            </label>
            <input
              type="text"
              value={newFamilyName}
              onChange={(e) => setNewFamilyName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]"
              placeholder="Enter family name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Icon
            </label>
            <div className="flex flex-wrap gap-2">
              {["🎨", "🖼️", "🏞️", "👤", "🌌", "🌃", "🎭", "🦄"].map((icon) => (
                <button
                  key={icon}
                  onClick={() => setNewFamilyIcon(icon)}
                  className={`w-10 h-10 text-xl flex items-center justify-center rounded-lg ${
                    newFamilyIcon === icon
                      ? "bg-[#9D7ECF]/20 border-2 border-[#9D7ECF]"
                      : "bg-gray-100"
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button
              variant="secondary"
              onClick={() => setShowNewFamilyModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleCreateFamily}
              disabled={!newFamilyName.trim()}
            >
              Create Family
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageContainer className="py-12 md:py-16 bg-[#FDFBF7]">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#43405D] mb-2">
          Your Dashboard
        </h1>
        <p className="text-lg text-gray-500">
          Save, organize, and manage your AI-generated artworks
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-3 px-5 font-medium text-lg ${
            activeTab === "families"
              ? "text-[#43405D] border-b-2 border-[#9D7ECF]"
              : "text-gray-500 hover:text-[#43405D]"
          }`}
          onClick={() => setActiveTab("families")}
        >
          📂 My Families
        </button>
        <button
          className={`py-3 px-5 font-medium text-lg ${
            activeTab === "all"
              ? "text-[#43405D] border-b-2 border-[#9D7ECF]"
              : "text-gray-500 hover:text-[#43405D]"
          }`}
          onClick={() => setActiveTab("all")}
        >
          🖼️ All Artworks
        </button>
      </div>

      {/* Filter + Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-1/2">
          <SearchBar
            placeholder="Search by title, prompt or date"
            value={searchQuery}
            handleSearch={setSearchQuery}
          />
        </div>
        <div className="flex gap-3">
          <select
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]"
            value={visibilityFilter}
            onChange={(e) =>
              setVisibilityFilter(
                e.target.value as "all" | "public" | "private"
              )
            }
          >
            <option value="all">All</option>
            <option value="public">Public Only</option>
            <option value="private">Private Only</option>
          </select>

          <select
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9D7ECF]"
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "newest" | "oldest")
            }
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      {families.length === 0 ? (
        renderEmptyState()
      ) : activeTab === "families" ? (
        // Families View
        <div className="space-y-10">
          {families.map((family) => {
            const filteredArtworks = filterArtworks(family.artworks);
            const sortedArtworks = sortArtworks(filteredArtworks);

            return (
              <div
                key={family.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                {/* Family Header */}
                <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{family.icon}</span>
                    <h2 className="text-xl font-medium text-[#43405D]">
                      {family.name}
                    </h2>
                    <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {filteredArtworks.length} artwork
                      {filteredArtworks.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LinkButton
                      href="/create-ai-art"
                      variant="secondary"
                      size="sm"
                    >
                      + Add New
                    </LinkButton>
                    <button
                      onClick={() => toggleFamilyExpansion(family.id)}
                      className="p-2 text-gray-500 hover:text-[#43405D] hover:bg-gray-100 rounded-lg"
                    >
                      {expandedFamilies[family.id] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Family Artworks */}
                {expandedFamilies[family.id] && (
                  <div className="p-4">
                    {filteredArtworks.length === 0 ? (
                      renderEmptyFamilyState(family)
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedArtworks.map((artwork) =>
                          renderArtworkCard(artwork)
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Create New Family Button */}
          <div className="flex justify-center mt-8">
            <Button
              variant="secondary"
              onClick={() => setShowNewFamilyModal(true)}
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              New Family
            </Button>
          </div>
        </div>
      ) : (
        // All Artworks View
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getProcessedArtworks().map((artwork) => renderArtworkCard(artwork))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <Link
            href="/gallery"
            className="hover:text-[#43405D] hover:underline"
          >
            Public Gallery
          </Link>
          <Link
            href="/create-ai-art"
            className="hover:text-[#43405D] hover:underline"
          >
            Create Art
          </Link>
          <Link
            href="/help-support"
            className="hover:text-[#43405D] hover:underline"
          >
            Support
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-[#43405D] hover:underline"
          >
            Terms
          </Link>
        </div>
      </div>

      {/* New Family Modal */}
      {renderNewFamilyModal()}
    </PageContainer>
  );
};

export default DashboardPage;
