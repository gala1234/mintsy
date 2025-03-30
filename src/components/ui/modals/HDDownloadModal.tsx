import React from "react";
import SuccessModal, { SuccessModalProps } from "./SuccessModal";

interface HDDownloadModalProps {
  isOpen: boolean;
  onClose?: () => void;
  downloadUrl: string;
  className?: string;
}

const HDDownloadModal: React.FC<HDDownloadModalProps> = ({
  isOpen,
  onClose,
  downloadUrl,
  className,
}) => {
  const modalProps: SuccessModalProps = {
    isOpen,
    onClose,
    title: "HD Download Ready!",
    message: "Your image has finished downloading in high definition.",
    primaryAction: {
      text: "Download Now",
      href: downloadUrl,
    },
    secondaryAction: {
      text: "Return to Gallery",
      href: "/", // Assuming the gallery is at the root path
    },
    showSocialSharing: true,
    iconType: "checkmark",
    className,
  };

  return <SuccessModal {...modalProps} />;
};

export default HDDownloadModal;
