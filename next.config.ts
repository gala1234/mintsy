import type { NextConfig } from "next";

//TODO: Remove images.unsplash.com from domains

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  // Add image optimization configuration
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },

  // Add cache headers for static assets
  async headers() {
    return [
      {
        source: "/:path*.(jpg|jpeg|gif|png|svg|ico|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.(mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Local images don't need domains configuration
  async redirects() {
    return [
      {
        source: "/create",
        destination: "/create-ai-art",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/ai-art-pricing",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/ai-art-faqs",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/help-support",
        permanent: true,
      },
      {
        source: "/affiliate",
        destination: "/affiliate-program",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
