"use client";

import React from "react";
import InstagramIcon from "../../../../public/icons/social-media/instagram.svg";
import TwitterIcon from "../../../../public/icons/social-media/twitter.svg";
import DiscordIcon from "../../../../public/icons/social-media/discord.svg";

interface SocialSharingProps {
  title?: string;
  className?: string;
  showBorder?: boolean;
  platforms?: Array<"instagram" | "twitter" | "discord">;
}

const SocialSharing: React.FC<SocialSharingProps> = ({
  title = "Share your creation on",
  className = "",
  showBorder = true,
  platforms = ["instagram", "twitter", "discord"],
}) => {
  const socialIcons = {
    instagram: {
      label: "Share on Instagram",
      icon: <InstagramIcon className="w-6 h-6" />,
    },
    twitter: {
      label: "Share on X",
      icon: <TwitterIcon className="w-6 h-6" />,
    },
    discord: {
      label: "Share on Discord",
      icon: <DiscordIcon className="w-6 h-6" />,
    },
  };

  return (
    <div
      className={`${
        showBorder ? "pt-4 border-t border-mint/20" : ""
      } w-full ${className}`}
    >
      {title && (
        <p className="text-sm text-text-muted mb-4 text-center">{title}</p>
      )}
      <div className="flex justify-center space-x-6">
        {platforms.map((platform) => {
          const socialPlatform = socialIcons[platform];
          return (
            <a
              key={platform}
              href="#"
              className="text-dark hover:text-primary transition-colors"
              aria-label={socialPlatform.label}
            >
              {socialPlatform.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialSharing;
