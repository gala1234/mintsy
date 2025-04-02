import React from "react";
import { AuthorAvatar, AuthorAvatarProps } from "./AuthorAvatar";
import { cn } from "@/lib/utils";

const PulsingAvatar: React.FC<AuthorAvatarProps> = ({
  className,
  ...props
}) => {
  return (
    <div className="relative account-avatar account-avatar::after" style={{ width: "fit-content" }}>
      <AuthorAvatar className={cn("relative z-10", className)} {...props} />
      <div className="absolute inset-0 rounded-full animate-pulse-custom" />
    </div>
  );
};

export default PulsingAvatar;
