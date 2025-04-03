"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import ColorHead from "@/components/ui/ColorHead";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background text-text overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <ColorHead text="What Our Users Say" />
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-serif-accent">
            Join thousands of creators who have transformed their artistic
            vision with Mintsy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3, // Reduced duration for better performance
                delay: Number(testimonial.id) * 0.05, // Reduced delay for better performance
              }}
              viewport={{ once: true, amount: 0.1 }} // Reduced threshold for earlier loading
              className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
            >
              <div className="mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.667 13.333H5.33366C5.33366 8 9.33366 5.333 13.3337 5.333L12.0003 8C10.667 9.333 10.667 11.333 10.667 13.333ZM21.3337 13.333H16.0003C16.0003 8 20.0003 5.333 24.0003 5.333L22.667 8C21.3337 9.333 21.3337 11.333 21.3337 13.333ZM24.0003 16V21.333C24.0003 22.4 23.067 23.333 22.0003 23.333H18.667V26.667H22.0003C24.9337 26.667 27.3337 24.267 27.3337 21.333V16H24.0003ZM13.3337 16V21.333C13.3337 22.4 12.4003 23.333 11.3337 23.333H8.00033V26.667H11.3337C14.267 26.667 16.667 24.267 16.667 21.333V16H13.3337Z"
                    fill="#7A6FF0"
                  />
                </svg>
              </div>
              <p className="text-lg mb-6 flex-grow font-serif-accent italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-auto">
                {testimonial.imageSrc && (
                  <div className="mr-4">
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                      loading="lazy"
                      sizes="48px"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundGradient />
    </section>
  );
};

export default Testimonials;
