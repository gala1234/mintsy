import React from "react";
import SuccessModal, { SuccessModalProps } from "./SuccessModal";

interface NFTMintedModalProps {
  isOpen: boolean;
  onClose?: () => void;
  nftLink?: string;
  className?: string;
}

const NFTMintedModal: React.FC<NFTMintedModalProps> = ({
  isOpen,
  onClose,
  nftLink = "https://opensea.io/", // Default link, should be replaced with actual NFT link
  className,
}) => {
  const modalProps: SuccessModalProps = {
    isOpen,
    onClose,
    title: "Your NFT has been minted!",
    message: "You can view your NFT on the Polygon blockchain",
    primaryAction: {
      text: "View on OpenSea",
      href: nftLink,
    },
    secondaryAction: {
      text: "Return to Gallery",
      href: "/", // Assuming the gallery is at the root path
    },
    showSocialSharing: true,
    iconType: "sparkle",
    className,
  };

  return <SuccessModal {...modalProps} />;
};

export default NFTMintedModal;
