'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GoogleAnalytics = ({ GA_MEASUREMENT_ID = 'G-3XL1RMQW2E' }: { GA_MEASUREMENT_ID?: string }) => {
  useEffect(() => {
    // Initialization code (optional if you need to do something on mount)
    if (process.env.NODE_ENV === 'production') {
      console.log('Google Analytics initialized');
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics; 