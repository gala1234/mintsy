"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/elements/Button";
import { LinkButton } from "@/components/ui/elements/LinkButton";
// import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import ArtworkDetailModal from "@/components/ui/modals/ArtworkDetailModal";
import SearchBar from "@/components/ui/elements/SearchBar";

//TODO: ✅ Optional Enhancements (Post-MVP):
// “Featured Today” section — Mintsy-picked art
// “Family Spotlight” carousel
// “Remix This Prompt” button
// Bookmark favorite public art
// Share entire families via link
// Commenting or remixing flow

// Types for our gallery data
interface Artwork {
  id: string;
  title: string;
  prompt: string;
  imageUrl: string;
  author: string;
  family: string;
  likes: number;
  createdAt: string;
}

const GalleryPage: React.FC = () => {
  // State for gallery data and UI
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  //   const { openModal } = useModal(); s

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call to fetch artworks
    setTimeout(() => {
      const mockArtworks: Artwork[] = [
        {
          id: "1",
          title: "Dreamy Mountain Landscape",
          prompt:
            "A serene mountain landscape with a misty lake at dawn, painted in watercolor style",
          imageUrl: "/images/sample-artworks/dreamy-mountain.svg",
          author: "ArtLover123",
          family: "Landscapes",
          likes: 42,
          createdAt: "2023-09-15",
        },
        // More mock data would be added here in a real implementation
      ];

      setArtworks(mockArtworks);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter and sort functions
  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch =
      searchQuery === "" ||
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFamily =
      selectedFamily === "all" || artwork.family === selectedFamily;
    const matchesAuthor =
      selectedAuthor === "all" || artwork.author === selectedAuthor;

    return matchesSearch && matchesFamily && matchesAuthor;
  });

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === "mostLoved") {
      return b.likes - a.likes;
    }
    return 0;
  });

  // Get unique families and authors for filters
  const families = ["all", ...new Set(artworks.map((a) => a.family))];
  const authors = ["all", ...new Set(artworks.map((a) => a.author))];

  // Handle artwork interactions
  const handleViewArtwork = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseArtworkModal = () => {
    setSelectedArtwork(null);
  };

  const handleLikeArtwork = () => {
    if (selectedArtwork) {
      // In a real app, this would call an API to update likes
      const updatedArtworks = artworks.map((art) =>
        art.id === selectedArtwork.id ? { ...art, likes: art.likes + 1 } : art
      );
      setArtworks(updatedArtworks);
      setSelectedArtwork((prev) =>
        prev ? { ...prev, likes: prev.likes + 1 } : null
      );
    }
  };

  const handleCreateOwn = () => {
    // In a real app, this would navigate to create page with the prompt pre-filled
    if (selectedArtwork) {
      window.location.href = `/create-ai-art?prompt=${encodeURIComponent(
        selectedArtwork.prompt
      )}`;
    }
  };

  return (
    <PageContainer className="py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 font-serif-accent">
          The Mintsy Gallery
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Explore what others have imagined — from poems and dreams to digital
          memories.
        </p>
      </div>

      {/* Filters Bar (Sticky on Scroll) */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm py-4 px-6 rounded-xl shadow-subtle mb-8">
        <div className="flex flex-col gap-4 items-center justify-between">
          <SearchBar
            placeholder="Search by prompt, title, or author"
            value={searchQuery}
            handleSearch={setSearchQuery}
            isSmall
          />

          <div className="flex flex-wrap gap-2 items-center">
            <select
              className="px-3 py-2 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={selectedFamily}
              onChange={(e) => setSelectedFamily(e.target.value)}
            >
              <option value="all">All Families</option>
              {families
                .filter((f) => f !== "all")
                .map((family) => (
                  <option key={family} value={family}>
                    {family}
                  </option>
                ))}
            </select>

            <select
              className="px-3 py-2 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="all">All Authors</option>
              {authors
                .filter((a) => a !== "all")
                .map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
            </select>

            <select
              className="px-3 py-2 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="mostLoved">Most Loved</option>
            </select>

            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid"
                    ? "bg-primary text-white"
                    : "bg-dark/5 text-dark"
                }`}
                aria-label="Grid view"
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
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list"
                    ? "bg-primary text-white"
                    : "bg-dark/5 text-dark"
                }`}
                aria-label="List view"
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
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : sortedArtworks.length > 0 ? (
        <div
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } gap-6 mb-12`}
        >
          {sortedArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
                viewMode === "grid" ? "" : "flex"
              }`}
            >
              <div className={`relative ${viewMode === "grid" ? "" : "w-1/3"}`}>
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  width={1}
                  height={1}
                  className={`w-full ${
                    viewMode === "grid" ? "aspect-square" : "h-full"
                  } object-cover`}
                />
                <div className="absolute bottom-3 right-3 text-white/70 text-sm font-medium">
                  mintsy
                </div>
              </div>

              <div className={`p-4 ${viewMode === "grid" ? "" : "w-2/3"}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-dark">{artwork.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9D7ECF]/20 text-[#9D7ECF]">
                    {artwork.family}
                  </span>
                </div>

                <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                  {artwork.prompt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-muted">
                    By{" "}
                    <span className="font-medium text-dark">
                      {artwork.author}
                    </span>
                  </span>

                  <div className="flex items-center gap-2">
                    <button className="inline-flex items-center text-text-muted hover:text-pink transition-colors">
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
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="ml-1">{artwork.likes}</span>
                    </button>

                    <Button
                      onClick={() => handleViewArtwork(artwork)}
                      variant="secondary"
                      size="sm"
                    >
                      View Artwork
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/50 rounded-xl">
          <div className="max-w-md mx-auto">
            <svg
              className="mx-auto h-24 w-24 text-mint"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-dark">
              This space will soon fill with color and imagination
            </h3>
            <p className="mt-2 text-text-secondary">
              Be the first to share your story.
            </p>
            <div className="mt-6">
              <LinkButton href="/create-ai-art" variant="primary">
                Generate Your First Art
              </LinkButton>
            </div>
          </div>
        </div>
      )}

      {/* Footer Links */}
      <div className="mt-12 pt-8 border-t border-dark/10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-muted">
        <Link
          href="/create-ai-art"
          className="hover:text-primary transition-colors"
        >
          Create Art
        </Link>
        <Link
          href="/ai-art-faqs"
          className="hover:text-primary transition-colors"
        >
          Gallery FAQ
        </Link>
        <Link
          href="/terms-of-service"
          className="hover:text-primary transition-colors"
        >
          Terms
        </Link>
        <Link
          href="/help-support"
          className="hover:text-primary transition-colors"
        >
          Contact Support
        </Link>
      </div>

      {/* Artwork Detail Modal */}
      <ArtworkDetailModal
        isOpen={!!selectedArtwork}
        onClose={handleCloseArtworkModal}
        artwork={selectedArtwork}
        onLike={handleLikeArtwork}
        onCreateOwn={handleCreateOwn}
      />
    </PageContainer>
  );
};

export default GalleryPage;
