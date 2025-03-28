import React from "react";
import { benefits } from "@/data/benefits";

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
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#7a6ff0]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-32 -right-32 w-96 h-96 bg-[#7a6ff0]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Benefits;
