import React from "react";
import { benefits } from "@/data/benefits";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-24 bg-background text-text overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Why Choose Mintsy
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-serif-accent">
            Experience the perfect blend of AI creativity and blockchain
            ownership
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-transparent p-8 rounded-lg flex flex-col items-center text-center"
            >
                <div className="w-16 h-16 relative flex items-center justify-center">
                  {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundGradient/>
    </section>
  );
};

export default Benefits;
