export const SEO_CONSTANTS = {
  SITE_NAME: 'Mintsy.ai',
  BASE_URL: 'https://mintsy.ai',
  DEFAULT_TITLE: 'Mintsy.ai | AI Art Generator, NFT Minting & Canvas Prints',
  DEFAULT_DESCRIPTION: 'Create stunning AI-generated artwork from text prompts, mint as unique NFTs, or order high-quality canvas prints.',
  DEFAULT_KEYWORDS: 'AI art generator, text to image, NFT minting, canvas prints, AI artwork, digital art creation, text prompt art',
  DEFAULT_OG_IMAGE: 'https://mintsy.ai/og-image.jpg',
  TWITTER_HANDLE: '@mintsyai',
};

export const generateCanonicalUrl = (path: string = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONSTANTS.BASE_URL}${cleanPath}`;
};

export const generatePageTitle = (pageTitle?: string) => {
  if (!pageTitle) return SEO_CONSTANTS.DEFAULT_TITLE;
  return `${pageTitle} | ${SEO_CONSTANTS.SITE_NAME}`;
};

export const generateOgImage = (customPath?: string) => {
  if (customPath) {
    return `${SEO_CONSTANTS.BASE_URL}${customPath.startsWith('/') ? customPath : `/${customPath}`}`;
  }
  return SEO_CONSTANTS.DEFAULT_OG_IMAGE;
};

// Utility to create schema.org JSON-LD structured data
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: string;
  currency: string;
}) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      priceCurrency: product.currency,
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  };
};

// Generate alt text for images
export const generateAltText = (imageName: string, context?: string) => {
  const baseName = imageName.split('.')[0];
  const formattedName = baseName
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (context) {
    return `${formattedName} - ${context}`;
  }
  
  return `${formattedName} AI-generated artwork by Mintsy.ai`;
};

// Create a table of keywords by category for easy access
export const SEO_KEYWORDS = {
  AI_ART: [
    'AI art generator',
    'artificial intelligence art',
    'text to image AI',
    'AI artwork creation',
    'generative AI art',
    'AI digital painting',
    'neural network art',
    'machine learning art generator',
  ],
  NFT: [
    'NFT minting',
    'create NFTs',
    'digital art NFT',
    'NFT marketplace',
    'mint your artwork',
    'blockchain art',
    'NFT collectibles',
    'crypto art',
  ],
  CANVAS: [
    'canvas prints',
    'art prints',
    'wall art',
    'custom canvas',
    'printed artwork',
    'digital art prints',
    'high-quality canvas',
    'frame your digital art',
  ],
  PROCESS: [
    'text prompt art',
    'AI art creation process',
    'digital art customization',
    'AI art styles',
    'art generation platform',
    'AI image generator',
    'art from text description',
    'AI creative assistant',
  ],
}; 