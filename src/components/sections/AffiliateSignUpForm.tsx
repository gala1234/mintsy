"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/elements/buttons/Button";
import { TextArea } from "@/components/ui/elements/TextArea";
import { Select } from "@/components/ui/elements/Select";

const AffiliateSignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    socialPlatform: "",
    howHeard: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        website: "",
        socialPlatform: "",
        howHeard: "",
        message: "",
      });
    }, 1500);
  };

  const socialPlatformOptions = [
    { value: "", label: "Select a platform (optional)" },
    { value: "instagram", label: "Instagram" },
    { value: "tiktok", label: "TikTok" },
    { value: "youtube", label: "YouTube" },
    { value: "blog", label: "Blog" },
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "other", label: "Other" },
  ];

  const howHeardOptions = [
    { value: "", label: "Select an option" },
    { value: "social", label: "Social Media" },
    { value: "friend", label: "Friend or Colleague" },
    { value: "search", label: "Search Engine" },
    { value: "email", label: "Email" },
    { value: "other", label: "Other" },
  ];

  return (
    <div id="signup-form" className="py-16 md:py-24 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif-accent text-dark">
          Join Our Affiliate Program
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Fill out the form below to get started. We&apos;ll review your
          application and get back to you within 48 hours.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-mint/20 p-8">
        {submitSuccess ? (
          <div className="text-center py-8">
            <div className="mb-6">
              <Image
                src="/icons/star.png"
                alt="Success"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif-accent text-dark">
              Thank You for Applying!
            </h3>
            <p className="text-text-secondary mb-6">
              We&apos;ve received your application and will review it shortly.
              You&apos;ll receive an email with your affiliate link and
              dashboard access within 48 hours.
            </p>
            <Button variant="secondary" onClick={() => setSubmitSuccess(false)}>
              Submit Another Application
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="mb-6 relative w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text mb-2"
              >
                Full Name *
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
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
                Email *
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            {/* Website/Blog Field (Optional) */}
            <div className="mb-6 relative w-full">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-text mb-2"
              >
                Website or Blog (optional)
              </label>
              <div className="relative">
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full py-4 px-6 rounded-lg border-2 border-mint text-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://"
                />
              </div>
            </div>

            {/* Social Platform Dropdown */}
            <Select
              id="socialPlatform"
              name="socialPlatform"
              label="Primary Social Platform"
              options={socialPlatformOptions}
              value={formData.socialPlatform}
              onChange={handleChange}
            />

            {/* How Heard Dropdown */}
            <Select
              id="howHeard"
              name="howHeard"
              label="How did you hear about us? *"
              options={howHeardOptions}
              value={formData.howHeard}
              onChange={handleChange}
              required
            />

            {/* Message Textarea */}
            <TextArea
              id="message"
              name="message"
              label="Tell us about your audience (optional)"
              placeholder="What kind of content do you create? Who follows you? Why are you interested in our affiliate program?"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                variant="primary"
                fullWidth={true}
                type="submit"
                isLoading={isSubmitting}
              >
                Join Now
              </Button>
              <p className="text-sm text-text-muted mt-4">
                By submitting this form, you agree to our{" "}
                <a
                  href="#"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  Terms for Affiliates
                </a>
                .
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AffiliateSignUpForm;
