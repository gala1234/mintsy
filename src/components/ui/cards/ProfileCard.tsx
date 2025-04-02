"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  avatarSrc: string;
  avatarAlt: string;
  name: string;
  title: string;
  description: string;
  className?: string;
  avatarSize?: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarSrc,
  avatarAlt,
  name,
  title,
  description,
  className = "",
  avatarSize = 32,
}) => {
  return (
    <div className={cn("text-center", className)}>
      <div
        className="mb-6 mx-auto relative rounded-full overflow-hidden"
        style={{ width: `${avatarSize}px`, height: `${avatarSize}px` }}
      >
        <Image src={avatarSrc} alt={avatarAlt} fill className="object-cover" />
      </div>
      <h3 className="text-2xl font-bold mb-4 font-serif-accent">{name}</h3>
      <h4 className="text-xl mb-4">{title}</h4>
      <p className="text-lg mb-6">{description}</p>
    </div>
  );
};

export default ProfileCard;
