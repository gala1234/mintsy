import React from "react";

interface MicrotransactionCardProps {
  name: string;
  price: string;
  description: string;
  className?: string;
}

const MicrotransactionCard: React.FC<MicrotransactionCardProps> = ({
  name,
  price,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-5 border border-mint/20 transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <span className="text-2xl font-bold text-primary">{price}</span>
      </div>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  );
};

export default MicrotransactionCard;
