import React from "react";
import { Button } from "../elements/Button";
import { LinkButton } from "../elements/LinkButton";
import ModalLayout from "./ModalLayout";
import SocialSharing from "../elements/SocialSharing";
import CanvasIcon from "../../../../public/icons/success/canvas-print-done.svg";
import HdDownloadIcon from "../../../../public/icons/success/hd-download.svg";
import SuccessIcon from "../../../../public/icons/success/success.svg";

export interface SuccessModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  message: string;
  primaryAction: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  showSocialSharing?: boolean;
  iconType?: "success" | "canvas" | "download";
  className?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  primaryAction,
  secondaryAction,
  showSocialSharing = false,
  iconType = "success",
  // className = "",
}) => {
  if (!isOpen) return null;

  const renderIcon = () => {
    switch (iconType) {
      case "success":
        return (
          <div className="w-20 h-20 rounded-full bg-mint-light/30 flex items-center justify-center mb-6">
            <SuccessIcon className="w-10 h-10 text-mint-dark" />
          </div>
        );
      case "canvas":
        return (
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <CanvasIcon className="w-16 h-16 text-dark" />
          </div>
        );
      case "download":
        return (
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <HdDownloadIcon className="w-16 h-16 text-primary" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-2xl"
      backdropClassName="px-2 sm:px-4"
    >
      <div className="flex flex-col items-center">
        {renderIcon()}

        <h2 className="text-2xl md:text-3xl font-bold mb-3 font-serif-accent">
          {title}
        </h2>
        <p className="text-text-muted mb-8">{message}</p>

        <div className="space-y-4 w-full">
          {primaryAction.href ? (
            <LinkButton
              href={primaryAction.href}
              variant="primary"
              className="w-full"
            >
              {primaryAction.text}
            </LinkButton>
          ) : (
            <Button
              onClick={primaryAction.onClick}
              variant="primary"
              className="w-full"
            >
              {primaryAction.text}
            </Button>
          )}

          {secondaryAction &&
            (secondaryAction.href ? (
              <LinkButton
                href={secondaryAction.href}
                variant="secondary"
                className="w-full"
              >
                {secondaryAction.text}
              </LinkButton>
            ) : (
              <Button
                onClick={secondaryAction.onClick}
                variant="secondary"
                className="w-full"
              >
                {secondaryAction.text}
              </Button>
            ))}
        </div>

        {showSocialSharing && <SocialSharing className="pb-10" />}
      </div>
    </ModalLayout>
  );
};

export default SuccessModal;
