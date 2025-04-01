import React from "react";
import SuccessModal, { SuccessModalProps } from "../SuccessModal";

interface PrintOrderModalProps {
  isOpen: boolean;
  onClose?: () => void;
  orderTrackingUrl: string;
  estimatedDelivery?: string;
  className?: string;
}

const PrintOrderModal: React.FC<PrintOrderModalProps> = ({
  isOpen,
  onClose,
  orderTrackingUrl,
  estimatedDelivery = "5-7 days",
  className,
}) => {
  if (!isOpen || !orderTrackingUrl) {
    return null;
  }
  const modalProps: SuccessModalProps = {
    isOpen,
    onClose,
    title: "Your Print is on the Way!",
    message: `Your print will arrive in ${estimatedDelivery}.`,
    primaryAction: {
      text: "Track My Order",
      href: orderTrackingUrl,
    },
    secondaryAction: {
      text: "Return to Gallery",
      href: "/", // Assuming the gallery is at the root path
    },
    showSocialSharing: true,
    iconType: "confetti",
    className,
  };

  return <SuccessModal {...modalProps} />;
};

export default PrintOrderModal;
