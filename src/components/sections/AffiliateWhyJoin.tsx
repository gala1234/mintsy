import React from "react";
import Image from "next/image";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 transition-transform duration-300 hover:scale-[1.02] border border-mint/20">
      <div className="flex justify-center mb-6">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-center font-serif-accent text-dark">
        {title}
      </h3>
      <p className="text-text-secondary text-center">{description}</p>
    </div>
  );
};

const AffiliateWhyJoin: React.FC = () => {
  const benefits = [
    {
      icon: "/icons/star.png",
      title: "Earn 20% on Every Sale",
      description:
        "Receive a generous commission on all purchases made through your unique affiliate link.",
    },
    {
      icon: "/icons/sheld.png",
      title: "Give Your Followers 10% Off",
      description:
        "Share exclusive discounts with your audience, making it a win-win for everyone.",
    },
    {
      icon: "/icons/draw.png",
      title: "Promote Something That Feels Good",
      description:
        "Share a product that brings joy, creativity, and meaningful memories to people's lives.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif-accent text-dark">
          Why Join Our Affiliate Program?
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Partner with Mintsy and share the magic of AI-powered art creation
          with your audience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AffiliateWhyJoin;
