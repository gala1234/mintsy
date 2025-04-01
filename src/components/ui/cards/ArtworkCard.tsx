"use client";

import React from "react";
import ImageWithWatermark from "../ImageWithWatermark";

// Icons
const MintIcon = () => (
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
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const PrintIcon = () => (
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
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const EditIcon = () => (
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
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const DownloadIcon = () => (
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const DeleteIcon = () => (
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

interface ArtworkCardProps {
  imageUrl: string;
  title: string;
  showWatermark?: boolean;
  family?: string;
  isPublic?: boolean;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  imageUrl,
  title,
  showWatermark = true,
  family,
  isPublic,
}) => {
  return (
    <div
      className={`group w-full rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300`}
    >
      <div className="relative">
        <ImageWithWatermark
          src={imageUrl}
          alt={title}
          watermarkText={showWatermark ? "mintsy" : ""}
          className="w-full h-auto aspect-square object-cover"
        />

        {/* Family tag and visibility badge */}
        <div className="absolute top-2 left-2 right-2 flex justify-between z-10">
          {family && (
            <span className="px-2 py-1 bg-[#9D7ECF] text-white text-xs rounded-full">
              {family}
            </span>
          )}

          <button
            className={`px-2 py-1 ${
              isPublic ? "bg-[#B7D7C2]" : "bg-gray-200"
            } text-[#43405D] text-xs rounded-full`}
            onClick={() => console.log("Toggle Visibility")}
          >
            {isPublic ? "🌍 Public" : "🔒 Private"}
          </button>
        </div>
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white font-medium">{title}</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-3 flex justify-center space-x-3">
        <button
          className="relative flex items-center justify-center p-2 bg-mint-light text-mint-dark rounded-full hover:bg-mint-dark hover:text-white transition-colors duration-200 group/mint"
          onClick={() => console.log("Mint as NFT")}
          aria-label="Mint as NFT"
        >
          <MintIcon />
          <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/mint:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Mint as NFT
          </span>
        </button>

        <button
          className="relative flex items-center justify-center p-2 bg-pink-light text-pink-dark rounded-full hover:bg-pink-dark hover:text-white transition-colors duration-200 group/print"
          onClick={() => console.log("Order Print")}
          aria-label="Order Print"
        >
          <PrintIcon />
          <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/print:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Order Print
          </span>
        </button>

        <button
          className="relative flex items-center justify-center p-2 bg-lavander-light text-lavander-dark rounded-full hover:bg-lavander-dark hover:text-white transition-colors duration-200 group/edit"
          onClick={() => console.log("Edit Prompt")}
          aria-label="Edit Prompt"
        >
          <EditIcon />
          <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/edit:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Edit Prompt
          </span>
        </button>

        <button
          className="relative flex items-center justify-center p-2 bg-blue-light text-blue-dark rounded-full hover:bg-blue-dark hover:text-text-hover transition-colors duration-200 group/download"
          onClick={() => console.log("Download")}
          aria-label="Download"
        >
          <DownloadIcon />
          <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/download:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Download
          </span>
        </button>

        <button
          className="relative flex items-center justify-center p-2 bg-red-light text-red-dark rounded-full hover:bg-red-dark hover:text-text-hover transition-colors duration-200 group/delete"
          onClick={() => console.log("Delete")}
          aria-label="Delete"
        >
          <DeleteIcon />
          <span className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/delete:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default ArtworkCard;
