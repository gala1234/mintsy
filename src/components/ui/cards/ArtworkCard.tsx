import React from "react";
import ImageWithWatermark from "../ImageWithWatermark";
import SparkleEffect from "../SparkleEffect";
import styles from "@/app/dashboard/dashboard.module.css";

// Icons
const MintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const PrintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

interface ArtworkCardProps {
  imageUrl: string;
  title: string;
  showWatermark?: boolean;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  imageUrl,
  title,
  showWatermark = true,
}) => {
  return (
    <div className={`group w-full rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 ${styles.artworkHover}`}>
      <div className="relative">
        <ImageWithWatermark
          src={imageUrl}
          alt={title}
          watermarkText={showWatermark ? "mintsy" : ""}
          className="w-full h-auto aspect-square object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-white font-medium">{title}</span>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <SparkleEffect count={5} />
          </div>
        </div>
      </div>
      
      <div className="p-3 flex justify-center space-x-2">
        <button 
          className="flex items-center gap-1.5 py-1.5 px-2.5 bg-mint-light text-mint-dark rounded-full text-xs font-medium hover:bg-mint-dark hover:text-white transition-colors duration-200"
          title="Mint as NFT"
        >
          <MintIcon /> <span>Mint</span>
        </button>
        
        <button 
          className="flex items-center gap-1.5 py-1.5 px-2.5 bg-pink-light text-pink-dark rounded-full text-xs font-medium hover:bg-pink-dark hover:text-white transition-colors duration-200"
          title="Order Print"
        >
          <PrintIcon /> <span>Print</span>
        </button>
        
        <button 
          className="flex items-center gap-1.5 py-1.5 px-2.5 bg-lavander-light text-lavander-dark rounded-full text-xs font-medium hover:bg-lavander-dark hover:text-white transition-colors duration-200"
          title="Edit Prompt"
        >
          <EditIcon /> <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default ArtworkCard; 