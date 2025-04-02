/**
 * Google Analytics 4 (GA4) utility functions
 */

// Define types for GA4 events
interface GA4EventProps {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined; // More specific than any
}

/**
 * Send an event to Google Analytics 4
 * @param eventName Name of the event to track
 * @param eventParams Event parameters (category, label, value, etc.)
 */
export const trackEvent = (eventName: string, eventParams: GA4EventProps = {}) => {
  // Only track if gtag is available (client-side)
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', eventName, eventParams);
      if (process.env.NODE_ENV !== 'production') {
        console.log('📊 GA4 Event:', eventName, eventParams);
      }
    } catch (error) {
      console.error('Error tracking GA4 event:', error);
    }
  }
};

/**
 * Predefined common events for consistency
 */
export const Events = {
  // Page engagement events
  VIEW_CONTENT: 'view_content',
  SCROLL_TO_BOTTOM: 'scroll_to_bottom',
  
  // User engagement events
  SIGN_UP: 'sign_up',
  LOGIN: 'login',
  LOGOUT: 'logout',
  SHARE: 'share',
  
  // Feature usage events
  GENERATE_ART: 'generate_art',
  SAVE_ARTWORK: 'save_artwork',
  DOWNLOAD_ARTWORK: 'download_artwork',
  
  // E-commerce events
  ADD_TO_CART: 'add_to_cart',
  BEGIN_CHECKOUT: 'begin_checkout',
  PURCHASE: 'purchase',
  REFUND: 'refund',
  
  // Subscription events
  SUBSCRIBE: 'subscribe',
  CANCEL_SUBSCRIPTION: 'cancel_subscription',
  UPGRADE_SUBSCRIPTION: 'upgrade_subscription',
  
  // Canvas specific events
  ORDER_CANVAS: 'order_canvas',
  TRACK_ORDER: 'track_order',
  
  // Custom events
  CLICK_CTA: 'click_cta',
  VIEW_PRICING: 'view_pricing',
  ERROR_OCCURRED: 'error_occurred',
};

/**
 * Common event categories for consistency
 */
export const Categories = {
  ENGAGEMENT: 'engagement',
  ACCOUNT: 'account',
  ARTWORK: 'artwork',
  PURCHASE: 'purchase',
  SUBSCRIPTION: 'subscription',
  UI_INTERACTION: 'ui_interaction',
  ERROR: 'error',
};

// Add window.gtag type to avoid TypeScript errors
declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      eventParams?: Record<string, string | number | boolean | undefined>
    ) => void;
  }
} 