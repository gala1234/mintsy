"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  faqItem: FAQItem;
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqItem,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b border-mint/20 ${className}`}>
      <button
        className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{faqItem.question}</h3>
        <span className="ml-4 flex-shrink-0">
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5 px-4" : "max-h-0"
        }`}
      >
        <p className="text-text-muted">{faqItem.answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordion;
