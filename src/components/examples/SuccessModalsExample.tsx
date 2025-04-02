"use client";

import React, { useState } from "react";
import { Button } from "../ui/elements/buttons/Button";
import SuccessModal from "../ui/modals/SuccessModal";
import HDDownloadModal from "../ui/modals/examples/HDDownloadModal";
import NFTMintedModal from "../ui/modals/examples/NFTMintedModal";
import PrintOrderModal from "../ui/modals/examples/PrintOrderModal";

const SuccessModalsExample = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showHDDownloadModal, setShowHDDownloadModal] = useState(false);
  const [showNFTMintedModal, setShowNFTMintedModal] = useState(false);
  const [showPrintOrderModal, setShowPrintOrderModal] = useState(false);

  // Sample NFT details
  const nftDetails = {
    collection: "Mintsy Collection",
    tokenId: "#12345",
    imageUrl: "/images/examples/nft-example.jpg",
    marketplaceUrl: "#",
  };

  // Sample order details
  const orderDetails = {
    orderNumber: "ORD-9876",
    printSize: '16" x 20"',
    estimatedDelivery: "May 15-20, 2023",
    trackingUrl: "#",
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button onClick={() => setShowSuccessModal(true)}>
          Show Success Modal
        </Button>
        <Button onClick={() => setShowHDDownloadModal(true)}>
          Show HD Download Modal
        </Button>
        <Button onClick={() => setShowNFTMintedModal(true)}>
          Show NFT Minted Modal
        </Button>
        <Button onClick={() => setShowPrintOrderModal(true)}>
          Show Print Order Modal
        </Button>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Success!"
        message="Your action was completed successfully."
        primaryAction={{
          text: "Continue",
          onClick: () => setShowSuccessModal(false),
        }}
        secondaryAction={{
          text: "Go Back",
          onClick: () => setShowSuccessModal(false),
        }}
        iconType="success"
      />

      {/* HD Download Modal */}
      <HDDownloadModal
        isOpen={showHDDownloadModal}
        onClose={() => setShowHDDownloadModal(false)}
        downloadUrl="#"
      />

      {/* NFT Minted Modal */}
      <NFTMintedModal
        isOpen={showNFTMintedModal}
        onClose={() => setShowNFTMintedModal(false)}
        nftLink={nftDetails.marketplaceUrl}
      />

      {/* Print Order Modal */}
      <PrintOrderModal
        isOpen={showPrintOrderModal}
        onClose={() => setShowPrintOrderModal(false)}
        estimatedDelivery="5-7 days"
        orderTrackingUrl={orderDetails.trackingUrl}
      />
    </div>
  );
};

export default SuccessModalsExample;
