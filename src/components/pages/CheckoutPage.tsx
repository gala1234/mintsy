'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import PageContainer from '@/components/layout/PageContainer';

type ProductType = 'canvas' | 'poster' | 'download' | 'nft';

interface CheckoutProps {
  productType: ProductType;
  artworkId: string;
  artworkTitle: string;
  artworkImage: string;
  price: number;
  currency?: string;
}

const CheckoutPage: React.FC<CheckoutProps> = ({
  productType,
  artworkId,
  artworkTitle,
  artworkImage,
  price,
  currency = '€'
}) => {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [showPromoInput, setShowPromoInput] = useState(false);
  
  // States for form fields
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'US',
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const isPhysicalProduct = productType === 'canvas' || productType === 'poster';
  const subtotal = price * quantity;
  const shipping = isPhysicalProduct ? 10 : 0;
  const total = subtotal + shipping - discount;

  const getProductLabel = () => {
    switch (productType) {
      case 'canvas':
        return 'Canvas Print 30×30cm';
      case 'poster':
        return 'Premium Poster 50×70cm';
      case 'download':
        return 'HD Download (4K Resolution)';
      case 'nft':
        return 'NFT Mint (Ethereum)';
      default:
        return 'AI Artwork';
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'mintsy10') {
      const discountAmount = subtotal * 0.1;
      setDiscount(discountAmount);
      setPromoApplied(true);
    }
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      // Format card number with spaces every 4 digits
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .substring(0, 19);
      
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    if (name === 'expiry') {
      // Format expiry date as MM/YY
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{0,2})/, '$1/$2')
        .substring(0, 5);
        
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    if (name === 'cvv') {
      // Only allow 3-4 digit CVV
      const formattedValue = value
        .replace(/\D/g, '')
        .substring(0, 4);
        
      setPaymentInfo(prev => ({
        ...prev,
        [name]: formattedValue
      }));
      return;
    }
    
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment...');
  };

  return (
    <PageContainer>
      <div className="min-h-screen bg-[#FDFBF7] py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to artwork link */}
          <Link 
            href={`/artwork/${artworkId}`} 
            className="inline-flex items-center text-dark/70 hover:text-dark mb-6 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Return to artwork
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-10 font-serif-accent text-center">
            Review Your Order
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Order summary - 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="flex items-start mb-6">
                    {/* Artwork thumbnail */}
                    <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image 
                        src={artworkImage} 
                        alt={artworkTitle}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Product details */}
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium text-dark">
                        {artworkTitle}
                      </h3>
                      <p className="text-dark/70 text-sm">
                        {getProductLabel()}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-medium">
                          {currency}{price.toFixed(2)}
                        </span>
                        
                        {/* Quantity selector (only for physical products) */}
                        {isPhysicalProduct && (
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button 
                              onClick={() => handleQuantityChange(quantity - 1)}
                              className="px-2 py-1 text-dark/70 hover:text-dark"
                              disabled={quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-sm">{quantity}</span>
                            <button 
                              onClick={() => handleQuantityChange(quantity + 1)}
                              className="px-2 py-1 text-dark/70 hover:text-dark"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Price calculations */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-dark/70">Subtotal</span>
                      <span>{currency}{subtotal.toFixed(2)}</span>
                    </div>
                    
                    {isPhysicalProduct && (
                      <div className="flex justify-between mb-2">
                        <span className="text-dark/70">Shipping</span>
                        <span>{currency}{shipping.toFixed(2)}</span>
                      </div>
                    )}
                    
                    {promoApplied && (
                      <div className="flex justify-between mb-2 text-green-600">
                        <span>Discount</span>
                        <span>-{currency}{discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between font-bold text-lg mt-4">
                      <span>Total</span>
                      <span>{currency}{total.toFixed(2)}</span>
                    </div>
                    
                    {/* Promo code */}
                    {!promoApplied ? (
                      <div className="mt-4">
                        {showPromoInput ? (
                          <div className="flex">
                            <input
                              type="text"
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value)}
                              placeholder="Enter promo code"
                              className="flex-grow px-3 py-2 border border-gray-200 rounded-l-md text-sm"
                            />
                            <button
                              onClick={applyPromoCode}
                              className="bg-mint px-4 py-2 text-dark text-sm font-medium rounded-r-md"
                            >
                              Apply
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setShowPromoInput(true)}
                            className="text-sm text-dark/70 hover:text-dark"
                          >
                            Have a promo code?
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="mt-4 flex items-center text-green-600 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Promo code applied
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Digital delivery info or estimated shipping info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-mint/20 rounded-full p-2 mr-3">
                    {isPhysicalProduct ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-700"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-700"
                      >
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m8 17 4 4 4-4" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {isPhysicalProduct ? 'Estimated Delivery' : 'Digital Delivery'}
                    </h3>
                    <p className="text-dark/70 text-sm">
                      {isPhysicalProduct 
                        ? 'Your order will arrive within 5-7 business days'
                        : 'You will receive an immediate download link after purchase'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Checkout form - 3 columns on large screens */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Shipping information (only for physical products) */}
                {isPhysicalProduct && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={shippingInfo.fullName}
                          onChange={handleShippingChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium mb-1">
                          Street Address
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          required
                          value={shippingInfo.address}
                          onChange={handleShippingChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-md"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-1">
                            City
                          </label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            value={shippingInfo.city}
                            onChange={handleShippingChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
                            Postal Code
                          </label>
                          <input
                            id="postalCode"
                            name="postalCode"
                            type="text"
                            required
                            value={shippingInfo.postalCode}
                            onChange={handleShippingChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium mb-1">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          value={shippingInfo.country}
                          onChange={handleShippingChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-md"
                        >
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="GB">United Kingdom</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                          <option value="IT">Italy</option>
                          <option value="ES">Spain</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Payment Information */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                  
                  {/* Alternative payment methods */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-dark font-medium py-3 px-4 rounded-md border border-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                        <path d="M13.5 11.5H16V10h-2.5V7.5H12V10H9.5v1.5H12V14h1.5v-2.5z" />
                      </svg>
                      Google Pay
                    </button>
                    
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-dark font-medium py-3 px-4 rounded-md border border-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.72 11.263C17.612 11.178 15.865 10.116 15.865 8.088c0-1.855 1.535-2.823 1.602-2.878a3.5 3.5 0 0 0-2.761-1.488c-1.167-.12-2.302.687-2.892.687-.613 0-1.54-.673-2.538-.673-1.87 0-3.579 1.534-3.579 3.726 0 2.211 1.432 4.668 2.54 6.179.543.785 1.181 1.658 2.021 1.628.818-.03 1.118-.525 2.102-.525.972 0 1.253.525 2.1.506.87-.013 1.418-.785 1.943-1.572a6.48 6.48 0 0 0 .881-1.796c-.021-.013-1.699-.652-1.712-2.617z" />
                        <path d="M14.48 6.747a3.377 3.377 0 0 0 .784-2.412c-.761.04-1.676.507-2.22 1.131-.48.555-.906 1.45-.794 2.303.846.066 1.714-.435 2.23-1.022z" />
                      </svg>
                      Apple Pay
                    </button>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-sm text-gray-500">Or pay with card</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                        Name on Card
                      </label>
                      <input
                        id="cardName"
                        name="cardName"
                        type="text"
                        required
                        value={paymentInfo.cardName}
                        onChange={handlePaymentChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          id="cardNumber"
                          name="cardNumber"
                          type="text"
                          required
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.cardNumber}
                          onChange={handlePaymentChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-md pr-10"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="16" rx="2" fill="#FFB3C7" />
                            <circle cx="9" cy="8" r="4" fill="#FF5F8F" />
                            <circle cx="15" cy="8" r="4" fill="#FF8F6F" opacity="0.8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                          Expiration Date
                        </label>
                        <input
                          id="expiry"
                          name="expiry"
                          type="text"
                          required
                          placeholder="MM/YY"
                          value={paymentInfo.expiry}
                          onChange={handlePaymentChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-md"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          name="cvv"
                          type="text"
                          required
                          placeholder="123"
                          value={paymentInfo.cvv}
                          onChange={handlePaymentChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Completion button and total */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left">
                      <span className="block text-dark/70">Total amount</span>
                      <span className="text-2xl font-bold">{currency}{total.toFixed(2)}</span>
                    </div>
                    
                    <Button 
                      type="submit"
                      size="default"
                      className="w-full sm:w-auto px-8 py-3"
                    >
                      Complete Purchase
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center sm:text-right text-dark/50 mt-4">
                    By completing this purchase, you agree to our <Link href="/terms-of-service" className="underline">Terms of Service</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CheckoutPage; 