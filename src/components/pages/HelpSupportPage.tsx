"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/elements/Button";
import { TextArea } from "@/components/ui/elements/TextArea";
import SearchBar from "@/components/ui/elements/SearchBar";

function Support() {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Welcome Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif-accent text-dark">
              Need Help?
            </h1>
            <p className="text-xl text-text-secondary">
              We&apos;re here to make your Mintsy experience magical — reach out
              anytime.
            </p>
          </header>

          {/* Search FAQ First */}
          <div className="mb-16 p-8 bg-mint-light/30 rounded-xl">
            <h2 className="text-2xl font-medium text-pink-dark mb-4 font-serif-accent">
              Search FAQ First
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <SearchBar
                placeholder="Search help topics..."
                value={searchQuery}
                handleSearch={(query: string) => setSearchQuery(query)}
              />
              <Link href="/faq">
                <Button className="min-w-[142px]" variant="primary" size="lg">
                  Go to FAQ
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-medium text-pink-dark mb-6 font-serif-accent">
              Contact Us
            </h2>

            <form className="space-y-6">
              {/* Name Field */}
              <div className="mb-6 relative w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6 relative w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Order ID Field (Optional) */}
              <div className="mb-6 relative w-full">
                <label
                  htmlFor="orderId"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Order ID (optional)
                </label>
                <div className="relative">
                  <input
                    id="orderId"
                    type="text"
                    className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="mb-6 relative w-full">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors appearance-none"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="technical">Technical Issue</option>
                    <option value="print">Print Problem</option>
                    <option value="refund">Refund Request</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <TextArea
                id="message"
                label="Message"
                placeholder="Tell us how we can help..."
                rows={5}
                required
              />

              {/* Submit Button */}
              <div className="mt-8">
                <Button variant="dark" fullWidth={true} type="submit">
                  Send Message
                </Button>
                <p className="text-sm text-text-muted mt-4">
                  We aim to reply within 24–48h, Monday–Friday. For urgent
                  issues, please include &quot;URGENT&quot; in your message.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info Block */}
          <div className="mt-16 p-8 bg-mint-light/30 rounded-xl">
            <h3 className="text-xl font-bold mb-2 font-serif-accent">
              Other Ways to Reach Us
            </h3>
            <p className="text-text-secondary mb-4">
              Email us directly at{" "}
              <a
                href="mailto:support@mintsy.ai"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                support@mintsy.ai
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="/faq"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
