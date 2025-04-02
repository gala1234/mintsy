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
  SCROLL_DEPTH_50: 'scroll_depth_50',
  PAGE_VIEW: 'page_view',
  NAVIGATION_BUTTON_CLICKED: 'navigation_button_clicked',
  EXIT_BEFORE_GENERATION: 'exit_before_generation',
  
  // User engagement events
  SIGN_UP: 'sign_up',
  LOGIN: 'login',
  LOGOUT: 'logout',
  SHARE: 'share',
  SHARE_ON_SOCIAL: 'share_on_social',
  LANGUAGE_SWITCH: 'language_switch',
  
  // Art generation events
  GENERATE_ART: 'generate_art',
  START_ART_GENERATION: 'start_art_generation',
  PROMPT_SUBMITTED: 'prompt_submitted',
  ART_GENERATED_SUCCESS: 'art_generated_success',
  ART_REGENERATED: 'art_regenerated',
  SAVE_ARTWORK: 'save_artwork',
  DOWNLOAD_ARTWORK: 'download_artwork',
  ART_DOWNLOADED: 'art_downloaded',
  
  // NFT minting events
  MINT_CLICKED: 'mint_clicked',
  WALLET_CONNECTED: 'wallet_connected',
  MINT_SUCCESS: 'mint_success',
  MINT_FAILED: 'mint_failed',
  MINT_CANCELLED: 'mint_cancelled',
  
  // Canvas/E-commerce events
  BUY_CANVAS_CLICKED: 'buy_canvas_clicked',
  ADD_TO_CART: 'add_to_cart',
  BEGIN_CHECKOUT: 'begin_checkout',
  CHECKOUT_STARTED: 'checkout_started',
  PURCHASE: 'purchase',
  PAYMENT_SUCCESSFUL: 'payment_successful',
  PAYMENT_FAILED: 'payment_failed',
  PRINT_PREVIEW_VIEWED: 'print_preview_viewed',
  REFUND: 'refund',
  
  // Subscription events
  SUBSCRIBE: 'subscribe',
  CANCEL_SUBSCRIPTION: 'cancel_subscription',
  UPGRADE_SUBSCRIPTION: 'upgrade_subscription',
  
  // Canvas specific events
  ORDER_CANVAS: 'order_canvas',
  TRACK_ORDER: 'track_order',
  
  // Questionnaire events
  QUESTIONNAIRE_STARTED: 'questionnaire_started',
  QUESTIONNAIRE_COMPLETED: 'questionnaire_completed',
  
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
  ART_GENERATION: 'art_generation',
  NFT: 'nft',
  PURCHASE: 'purchase',
  CANVAS: 'canvas',
  SUBSCRIPTION: 'subscription',
  UI_INTERACTION: 'ui_interaction',
  NAVIGATION: 'navigation',
  QUESTIONNAIRE: 'questionnaire',
  SOCIAL: 'social',
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