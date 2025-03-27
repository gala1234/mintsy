import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-minty-fresh/80 backdrop-blur-sm py-4 px-6 md:px-10 shadow-subtle">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-poppins font-bold text-2xl text-graphite-ink"
        >
          Mintsy.ai
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#how-it-works"
            className="text-graphite-ink hover:text-deep-mint transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#benefits"
            className="text-graphite-ink hover:text-deep-mint transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="#testimonials"
            className="text-graphite-ink hover:text-deep-mint transition-colors"
          >
            Testimonials
          </Link>
        </nav>

        <Button variant="accent" size="md">
          Join the Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;
