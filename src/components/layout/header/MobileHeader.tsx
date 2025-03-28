"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { header } from "@/data/header";
import { LinkButton } from "@/components/ui/LinkButton";

const Mobilediv = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setExpandedSubmenu(null);
    }
  };

  const toggleSubmenu = (link: string) => {
    setExpandedSubmenu(expandedSubmenu === link ? null : link);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen bg-background/80 backdrop-blur-sm py-4 px-6 shadow-subtle md:hidden">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
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
            className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-subtle transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="container mx-auto w-full">
          <nav className="flex flex-col items-center space-y-4 px-6 text-center">
            {header.map((item, index) => (
              <div key={index} className="w-full">
                {item.type === "button" ? (
                  <div onClick={() => setIsMenuOpen(false)}>
                    <LinkButton href={item.link} variant="secondary" size="sm">
                      {item.text}
                    </LinkButton>
                  </div>
                ) : item.submenu ? (
                  <div className="w-full">
                    <button
                      className="flex items-center justify-center w-full text-text hover:text-dark-hover transition-colors py-2 capitalize"
                      onClick={() => toggleSubmenu(item.link)}
                    >
                      {item.text}
                      <span className="ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${
                            expandedSubmenu === item.link ? "rotate-180" : ""
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedSubmenu === item.link
                          ? "max-h-64 mt-2"
                          : "max-h-0"
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className="block w-full text-text hover:text-dark-hover transition-colors py-2 pl-4 text-center capitalize"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className="block text-text hover:text-dark-hover transition-colors w-full text-center py-2 capitalize"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Mobilediv;
