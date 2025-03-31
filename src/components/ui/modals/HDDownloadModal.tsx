import React from "react";
import SuccessModal, { SuccessModalProps } from "./SuccessModal";

export interface HDDownloadModalProps {
  isOpen: boolean;
  onClose?: () => void;
  downloadUrl: string;
}

const HDDownloadModal: React.FC<HDDownloadModalProps> = ({
  isOpen,
  onClose,
  downloadUrl,
}) => {
  const modalProps: SuccessModalProps = {
    isOpen,
    onClose,
    title: "Your HD Download is Ready",
    message: "Download your high-resolution image to use anywhere you'd like.",
    primaryAction: {
      text: "Download HD Image",
      href: downloadUrl,
    },
    secondaryAction: {
      text: "Close",
      onClick: onClose,
    },
    iconType: "sparkle",
  };

  return <SuccessModal {...modalProps} />;
};

export default HDDownloadModal;
