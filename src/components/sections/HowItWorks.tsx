import React from "react";
import { Card } from "@/components/ui/Card";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Describe Your Vision",
      description:
        "Input a prompt or answer guided questions to inspire your unique artwork.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-lavender-mist"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Generate with AI",
      description: "Our AI crafts multiple art variations based on your input.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-sky-whisper"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Mint or Print",
      description:
        "Choose your favorite piece to mint as an NFT, order a canvas print, or both.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-soft-coral"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-10 bg-light-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-graphite-ink">
            How It Works
          </h2>
          <p className="text-lg text-graphite-ink/80 max-w-2xl mx-auto">
            Creating and owning your AI art is simple with our three-step
            process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card
              key={step.id}
              className="flex flex-col items-center text-center p-8 transition-transform hover:scale-105"
            >
              <div className="mb-6 p-4 rounded-full bg-minty-fresh/30">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-graphite-ink">
                Step {step.id}: {step.title}
              </h3>

              <p className="text-graphite-ink/80">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
