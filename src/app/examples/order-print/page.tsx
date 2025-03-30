'use client';

import { useState } from 'react';
import OrderPrintPage from '@/components/pages/OrderPrintPage';

export default function OrderPrintExample() {
  const [artwork] = useState({
    id: 'cyberpunk-cat',
    title: 'Cyberpunk Cat',
    image: '/examples/artwork-1.jpg'
  });
  
  return (
    <OrderPrintPage
      artworkId={artwork.id}
      artworkTitle={artwork.title}
      artworkImage={artwork.image}
    />
  );
} 