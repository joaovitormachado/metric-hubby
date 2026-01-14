import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>,
      options?: { eventID: string }
    ) => void;
  }
}

interface CustomData {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

interface UserData {
  em?: string; // email (will be hashed)
  ph?: string; // phone (will be hashed)
  fbc?: string; // click ID from URL
  fbp?: string; // browser ID from cookie
}

const generateEventId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
};

const getCookieValue = (name: string): string | undefined => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : undefined;
};

const getUrlParam = (param: string): string | undefined => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || undefined;
};

export function useMetaTracking() {
  const trackEvent = useCallback(async (
    eventName: string,
    customData?: CustomData,
    userData?: UserData
  ) => {
    const eventId = generateEventId();
    const eventSourceUrl = window.location.href;

    // Get Meta cookies and URL params
    const fbp = getCookieValue('_fbp');
    const fbc = getCookieValue('_fbc') || getUrlParam('fbclid');

    // 1. Track via Pixel (client-side) with eventID for deduplication
    if (typeof window.fbq === 'function') {
      try {
        window.fbq('track', eventName, customData || {}, { eventID: eventId });
        console.log(`[Meta Pixel] Event tracked: ${eventName}`, { eventId, customData });
      } catch (error) {
        console.error('[Meta Pixel] Error tracking event:', error);
      }
    }

    // 2. Track via Conversions API (server-side)
    try {
      const { data, error } = await supabase.functions.invoke('meta-conversions', {
        body: {
          event_name: eventName,
          event_id: eventId,
          event_source_url: eventSourceUrl,
          user_data: {
            fbp,
            fbc,
            ...userData,
          },
          custom_data: customData,
        },
      });

      if (error) {
        console.error('[Meta CAPI] Error sending event:', error);
      } else {
        console.log(`[Meta CAPI] Event sent: ${eventName}`, { eventId, response: data });
      }
    } catch (error) {
      console.error('[Meta CAPI] Error invoking function:', error);
    }
  }, []);

  const trackPageView = useCallback(() => {
    trackEvent('PageView');
  }, [trackEvent]);

  const trackLead = useCallback((data?: { content_name?: string; value?: number; currency?: string }) => {
    trackEvent('Lead', {
      content_name: data?.content_name,
      value: data?.value,
      currency: data?.currency || 'BRL',
    });
  }, [trackEvent]);

  const trackContact = useCallback((data?: { content_name?: string }) => {
    trackEvent('Contact', {
      content_name: data?.content_name,
    });
  }, [trackEvent]);

  const trackSchedule = useCallback((data?: { content_name?: string; value?: number }) => {
    trackEvent('Schedule', {
      content_name: data?.content_name,
      value: data?.value,
      currency: 'BRL',
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackLead,
    trackContact,
    trackSchedule,
  };
}
