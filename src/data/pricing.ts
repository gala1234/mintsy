// Pricing data for Mintsy platform

export interface PricingPlan {
  id: string;
  label: string;
  description: string;
  price: string;
  priceYearly?: string;
  savings?: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isFeatured?: boolean;
  badge?: string;
}

export interface MicrotransactionOption {
  id: string;
  name: string;
  price: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BundleOffer {
  id: string;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  savings: string;
  description: string;
}

// Main pricing plans
export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    label: "Try it Free",
    description: "Generate one AI artwork with no sign-up",
    price: "€0",
    features: [
      "1 AI artwork generation",
      "Basic resolution",
      "Watermarked downloads",
    ],
    buttonText: "Generate Free Preview",
    buttonLink: "/create",
  },
  {
    id: "pro-monthly",
    label: "Pro Plan",
    description: "Everything you need for serious AI art creation",
    price: "€9.99",
    priceYearly: "€79",
    savings: "save 34%",
    features: [
      "Unlimited AI generations",
      "10 NFT mints/month",
      "HD downloads without watermark",
      "Commercial use rights",
      "10% discount on all prints",
    ],
    buttonText: "Upgrade to Pro",
    buttonLink: "/login",
    isFeatured: true,
    badge: "Best Value",
  },
];

// Pay-as-you-go options
export const microtransactions: MicrotransactionOption[] = [
  {
    id: "nft",
    name: "Mint as NFT",
    price: "€5",
    description: "per image",
  },
  {
    id: "hd",
    name: "HD Download",
    price: "€9.99",
    description: "per image",
  },
  {
    id: "print",
    name: "Print on Canvas",
    price: "from €45",
    description: "various sizes available",
  },
  {
    id: "gift",
    name: "Gift Packaging",
    price: "€6",
    description: "add-on",
  },
];

// Bundle offers
export const bundleOffers: BundleOffer[] = [
  {
    id: "canvas-hd",
    name: "Canvas + HD Download",
    originalPrice: "€55",
    discountedPrice: "€50",
    savings: "save €5",
    description: "Get your artwork both digitally and physically",
  },
];
