import React from "react";
import { Card } from "@/components/ui/Card";
import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 px-6 md:px-10 bg-sky-whisper/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-graphite-ink">
            Why Choose Mintsy.ai
          </h2>
          <p className="text-lg text-graphite-ink/80 max-w-2xl mx-auto">
            Experience the perfect blend of AI creativity and ownership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="flex flex-col items-center text-center p-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="mb-6 p-4 rounded-full bg-minty-fresh/30">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-graphite-ink">
                {benefit.title}
              </h3>
              <p className="text-graphite-ink/80">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
