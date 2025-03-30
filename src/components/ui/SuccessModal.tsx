import React from "react";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";
import Backdrop from "./Backdrop";
import { cn } from "@/lib/utils";

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
  iconType?: "checkmark" | "sparkle" | "confetti";
  className?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  // onClose,
  title,
  message,
  primaryAction,
  secondaryAction,
  showSocialSharing = false,
  iconType = "checkmark",
  className = "",
}) => {
  if (!isOpen) return null;

  const renderIcon = () => {
    switch (iconType) {
      case "checkmark":
        return (
          <div className="w-20 h-20 rounded-full bg-mint-light/30 flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-mint-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      case "sparkle":
        return (
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <svg
              className="w-16 h-16 text-dark"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z" />
            </svg>
          </div>
        );
      case "confetti":
        return (
          <div className="w-20 h-20 flex items-center justify-center mb-6">
            <svg
              className="w-16 h-16 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5C5.10457 5 6 4.10457 6 3C6 1.89543 5.10457 1 4 1C2.89543 1 2 1.89543 2 3C2 4.10457 2.89543 5 4 5Z"
                fill="currentColor"
              />
              <path
                d="M12 5C13.1046 5 14 4.10457 14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3C10 4.10457 10.8954 5 12 5Z"
                fill="currentColor"
              />
              <path
                d="M20 5C21.1046 5 22 4.10457 22 3C22 1.89543 21.1046 1 20 1C18.8954 1 18 1.89543 18 3C18 4.10457 18.8954 5 20 5Z"
                fill="currentColor"
              />
              <path
                d="M4 13C5.10457 13 6 12.1046 6 11C6 9.89543 5.10457 9 4 9C2.89543 9 2 9.89543 2 11C2 12.1046 2.89543 13 4 13Z"
                fill="currentColor"
              />
              <path
                d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                fill="currentColor"
              />
              <path
                d="M20 13C21.1046 13 22 12.1046 22 11C22 9.89543 21.1046 9 20 9C18.8954 9 18 9.89543 18 11C18 12.1046 18.8954 13 20 13Z"
                fill="currentColor"
              />
              <path
                d="M4 21C5.10457 21 6 20.1046 6 19C6 17.8954 5.10457 17 4 17C2.89543 17 2 17.8954 2 19C2 20.1046 2.89543 21 4 21Z"
                fill="currentColor"
              />
              <path
                d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
                fill="currentColor"
              />
              <path
                d="M20 21C21.1046 21 22 20.1046 22 19C22 17.8954 21.1046 17 20 17C18.8954 17 18 17.8954 18 19C18 20.1046 18.8954 21 20 21Z"
                fill="currentColor"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Backdrop isOpen={isOpen} className="bg-background/90">
      <div
        className={cn(
          "bg-[#FDFBF7] rounded-xl shadow-lg p-8 max-w-md w-full mx-auto text-center",
          className
        )}
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

          {showSocialSharing && (
            <div className="mt-8 pt-6 border-t border-mint/20 w-full">
              <p className="text-sm text-text-muted mb-4">
                Share your creation on
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-dark hover:text-primary transition-colors"
                  aria-label="Share on Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-dark hover:text-primary transition-colors"
                  aria-label="Share on X"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-dark hover:text-primary transition-colors"
                  aria-label="Share on Discord"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Backdrop>
  );
};

export default SuccessModal;
