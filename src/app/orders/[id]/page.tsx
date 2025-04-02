import React from 'react';
import OrderDetailsPage from '@/components/pages/OrderDetailsPage';
import SchemaMarkup from '@/components/ui/SchemaMarkup';

interface OrderPageProps {
  params: {
    id: string;
  };
}

export default function OrderPage({ params }: OrderPageProps) {
  // In a real app, we would use the ID to fetch the order details
  console.log(`Order ID: ${params.id}`);
  
  return (
    <>
      <SchemaMarkup pageName="orders" />
      <OrderDetailsPage />
    </>
  );
} 