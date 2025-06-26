import { useEffect } from 'react';
import '../styles/globals.css';

// Initialize OpenTelemetry as early as possible
if (typeof window !== 'undefined') {
  import('../otel.js');
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Log page view
    if (typeof window !== 'undefined' && window.console) {
      console.log('Page loaded:', window.location.pathname);
    }
  }, []);

  return <Component {...pageProps} />;
}