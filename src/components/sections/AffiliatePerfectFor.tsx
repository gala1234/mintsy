import React from "react";
import Image from "next/image";

interface AudienceItemProps {
  title: string;
}

const AudienceItem: React.FC<AudienceItemProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-mint/10">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <span className="text-text-secondary">{title}</span>
    </div>
  );
};

const AffiliatePerfectFor: React.FC = () => {
  const audienceTypes = [
    "Content Creators",
    "Moms & Family Bloggers",
    "Artists & Designers",
    "Wellness Voices",
    "Gift Curators",
    "Memory Keepers",
  ];

  return (
    <div className="py-16 md:py-24 bg-mint-light/10 rounded-xl px-6 md:px-12 my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif-accent text-dark">
          Perfect For...
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-10">
          If your community values creativity, emotion, and beautiful gifts —
          this is for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {audienceTypes.map((audience, index) => (
          <AudienceItem key={index} title={audience} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-white rounded-lg p-6 border border-mint/20 max-w-2xl">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/icons/star.png"
              alt="Star"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-lg font-medium text-primary">Tip</span>
          </div>
          <p className="text-text-secondary">
            The more your audience cares about meaningful gifts and emotional
            connections, the better your results will be as a Mintsy affiliate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePerfectFor;
