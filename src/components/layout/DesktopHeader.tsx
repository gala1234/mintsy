import React from "react";
import Link from "next/link";
import Image from "next/image";

const DesktopHeader = () => {
  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-4 px-6 md:px-10 shadow-subtle">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/icon.svg"
            alt="Mintsy.ai Logo"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col ml-4">
            <span className="font-poppins font-bold">Mintsy.ai</span>
            <span className="font-poppins text-[10px]">
              AI-DRIVEN ART CREATION
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#how-it-works"
            className="text-graphite-ink hover:text-mint transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#benefits"
            className="text-graphite-ink hover:text-mint transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="#testimonials"
            className="text-graphite-ink hover:text-mint transition-colors"
          >
            Testimonials
          </Link>
        </nav>

        {/* <Button variant="accent" size="md">
          Join the Waitlist
        </Button> */}
      </div>
    </header>
  );
};

export default DesktopHeader;
