"use client";

import React from "react";
import CheckCircleIcon from "../../../../public/icons/check-circle.svg";

interface FeatureItemProps {
  feature: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <div className="flex items-center">
      <div className="bg-mint/20 rounded-full p-1 mr-3">
        <CheckCircleIcon className="w-4 h-4 text-mint-dark" />
      </div>
      {feature}
    </div>
  );
};

export default FeatureItem;
