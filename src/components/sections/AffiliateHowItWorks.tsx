import React from "react";
import Image from "next/image";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-mint-light/50 flex items-center justify-center">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-center font-serif-accent text-dark">
        {title}
      </h3>
      <p className="text-text-secondary text-center text-sm">{description}</p>
    </div>
  );
};

const AffiliateHowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sign up in 2 minutes",
      description:
        "Complete our simple form with your basic information to get started.",
      icon: "/icons/star.png",
    },
    {
      number: 2,
      title: "Share your custom link",
      description:
        "Promote your unique affiliate link on social media, your website, or email.",
      icon: "/icons/draw.png",
    },
    {
      number: 3,
      title: "Followers buy art",
      description:
        "Your audience purchases albums, prints, or subscriptions through your link.",
      icon: "/icons/sheld.png",
    },
    {
      number: 4,
      title: "You earn real money",
      description:
        "Get paid monthly via PayPal or Stripe for all the sales you generate.",
      icon: "/icons/star.png",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif-accent text-dark">
          How It Works
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Start earning in four simple steps
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:grid grid-cols-4 gap-8 relative">
        {/* Connecting Line */}
        <div className="absolute top-8 left-[calc(25%_-_50px)] right-[calc(25%_-_50px)] h-1 bg-mint-light/50 z-0"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <Step
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </div>

      {/* Mobile Steps */}
      <div className="grid md:hidden grid-cols-1 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-mint-light/50 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                {step.number}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1 font-serif-accent text-dark">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateHowItWorks;
