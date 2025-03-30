"use client";

import React, { useState, useMemo } from "react";
import { faqData, FAQCategory, FAQItem } from "@/data/faq";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import { LinkButton } from "@/components/ui/LinkButton";

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQ items based on search query
  const filteredFAQData = useMemo(() => {
    if (!searchQuery.trim()) return faqData;

    const query = searchQuery.toLowerCase().trim();

    return faqData
      .map((category) => {
        const filteredItems = category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        );

        return {
          ...category,
          items: filteredItems,
        };
      })
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif-accent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Find answers to common questions about Mintsy
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full p-4 pl-12 text-base bg-white border border-mint/20 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Search help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQData.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-text-muted mb-4">
                {`No results found for ${searchQuery}`}
              </p>
              <button
                className="text-primary hover:text-primary-hover"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredFAQData.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 font-serif-accent">
                  {category.title}
                </h2>
                <div className="space-y-2 bg-white rounded-xl shadow-sm p-2">
                  {category.items.map((item) => (
                    <FAQAccordion key={item.id} faqItem={item} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-mint-light/30 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-6 text-text-muted">
              Our support team is here to help you with any questions or
              concerns you may have.
            </p>
            <LinkButton href="/contact" variant="primary">
              Contact Support
            </LinkButton>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <BackgroundGradient />
    </section>
  );
};

export default FAQ;
