import { Metadata } from 'next';
import CheckoutPage from '@/components/pages/CheckoutPage';

export const metadata: Metadata = {
  title: 'Checkout | Mintsy.ai',
  description: 'Complete your purchase of AI-generated artwork, NFT minting, or canvas prints.',
  keywords: 'checkout, AI art purchase, NFT minting, canvas prints, payment',
};

// In a real application, this data would come from a query parameter or state management
const mockArtworkData = {
  productType: 'canvas' as const,
  artworkId: 'demo-artwork-123',
  artworkTitle: 'Cosmic Dreams',
  artworkImage: '/examples/artwork-1.jpg',
  price: 29.99,
  currency: '€',
};

export default function CheckoutRoute() {
  return (
    <CheckoutPage
      productType={mockArtworkData.productType}
      artworkId={mockArtworkData.artworkId}
      artworkTitle={mockArtworkData.artworkTitle}
      artworkImage={mockArtworkData.artworkImage}
      price={mockArtworkData.price}
      currency={mockArtworkData.currency}
    />
  );
} 