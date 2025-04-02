"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { header } from "@/data/header";
import { Button } from "@/components/ui/elements/buttons/Button";

const Desktopdiv = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const { openModal } = useModal();

  const handleOpenLoginModal = () => {
    openModal("auth", { initialView: "login" });
  };

  const handleMouseEnter = (link: string) => {
    setActiveSubmenu(link);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <div
      className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-4 px-6 md:px-10 shadow-subtle"
      onMouseLeave={handleMouseLeave}
    >
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
          {header.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.link)}
            >
              {item.type === "button" ? (
                <Button onClick={() => handleOpenLoginModal()} size="sm">
                  {item.text}
                </Button>
              ) : (
                <Link
                  href={item.link}
                  className="text-text hover:text-dark-hover transition-colors capitalize"
                >
                  {item.text}
                  {item.submenu && (
                    <span className="ml-1 inline-block">
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
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  )}
                </Link>
              )}

              {item.submenu && activeSubmenu === item.link && (
                <div className="absolute top-full -left-11 w-screen mt-6  bg-background/80 backdrop-blur-sm overflow-hidden z-50 py-4 px-6 md:px-10 shadow-subtle">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className="block px-4 py-2 text-text hover:bg-mint/10 hover:text-dark-hover transition-colors capitalize"
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Desktopdiv;
