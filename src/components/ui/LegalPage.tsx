import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const LegalSection: React.FC<LegalSectionProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={cn("mb-10", className)}>
      <h2 className="text-2xl font-medium text-pink-dark mb-4 font-serif-accent">
        {title}
      </h2>
      <div className="text-dark">{children}</div>
    </div>
  );
};

const LegalPage: React.FC<LegalPageProps> = ({
  title,
  subtitle,
  lastUpdated,
  children,
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif-accent">
              {title}
            </h1>
            <p className="text-xl text-text-secondary">{subtitle}</p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">{children}</div>

          {/* Contact Info Block */}
          <div className="mt-16 p-8 bg-mint-light/30 rounded-xl">
            <h3 className="text-xl font-bold mb-2 font-serif-accent">
              Have Questions?
            </h3>
            <p className="text-text-secondary">
              Reach us at{" "}
              <a
                href="mailto:support@mintsy.ai"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                support@mintsy.ai
              </a>
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-dark/10">
            <div className="flex flex-wrap gap-6 justify-center mb-6">
              <Link
                href="/privacy"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/refund-policy"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                href="/contact"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Contact Support
              </Link>
            </div>
            <p className="text-center text-text-muted text-sm">
              Last updated: {lastUpdated}
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
