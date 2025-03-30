import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-minty-fresh py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-poppins font-bold text-xl text-dark">
              Mintsy.ai
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="/about"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/faq"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-dark/10">
          <p className="text-sm text-dark/80 mb-4 md:mb-0">
            © 2025 Mintsy.ai. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-dark hover:text-dark-hover transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
