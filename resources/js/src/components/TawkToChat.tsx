import { useEffect } from 'react';

interface TawkToChatProps {
  propertyId: string;
  widgetId: string;
}

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = ({ propertyId, widgetId }: TawkToChatProps) => {
  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Insert script before the first script tag
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      // Remove the script
      const tawkScript = document.querySelector(`script[src*="embed.tawk.to"]`);
      if (tawkScript) {
        tawkScript.remove();
      }
      // Remove the widget iframe
      const tawkWidget = document.getElementById('tawk-widget-container');
      if (tawkWidget) {
        tawkWidget.remove();
      }
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything visible
};

export default TawkToChat;
