import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/create',
        destination: '/create-ai-art',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/ai-art-pricing',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/ai-art-faqs',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/help-support',
        permanent: true,
      },
      {
        source: '/affiliate',
        destination: '/affiliate-program',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
