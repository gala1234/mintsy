"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define all the possible modals in the application
type ModalType = "printOrder" | "hdDownload" | "nftMinted" | "success" | "auth" | "subscription";

// Define the data structure for each modal
interface PrintOrderData {
  orderTrackingUrl: string;
  estimatedDelivery?: string;
}

interface HDDownloadData {
  downloadUrl: string;
}

interface NFTMintedData {
  nftLink: string;
}

interface SuccessData {
  title: string;
  message: string;
  primaryAction?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  iconType?: "success" | "canvas" | "download";
  showSocialSharing?: boolean;
}

interface AuthData {
  initialView?: "login" | "signup";
}

interface SubscriptionData {
  plan?: {
    name: string;
    status: "active" | "expired" | "pending";
    price: string;
    cycle: "monthly" | "yearly";
    renewal: string;
    nftMints: {
      total: number;
      remaining: number;
    };
  };
}

interface ModalData {
  printOrder?: PrintOrderData;
  hdDownload?: HDDownloadData;
  nftMinted?: NFTMintedData;
  success?: SuccessData;
  auth?: AuthData;
  subscription?: SubscriptionData;
}

// Map modal types to their data types for type safety
type ModalDataMap = {
  printOrder: PrintOrderData;
  hdDownload: HDDownloadData;
  nftMinted: NFTMintedData;
  success: SuccessData;
  auth: AuthData;
  subscription: SubscriptionData;
};

interface ModalContextType {
  isOpen: boolean;
  activeModal: ModalType | null;
  modalData: ModalData;
  openModal: <T extends ModalType>(modal: T, data: ModalDataMap[T]) => void;
  closeModal: () => void;
}

const initialModalContext: ModalContextType = {
  isOpen: false,
  activeModal: null,
  modalData: {},
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = createContext<ModalContextType>(initialModalContext);

export const useModal = () => useContext(ModalContext);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [modalData, setModalData] = useState<ModalData>({});

  const openModal = <T extends ModalType>(modal: T, data: ModalDataMap[T]) => {
    setActiveModal(modal);

    // Update modal data based on the type
    switch (modal) {
      case "printOrder":
        setModalData({ printOrder: data as PrintOrderData });
        break;
      case "hdDownload":
        setModalData({ hdDownload: data as HDDownloadData });
        break;
      case "nftMinted":
        setModalData({ nftMinted: data as NFTMintedData });
        break;
      case "success":
        setModalData({ success: data as SuccessData });
        break;
      case "auth":
        setModalData({ auth: data as AuthData });
        break;
      case "subscription":
        setModalData({ subscription: data as SubscriptionData });
        break;
      default:
        setModalData({});
    }

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Optional: Add a timeout to allow animations to complete before resetting data
    setTimeout(() => {
      setActiveModal(null);
      setModalData({});
    }, 300);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        activeModal,
        modalData,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
