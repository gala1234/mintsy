"use client";

import React from 'react';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
  orderDate: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  customer: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  total: number;
  taxRate?: number;
  discount?: number;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({
  isOpen,
  onClose,
  orderNumber,
  orderDate,
  items,
  customer,
  total,
  taxRate = 21,
  discount = 0,
}) => {
  if (!isOpen) return null;
  
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = (subtotal - discount) * (taxRate / 100);
  
  const handleDownloadPDF = () => {
    // Mock function - in a real implementation, this would generate a PDF
    console.log('Downloading invoice PDF...');
    // Close modal after download starts
    setTimeout(onClose, 500);
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto order-fade-in">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Invoice</h2>
              <p className="text-gray-500">Order #{orderNumber}</p>
              <p className="text-gray-500">Date: {orderDate}</p>
            </div>
            <div className="text-right">
              <div className="font-medium text-xl text-primary">Mintsy</div>
              <p className="text-gray-500">AI Artwork Platform</p>
            </div>
          </div>
          
          {/* Customer Info */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2 text-gray-800">Billed To:</h3>
            <p className="text-gray-600">{customer.name}</p>
            <p className="text-gray-600">{customer.address}</p>
            <p className="text-gray-600">{customer.city}, {customer.postalCode}</p>
            <p className="text-gray-600">{customer.country}</p>
          </div>
          
          {/* Items */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2 text-gray-800">Item Summary</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left text-gray-500">Item</th>
                  <th className="py-2 text-right text-gray-500">Qty</th>
                  <th className="py-2 text-right text-gray-500">Price</th>
                  <th className="py-2 text-right text-gray-500">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 text-gray-600">{item.name}</td>
                    <td className="py-3 text-gray-600 text-right">{item.quantity}</td>
                    <td className="py-3 text-gray-600 text-right">€{item.price.toFixed(2)}</td>
                    <td className="py-3 text-gray-600 text-right">€{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Totals */}
          <div className="mb-8">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">€{subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Discount</span>
                <span className="text-green-600">-€{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Tax ({taxRate}%)</span>
              <span className="text-gray-800">€{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 font-medium border-t mt-2 pt-2">
              <span className="text-gray-800">Total</span>
              <span className="text-gray-800">€{total.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Footer */}
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal; 