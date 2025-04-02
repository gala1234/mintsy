"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import PrintOrderModal from "./PrintOrderModal";
import HDDownloadModal from "./HDDownloadModal";
import NFTMintedModal from "./NFTMintedModal";
import SubscriptionModal from "../SubscriptionModal";
import SuccessModal from "../SuccessModal";
import AuthModal from "../AuthModal";

const ModalContainer: React.FC = () => {
  const { isOpen, activeModal, modalData, closeModal } = useModal();

  if (!isOpen || !activeModal) return null;

  // Render the appropriate modal based on activeModal
  switch (activeModal) {
    case "printOrder":
      return (
        <PrintOrderModal
          isOpen={isOpen}
          onClose={closeModal}
          orderTrackingUrl={modalData.printOrder?.orderTrackingUrl || ""}
          estimatedDelivery={modalData.printOrder?.estimatedDelivery}
        />
      );
    case "hdDownload":
      return (
        <HDDownloadModal
          isOpen={isOpen}
          onClose={closeModal}
          downloadUrl={modalData.hdDownload?.downloadUrl || ""}
        />
      );
    case "nftMinted":
      return (
        <NFTMintedModal
          isOpen={isOpen}
          onClose={closeModal}
          nftLink={modalData.nftMinted?.nftLink}
        />
      );
    case "subscription":
      return (
        <SubscriptionModal
          isOpen={isOpen}
          onClose={closeModal}
          plan={modalData.subscription?.plan}
        />
      );
    case "success":
      if (!modalData.success) return null;
      return (
        <SuccessModal
          isOpen={isOpen}
          onClose={closeModal}
          title={modalData.success.title}
          message={modalData.success.message}
          primaryAction={
            modalData.success.primaryAction || {
              text: "Continue",
              href: "#",
            }
          }
          secondaryAction={modalData.success.secondaryAction}
          iconType={modalData.success.iconType}
          showSocialSharing={modalData.success.showSocialSharing}
        />
      );
    case "auth":
      return (
        <AuthModal
          isOpen={isOpen}
          onClose={closeModal}
          initialView={modalData.auth?.initialView}
        />
      );
    default:
      return null;
  }
};

export default ModalContainer;
