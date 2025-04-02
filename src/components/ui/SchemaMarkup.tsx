"use client";

import React from "react";
import Script from "next/script";

interface SchemaMarkupProps {
  pageName:
    | "home"
    | "create"
    | "howItWorks"
    | "pricing"
    | "about"
    | "faq"
    | "gallery"
    | "artwork"
    | "dashboard"
    | "orders";
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ pageName }) => {
  // Base website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mintsy.ai",
    url: "https://mintsy.ai",
    description:
      "Create AI-generated art, mint as NFTs, or order canvas prints",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mintsy.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mintsy.ai",
    url: "https://mintsy.ai",
    logo: "https://mintsy.ai/icon.png",
    sameAs: [
      "https://twitter.com/mintsyai",
      "https://instagram.com/mintsyai",
      "https://discord.gg/mintsy",
    ],
  };

  // Page-specific schema
  let pageSpecificSchema = {};

  switch (pageName) {
    case "home":
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Mintsy.ai | AI Art Generator, NFT Minting & Canvas Prints",
        description:
          "Create stunning AI-generated artwork from text prompts, mint as unique NFTs, or order high-quality canvas prints.",
        url: "https://mintsy.ai",
        mainEntity: {
          "@type": "WebApplication",
          name: "Mintsy AI Art Generator",
          applicationCategory: "CreativeApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          featureList: [
            "AI art generation from text prompts",
            "NFT minting capability",
            "Canvas printing options",
            "Multiple artistic styles",
          ],
        },
      };
      break;

    case "dashboard":
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Dashboard | Manage Your AI-Generated Artworks | Mintsy.ai",
        description:
          "Save, organize, and manage your AI-generated artworks. Group into families, filter by visibility, and take actions like minting, printing, or downloading.",
        url: "https://mintsy.ai/dashboard",
        mainEntity: {
          "@type": "ItemList",
          name: "User Artwork Collection",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "My Families",
              description: "Organize artworks into collections",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "All Artworks",
              description: "View all your created artworks",
            },
          ],
        },
      };
      break;

    case "orders":
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Order Details | Canvas Print | Mintsy.ai",
        description:
          "Track and manage your canvas print orders, view shipping information, and download invoices for your AI-generated artworks.",
        url: "https://mintsy.ai/orders",
        mainEntity: {
          "@type": "Order",
          orderStatus: "https://schema.org/OrderProcessing",
          seller: {
            "@type": "Organization",
            name: "Mintsy.ai"
          },
          orderNumber: "MTSY-10425",
          orderDate: "2025-03-18",
          acceptedOffer: {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Canvas Print of AI-Generated Artwork",
              description: "High-quality canvas print of a custom AI-generated artwork."
            }
          },
          paymentMethodId: "CreditCard"
        },
      };
      break;

    case "create":
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Create AI Art from Text | Free AI Art Generator | Mintsy.ai",
        description:
          "Transform your ideas into stunning AI-generated artwork with simple text prompts. Customize styles, colors, and composition.",
        url: "https://mintsy.ai/create",
        mainEntity: {
          "@type": "SoftwareApplication",
          name: "Mintsy AI Text-to-Image Generator",
          applicationCategory: "ArtApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
      };
      break;

    case "howItWorks":
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Create AI Art with Mintsy",
        description:
          "Learn how to transform text prompts into AI artwork, customize your creations, and mint them as NFTs or order canvas prints.",
        step: [
          {
            "@type": "HowToStep",
            name: "Create with Text-to-Image AI",
            text: "Transform your ideas into AI art with simple text prompts.",
          },
          {
            "@type": "HowToStep",
            name: "Customize Your AI-Generated Artwork",
            text: "Preview and refine your AI-generated digital art.",
          },
          {
            "@type": "HowToStep",
            name: "Mint as NFT or Order Canvas Print",
            text: "Choose your preferred output: mint as NFT or order a canvas print.",
          },
          {
            "@type": "HowToStep",
            name: "Share Your AI Art Creation",
            text: "Showcase your AI-generated artwork with the community.",
          },
        ],
      };
      break;

    case "pricing":
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Mintsy.ai Premium Subscription",
        description:
          "Unlimited AI art generation, NFT minting, and canvas printing options",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "0",
          highPrice: "29.99",
          priceCurrency: "USD",
          offers: [
            {
              "@type": "Offer",
              name: "Free Trial",
              price: "0",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Pro Plan",
              price: "29.99",
              priceCurrency: "USD",
            },
          ],
        },
      };
      break;

    case "faq":
      pageSpecificSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of AI art can I create with Mintsy.ai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can create a wide variety of AI art styles including digital paintings, illustrations, concept art, abstract designs, landscapes, portraits, and more.",
            },
          },
          {
            "@type": "Question",
            name: "How does the NFT minting process work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Once you're satisfied with your AI-generated artwork, you can mint it as an NFT directly on our platform with a few clicks.",
            },
          },
          {
            "@type": "Question",
            name: "What canvas print options are available for my AI art?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer high-quality canvas prints of your AI-generated artwork in various sizes, with options for different materials and finishes.",
            },
          },
          {
            "@type": "Question",
            name: "Can I edit my AI-generated artwork after creation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! You can make adjustments to your AI artwork through our intuitive editor. Try different variations, refine colors, adjust compositions, and fine-tune the results.",
            },
          },
        ],
      };
      break;

    default:
      pageSpecificSchema = {};
  }

  return (
    <>
      <Script id="schema-website" type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </Script>
      <Script id="schema-organization" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="schema-page" type="application/ld+json">
        {JSON.stringify(pageSpecificSchema)}
      </Script>
    </>
  );
};

export default SchemaMarkup;
