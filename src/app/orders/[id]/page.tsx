import React from 'react';
import OrderDetailsPage from '@/components/pages/OrderDetailsPage';
import SchemaMarkup from '@/components/ui/SchemaMarkup';


export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // In a real app, we would use the ID to fetch the order details
  console.log(`Order ID: ${id}`);
  
  return (
    <>
      <SchemaMarkup pageName="orders" />
      <OrderDetailsPage />
    </>
  );
} 