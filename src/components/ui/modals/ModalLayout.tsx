"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconButton } from "../elements/buttons/IconButton";

export interface ModalLayoutProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeButtonPosition?: "top-right" | "top-left";
  closeButtonSize?: "sm" | "md" | "lg";
  closeButtonVariant?: "default" | "ghost" | "outline";
  backdropClassName?: string;
  contentClassName?: string;
  maxWidth?: string;
  padding?: string;
  preventBackdropClose?: boolean;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  closeButtonPosition = "top-right",
  closeButtonSize = "md",
  closeButtonVariant = "ghost",
  backdropClassName,
  contentClassName,
  maxWidth = "max-w-2xl",
  padding = "p-4 sm:p-6 md:p-8",
  preventBackdropClose = false,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose && !preventBackdropClose) {
      onClose();
    }
  };

  // Position classes for close button
  const closeButtonPositionClasses = {
    "top-right": "absolute top-4 right-4",
    "top-left": "absolute top-4 left-4",
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-dark/30 backdrop-blur-sm",
        backdropClassName
      )}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          "relative bg-white rounded-2xl shadow-lg w-full mx-auto overflow-hidden animate-fadeIn max-h-[90vh] my-auto",
          maxWidth,
          contentClassName
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && onClose && (
          <IconButton
            iconType="close"
            onClick={onClose}
            className={cn(
              "z-10 text-dark/50 hover:text-dark",
              closeButtonPositionClasses[closeButtonPosition]
            )}
            size={closeButtonSize}
            variant={closeButtonVariant}
            aria-label="Close"
          />
        )}

        <div className={cn("overflow-y-auto max-h-[calc(90vh-2rem)]", padding)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
