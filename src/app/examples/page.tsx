import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Component Examples | Mintsy.ai',
  description: 'Example components for Mintsy.ai design system',
};

export default function ExamplesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Component Examples</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Link href="/examples/limit-modal" className="text-blue-600 hover:underline font-medium">
            Limit Reached Modal Example
          </Link>
          <p className="text-gray-600 mt-1">
            Example of the limit reached modal component for various scenarios.
          </p>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Link href="/examples/paywall-modal" className="text-blue-600 hover:underline font-medium">
            Paywall Modal Example
          </Link>
          <p className="text-gray-600 mt-1">
            Example of the paywall modal offering subscription and microtransaction options.
          </p>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Link href="/examples/modals-showcase" className="text-blue-600 hover:underline font-medium">
            Modals Showcase
          </Link>
          <p className="text-gray-600 mt-1">
            Interactive showcase of both Paywall and Limit Reached modals together.
          </p>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Link href="/examples/checkout" className="text-blue-600 hover:underline font-medium">
            Checkout Experience
          </Link>
          <p className="text-gray-600 mt-1">
            Interactive checkout flow for purchasing NFTs, HD downloads, and canvas prints.
          </p>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <Link href="/examples/order-print" className="text-blue-600 hover:underline font-medium">
            Order a Print
          </Link>
          <p className="text-gray-600 mt-1">
            Example of the print ordering experience with options for canvas, poster, and framed prints.
          </p>
        </div>
      </div>
    </div>
  );
} 