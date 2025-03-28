"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Mobilediv = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen bg-background/80 backdrop-blur-sm py-4 px-6 shadow-subtle md:hidden">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/icon.svg"
            alt="Mintsy.ai Logo"
            width={32}
            height={32}
            priority
          />
          <div className="flex flex-col ml-3">
            <span className="font-poppins font-bold text-sm">Mintsy.ai</span>
            <span className="font-poppins text-[8px]">
              AI-DRIVEN ART CREATION
            </span>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span 
            className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span 
            className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-subtle transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'}`}
      >
        <div className="container mx-auto w-full">
        <nav className="flex flex-col items-center space-y-6 px-6">
          <Link
            href="#how-it-works"
            className="text-text hover:text-mint transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#benefits"
            className="text-text hover:text-mint transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href="#testimonials"
            className="text-text hover:text-mint transition-colors w-full text-center py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
        </nav>
        </div>
      </div>
    </div>
  );
};

export default Mobilediv;